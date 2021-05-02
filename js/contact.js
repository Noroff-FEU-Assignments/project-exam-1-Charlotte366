const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

function validateForm(){
    event.preventDefault();

    if (name.value.trim().length > 4) {
        nameError.style.display = "none";
    } else {
        nameError.style.display ="block";
    }


    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display ="block";
    }

    if (subject.value.trim().length > 14) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display ="block";
    }



    console.log("Hello");
}

form.addEventListener("submit", validateForm);


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


const message = document.querySelector("textarea");
const characterCount = document.querySelector(".character-count span");
const submitButton = document.querySelector("button[type='submit']");

message.onkeyup = function () {
    console.log(event.target.value.length);

    const length = event.target.value.length;

    characterCount.innerHTML = length;

    if (length >= 26) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
};