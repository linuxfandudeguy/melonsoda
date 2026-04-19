const gamesPage = {
  id: "games",
  title: "games",
  html: `
    <h1>games</h1>
    <p>
      some games might be broken, and also they are unnamed, some have weird names, so tbh, good luck.  (credit to gn-math for the games)<br>
      i had to do this because my file.garden account was hacked, even after gaining control of the account again,<br>
      i want melonsoda to have more games, even if it comes at the expense of being confused of which games are which.
      <p>                                                                                                — jay (aka duro) </p>
      
    </p>

    <div id="gameList">Loading...</div>


    <scr` + `ipt>
      const ZIP_URL = "https://raw.githubusercontent.com/linuxfandudeguy/melonsoda/main/math.zip";

      const gameListEl = document.getElementById("gameList");

      async function loadZipGames() {
        try {
          const res = await fetch(ZIP_URL);
          const blob = await res.blob();

          const zip = await JSZip.loadAsync(blob);

          gameListEl.innerHTML = "";

          const entries = [];

          zip.forEach((path, file) => {
            if (!file.dir && path.toLowerCase().endsWith(".html")) {
              entries.push({ path, file });
            }
          });

          if (entries.length === 0) {
            gameListEl.innerText = "No HTML files found.";
            return;
          }

          entries.sort((a, b) => a.path.localeCompare(b.path));

          for (const entry of entries) {
            const name = entry.path.split("/").pop().replace(/\\.html$/i, "");

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

            gameListEl.appendChild(a);
          }

        } catch (err) {
          console.error(err);
          gameListEl.innerText = "Failed to load games.";
        }
      }

      let currentOverlay = null;
      let currentFrame = null;

      function launchGame(url) {
        const overlay = document.createElement('div');
        overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:9999;";

        const frame = document.createElement('iframe');
        frame.style.cssText = "width:80%;height:80%;border:none;";
        frame.src = url;
        frame.setAttribute('allowfullscreen', 'true');

        const closeBtn = document.createElement('button');
        closeBtn.innerText = 'Close';
        closeBtn.style.cssText = "margin-top:10px;padding:5px 10px;cursor:pointer;";
        closeBtn.onclick = () => {
          if (document.fullscreenElement) document.exitFullscreen();
          document.body.removeChild(overlay);
        };

        const fsBtn = document.createElement('button');
        fsBtn.innerText = 'Fullscreen';
        fsBtn.style.cssText = "margin-top:5px;padding:5px 10px;cursor:pointer;";
        fsBtn.onclick = () => {
          if (overlay.requestFullscreen) overlay.requestFullscreen();
        };

        overlay.appendChild(frame);
        overlay.appendChild(closeBtn);
        overlay.appendChild(fsBtn);
        document.body.appendChild(overlay);

        frame.focus();
      }

      loadZipGames();
    </scr` + `ipt>
  `
};

window.Pages = window.Pages || [];
window.Pages.push(gamesPage);
