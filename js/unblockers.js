const unblockersPage = {
    id: "unblock",
    title: "unblockers",
    html: `
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
    const end = "?autoplay=1&rel=0&modestbranding=1"; // fullscreen allowed

    function log(text, type) {
        type = type || "INFO";
        const line = document.createElement("div");
        line.textContent = "[ " + type + " ] " + text;
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

        const iframe = document.createElement("iframe");
        iframe.src = base + id + end;
        iframe.allow = "fullscreen; autoplay; encrypted-media; picture-in-picture";
        iframe.allowFullscreen = true;

        videos.prepend(iframe);
        log("Playback started", "SUCCESS");

        // ✅ Trigger fullscreen immediately (user gesture)
        try {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
                log("Fullscreen activated!", "FULLSCREEN");
            } else {
                log("Fullscreen not supported by browser", "ERROR");
            }
        } catch (err) {
            log("Fullscreen denied: " + err.message, "ERROR");
        }
    }

    function runCommand(cmd) {
        log("> " + cmd, "CMD");

        const parts = cmd.split(" ");
        const command = parts[0];
        const arg = parts[1];

        if (command === "help") {
            log("Commands:");
            log("load <url>  - load a YouTube video and go fullscreen");
            log("clear       - clear terminal");
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
            const val = input.value.trim();
            if (val) runCommand(val);
            input.value = "";
        }
    });

    log("viewer-cli initialized", "BOOT");
    log("type 'help' for commands", "BOOT");
})();
</script>
`
};
