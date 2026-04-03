# Credit to https://github.com/nautilus-os/NautilusOS for the original script
# This script is a edited version of the original script.
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

def guess_mime(path):
    return mimetypes.guess_type(str(path))[0] or "application/octet-stream"

def to_data_url(data, mime):
    return "data:{};base64,{}".format(
        mime,
        base64.b64encode(data).decode("ascii")
    )

# --- CSS Inlining ---
def inline_css_assets(css_text, base_path):
    def repl(match):
        target = match.group(1).strip().strip("\"'")

        if target.startswith(("data:", "#")):
            return match.group(0)

        try:
            if isinstance(base_path, pathlib.Path):
                asset_path = (base_path.parent / target).resolve()
                if not asset_path.exists():
                    print("Missing asset:", asset_path)
                    return match.group(0)

                data = asset_path.read_bytes()
                mime = guess_mime(asset_path)
            else:
                asset_url = urllib.parse.urljoin(base_path, target)
                data = fetch_bytes(asset_url)
                mime = guess_mime(asset_url)

            return "url('{}')".format(to_data_url(data, mime))

        except Exception as e:
            print("CSS asset error:", target, e)
            return match.group(0)

    return re.sub(r"url\(([^)]+)\)", repl, css_text)

def inline_remote_css(url):
    css = fetch_bytes(url).decode("utf-8")
    return "<style>\n{}\n</style>".format(inline_css_assets(css, url))

def inline_local_css(path):
    full_path = root / path.lstrip("/")
    css = full_path.read_text(encoding="utf-8")
    return "<style>\n{}\n</style>".format(inline_css_assets(css, full_path))

# --- Script Inlining ---
def inline_script(match):
    src = match.group(1)

    try:
        if src.startswith("http"):
            script = fetch_bytes(src).decode("utf-8")
        else:
            script = (root / src.lstrip("/")).read_text(encoding="utf-8")

        return "<script>\n{}\n</script>".format(script)

    except Exception as e:
        print("Script error:", src, e)
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

        return '<img src="{}"'.format(to_data_url(data, mime))

    except Exception as e:
        print("Image error:", src, e)
        return match.group(0)

# --- Load HTML ---
index_text = index_path.read_text(encoding="utf-8")

# --- Inline CSS ---
index_text = re.sub(
    r'<link\s+[^>]*rel=["\']stylesheet["\'][^>]*href=["\']([^"\']+)["\'][^>]*>',
    lambda m: inline_remote_css(m.group(1)) if m.group(1).startswith("http") else inline_local_css(m.group(1)),
    index_text,
    flags=re.IGNORECASE
)

# --- Inline Scripts ---
index_text = re.sub(
    r'<script\s+[^>]*src=["\']([^"\']+)["\'][^>]*></script>',
    inline_script,
    index_text,
    flags=re.IGNORECASE
)

# --- Inline Images ---
index_text = re.sub(
    r'<img\s+[^>]*src=["\']([^"\']+)["\']',
    inline_img,
    index_text,
    flags=re.IGNORECASE
)

# --- Compute Hash ---
file_hash = hashlib.sha256(index_text.encode("utf-8")).hexdigest()

# --- Update Script (SAFE) ---
update_script = """
<script>
(async () => {
  const LOCAL_HASH = "__HASH__";
  const UPDATE_URL = "https://raw.githubusercontent.com/linuxfandudeguy/gamezhub/refs/heads/main/offline/index.html";

  async function sha256(text) {
    const enc = new TextEncoder().encode(text);
    const buf = await crypto.subtle.digest("SHA-256", enc);
    return [...new Uint8Array(buf)]
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  }

  try {
    const res = await fetch(UPDATE_URL, { cache: "no-store" });
    const remoteText = await res.text();
    const remoteHash = await sha256(remoteText);

    if (remoteHash !== LOCAL_HASH) {
      if (confirm("Update detected.\\n\\nUpdate now?")) {
        document.open();
        document.write(remoteText);
        document.close();
      }
    }
  } catch (e) {
    console.warn("Update check failed:", e);
  }
})();
</script>
"""

update_script = update_script.replace("__HASH__", file_hash)

# --- Inject Script ---
if "</head>" in index_text:
    index_text = index_text.replace("</head>", update_script + "\n</head>")
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

print("Wrote", output_path)
