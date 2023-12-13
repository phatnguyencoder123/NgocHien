const music=document.querySelector('#audio');
const btnplay=document.querySelector('.btn-play');

btnplay.addEventListener('click',()=>{
    if(btnplay.className.includes('pause')){
        music.play();
    }
    else{
        music.pause();
    }
    btnplay.classList.toggle('pause');
});

music.addEventListener('timeupdate', () => {
    if (music.currentTime === music.duration) {
        btnplay.classList.remove('pause');
    }
});