import yaml
import os
from urllib.parse import urlparse

# Paths
yaml_file = "urls.yaml"
output_dir = "js"
links_file = os.path.join(output_dir, "links.js")
official_file = os.path.join(output_dir, "official.js")

os.makedirs(output_dir, exist_ok=True)

# === NORMALIZE (match your JS logic) ===
def normalize(url: str) -> str:
    try:
        u = urlparse(url)
        path = u.path.rstrip("/")
        return f"{u.scheme}://{u.netloc}{path}"
    except:
        return url

# === ESCAPE FOR JS ===
def js_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')

# === LOAD YAML ===
with open(yaml_file, "r", encoding="utf-8") as f:
    data = yaml.safe_load(f)

# === DEDUPLICATE ===
seen = set()
deduped = []

for entry in data:
    url = entry.get("url", "")
    norm = normalize(url)

    if norm not in seen:
        seen.add(norm)
        deduped.append(entry)

# === BUILD HTML LINKS ===
links_html = ""
for entry in deduped:
    name = entry.get("name", "link")
    url = entry.get("url", "#")
    comment = entry.get("comment", "")
    links_html += f'<a href="{url}" target="_blank">{name}</a> {comment}<br>\n'

# === links.js ===
links_js = f"""const linksPage = {{
    id: "link",
    title: "links",
    html: `
<h1>links</h1>
{links_html}`
}};
window.Pages = window.Pages || [];
window.Pages.push(linksPage);
"""

with open(links_file, "w", encoding="utf-8") as f:
    f.write(links_js)

print(f"links.js generated at {links_file}")

# === official.js ===
official_js_template = """(function() {

window.officialUrls = [
{ urls }
];

window.expandedUrls = window.officialUrls.flatMap(obj => [
  { url: obj.url, comment: obj.comment },
  { url: obj.url + "index.html", comment: obj.comment }
]);

function normalize(url) {
  try { const u = new URL(url); return u.origin + u.pathname.replace(/\\/$/, ""); } 
  catch { return url; }
}

window.normalizedList = window.expandedUrls.map(obj => ({
  url: normalize(obj.url),
  comment: obj.comment
}));

window.checkOfficialURL = function(url) {
  const normalized = normalize(url);
  const match = window.normalizedList.find(obj => obj.url === normalized);
  return match
    ? { official: true, comment: match.comment, url: match.url }
    : { official: false, comment: null, url: normalized };
};

const current = window.location.href;
const result = window.checkOfficialURL(current);

const style = document.createElement("style");
style.textContent = `
#url-popup {position: fixed; top: 20px; right: -320px; width: 300px; padding: 15px; color: white; box-shadow: 0 5px 15px rgba(0,0,0,0.3); transition: right 0.4s ease, opacity 0.3s ease; opacity: 0; z-index: 9999; font-family: initial;}
#url-popup.show { right: 20px; opacity: 1; }
#url-popup.hide { right: -320px; opacity: 0; }
#url-popup.official { background: #2ecc71; }
#url-popup.unofficial { background: #e74c3c; }
#url-popup button { border: none; background: rgba(255,255,255,0.2); color: white; padding: 5px 10px; cursor: pointer; font-family: initial; }
`;
document.head.appendChild(style);

const popup = document.createElement("div");
popup.id = "url-popup";
const text = document.createElement("div");
const button = document.createElement("button");
button.textContent = "Close";
popup.appendChild(text);
popup.appendChild(button);
document.body.appendChild(popup);

if (result.official) { popup.className = "official"; text.textContent = "✅ this is an official melonsoda URL"; }
else { popup.className = "unofficial"; text.textContent = "⚠️ this is either NOT an official melonsoda URL or one of the singlefiles"; }

setTimeout(() => popup.classList.add("show"), 10);

function closePopup() {
  popup.classList.remove("show");
  popup.classList.add("hide");
  setTimeout(() => { popup.remove(); style.remove(); }, 400);
}

button.onclick = closePopup;
setTimeout(closePopup, 5000);

})();
"""

# === BUILD URL LIST (DEDUPED + ESCAPED) ===
urls_js_list = [
    f'  {{ url: "{js_escape(entry.get("url",""))}", comment: "{js_escape(entry.get("comment",""))}" }}'
    for entry in deduped
]

urls_js_str = ",\n".join(urls_js_list)
official_js = official_js_template.replace("{ urls }", urls_js_str)

with open(official_file, "w", encoding="utf-8") as f:
    f.write(official_js)

print(f"official.js generated at {official_file}")