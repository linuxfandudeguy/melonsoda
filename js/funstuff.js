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
  <a href="#" class="game-link" onclick="
  (function(){
    try {
      const b64=`PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImphIj4KPGhlYWQ+CjxtZXRhIGNoYXJzZXQ9IlVURi04Ij4KPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiPgo8dGl0bGU+44Oh44Ot44Oz55Sf5oiQQUkg8J+NiDwvdGl0bGU+CjxsaW5rIGhyZWY9Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMy4zL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiPgo8c3R5bGU+Ci8qIEdyZWVuIHBsYWlkIGJhY2tncm91bmQgKi8KYm9keSB7CiAgZm9udC1mYW1pbHk6ICdDb21pYyBTYW5zIE1TJywgJ0NoYWxrYm9hcmQgU0UnLCBzYW5zLXNlcmlmOwogIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoCiAgICA0NWRlZywKICAgICNjNGYwYTQsCiAgICAjYzRmMGE0IDIwcHgsCiAgICAjZDBmOGIwIDIwcHgsCiAgICAjZDBmOGIwIDQwcHgKICApOwogIGNvbG9yOiAjMzMzOwp9CgovKiBDb250YWluZXIgKi8KLmNvbnRhaW5lciB7CiAgbWF4LXdpZHRoOiA3MDBweDsKICBtYXJnaW46IDUwcHggYXV0bzsKICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7CiAgYm9yZGVyLXJhZGl1czogMjBweDsKICBwYWRkaW5nOiAzMHB4OwogIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMCwwLDAsMC4xKTsKICB0ZXh0LWFsaWduOiBjZW50ZXI7Cn0KCi8qIEhlYWRpbmdzICovCmgxIHsKICBmb250LXdlaWdodDogYm9sZDsKICBjb2xvcjogIzNjYjM3MTsgLyogbWVkaXVtIHNlYSBncmVlbiAqLwogIG1hcmdpbi1ib3R0b206IDIwcHg7CiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAjZmZmOwogIGZvbnQtc2l6ZTogMnJlbTsKfQoKaDMgewogIGNvbG9yOiAjNjZjZGFhOwogIG1hcmdpbi10b3A6IDIwcHg7Cn0KCi8qIElucHV0cyAmIGJ1dHRvbiAqLwppbnB1dCB7CiAgYm9yZGVyOiAycHggc29saWQgIzY2Y2RhYTsKICBib3JkZXItcmFkaXVzOiAxNXB4OwogIHBhZGRpbmc6IDEwcHg7CiAgZm9udC1zaXplOiAxcmVtOwogIGJhY2tncm91bmQ6ICNmMGZmZjA7Cn0KCmJ1dHRvbiB7CiAgYmFja2dyb3VuZDogIzY2Y2RhYTsKICBib3JkZXI6IG5vbmU7CiAgY29sb3I6IHdoaXRlOwogIGZvbnQtd2VpZ2h0OiBib2xkOwogIHBhZGRpbmc6IDEwcHggMjBweDsKICBib3JkZXItcmFkaXVzOiAxNXB4OwogIGN1cnNvcjogcG9pbnRlcjsKICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjFzOwp9CgpidXR0b246aG92ZXIgewogIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7CiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDEwMiwyMDUsMTcwLDAuNCk7Cn0KCi8qIExvYWRpbmcgdGV4dCAqLwojbG9hZGluZyB7CiAgY29sb3I6ICMzY2IzNzE7CiAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgbWFyZ2luLWJvdHRvbTogMTBweDsKfQoKLyogU3VtbWFyeSBib3ggKi8KI3N1bW1hcnkgewogIGJhY2tncm91bmQ6ICNmMGZmZjA7CiAgYm9yZGVyOiAycHggZGFzaGVkICMzY2IzNzE7CiAgcGFkZGluZzogMTVweDsKICBib3JkZXItcmFkaXVzOiAxNXB4OwogIG1pbi1oZWlnaHQ6IDEwMHB4OwogIHRleHQtYWxpZ246IGxlZnQ7CiAgZm9udC1zaXplOiAwLjk1cmVtOwp9CgovKiBDdXRlIGVtb2ppIGRlY29yYXRpb24gKi8KLmNvbnRhaW5lcjo6YmVmb3JlIHsKICBjb250ZW50OiAi8J+NiPCfjbXinKgiOwogIGRpc3BsYXk6IGJsb2NrOwogIGZvbnQtc2l6ZTogMnJlbTsKICBtYXJnaW4tYm90dG9tOiAxMHB4Owp9Cjwvc3R5bGU+CjwvaGVhZD4KPGJvZHk+Cgo8ZGl2IGNsYXNzPSJjb250YWluZXIiPgogIDxoMT7jg6Hjg63jg7PnlJ/miJBBSTwvaDE+CiAgPGlucHV0IHR5cGU9InRleHQiIGlkPSJhcnRpY2xlSW5wdXQiIHBsYWNlaG9sZGVyPSJFbnRlciBXaWtpcGVkaWEgYXJ0aWNsZSB0aXRsZS4uLiIgLz4KICA8YnV0dG9uIGlkPSJzdW1tYXJpemVCdG4iPlN1bW1hcml6ZTwvYnV0dG9uPgogIDxkaXYgaWQ9ImxvYWRpbmciPkxvYWRpbmcgbW9kZWwuLi48L2Rpdj4KICA8aDM+U3VtbWFyeTo8L2gzPgogIDxkaXYgaWQ9InN1bW1hcnkiPjwvZGl2Pgo8L2Rpdj4KCjxzY3JpcHQgdHlwZT0ibW9kdWxlIj4KaW1wb3J0IHsgcGlwZWxpbmUgfSBmcm9tICJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0BodWdnaW5nZmFjZS90cmFuc2Zvcm1lcnNAMy44LjEvZGlzdC90cmFuc2Zvcm1lcnMubWluLmpzIjsKCmNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgibG9hZGluZyIpOwpjb25zdCBzdW1tYXJpemVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgic3VtbWFyaXplQnRuIik7CmNvbnN0IGFydGljbGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJhcnRpY2xlSW5wdXQiKTsKY29uc3Qgc3VtbWFyeURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJzdW1tYXJ5Iik7Cgpsb2FkaW5nLmlubmVyVGV4dCA9ICJMb2FkaW5nIHN1bW1hcml6YXRpb24gbW9kZWwuLi4iOwpjb25zdCBzdW1tYXJpemVyID0gYXdhaXQgcGlwZWxpbmUoJ3N1bW1hcml6YXRpb24nLCAnb25ueC1jb21tdW5pdHkvdGV4dF9zdW1tYXJpemF0aW9uLU9OTlgnKTsKbG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gIm5vbmUiOwoKYXN5bmMgZnVuY3Rpb24gZmV0Y2hXaWtpcGVkaWFBcnRpY2xlKHRpdGxlKSB7CiAgY29uc3QgdXJsID0gYGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93L2FwaS5waHA/YWN0aW9uPXBhcnNlJnBhZ2U9JHtlbmNvZGVVUklDb21wb25lbnQodGl0bGUpfSZmb3JtYXQ9anNvbiZvcmlnaW49KmA7CiAgdHJ5IHsKICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7CiAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCJGYWlsZWQgdG8gZmV0Y2ggYXJ0aWNsZSIpOwogICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7CiAgICBjb25zdCBodG1sID0gZGF0YS5wYXJzZT8udGV4dD8uWyIqIl0gfHwgJyc7CiAgICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgICB0ZW1wRGl2LmlubmVySFRNTCA9IGh0bWw7CiAgICB0ZW1wRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCwgc3R5bGUsIHN1cCwgdGFibGUsIC5tdy1lZGl0c2VjdGlvbicpLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpOwogICAgbGV0IHRleHQgPSB0ZW1wRGl2LmlubmVyVGV4dCB8fCB0ZW1wRGl2LnRleHRDb250ZW50IHx8ICcnOwogICAgY29uc3QgcGF0dGVybnNUb1JlbW92ZSA9IFsKICAgICAgL1xbXGQrXF0vZywKICAgICAgL1dpdGhvdXQgcHJvcGVyIHJlbmRlcmluZyBzdXBwb3J0LCB5b3UgbWF5IHNlZS4qP1wuL2dpLCAKICAgICAgL1RoaXMgYXJ0aWNsZSBuZWVkcyBhZGRpdGlvbmFsIGNpdGF0aW9ucy4qP1wuL2dpLAogICAgICAvU2VlIGFsc29bXHNcU10qJC9naSwKICAgICAgL0V4dGVybmFsIGxpbmtzW1xzXFNdKiQvZ2ksCiAgICAgIC9SZWZlcmVuY2VzW1xzXFNdKiQvZ2ksCiAgICAgIC9GdXJ0aGVyIHJlYWRpbmdbXHNcU10qJC9naQogICAgXTsKICAgIHBhdHRlcm5zVG9SZW1vdmUuZm9yRWFjaChwYXR0ZXJuID0+IHRleHQgPSB0ZXh0LnJlcGxhY2UocGF0dGVybiwgJycpKTsKICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xzKy9nLCAnICcpLnRyaW0oKTsKICAgIHJldHVybiB0ZXh0OwogIH0gY2F0Y2ggKGVycikgewogICAgY29uc29sZS5lcnJvcihlcnIpOwogICAgcmV0dXJuICcnOwogIH0KfQoKc3VtbWFyaXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgYXN5bmMgKCkgPT4gewogIGNvbnN0IHRpdGxlID0gYXJ0aWNsZUlucHV0LnZhbHVlLnRyaW0oKTsKICBpZiAoIXRpdGxlKSByZXR1cm47CgogIHN1bW1hcnlEaXYuaW5uZXJUZXh0ID0gIkZldGNoaW5nIGFydGljbGUuLi4iOwogIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmZXRjaFdpa2lwZWRpYUFydGljbGUodGl0bGUpOwoKICBpZiAoIWNvbnRlbnQpIHsKICAgIHN1bW1hcnlEaXYuaW5uZXJUZXh0ID0gIkNvdWxkIG5vdCBmZXRjaCBhcnRpY2xlIG9yIGl0IGlzIGVtcHR5LiI7CiAgICByZXR1cm47CiAgfQoKICBzdW1tYXJ5RGl2LmlubmVyVGV4dCA9ICJTdW1tYXJpemluZy4uLiI7CiAgdHJ5IHsKICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1bW1hcml6ZXIoY29udGVudC5zbGljZSgwLCAzMDAwKSwgeyBtYXhfbGVuZ3RoOiAxNTAsIG1pbl9sZW5ndGg6IDUwIH0pOwogICAgc3VtbWFyeURpdi5pbm5lclRleHQgPSByZXN1bHRbMF0uc3VtbWFyeV90ZXh0LnJlcGxhY2UoL1xuL2csICcgJykudHJpbSgpOwogIH0gY2F0Y2ggKGVycikgewogICAgc3VtbWFyeURpdi5pbm5lclRleHQgPSAiRXJyb3Igc3VtbWFyaXppbmc6ICIgKyBlcnIubWVzc2FnZTsKICB9Cn0pOwo8L3NjcmlwdD4KCjxzY3JpcHQgc3JjPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjMuMy9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzIj48L3NjcmlwdD4KPC9ib2R5Pgo8L2h0bWw+`;
      const blob = new Blob([atob(b64)], {type:'text/html'});
      const url = URL.createObjectURL(blob);
      launchGame(url);
      setTimeout(()=>URL.revokeObjectURL(url), 10000);
    } catch(e){ console.error(e); }
  })();
  return false;
">
MelonAI for class
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
