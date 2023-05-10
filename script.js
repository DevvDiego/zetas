const music = new Audio('assets/sounds/aud_2.wav');

document.addEventListener("DOMContentLoaded", ()=>{

    const scr1 = document.getElementById("screen1");
    const scr2 = document.getElementById("screen2");
    const timer = document.getElementById("timer");


    scr1.addEventListener("click",e=>{
        scr1.style.display="none";
        scr2.style.display="block";

        startPlaying();
        startTimer(timer);

    })


})


function startPlaying(){
    music.play();
    music.loop =true;
    music.playbackRate = 1;
    

}

function startTimer(display) {
    let timer = 0, hours, minutes, seconds;
    setInterval(function () {
      hours = parseInt(timer / 3600, 10);
      minutes = parseInt((timer % 3600) / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = hours + ":" + minutes + ":" + seconds;
  
      timer++;
    }, 1000);
}
  
  