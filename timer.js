console.log("hi from timer")
let timerValue = document.getElementsByTagName("input");
for (input of timerValue){
    input.value = 0;
}
console.log(timerValue);