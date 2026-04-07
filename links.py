import yaml
import os

# Paths
yaml_file = "urls.yaml"
output_dir = "js"
output_file = os.path.join(output_dir, "links.js")
readme_file = "README.md"

# Ensure output directory exists
os.makedirs(output_dir, exist_ok=True)

# Load YAML
with open(yaml_file, "r", encoding="utf-8") as f:
    data = yaml.safe_load(f)

# Build plain text links from YAML
links_text = ""
for entry in data:
    name = entry.get("name", "link")
    url = entry.get("url", "#")
    comment = entry.get("comment", "")
    if comment:
        links_text += f"{name}: {url} ({comment})\n"
    else:
        links_text += f"{name}: {url}\n"

# JS template with plain text
js_template = f"""const linksPage = {{
    id: "link",
    title: "link",
    text: `
{links_text}`
}};
window.Pages = window.Pages || [];
window.Pages.push(linksPage);
"""

# Write links.js
with open(output_file, "w", encoding="utf-8") as f:
    f.write(js_template)

print(f"links.js generated at {output_file}")

# Append plain text links to README.md
readme_append_content = "\n\n## Links\n\n" + links_text
with open(readme_file, "a", encoding="utf-8") as f:
    f.write(readme_append_content)

print(f"Links appended to {readme_file}")
