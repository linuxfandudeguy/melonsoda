import base64
import re
from pathlib import Path

ZIP_FILE = "math.zip"
HTML_FILE = "index.html"

def encode_zip(path):
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode("utf-8")

def inject_into_head(html, b64):
    script_block = f"""
<script>
window.ZIP_URL = "data:application/zip;base64,{b64}";
</script>
""".strip()

    # remove existing ZIP_URL script if present
    html = re.sub(
        r'<script>\s*window\.ZIP_URL\s*=.*?</script>',
        "",
        html,
        flags=re.DOTALL
    )

    # inject into head
    if "</head>" not in html:
        raise ValueError("No </head> tag found")

    return html.replace("</head>", script_block + "\n</head>")

def main():
    html_path = Path(HTML_FILE)

    html = html_path.read_text(encoding="utf-8")
    b64 = encode_zip(ZIP_FILE)

    updated = inject_into_head(html, b64)

    # overwrite SAME file (in-place)
    html_path.write_text(updated, encoding="utf-8")

    print("index.html updated in place")

if __name__ == "__main__":
    main()
