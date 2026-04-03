const gamesPage = {
    id: "games",
    title: "games",
    html: `
      <h1>games</h1>

      <a href="javascript:(function(){var w=window.open('about:blank','_blank');if(!w){alert('Popup blocked!');return;}w.moveTo(0,0);w.resizeTo(screen.width,screen.height);w.document.write('<html><head><title>Eaglercraft</title><style>body,html{margin:0;padding:0;overflow:hidden;}</style></head><body><iframe src=&quot;https://file.garden/ZtNXqbPCZ1cAh6MT/EaglercraftX_1.8_u53_Offline_Signed.html&quot; style=&quot;width:100%;height:100%;border:none;&quot;></iframe></body></html>');w.document.close();w.document.documentElement.requestFullscreen&&w.document.documentElement.requestFullscreen();})();" class="game-link">
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

      <scr` + `ipt>
        function launchGame(url) {
            var overlay = document.createElement('div');
            overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;z-index:9999;";

            var frame = document.createElement('iframe');
            frame.style.cssText = "width:80%;height:80%;border:none;";
            frame.src = url;
            frame.setAttribute('tabindex', '0');
            frame.setAttribute('allowfullscreen', 'true');
            frame.setAttribute('allow', 'fullscreen; autoplay;');

            var closeBtn = document.createElement('button');
            closeBtn.innerText = 'Close';
            closeBtn.style.cssText = "position:absolute;top:10px;right:10px;padding:5px 10px;cursor:pointer;z-index:10;";
            closeBtn.onclick = function() {
                document.body.removeChild(overlay);
            };

            overlay.appendChild(frame);
            overlay.appendChild(closeBtn);
            document.body.appendChild(overlay);

            // Focus the iframe for keyboard input
            frame.focus();

            // Ensure clicks inside iframe also focus it (some games require interaction first)
            frame.contentWindow.addEventListener('click', function() {
                frame.focus();
            });
        }
      </scr` + `ipt>
    `
};

window.Pages = window.Pages || [];
window.Pages.push(gamesPage);
