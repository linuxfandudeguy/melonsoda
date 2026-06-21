const toolsPage = {
  id: "fun",
  title: "toys/tools",
  html: `
    <h1>toys/tools</h1>
    
    <a href="#" class="game-link" onclick="launchGame('https://cdn.jsdelivr.net/gh/graduate-edu/educationalbundles@main/biology.svg'); return false;">
GUST Proxy</a>
    <a href="#" class="game-link" onclick="launchGame('https://testingcf.jsdelivr.net/gh/graduate-edu/educationalbundles@main/science.svg'); return false;">
Sandstone Proxy</a>
     <a href="#" class="game-link" onclick="launchGame('https://esm.sh/gh/graduate-edu/stunning-octo-dollop@3a7810e/music-class.svg'); return false;">
Shittify</a>
     <a href="#" class="game-link" onclick="launchGame('https://originfastly.jsdelivr.net/gh/linuxfandudeguy/urban-palm-tree@main/index.svg'); return false;">
Norepted</a>
     <a href="#" class="game-link" onclick="launchGame('https://quantil.jsdelivr.net/gh/reeyuki/YukiOsSingleHtml@main/yukios.svg'); return false;">
YukiOS</a>
     <a href="#" class="game-link" onclick="launchGame('https://gcore.jsdelivr.net/gh/linuxfandudeguy/urban-palm-tree@main/index%20(2).svg'); return false;">
NautilusOS</a>
       <a href="#" class="game-link" onclick="launchGame('https://raw.esm.sh/gh/linuxfandudeguy/google-class@main/index.svg'); return false;">
HagalazOS</a>
   
    <scr` + `ipt>
      let currentOverlay = null;
      let currentFrame = null;

      function launchGame(url) {
        const overlay = document.createElement('div');
        overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:9999;";

        const frame = document.createElement('iframe');
        frame.style.cssText = "width:80%;height:80%;border:none;";
        frame.src = url;
        frame.setAttribute('allowfullscreen', 'true');
        frame.setAttribute('allow', 'fullscreen; autoplay;');

        // Close button
        const closeBtn = document.createElement('button');
        closeBtn.innerText = 'Close';
        closeBtn.style.cssText = "margin-top:10px;padding:5px 10px;cursor:pointer;";
        closeBtn.onclick = () => {
          if (document.fullscreenElement) document.exitFullscreen();
          document.body.removeChild(overlay);
          currentOverlay = null;
          currentFrame = null;
        };

        // Fullscreen button
        const fsBtn = document.createElement('button');
        fsBtn.innerText = 'Fullscreen';
        fsBtn.style.cssText = "margin-top:5px;padding:5px 10px;cursor:pointer;";
        fsBtn.onclick = () => {
          if (overlay.requestFullscreen) overlay.requestFullscreen();
          else if (overlay.webkitRequestFullscreen) overlay.webkitRequestFullscreen();
          else if (overlay.msRequestFullscreen) overlay.msRequestFullscreen();
        };

        overlay.appendChild(frame);
        overlay.appendChild(closeBtn);
        overlay.appendChild(fsBtn);
        document.body.appendChild(overlay);

        frame.focus();
        frame.addEventListener('load', () => {
          frame.contentWindow.addEventListener('click', () => frame.focus());
        });

        currentOverlay = overlay;
        currentFrame = frame;
      }
    </scr` + `ipt>
  `
};

window.Pages = window.Pages || [];
window.Pages.push(toolsPage);
