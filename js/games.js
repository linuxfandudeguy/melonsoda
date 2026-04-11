const gamesPage = {
  id: "games",
  title: "games",
  html: `
    <h1>games</h1>
    <p>i would like to thank <a href="https://noahstutoring.academy/">Noah's Tutoring Hub</a> for making the game backups possible, and also <br><a href="https://gn-math.dev/">gn-math</a> for providing ports for a lot of the games here.</p>


      <div class="game-row">
        <a class="game-link" href="javascript:(function(){var w=window.open('about:blank','_blank');if(!w){alert('Popup blocked');return;}w.moveTo(0,0);w.resizeTo(screen.width,screen.height);w.focus();w.document.write('<!DOCTYPE html><html><head><title>minecraft</title><style>html,body{margin:0;height:100%;overflow:hidden;background:black;}</style></head><body><iframe src=&quot;https://file.garden/ZtNXqbPCZ1cAh6MT/EaglercraftX_1.8_u53_Offline_Signed.html&quot; style=&quot;width:100%;height:100%;border:none;&quot; allowfullscreen></iframe><script>document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen();<\/script></body></html>');w.document.close();})();">
          Eaglercraft (opens in about:blank)
        </a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/baldi/index.html'); return false;">Baldi's Basics</a>
        <span>//</span>
        <a class="backup-link" href="#" onclick="launchGame('BACKUP_URL_HERE'); return false;">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/wbwwb-master/index.html'); return false;">We Become What We Behold (tw: gore)</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/badtimesimulator/index.html'); return false;">Bad Time Simulator (Sans Fight)</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/flash/html/nyancatlostinspace.html'); return false;">Nyan Cat: Lost in Space (tw: mentions of drugs)</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/doom/dos.html'); return false;">DOOM (tw: gore)</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/flash/html/HappyWheels.html'); return false;">Happy Wheels (tw: extreme gore)</a>
        <span>//</span>
        <a class="backup-link" href="javascript:(async()=>{await backup("https://raw.githubusercontent.com/linuxfandudeguy/google-classroom/refs/heads/main/happywheels.html");})();">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/4.2.3/index.html?rom=Scribblenauts%20Collection%20(USA).nds'); return false;">Scribblenauts/Super Scribblenauts</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/4.2.3/index.html?rom=Street%20Fighter%20II%20(Japan).sfc'); return false;">Street Fighter II: The World Warrior (Japan)</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/flash/html/fridaynightfunkin.html'); return false;">Friday Night Funkin (Flash ver.)</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/ovo/index.html'); return false;">OVO</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/stickman-hook-unblocked-main/index.html'); return false;">Stickman Hook</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/raldi-main/index.html'); return false;">Raldi's Crackhouse (tw: drugs/humor)</a>
        <span>//</span>
        <a class="backup-link" href="javascript:(async()=>{await backup("https://raw.githubusercontent.com/linuxfandudeguy/google-classroom/refs/heads/main/raldi_s_crackhouse.html");})();">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/flash/html/gachalife.html'); return false;">Gacha Life</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/Project%20Sekai%20-%20%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%BB%E3%82%AB%E3%82%A4/index.html'); return false;">Project Sekai (Scratch Remake)</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/stickmandestruction/index.html'); return false;">Stickman Destruction (tw: harm)</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/granny-main/index.html'); return false;">Granny (tw: disturbing visuals)</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/gorilla-tag-main/index.html'); return false;">Gorilla Tag</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="javascript:(function(){var w=window.open('about:blank','_blank');if(!w){alert('Popup blocked');return;}w.moveTo(0,0);w.resizeTo(screen.width,screen.height);w.focus();w.document.write('<!DOCTYPE html><html><head><title>untitled goose game</title><style>html,body{margin:0;height:100%;overflow:hidden;background:black;}</style></head><body><iframe src=&quot;https://file.garden/ZtNXqbPCZ1cAh6MT/untitled-goose-game-main/index.html&quot; style=&quot;width:100%;height:100%;border:none;&quot; allowfullscreen></iframe><script>document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen();<\/script></body></html>');w.document.close();})();">
          Untitled Goose Game (opens in about:blank)
        </a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/people-playground/index.html'); return false;">People Playground (tw: extreme gore)</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/dokidoki/index.html'); return false;">Doki Doki Literature Club (tw: heavy)</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/baldi-remaster/index.html'); return false;">BB Classic Remastered</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/baldi-plus/index.html'); return false;">BB+</a>
        <span>//</span>
        <a class="backup-link" href="#">backup</a>
      </div>

      <div class="game-row">
        <a class="game-link" href="#" onclick="launchGame('https://file.garden/ZtNXqbPCZ1cAh6MT/4.2.3/index.html?rom=1235%20-%20Taiko%20no%20Tatsujin%20DS%20-%20Touch%20de%20Dokodon!%20(J)(Independent).nds'); return false;">太鼓の達人DS (Taiko no Tatsujin DS)</a>
        <span>//</span>
        <a class="backup-link" href="">backup</a>
      </div>


    <scr` + `ipt>
      let currentOverlay = null;
      let currentFrame = null;

      function launchGame(url) {
        if (!url || url === 'BACKUP_URL_HERE') {
          alert('Backup link not available yet.');
          return;
        }
        const overlay = document.createElement('div');
        overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:9999;";

        const frame = document.createElement('iframe');
        frame.style.cssText = "width:80%;height:80%;border:none;";
        frame.src = url;
        frame.setAttribute('allowfullscreen', 'true');
        frame.setAttribute('allow', 'fullscreen; autoplay;');

        const closeBtn = document.createElement('button');
        closeBtn.innerText = 'Close';
        closeBtn.style.cssText = "margin-top:10px;padding:5px 10px;cursor:pointer;";
        closeBtn.onclick = () => {
          if (document.fullscreenElement) document.exitFullscreen();
          document.body.removeChild(overlay);
          currentOverlay = null;
          currentFrame = null;
        };

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
    <scr` + `ipt>
    async function backup(url) {
  if (!url) {
    alert("Backup URL missing.");
    return;
  }

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch backup");

    const html = await res.text();

    launchGame("about:blank");

    // replace iframe content with fetched HTML
    if (currentFrame) {
      currentFrame.src = "about:blank";
      currentFrame.srcdoc = html;
    }

  } catch (err) {
    console.error(err);
    alert("Could not load backup game.");
  }
}
  </scr` + `ipt>
  `
};

window.Pages = window.Pages || [];
window.Pages.push(gamesPage);
