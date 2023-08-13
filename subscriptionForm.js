let form = document.getElementById("subscriptionform");
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let errMsg = document.getElementById("err-msg");

let validNameExp = /^[A-Za-z]+$/;
let validEmailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let defaultErrMsg = "*All fields required";
let nameErrMsg = "!First/Last Name Invalid. Make sure no spaces or special characters"
let emailErrMsg = "!Email Invalid. Required format: username@example.com "
let mobErrMsg = "!Mobile Invalid. Please enter valid 10 digit mobile number."

let red = "red";
let green = "rgb(24, 192, 24)";
let black = "black";
let grey = "grey";

let validFName = false;
let validLName = false;
let validEmail = false;
let validMobile = false;

let setInputOutlineColor = (event, color) =>{
    event.target.style.outlineColor = color;
}
let showErrMsg = (msg, textColor) => {
    errMsg.style.color = textColor;
    errMsg.innerText = msg;
};

firstName.addEventListener("input", (e) => {
    let fname = e.target.value;    
    if(fname == ""){ 
        setInputOutlineColor(e, black);
        showErrMsg(defaultErrMsg, grey);
        validFName = false;
    }
    else if(!validNameExp.test(fname)){
        setInputOutlineColor(e, red);
        showErrMsg(nameErrMsg, red);
        validFName = false;
    }
    else{        
        setInputOutlineColor(e, green);
        showErrMsg(defaultErrMsg, grey);
        validFName = true;
    }
});

lastName.addEventListener("input", (e) => {
    let lname = e.target.value;    
    if(lname == ""){ 
        setInputOutlineColor(e, black);
        showErrMsg(defaultErrMsg, grey);
        validLName = false;
    }
    else if(!validNameExp.test(lname)){
        setInputOutlineColor(e, red);
        showErrMsg(nameErrMsg, red);
        validLName = false;
    }
    else{        
        setInputOutlineColor(e, green);
        showErrMsg(defaultErrMsg, grey);
        validLName = true;
    }
});

email.addEventListener("input", (e) => {
    let email = e.target.value;    
    if(email == ""){ 
        setInputOutlineColor(e, black);
        showErrMsg(defaultErrMsg, grey);
        validEmail = false;
    }
    else if(!validEmailExp.test(email)){
        setInputOutlineColor(e, red);
        showErrMsg(emailErrMsg, red);
        validEmail = false;
    }
    else{        
        setInputOutlineColor(e, green);
        showErrMsg(defaultErrMsg, grey);
        validEmail = true;
    }
});

mobile.addEventListener("input", (e) => {
    let mobile = e.target.value;    
    if(mobile == ""){ 
        setInputOutlineColor(e, black);
        showErrMsg(defaultErrMsg, grey);
        validMobile = false;
    }
    else if(mobile < 1000000000 || mobile > 9999999999){
        setInputOutlineColor(e, red);
        showErrMsg(mobErrMsg, red);
        validMobile = false;
    }
    else{        
        setInputOutlineColor(e, green);
        showErrMsg(defaultErrMsg, grey);
        validMobile = true;
    }
});

form.addEventListener("submit", function(e){
    e.preventDefault();    
    if(firstName.value == "" || lastName.value == "" || email.value == "" || mobile.value == "")
        showErrMsg(defaultErrMsg, red);
    else if(!validFName || !validLName)
        showErrMsg(nameErrMsg, red);
    else if(!validMobile)
        showErrMsg(mobErrMsg, red);
    else if(!validEmail)
        showErrMsg(emailErrMsg, red);
    else{
        console.log("reched here")
        alert("Subscription Complete.Thank you!");
        firstName.value = "";
        lastName.value = "";
        mobile.value = "";
        email.value = "";
        showErrMsg(defaultErrMsg, grey);
    }        
  });