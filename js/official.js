(function() {

  window.officialUrls = [
    { url: "https://durokotte.foo.ng/melonsoda/", comment: "ts is the main page" },
    { url: "https://meronsooda.netlify.app/", comment: "netlify mirror" },
    { url: "https://raw.githack.com/linuxfandudeguy/melonsoda/main/", comment: "not hosted by me but i personally use it so is passes" },
    { url: "https://learn-french-easy.wasmer.app/", comment: "you can learn some very nice french words like le cul" },
    { url: "https://k12-algebra-tutoring-edu-us-resources.pages.dev/", comment: "omg algebra tutoring!1!1!11" },
    { url: "https://k12-resources-for-french.koshlandjg105.workers.dev/", comment: "french resources 100% real" }
  ];

  window.expandedUrls = window.officialUrls.flatMap(obj => [
    { url: obj.url, comment: obj.comment },
    { url: obj.url + "index.html", comment: obj.comment }
  ]);

  // === NORMALIZE FUNCTION ===
  function normalize(url) {
    try {
      const u = new URL(url);
      return u.origin + u.pathname.replace(/\/$/, "");
    } catch {
      return url;
    }
  }

  // Normalized list globally accessible
  window.normalizedList = window.expandedUrls.map(obj => ({
    url: normalize(obj.url),
    comment: obj.comment
  }));

  // === GLOBAL FUNCTION ===
  window.checkOfficialURL = function(url) {
    const normalized = normalize(url);
    const match = window.normalizedList.find(obj => obj.url === normalized);
    return match
      ? { official: true, comment: match.comment, url: match.url }
      : { official: false, comment: null, url: normalized };
  };

  // === POPUP FUNCTION ===
  const current = window.location.href;
  const result = window.checkOfficialURL(current);

  // === CREATE STYLE ===
  const style = document.createElement("style");
  style.textContent = `
    #url-popup {
      position: fixed;
      top: 20px;
      right: -320px;
      width: 300px;
      padding: 15px;
      color: white;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      transition: right 0.4s ease, opacity 0.3s ease;
      opacity: 0;
      z-index: 9999;
      font-family: initial;
    }
    #url-popup.show { right: 20px; opacity: 1; }
    #url-popup.hide { right: -320px; opacity: 0; }
    #url-popup.official { background: #2ecc71; }
    #url-popup.unofficial { background: #e74c3c; }
    #url-popup button {
      border: none;
      background: rgba(255,255,255,0.2);
      color: white;
      padding: 5px 10px;
      cursor: pointer;
      font-family: initial;
    }
  `;
  document.head.appendChild(style);

  // === CREATE POPUP ===
  const popup = document.createElement("div");
  popup.id = "url-popup";

  const text = document.createElement("div");
  const button = document.createElement("button");
  button.textContent = "Close";

  popup.appendChild(text);
  popup.appendChild(button);
  document.body.appendChild(popup);

  // === SET MESSAGE ===
  if (result.official) {
    popup.className = "official";
    text.textContent = "✅ this is an official melonsoda URL";
  } else {
    popup.className = "unofficial";
    text.textContent = "⚠️ this is either NOT an official melonsoda URL or one of the singlefiles";
  }

  // === SHOW POPUP ===
  setTimeout(() => popup.classList.add("show"), 10);

  // === CLOSE FUNCTION ===
  function closePopup() {
    popup.classList.remove("show");
    popup.classList.add("hide");
    setTimeout(() => {
      popup.remove();
      style.remove();
    }, 400);
  }

  button.onclick = closePopup;
  setTimeout(closePopup, 5000);

})();
