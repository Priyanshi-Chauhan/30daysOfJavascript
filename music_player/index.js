let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

console.log(song.classList);

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;

}
function playpause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");

    }
}

if (song.play())
{
    setInterval(() => {
        progress.value = song.currentTime;

    }, 200)
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;      // imp
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}