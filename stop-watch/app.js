const timer = document.querySelector("#timer")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resetBtn = document.querySelector("#resetBtn")

let starttime = 0;
let elapsedtime = 0;
let currenttime = 0;
let secs = 0;
let mins = 0;
let hours = 0;
let paused=true;

// console.log(Date.now());
startBtn.addEventListener("click", () => {
    if(paused){
        paused =false
        // Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
        starttime = Date.now() - elapsedtime; 
        // console.log(Date.now(), starttime);
        intervalId = setInterval(updatetime,1000);
    }
})
pauseBtn.addEventListener("click", () => {
    paused = false;
    clearInterval(intervalId)
})
resetBtn.addEventListener("click", () => {

    paused=true;
    clearInterval(intervalId)
    starttime = 0;
    elapsedtime = 0;
    currenttime = 0;
    secs = 0;
    mins = 0;
    hours = 0;

    timer.textContent = "00:00:00"
})

function updatetime() {
    elapsedtime = Date.now() - starttime
    // console.log("elapse",elapsedtime)

    secs = Math.floor((elapsedtime /1000) %60);
    mins = Math.floor((elapsedtime /(1000 *60)) %60);
    hours = Math.floor((elapsedtime /(1000 *60 *60)) %60);

    secs = pad(secs)
    mins = pad(mins)
    hours = pad(hours)

    function pad(a){
        return ("0"+a).length > 2 ? a : "0"+a;
    }

    timer.textContent = `${hours}:${mins}:${secs}`
}
