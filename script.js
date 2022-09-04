const music = new Audio('assets/sounds/aud_2.wav');

document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById("start").addEventListener("click", ()=>{
        
        const startScreen= document.getElementById("start");
        const content = document.getElementById("content");

        startScreen.style.opacity="0";
        startScreen.style.display="none";

        content.style.display="flex";

        startPlaying();
    })

})


function startPlaying(){
    music.play();
    music.loop =true;
    music.playbackRate = 1;
    

    document.getElementById("stop").addEventListener("click", ()=>{
        music.pause();

    })

    document.getElementById("init").addEventListener("click", ()=>{
        music.play();
    })
}