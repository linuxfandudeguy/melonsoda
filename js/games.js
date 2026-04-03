const gamesPage = {
    id: "games",
    title: "games",
    html: `
      <h1>games</h1>

      <!-- Example buttons -->
      <button onclick="openModal('https://file.garden/ZtNXqbPCZ1cAh6MT/EaglercraftX_1.8_u53_Offline_Signed.html')">eaglercraft</button>
      <button onclick="openModal('https://file.garden/ZtNXqbPCZ1cAh6MT/baldi/index.html')">baldi's basics</button>

      <!-- Modal container -->
      <div id="gameModal" style="
          display:none;
          position:fixed;
          top:0; left:0;
          width:100%; height:100%;
          background: rgba(0,0,0,0.7);
          justify-content:center;
          align-items:center;
          z-index:9999;
      ">
        <div style="
            position:relative;
            width:80%; height:80%;
            background:#fff;
            border-radius:10px;
            overflow:hidden;
        ">
          <button id="closeModal" style="
              position:absolute;
              top:10px; right:10px;
              z-index:10;
              padding:5px 10px;
              cursor:pointer;
          ">Close</button>
          <iframe id="modalIframe" src="" style="width:100%; height:100%; border:none;"></iframe>
        </div>
      </div>

      <script>
        function openModal(url) {
            const modal = document.getElementById('gameModal');
            const iframe = document.getElementById('modalIframe');
            iframe.src = url;
            modal.style.display = 'flex';
        }

        document.getElementById('closeModal').onclick = function() {
            const modal = document.getElementById('gameModal');
            const iframe = document.getElementById('modalIframe');
            iframe.src = '';
            modal.style.display = 'none';
        };
      </script>
    `
};

window.Pages = window.Pages || [];
window.Pages.push(gamesPage);
