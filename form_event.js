// Forms Event (Submit Form)

// let form = document.querySelector(".sign-up-form");
// // let email = document.querySelector("#email");
// // let password = document.querySelector("#password");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     // console.log(email.value, password.value);
//     // console.log(form.email.value, form.password.value);
//     console.log(form.userEmail.value, form.userPassword.value);
// });





// REGULAR EXPRESSION (Regex)
// It is a pattern of characters used to do pattern matching
// Or we can say for "Data-Validation"

// Implementation of password validation

// Length atleast = 8
// At least contain one uppercase letter
// At least contain one lowercase letter
// At least contain one digit 0 to 9

let form = document.querySelector(".sign-up-form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]),{8,}$"

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let passwordValue = password.value;
    console.log(passwordValue);
    let result = passwordValue.match(passwordPattern);
    if(result == true) {
        console.log("Your Password is Strong");
    } else {
        console.log("Try Again");
    }
});