# Credit to https://github.com/nautilus-os/NautilusOS for the original script
# Licensed under AGPL-3.0 license


import base64
import mimetypes
import pathlib
import re
import urllib.parse
import urllib.request
import shutil
import hashlib

root = pathlib.Path(__file__).resolve().parent
index_path = root / "index.html"
output_dir = root / "offline"
output_path = output_dir / "index.html"
placeholder_path = output_dir / "placeholder-deleteme"
cache = {}

# --- Utilities ---
def fetch_bytes(url):
    if url not in cache:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req) as resp:
            cache[url] = resp.read()
    return cache[url]

def read_local_bytes(path):
    full_path = root / path.lstrip("/")
    return full_path.read_bytes()

def guess_mime(path):
    return mimetypes.guess_type(str(path))[0] or "application/octet-stream"

def to_data_url(data, mime):
    encoded = base64.b64encode(data).decode("ascii")
    return f"data:{mime};base64,{encoded}"

# --- CSS Inlining ---
def inline_remote_css(url):
    css = fetch_bytes(url).decode("utf-8")
    return "<style>\n" + inline_css_assets(css, url) + "\n</style>"

def inline_local_css(path):
    full_path = root / path.lstrip("/")
    css = full_path.read_text(encoding="utf-8")
    return "<style>\n" + inline_css_assets(css, full_path) + "\n</style>"

def inline_css_assets(css_text, base_path):
    def repl(match):
        target = match.group(1).strip().strip("\"'")
        if target.startswith("data:") or target.startswith("#"):
            return match.group(0)

        if isinstance(base_path, pathlib.Path):
            asset_path = (base_path.parent / target).resolve()
            if not asset_path.exists():
                print(f"Warning: Asset not found: {asset_path}")
                return match.group(0)
            data = asset_path.read_bytes()
            mime = guess_mime(asset_path)
        else:
            asset_url = urllib.parse.urljoin(base_path, target)
            data = fetch_bytes(asset_url)
            mime = guess_mime(asset_url)

        return f"url('{to_data_url(data, mime)}')"

    return re.sub(r"url\(([^)]+)\)", repl, css_text)

# --- Script Inlining ---
def inline_script(match):
    src = match.group(1)
    try:
        if src.startswith("http"):
            script_text = fetch_bytes(src).decode("utf-8")
        else:
            script_text = (root / src.lstrip("/")).read_text(encoding="utf-8")
        return f"<script>\n{script_text}\n</script>"
    except Exception as e:
        print(f"Failed to inline script {src}: {e}")
        return match.group(0)

# --- Image Inlining ---
def inline_img(match):
    src = match.group(1)
    if src.startswith("data:"):
        return match.group(0)

    try:
        if src.startswith("http"):
            data = fetch_bytes(src)
        else:
            data = (root / src.lstrip("/")).read_bytes()

        mime = guess_mime(src)
        return f'<img src="{to_data_url(data, mime)}"'
    except Exception as e:
        print(f"Failed to inline image {src}: {e}")
        return match.group(0)

# --- Read index.html ---
index_text = index_path.read_text(encoding="utf-8")

# --- Inline CSS ---
link_pattern = re.compile(
    r'<link\s+[^>]*rel=["\']stylesheet["\'][^>]*href=["\']([^"\']+)["\'][^>]*>',
    re.IGNORECASE
)

def replace_link(match):
    href = match.group(1)
    return inline_remote_css(href) if href.startswith("http") else inline_local_css(href)

index_text = re.sub(link_pattern, replace_link, index_text)

# --- Inline Scripts ---
script_pattern = re.compile(
    r'<script\s+[^>]*src=["\']([^"\']+)["\'][^>]*></script>',
    re.IGNORECASE
)
index_text = re.sub(script_pattern, inline_script, index_text)

# --- Inline Images ---
img_pattern = re.compile(
    r'<img\s+[^>]*src=["\']([^"\']+)["\']',
    re.IGNORECASE
)
index_text = re.sub(img_pattern, inline_img, index_text)

# --- Compute SHA256 of final output ---
file_hash = hashlib.sha256(index_text.encode("utf-8")).hexdigest()

# --- Inject Update Checker ---
update_script = f"""
<script>
(async () => {{
  const LOCAL_HASH = "{file_hash}";
  const UPDATE_URL = "https://raw.githubusercontent.com/linuxfandudeguy/gamezhub/refs/heads/main/offline/index.html";

  async function sha256(text) {{
    const enc = new TextEncoder().encode(text);
    const buf = await crypto.subtle.digest("SHA-256", enc);
    return [...new Uint8Array(buf)]
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  }}

  try {{
    const res = await fetch(UPDATE_URL, {{ cache: "no-store" }});
    const remoteText = await res.text();
    const remoteHash = await sha256(remoteText);

    if (remoteHash !== LOCAL_HASH) {{
      if (confirm("Update detected.\\n\\nUpdate now?")) {{
        document.open();
        document.write(remoteText);
        document.close();
      }}
    }}
  }} catch (e) {{
    console.warn("Update check failed:", e);
  }}
})();
</script>
"""

# Inject before </body>
if "</body>" in index_text:
    index_text = index_text.replace("</body>", update_script + "\n</body>")
else:
    index_text += update_script

# --- Output ---
output_dir.mkdir(parents=True, exist_ok=True)

if placeholder_path.exists():
    if placeholder_path.is_file():
        placeholder_path.unlink()
    else:
        shutil.rmtree(placeholder_path)

output_path.write_text(index_text, encoding="utf-8")
print(f"Wrote {output_path}")
