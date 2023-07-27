
const timerValue = document.getElementsByTagName("input");
const startStopBtn = document.getElementById("start-stop");
const resetBtn = document.getElementById("reset");
initTimer();


function initTimer(){
    for (input of timerValue){
        input.value = "00";
        input.readOnly = false;
        input.addEventListener("change", (e)=>{
            let min = parseInt(e.target.min);
            let max = parseInt(e.target.max);
            let value = parseInt(e.target.value);
            if (value == 0 || value < min)
                e.target.value = "00";
            else if (value > max)
                e.target.value = max;        
            console.log(e);        
        });
    }
}

resetBtn.addEventListener("click", (e)=>{
    for (input of timerValue){
        input.readOnly = false;
        input.value = "00";
    }
});

console.log(timerValue);