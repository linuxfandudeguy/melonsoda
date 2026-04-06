(function () {
  const officialUrls = [
    "https://durokotte.foo.ng/melonsoda/index.html",
    "https://durokotte.foo.ng/melonsoda/",
    "https://meronsooda.netlify.app/",
    "https://raw.githack.com/linuxfandudeguy/melonsoda/main/index.html",
    "https://raw.githack.com/linuxfandudeguy/melonsoda/main/",
    "https://learn-french-easy.wasmer.app/",
    "https://learn-french-easy.wasmer.app/index.html"

  ];

  // === NORMALIZE FUNCTION ===
  function normalize(url) {
    try {
      const u = new URL(url);
      return u.origin + u.pathname.replace(/\/$/, "");
    } catch {
      return url;
    }
  }

  // normalize whitelist once
  const normalizedList = officialUrls.map(normalize);

  // === GET CURRENT URL (with Google Sites logic) ===
  function getCurrentBaseURL() {
    const u = new URL(window.location.href);

    // detect Google Sites pages
    if (u.hostname === "sites.google.com") {
      const parts = u.pathname.split("/").filter(Boolean); // ["view", "sitename", ...]
      if (parts[0] === "view") {
        // reconstruct base site URL: https://sites.google.com/view/sitename
        return u.origin + "/" + parts.slice(0, 2).join("/");
      }
    }

    // fallback: normal page
    return u.origin + u.pathname.replace(/\/$/, "");
  }

  const current = getCurrentBaseURL();

  // === MATCH ===
  const isOfficial = normalizedList.includes(current);

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
  if (isOfficial) {
    popup.className = "official";
    text.textContent = "✅ this is an official melonsoda URL";
  } else {
    popup.className = "unofficial";
    text.textContent = "⚠️ this is either NOT an official melonsoda URL or one of the singlefiles";
  }

  // === SHOW ===
  setTimeout(() => popup.classList.add("show"), 10);

  // === CLOSE ===
  function closePopup() {
    popup.classList.remove("show");
    popup.classList.add("hide");
    setTimeout(() => {
      popup.remove();
      style.remove();
    }, 400);
  }

  button.onclick = closePopup;

  // auto close
  setTimeout(closePopup, 5000);
})();
