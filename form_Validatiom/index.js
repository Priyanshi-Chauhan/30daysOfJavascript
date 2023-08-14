
let name_error = document.getElementById("n");
let phone_error = document.getElementById("p");
let email_error = document.getElementById("e");
let message_error = document.getElementById("m");
let submit_error = document.getElementById("s");

function validateName() {
    let name = document.getElementById("name").value;
    if (name.length == 0) {
        name_error.innerHTML = "Write name here";
        return false;
    }
    if (!name.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*$/)) {
        name_error.innerHTML = "Enter full name";
        return false;
    }  
    name_error.innerHTML = '<i class="fa fa-check-circle"></i>'; 
    return true;
}

function validateEmail() {
    let email = document.getElementById("email").value;
    if (email.length == 0) {
        email_error.innerHTML = "Write email here";        
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email_error.innerHTML = "enter valid email";
    return false;
}
    email_error.innerHTML = '<i class="fa fa-check-circle"></i>';
return true;
    
}

function validatePhone() {
    let phone = document.getElementById("phone").value;
    if (phone.length == 0) {
        phone_error.innerHTML = "Please enter phone no."
        return false;
    }
    if (phone.length !== 10) {
        phone_error.innerHTML = "10 digits are required";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phone_error.innerHTML = "Only digits are required";
        return false;
     }
    phone_error.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validateMessage() {
    let message = document.getElementById("message").value;
    let required = 30;
    let left = required - message.length;

  if (left >  0) {
    message_error.innerHTML =  left  + " more characters required";
    return false;
  }
  message_error.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}


function validateForm() {
    if (!validateEmail() || !validateName() || !validateMessage() || !validatePhone()) {
        submit_error.innerHTML = "Please fix all errors to submit";
        return false;
        
    }
}