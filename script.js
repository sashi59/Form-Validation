var errorName = document.getElementById("error-name")
var errorPhone = document.getElementById("error-phone")
var errorEmail = document.getElementById("error-email")
var errorMessage = document.getElementById("error-message")
var errorSubmit = document.getElementById("error-submit");


function validateName(){
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        errorName.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[a-zA-Z]+\s{1}[a-zA-Z]+$/)){
        errorName.innerHTML = "Full name is required";
        return false;
    }
    errorName.innerHTML = "<i class='ri-checkbox-circle-fill'></i>";
    return true;
}


function validatePhone(){
    var phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        errorPhone.innerHTML = "Phone no is required";
        return false;
    }
    if(phone.length >10 ){
        errorPhone.innerHTML = "Invalid Phone no";
        return false;
    }

    if(!phone.match(/^[6-9]{1}\d{9}$/)){
        errorPhone.innerHTML = "Invalid Phone no";
        return false;
    }

    errorPhone.innerHTML = "<i class='ri-checkbox-circle-fill'></i>"
    return true;

}

function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.length == 0){
        errorEmail.innerHTML = "Email is required";
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9\.\-\_]+[@][a-z]*[\.][a-z]{2,3}$/)){
        errorEmail.innerHTML = "Invalid email";
        return false;
    }

    errorEmail.innerHTML = "<i class='ri-checkbox-circle-fill'></i>"
    return true;
    
}

function validateMessage(){

    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = message.length - required;

    if(left < 0){
        errorMessage.innerHTML = -(left) + " more characters req.";
        return false;
    }

    errorMessage.innerHTML = "<i class='ri-checkbox-circle-fill'></i>";
    return true;



}

  

function submitForm(){


    if(!validateEmail() || !validateName() || !validatePhone() || !validateMessage()){
        errorSubmit.style.display = "block"
        setTimeout(function(){
        errorSubmit.style.display = "none"

        }, 3000);
        return false;
    }
    console.log("right");
    return true;
}

