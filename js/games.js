const gamesPage = {
    id: "games",
    title: "games",
    html: `
      <h1>games</h1>
     <style>
     /* Base link style */
a {
  font-family: "thisisafont", monospace, sans-serif;
  color: #0ff;              /* Neon cyan */
  text-decoration: none;    /* Remove underline */
  transition: all 0.3s ease;
  position: relative;
}

/* Hover effect with color change and glow */
a:hover {
  color: #ff0;              /* Neon yellow */
  text-shadow: 0 0 5px #ff0, 0 0 10px #ff0;
}

/* Optional underline animation */
a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;             /* Position below text */
  width: 0;
  height: 2px;
  background: #0ff;
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}

/* Optional active/focus effect */
a:active, a:focus {
  color: #f0f;              /* Magenta flash on click */
  text-shadow: 0 0 8px #f0f, 0 0 15px #f0f;
}
</style>
    <div class="game-link" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/EaglercraftX_1.8_u53_Offline_Signed.html')">
        Eaglercraft
    </div>

    <div class="game-link" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/baldi/index.html')">
        Baldi's Basics
    </div>

      <div class="game-link" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/wbwwb-master/index.html')">
   We Are What We Behold (tw: gore)
    </div>

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
