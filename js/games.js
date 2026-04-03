const gamesPage = {
    id: "games",
    title: "games",
    html: `
      <h1>games</h1>

      <!-- Buttons using only javascript: URLs -->
      <a href="javascript:(function(){var m=document.createElement('div');m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;justify-content:center;align-items:center;z-index:9999;';var f=document.createElement('iframe');f.style.cssText='width:80%;height:80%;border:none;';f.src='https://file.garden/ZtNXqbPCZ1cAh6MT/EaglercraftX_1.8_u53_Offline_Signed.html';var b=document.createElement('button');b.innerText='Close';b.style.cssText='position:absolute;top:10px;right:10px;padding:5px 10px;cursor:pointer;z-index:10;';b.onclick=function(){document.body.removeChild(m)};m.appendChild(b);m.appendChild(f);document.body.appendChild(m)})()">Eaglercraft</a>

      <a href="javascript:(function(){var m=document.createElement('div');m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;justify-content:center;align-items:center;z-index:9999;';var f=document.createElement('iframe');f.style.cssText='width:80%;height:80%;border:none;';f.src='https://file.garden/ZtNXqbPCZ1cAh6MT/baldi/index.html';var b=document.createElement('button');b.innerText='Close';b.style.cssText='position:absolute;top:10px;right:10px;padding:5px 10px;cursor:pointer;z-index:10;';b.onclick=function(){document.body.removeChild(m)};m.appendChild(b);m.appendChild(f);document.body.appendChild(m)})()">Baldi's Basics</a>
    `
};

window.Pages = window.Pages || [];
window.Pages.push(gamesPage);
