const gamesPage = {
  id: "games",
  title: "games",
  html: `
    <h1>games</h1>

    <input id="searchBar" placeholder="Search games..."
      style="padding:6px;width:100%;max-width:300px;margin-bottom:10px;">

    <div id="gameList">Loading...</div>

    <scr` + `ipt>
      const BASE = "https://originfastly.jsdelivr.net/gh/linuxfandudeguy/turbo-meme/";

      window.gameListEl = document.getElementById("gameList");
      window.searchBar = document.getElementById("searchBar");

      window.allEntries = window.allEntries || [];

      function cleanName(href) {
        return href
          .replace(/^\\/?/, "")
          .replace(/\\.html$/i, "");
      }

      function makeUrl(path) {
        return BASE + encodeURI(path);
      }

      function renderList(filter = "") {
        window.gameListEl.innerHTML = "";

        const filtered = window.allEntries.filter(entry => {
          return entry.name.toLowerCase().includes(filter.toLowerCase());
        });

        if (!filtered.length) {
          window.gameListEl.innerText = "No matching games.";
          return;
        }

        for (const entry of filtered) {
          const a = document.createElement("a");
          a.href = "#";
          a.textContent = entry.name;
          a.style.display = "block";
          a.style.margin = "6px 0";

          a.onclick = (e) => {
            e.preventDefault();
            launchGame(entry.url);
          };

          window.gameListEl.appendChild(a);
        }
      }

      async function loadGames() {
        try {
          const res = await fetch(BASE);
          const html = await res.text();

          const doc = new DOMParser().parseFromString(html, "text/html");

          const entries = [...doc.querySelectorAll("a")]
            .map(a => a.getAttribute("href"))
            .filter(h => h && h.endsWith(".html"))
            .map(h => {
              const clean = cleanName(h);
              return {
                name: clean,
                url: makeUrl(clean + ".html")
              };
            })
            .sort((a, b) => a.name.localeCompare(b.name));

          window.allEntries = entries;
          renderList("");

        } catch (err) {
          console.error(err);
          window.gameListEl.innerText = "Failed to load games.";
        }
      }

      // 🔍 search
      window.searchBar.addEventListener("input", (e) => {
        renderList(e.target.value);
      });

      // 🔥 FETCH + DOCUMENT.WRITE ENGINE
      async function launchGame(url) {
        const overlay = document.createElement("div");
        overlay.style.cssText =
          "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:9999;";

        const frame = document.createElement("iframe");
        frame.style.cssText = "width:85%;height:85%;border:none;background:white;";

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Close";
        closeBtn.style.cssText = "margin-top:10px;padding:6px 12px;cursor:pointer;";
        closeBtn.onclick = () => overlay.remove();

        overlay.appendChild(frame);
        overlay.appendChild(closeBtn);
        document.body.appendChild(overlay);

        try {
          const res = await fetch(url);
          const html = await res.text();

          const doc = frame.contentDocument || frame.contentWindow.document;

          doc.open();
          doc.write(html);
          doc.close();

        } catch (err) {
          console.error(err);
          frame.src = url; // fallback
        }
      }

      loadGames();
    </scr` + `ipt>
  `
};

window.Pages = window.Pages || [];
window.Pages.push(gamesPage);
