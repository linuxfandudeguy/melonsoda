const linksPage = {
  id: "links",
  title: "links",
  html: `
    <h1>links</h1>
    <div id="official-urls-list" style="display:flex;flex-direction:column;gap:10px;"></div>
  `,
  onMount() {
    if (window.officialUrls && Array.isArray(window.officialUrls)) {
      window.officialUrls.forEach(obj => {
        const wrapper = document.createElement('div');
        wrapper.style.cssText = "padding:10px;border:1px solid #ccc;border-radius:5px;";

        const link = document.createElement('a');
        link.href = obj.url;
        link.textContent = obj.url;
        link.target = "_blank";
        link.style.cssText = "display:block;font-weight:bold;color:#3498db;text-decoration:none;margin-bottom:5px;";

        const comment = document.createElement('div');
        comment.textContent = obj.comment || "";
        comment.style.cssText = "color:#555;font-size:0.9em;";

        wrapper.appendChild(link);
        wrapper.appendChild(comment);

        // Directly get the container element each time
        document.getElementById('official-urls-list').appendChild(wrapper);
      });
    } else {
      document.getElementById('official-urls-list').textContent =
        "error with the dumb ahh links list idk why it isnt working";
    }
  }
};

window.Pages = window.Pages || [];
window.Pages.push(linksPage);