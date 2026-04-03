const unblockersPage = {
    id: "unblockers",
    title: "unblockers",
    html: `
      <h1>unblockers</h1>

      <a href="#" onclick="(function(){

        // ✅ raw HTML instead of base64
        var html = \`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>viewer-cli</title>
<style>
body {
  margin:0;
  background:#000;
  color:#00ff88;
  font-family:monospace;
}
#terminal {
  padding:15px;
  height:60vh;
  overflow-y:auto;
  white-space:pre-wrap;
}
#input-line {
  display:flex;
  padding:10px;
  border-top:1px solid #003322;
}
#cmd {
  flex:1;
  background:black;
  border:none;
  color:#00ff88;
  outline:none;
  font-family:monospace;
}
#videos { padding:10px; }
iframe {
  width:100%;
  height:300px;
  border:none;
  margin-top:10px;
}
</style>
</head>
<body>

<div id="terminal"></div>

<div id="input-line">
  <div>></div>
  <input id="cmd" autocomplete="off">
</div>

<div id="videos"></div>

<script>
const term = document.getElementById("terminal");
const input = document.getElementById("cmd");
const videos = document.getElementById("videos");

const base = "https://www.youtube-nocookie.com/embed/";
const end = "?rel=0&modestbranding=1&origin=" + encodeURIComponent(location.origin);

function log(text,type="INFO"){
  const line=document.createElement("div");
  line.textContent=\`[\${type}] \${text}\`;
  term.appendChild(line);
  term.scrollTop=term.scrollHeight;
}

function getYouTubeID(url){
  const reg=/(?:youtube\\.com\\/(?:watch\\?v=|embed\\/|shorts\\/)|youtu\\.be\\/)([a-zA-Z0-9_-]{11})/;
  const m=url.match(reg);
  return m?m[1]:null;
}

function loadVideo(url){
  log("Parsing URL...");
  const id=getYouTubeID(url);
  if(!id){ log("Invalid URL","ERROR"); return; }

  const iframe=document.createElement("iframe");
  iframe.src=base+id+end;
  videos.prepend(iframe);

  log("Playback started","SUCCESS");
}

input.addEventListener("keydown",e=>{
  if(e.key==="Enter"){
    const v=input.value.trim();
    if(v.startsWith("load ")){
      loadVideo(v.slice(5));
    }
    input.value="";
  }
});

log("viewer-cli initialized","BOOT");
<\/script>

</body>
</html>\`;

        // overlay
        var m=document.createElement('div');
        m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;justify-content:center;align-items:center;z-index:9999;';

        // iframe
        var f=document.createElement('iframe');
        f.style.cssText='width:80%;height:80%;border:none;background:#000;';
        f.src='about:blank';

        // close button
        var b=document.createElement('button');
        b.innerText='Close';
        b.style.cssText='position:absolute;top:10px;right:10px;padding:5px 10px;cursor:pointer;';
        b.onclick=function(){document.body.removeChild(m);};

        m.appendChild(b);
        m.appendChild(f);
        document.body.appendChild(m);

        // inject reliably
        (function inject(){
          try{
            var doc=f.contentDocument||f.contentWindow.document;
            if(!doc) throw 0;
            doc.open();
            doc.write(html);
            doc.close();
          }catch(e){
            setTimeout(inject,10);
          }
        })();

      })(); return false;">
        viewer-cli (no base64)
      </a>
    `
};

window.Pages = window.Pages || [];
window.Pages.push(unblockersPage);
