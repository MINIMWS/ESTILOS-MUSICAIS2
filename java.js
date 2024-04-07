document.addEventListener("DOMContentLoaded", function() {
    const playlist = document.getElementById("playlist");
    const audioPlayer = document.getElementById("audioPlayer");

    // Adiciona evento de clique a cada item da lista de músicas
    playlist.addEventListener("click", function(event) {
        const target = event.target;
        if (target.tagName.toLowerCase() === "li") {
            const audioSource = target.getAttribute("data-src");
            if (audioSource) {
                audioPlayer.src = audioSource;
                audioPlayer.play();
            }
        }
    });

    // Evento para tocar a próxima música quando a atual terminar
    audioPlayer.addEventListener("ended", function() {
        const nextSong = playlist.querySelector("li.active + li");
        if (nextSong) {
            audioPlayer.src = nextSong.getAttribute("data-src");
            nextSong.classList.add("active");
            audioPlayer.play();
        }
    });
});
