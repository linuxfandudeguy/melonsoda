const gamesPage = {
  id: "games",
  title: "games",
  html: `
    <h1>games</h1>

    <input id="searchBar" placeholder="Search games..." 
      style="padding:6px;width:100%;max-width:300px;margin-bottom:10px;">

    <div id="gameList">Loading...</div>

    <scr` + `ipt>
      window.gameListEl = document.getElementById("gameList");
      window.searchBar = document.getElementById("searchBar");

      // persistent state (IMPORTANT FIX)
      window.allEntries = window.allEntries || [];

      function renderList(filter = "") {
        window.gameListEl.innerHTML = "";

        const filtered = window.allEntries.filter(entry => {
          const name = entry.path.split("/").pop()
            .replace(/\\.html$/i, "")
            .toLowerCase();

          return name.includes(filter.toLowerCase());
        });

        if (!filtered.length) {
          window.gameListEl.innerText = "No matching games.";
          return;
        }

        for (const entry of filtered) {
          const fileName = entry.path.split("/").pop();
          const name = fileName.replace(/\\.html$/i, "");

          const a = document.createElement("a");
          a.href = "#";
          a.textContent = name;
          a.style.display = "block";
          a.style.margin = "6px 0";

          a.onclick = async (e) => {
            e.preventDefault();

            const html = await entry.file.async("string");
            const blob = new Blob([html], { type: "text/html" });
            const url = URL.createObjectURL(blob);

            launchGame(url);
          };

          window.gameListEl.appendChild(a);
        }
      }

      async function loadZipGames() {
        try {
          const res = await fetch(window.ZIP_URL);
          const blob = await res.blob();

          const zip = await JSZip.loadAsync(blob);

          const entries = [];

          zip.forEach((path, file) => {
            if (!file.dir && path.toLowerCase().endsWith(".html")) {
              entries.push({ path, file });
            }
          });

          if (!entries.length) {
            window.gameListEl.innerText = "No HTML files found.";
            return;
          }

          // A-Z SORT
          entries.sort((a, b) => {
            const aName = a.path.split("/").pop()
              .replace(/\\.html$/i, "")
              .toLowerCase();

            const bName = b.path.split("/").pop()
              .replace(/\\.html$/i, "")
              .toLowerCase();

            return aName.localeCompare(bName);
          });

          window.allEntries = entries;
          renderList();

        } catch (err) {
          console.error(err);
          window.gameListEl.innerText = "Failed to load games.";
        }
      }

      // 🔍 Live search
      window.searchBar.addEventListener("input", () => {
        renderList(window.searchBar.value);
      });

      function launchGame(url) {
        const overlay = document.createElement("div");
        overlay.style.cssText =
          "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:9999;";

        const frame = document.createElement("iframe");
        frame.style.cssText = "width:80%;height:80%;border:none;";
        frame.src = url;

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Close";
        closeBtn.style.cssText = "margin-top:10px;padding:5px 10px;cursor:pointer;";
        closeBtn.onclick = () => {
          if (document.fullscreenElement) document.exitFullscreen();
          overlay.remove();
        };

        const fsBtn = document.createElement("button");
        fsBtn.textContent = "Fullscreen";
        fsBtn.style.cssText = "margin-top:5px;padding:5px 10px;cursor:pointer;";
        fsBtn.onclick = () => overlay.requestFullscreen?.();

        overlay.appendChild(frame);
        overlay.appendChild(closeBtn);
        overlay.appendChild(fsBtn);

        document.body.appendChild(overlay);
      }

      loadZipGames();
    </scr` + `ipt>
  `
};

window.Pages = window.Pages || [];
window.Pages.push(gamesPage);
