console.log("Javascript Calculator Made by Bhagyashree Khairnar");

let expr = document.getElementById("expr");

// get access to all the buttons.
// buttons is an array of objects
// Each element is an object
// let calcButtons = document.getElementsByTagName("button");
let calcButtons = document.getElementsByTagName("button");
let button = 0;
// let isExprEmpty = true;
let currExprValue = "";
let buttonText = 0;
let evalResult;
let element = 0;
let toggleSwitch = document.querySelector("input[id=theme-selector]");

for (button of calcButtons){
  button.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "C"){
      currExprValue = "";
    }
    else if (buttonText == "x"){
      currExprValue = currExprValue + "*";
    }
    else if (buttonText == "="){
      try {
        if (currExprValue.match(/(\/\/)|(\*\*)/)){ // || '/^\*\*$/'.test(currExprValue)){
          throw Error("Invalid Expresseion");
        }
        else {
          evalResult = eval(currExprValue);
          currExprValue = evalResult;
        }
      }
      catch{
        alert("ERROR: INVALID EXPRESSION.\nPlease Enter a Valid Expression");
        currExprValue = "";
      }      
    }
    else {      
      currExprValue = currExprValue + buttonText ;    
    }
    expr.value = currExprValue;    
  });
}


toggleSwitch.addEventListener("change", (e) => {
  if (e.target.checked == true){
    element = document.querySelector(".calc-body");
    element.style.backgroundColor = '#FCF8F6';
    element = document.querySelector(".calc-base");
    element.style.backgroundColor = 'rgb(219, 216, 216)';
    expr.style.backgroundColor = '#FCF8F6';
    expr.style.color = 'black';
    element = document.querySelector('button');
    for (button of calcButtons){
      if (button.innerText == '=')
        continue;
      else if (button.className == "oprnd" || button.className == "dot-optr"){
        button.style.backgroundColor = '#FCF8F6';
        button.style.color = '#54086B';
      }
      else{
        button.style.backgroundColor = '#FCF8F6';
      }     
    }      
  }
  else {
    element = document.querySelector(".calc-body");
    element.style.backgroundColor = 'black';
    element = document.querySelector(".calc-base");
    element.style.backgroundColor = '#050833';
    expr.style.backgroundColor = 'rgba(52, 73, 94, 0.5)';
    expr.style.color = '#ecf0f1';
    element = document.querySelector('button');
    for (button of calcButtons){
      if (button.innerText == '=')
        continue;
      else if (button.className == "oprnd" || button.className == "dot-optr"){
        button.style.backgroundColor = '#54086B';
        button.style.color = 'white';
      }
      else{
        button.style.backgroundColor = '#54086B';
      }     
    }

  }
});
