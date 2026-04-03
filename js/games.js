const gamesPage = {
    id: "games",
    title: "games",
    html: `
      <h1>games</h1>

      <a href="#" class="game-link"
         onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/EaglercraftX_1.8_u53_Offline_Signed.html'); return false;">
        Eaglercraft
      </a>

      <a href="#" class="game-link"
         onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/baldi/index.html'); return false;">
        Baldi's Basics
      </a>

      <a href="#" class="game-link"
         onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/wbwwb-master/index.html'); return false;">
        We Are What We Behold (tw: gore)
      </a>

      <a href="#" class="game-link"
         onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/badtimesimulator/index.html'); return false;">
        Bad Time Simulator (Sans Fight)
      </a>

      <script>
        function launchGame(url) {
            // Create overlay
            var overlay = document.createElement('div');
            overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;z-index:9999;";

            // Create iframe for game
            var frame = document.createElement('iframe');
            frame.style.cssText = "width:80%;height:80%;border:none;";
            frame.src = url;
            frame.setAttribute('tabindex', '0');          // allow keyboard focus
            frame.setAttribute('allowfullscreen', 'true'); // allow fullscreen
            frame.setAttribute('allow', 'fullscreen; autoplay;'); // optional for some games

            // Close button
            var closeBtn = document.createElement('button');
            closeBtn.innerText = 'Close';
            closeBtn.style.cssText = "position:absolute;top:10px;right:10px;padding:5px 10px;cursor:pointer;z-index:10;";
            closeBtn.onclick = function () {
                document.body.removeChild(overlay);
            };

            // Append and focus
            overlay.appendChild(frame);
            overlay.appendChild(closeBtn);
            document.body.appendChild(overlay);

            // Focus the iframe so it captures keyboard input
            frame.focus();

            // Optional: click once to ensure games that block input until interaction work
            frame.contentWindow.addEventListener('click', () => frame.focus());
        }
      </script>
    `
};

window.Pages = window.Pages || [];
window.Pages.push(gamesPage);
