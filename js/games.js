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


    <scr` + `ipt>
    function launchGame(url) {
        var overlay = document.createElement('div');
        overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;justify-content:center;align-items:center;z-index:9999;";

        var frame = document.createElement('iframe');
        frame.style.cssText = "width:80%;height:80%;border:none;";
        frame.src = url;

        var closeBtn = document.createElement('button');
        closeBtn.innerText = 'Close';
        closeBtn.style.cssText = "position:absolute;top:10px;right:10px;padding:5px 10px;cursor:pointer;z-index:10;";
        closeBtn.onclick = function () {
            document.body.removeChild(overlay);
        };

        overlay.appendChild(closeBtn);
        overlay.appendChild(frame);
        document.body.appendChild(overlay);
    }
    </scr` + `ipt>
    `
};

window.Pages = window.Pages || [];
window.Pages.push(gamesPage);
