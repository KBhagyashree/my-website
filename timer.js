
const timerValue = document.getElementsByTagName("input");
const startStopBtn = document.getElementById("start-stop");
const resetBtn = document.getElementById("reset");
const thours = document.getElementById("hours");
const tmins = document.getElementById("mins");
const tsecs = document.getElementById("secs");
let hours = 0;
let mins = 0;
let secs = 0;
let intervalId = 0;
let timerStartFlag = 1;
let totalTimeMSecs = 0;
initTimer();

function initTimer(){
    for (input of timerValue){
        input.value = "00";
        input.readOnly = false;
        input.addEventListener("change", (e)=>{
            let min = parseInt(e.target.min);
            let max = parseInt(e.target.max);
            let value = parseInt(e.target.value);
            if (isNaN(value) || value < min)
                e.target.value = e.target.min;
            else if (value > max)
                e.target.value = e.target.max;    
            else if (value >= 0 && value <=9)
                e.target.value = "0" + value; 
            else
                e.target.value = value;     
            if (input.id == "hours")
                hours = e.target.value;
            else if(input.id == "mins")
                mins = e.target.value;
            else if(input.id == "secs")
                secs = e.target.value;
        });
    }
}

function reset() {
    for (input of timerValue){
        input.readOnly = false;
        input.value = "00";
        hours = 0;
        mins = 0;
        secs = 0;
    }
}

resetBtn.addEventListener("click", (e)=>{
    reset();
});

startStopBtn.addEventListener((e) => {
    thours.readOnly = true;
    tmins.readOnly = true;
    tsecs.readOnly = true;
    totalTimeMSecs = (hours * 3600 + mins * 60 + secs) * 1000;
    e.target.innerText = "Stop";

    if (timerStartFlag) {
        timerStartFlag = 0;
        intervalId = setInterval(() => {
            secs--;
            tsecs.value = secs;
        }, 1000);
        setTimeout(() => {
            clearInterval(intervalId);
            e.target.innerText = "Start";
            reset();
        }, totalTimeMSecs);
    }
    else{
        timerStartFlag = 1;
        clearInterval(intervalId);
    }    
});

console.log(timerValue);