const gamesPage = {
  id: "games",
  title: "games",
  html: `
    <h1>Games</h1>

 <a href="javascript:(function(){var w=window.open('about:blank','_blank');if(!w){alert('Popup blocked');return;}w.moveTo(0,0);w.resizeTo(screen.width,screen.height);w.focus();w.document.write('<!DOCTYPE html><html><head><title>minecraft</title><style>html,body{margin:0;height:100%;overflow:hidden;background:black;}</style></head><body><iframe src=&quot;https://file.garden/ZtNXqbPCZ1cAh6MT/EaglercraftX_1.8_u53_Offline_Signed.html&quot; style=&quot;width:100%;height:100%;border:none;&quot; allowfullscreen></iframe><script>document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen();<\/script></body></html>');w.document.close();})();"> Eaglercraft (opens in about:blank) </a>
    
    <a href="#" class="game-link" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/baldi/index.html'); return false;">
      Baldi's Basics
    </a>

    <a href="#" class="game-link" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/wbwwb-master/index.html'); return false;">
      We Become What We Behold (tw: gore)
    </a>

    <a href="#" class="game-link" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/badtimesimulator/index.html'); return false;">
      Bad Time Simulator (Sans Fight)
    </a>

     <a href="#" class="game-link" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/flash/html/nyancatlostinspace.html'); return false;">
     Nyan Cat: Lost in Space (tw: mentions of drugs)
    </a>

 <a href="#" class="game-link" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/doom/dos.html'); return false;">
    DOOM (tw: gore)
    </a>

     <a href="#" class="game-link" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/flash/html/HappyWheels.html'); return false;">
    Happy Wheels (tw: extreme gore)
    </a>

    <a href="#" class="game-link" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/4.2.3/index.html'); return false;">
Multi-console game emulator    
</a>

    <a href="#" class="game-link" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/4.2.3/index.html?rom=Scribblenauts%20Collection%20(USA).nds'); return false;">
Scribblenauts/Super Scribblenauts  
</a>

 <a href="#" class="game-link" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/4.2.3/index.html?rom=Street%20Fighter%20II%20(Japan).sfc'); return false;">
Street Fighter II: The World Warrior (Japan)

</a>

 <a href="#" class="game-link" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/flash/html/fridaynightfunkin.html'); return false;">
Friday Night Funkin (Macromedia Flash ver.)

</a>

 <a href="#" class="game-link" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/yumenikki-master/yumenikki-master/index.html'); return false;">
 ゆめにっき 
</a>
<details>
  <summary>trigger warnings for ゆめにっき</summary>
  <ul>
    <li>violence & sh imagery</li>
    <li>disturbing/horror atmosphere</li>
    <li>psychological unease</li>
    <li>suggestive or creepy body imagery</li>
    <li>seizure / flashing lights</li>
    <li>implied trauma or symbolic distress</li>
    <li>dark dreams and unsettling symbolic content</li>
  </ul>
</details><br>
<small> note for ゆめにっき: some files might be missing, i dont know which but<br> i know this because the cdn i used said it could not upload a file due to it having a file extension that is commonly abused in malware. the game itself is safe.</small>
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
window.Pages.push(gamesPage);
