const gamesPage = {
  id: "games",
  title: "games",
  html: `
    <h1>games</h1>

    <input id="searchBar" placeholder="Search games..."
      style="padding:6px;width:100%;max-width:300px;margin-bottom:10px;">

    <div id="gameList">Loading...</div>

    <scr` + `ipt>
      var BASE = "https://originfastly.jsdelivr.net/gh/linuxfandudeguy/turbo-meme/";

      window.gameListEl = document.getElementById("gameList");
      window.searchBar = document.getElementById("searchBar");

      window.allEntries = [];

      // 🔥 HARD FIX: aggressively sanitize ANY broken href
      function cleanHref(h) {
        return decodeURIComponent(h)
          .replace(/^\\/?/, "")
          .replace(/^gh\\/linuxfandudeguy\\/turbo-meme(@[^\\/]+)?\\//, "")
          .replace(/^@[^\\/]+\\//, "")
          .replace(/^master\\//, "")
          .replace(/^main\\//, "");
      }

      function renderList(filter = "") {
        gameListEl.innerHTML = "";

        const filtered = window.allEntries.filter(e =>
          e.name.toLowerCase().includes(filter.toLowerCase())
        );

        if (!filtered.length) {
          gameListEl.innerText = "No matching games.";
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

          gameListEl.appendChild(a);
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
              const clean = cleanHref(h);

              return {
                name: clean.replace(/\\.html$/i, ""),
                url: BASE + clean
              };
            })
            .sort((a, b) => a.name.localeCompare(b.name));

          window.allEntries = entries;
          renderList("");

        } catch (err) {
          console.error(err);
          gameListEl.innerText = "Failed to load games.";
        }
      }

      searchBar.addEventListener("input", (e) => {
        renderList(e.target.value);
      });

      // 🔥 FULLSCREEN + DOCUMENT.WRITE FIXED OVERLAY
      async function launchGame(url) {
        const overlay = document.createElement("div");
        overlay.style.cssText =
          "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;";

        const frame = document.createElement("iframe");
        frame.style.cssText = "width:85%;height:85%;border:none;background:white;";

        const btnRow = document.createElement("div");
        btnRow.style.cssText = "display:flex;gap:10px;margin-top:10px;";

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Close";
        closeBtn.onclick = () => overlay.remove();

        const fsBtn = document.createElement("button");
        fsBtn.textContent = "Fullscreen";
        fsBtn.onclick = () => {
          if (overlay.requestFullscreen) overlay.requestFullscreen();
        };

        btnRow.appendChild(closeBtn);
        btnRow.appendChild(fsBtn);

        overlay.appendChild(frame);
        overlay.appendChild(btnRow);
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
          frame.src = url;
        }
      }

      loadGames();
    </scr` + `ipt>
  `
};

window.Pages = window.Pages || [];
window.Pages.push(gamesPage);
