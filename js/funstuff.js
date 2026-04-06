const toolsPage = {
  id: "fun",
  title: "fun",
  html: `
    <h1>Fun Stuff</h1>
<p>these are fun things that arent video games</p>
    
    <a href="#" class="game-link" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/apps/thirtydollarwebsite/index.html'); return false;">
Thirty Dollar Website
</a>
<br>
<small>note: a lot of the images on thirty dollar website are <br> missing due to the cdn that i am using placing csp restrictions <br> on websites outside of the cdn, thankfully the audio is not blocked </small>
<br>
    <a href="#" class="game-link" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/apps/fluidsim/index.html'); return false;">
WebGL Fluids
</a>
    
 
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
