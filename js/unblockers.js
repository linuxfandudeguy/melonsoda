const unblockersPage = {
    id: "unblock",
    title: "unblockers",
    html: `
	<h1>unblockers</h1>
 <div id="viewer-cli-container">
    <div class="terminal"></div>

    <div class="input-line">
        <div class="prompt">></div>
        <input class="cmd" autocomplete="off">
    </div>

    <div class="videos"></div>
</div>

<style>
#viewer-cli-container {
    background: #000;
    color: #00ff88;
    font-family: monospace;
    display: flex;
    flex-direction: column;
    height: 100%;
}

#viewer-cli-container .terminal {
    padding: 15px;
    flex: 1;
    overflow-y: auto;
    white-space: pre-wrap;
}

#viewer-cli-container .input-line {
    display: flex;
    padding: 10px;
    border-top: 1px solid #003322;
}

#viewer-cli-container .prompt {
    margin-right: 8px;
}

#viewer-cli-container .cmd {
    flex: 1;
    background: black;
    border: none;
    color: #00ff88;
    outline: none;
    font-family: monospace;
}

#viewer-cli-container .videos {
    padding: 10px;
}

#viewer-cli-container iframe {
    width: 100%;
    height: 300px;
    border: none;
    margin-top: 10px;
}
</style>

<script>
(function () {
    const root = document.getElementById("viewer-cli-container");

    const term = root.querySelector(".terminal");
    const input = root.querySelector(".cmd");
    const videos = root.querySelector(".videos");

    const base = "https://www.youtube-nocookie.com/embed/";
    const end = "?autoplay=1&rel=0&modestbranding=1";

    function log(text, type = "INFO") {
        const line = document.createElement("div");
        line.textContent = "[ " + type + " ] " + text; // 🔧 FIXED (no template literal)
        term.appendChild(line);
        term.scrollTop = term.scrollHeight;
    }

    function getYouTubeID(url) {
        const regExp = /(?:youtube\\.com\\/(?:watch\\?v=|embed\\/|shorts\\/)|youtu\\.be\\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regExp);
        return match ? match[1] : null;
    }

    function loadVideo(url) {
        log("Parsing URL...");

        const id = getYouTubeID(url);
        if (!id) {
            log("Invalid URL", "ERROR");
            return;
        }

        log("Connecting...", "CONNECT");

        setTimeout(() => {
            const iframe = document.createElement("iframe");
            iframe.src = base + id + end;
            videos.prepend(iframe);
            log("Playback started", "SUCCESS");
        }, 500);
    }

    function runCommand(cmd) {
        log("> " + cmd, "CMD");

        const parts = cmd.split(" ");
        const command = parts[0];
        const arg = parts[1];

        if (command === "help") {
            log("load <url>");
            log("clear");
        } else if (command === "load") {
            if (!arg) {
                log("Missing URL", "ERROR");
                return;
            }
            loadVideo(arg);
        } else if (command === "clear") {
            term.innerHTML = "";
        } else {
            log("Unknown command", "ERROR");
        }
    }

    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            runCommand(input.value.trim());
            input.value = "";
        }
    });

    log("viewer-cli initialized", "BOOT");
})();
</script>
`
};

window.Pages = window.Pages || [];
window.Pages.push(unblockersPage);
