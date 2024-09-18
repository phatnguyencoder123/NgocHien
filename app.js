const music = document.querySelector('#audio');
const btnplay = document.querySelector('.container');
let isMusicPlaying = false;

btnplay.addEventListener('click', () => {
    if (!isMusicPlaying) {
        music.play();
        isMusicPlaying = true;
    } else {
        music.pause();
        isMusicPlaying = false;
    }

    btnplay.classList.toggle('pause');
});