const unblockersPage = {
    id: "unblock",
    title: "unblockers",
    html: `
    <h1>unblockers</h1>
	<style>
  .unblock-container {
    min-height: 100vh;
    background: #0d1117;
    color: #e6edf3;
    font-family: system-ui, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .card {
    background: #161b22;
    padding: 25px;
    border-radius: 14px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    width: 90%;
    max-width: 600px;
    text-align: center;
  }

  .title {
    font-size: 28px;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 14px;
    color: #8b949e;
    margin-bottom: 20px;
  }

  .input-row {
    display: flex;
    gap: 10px;
  }

  #url {
    flex: 1;
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    background: #0d1117;
    color: white;
  }

  #submit {
    background: #238636;
    border: none;
    padding: 10px 16px;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    transition: 0.2s;
  }

  #submit:hover {
    background: #2ea043;
  }

  #video-holder {
    width: 90%;
    max-width: 800px;
    margin-top: 20px;
    display: none;
  }

  #video {
    width: 100%;
    height: 450px;
    border-radius: 12px;
    border: none;
  }

  .credit {
    font-size: 12px;
    color: #6e7681;
    margin-top: 10px;
  }
</style>

<div class="unblock-container">
  <div class="card">
    <div class="title">YouTube Unblocker</div>
    <div class="subtitle">Paste a YouTube link and press watch</div>

    <div class="input-row">
      <input type="text" id="url" placeholder="https://youtube.com/watch?v=...">
      <button id="submit">Watch</button>
    </div>

    <div class="credit">credit to x8rr/ubyt</div>
  </div>

  <div id="video-holder">
    <iframe id="video"></iframe>
  </div>
</div>

<script>
const base = "https://www.youtube-nocookie.com/embed/";
const end = "?autoplay=0&modestbranding=1&rel=0";

const submit = document.getElementById('submit');
const url = document.getElementById('url');
const video = document.getElementById('video');
const holder = document.getElementById('video-holder');

// Better ID extraction
function getYouTubeID(link) {
  try {
    const urlObj = new URL(link);

    if (urlObj.hostname.includes("youtu.be")) {
      return urlObj.pathname.slice(1);
    }

    if (urlObj.searchParams.get("v")) {
      return urlObj.searchParams.get("v");
    }

    return null;
  } catch {
    return null;
  }
}

submit.onclick = () => {
  const id = getYouTubeID(url.value.trim());

  if (!id) {
    alert("Invalid YouTube URL");
    return;
  }

  video.src = base + id + end;
  holder.style.display = "block";
};
</script>
   `   
};

window.Pages = window.Pages || [];
window.Pages.push(unblockersPage);
