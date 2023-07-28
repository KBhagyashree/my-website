
const timerInputs = document.getElementsByTagName("input");
const startStopBtn = document.getElementById("start-stop");
const resetBtn = document.getElementById("reset");
const thours = document.getElementById("hours");
const tmins = document.getElementById("mins");
const tsecs = document.getElementById("secs");
let hours = 0;
let mins = 0;
let secs = 0;
let intervalId = 0;
let timeoutId = 0;
let timerStartFlag = 1;
let totalTimeMSecs = 0;
let alarm = new Audio("IphoneRadarSound.mp3");
initTimer();

function initTimer(){
    for (input of timerInputs){
        input.value = "00";
        input.readOnly = false;
        input.addEventListener("change", (e)=>{
            let min = parseInt(e.target.min);
            let max = parseInt(e.target.max);
            let value = parseInt(e.target.value);
            if (isNaN(value) || value < min){
                e.target.value = e.target.min;
                value = min;
            }                
            else if (value > max){
                e.target.value = e.target.max;
                value = max;
            }                    
            else if (value >= 0 && value <=9)
                e.target.value = "0" + value; 
            else
                e.target.value = value;     
            if (e.target.id == "hours")
                hours = value;
            else if(e.target.id == "mins")
                mins = value;
            else if(e.target.id == "secs")
                secs = value;
        });
    }
}

function reset() { 
    for (input of timerInputs){
        input.readOnly = false;
        input.value = "00";
    }
    hours = 0;
    mins = 0;
    secs = 0;
    timerStartFlag = 1;
    startStopBtn.innerText = "Start";
    if (intervalId)
        clearInterval(intervalId);
    if (timeoutId)
        clearTimeout(timeoutId);
}

resetBtn.addEventListener("click", (e)=>{
    reset();
});

startStopBtn.addEventListener("click", (e) => {
    thours.readOnly = true;
    tmins.readOnly = true;
    tsecs.readOnly = true;
    totalTimeMSecs = (hours * 3600 + mins * 60 + secs) * 1000;

    if(totalTimeMSecs){
        // timer 'START' 
        if (timerStartFlag) {
            timerStartFlag = 0;
            e.target.innerText = "Stop";

            // countdown every 1 sec
            intervalId = setInterval(() => {
                // countdown secs, mins, hours
                if(secs > 0)
                    secs--;
                else if(secs == 0 && mins > 0){
                    mins--;
                    secs = 59;
                }
                else if(mins == 0 && hours > 0){
                    hours--;
                    mins = 59;
                    secs = 59;
                }
                // timer countdown display
                if (secs >= 0 && secs <=9)
                    tsecs.value = "0" + secs;
                else
                    tsecs.value = secs;

                if (mins >= 0 && mins <=9)
                    tmins.value = "0" + mins;
                else
                    tmins.value = mins;

                if (hours >= 0 && hours <=9)
                    thours.value = "0" + hours;
                else
                    thours.value = hours;
                
            }, 1000);

            // Stop 1 sec countdown after total time is out
            timeoutId = setTimeout(() => {
                // timer COMPLETE
                alarm.play();
                reset();            
            }, totalTimeMSecs);
        }
        // timer 'STOP'
        else{
            timerStartFlag = 1;
            startStopBtn.innerText = "Start";
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        }
    }   
});