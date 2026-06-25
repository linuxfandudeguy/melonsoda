const gamesPage = {
  id: "games",
  title: "games",
  html: `
    <h1>games</h1>

    <input id="searchBar" placeholder="Search games..."
      style="padding:6px;width:100%;max-width:300px;margin-bottom:10px;">

    <div id="gameList">Loading...</div>

    <scr` + `ipt>
      // using var because this pos system i made hates const for some damn reason
      var BASE_JSON =
      "https://raw.githubusercontent.com/linuxfandudeguy/turbo-meme/refs/heads/main/games.json";
      var gameListEl = document.getElementById("gameList");
      var searchBar = document.getElementById("searchBar");

      let allEntries = [];

      function renderList(filter = "") {
        gameListEl.innerHTML = "";

        const filtered = allEntries.filter(e =>
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
          const res = await fetch(
            BASE_JSON + "?t=" + Date.now(),
            { cache: "no-store" }
          );

          if (!res.ok) throw new Error("HTTP " + res.status);

          const data = await res.json();

          allEntries = data.sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
          );

          renderList("");

        } catch (err) {
          console.error(err);
          gameListEl.innerText = "Failed to load games.";
        }
      }

      searchBar.addEventListener("input", (e) => {
        renderList(e.target.value);
      });

      async function launchGame(url) {
        const overlay = document.createElement("div");
        overlay.style.cssText =
          "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;";

        const frame = document.createElement("iframe");
        frame.style.cssText =
          "width:85%;height:85%;border:none;background:white;";

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
          const res = await fetch(url + "?t=" + Date.now(), {
            cache: "no-store"
          });

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
