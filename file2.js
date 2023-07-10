// Hoisting

// console.log(this);
// console.log(window);
// console.log(myFunction);
// console.log(fullName);

// function myFunction() {
//     console.log("This is my function");
// }

// var firstName = "Himanshu";
// var lastName = "Khond";
// var fullName = firstName + " " + lastName;
// console.log(fullName);


// console.log(myFunction);
// var myFunction = function() {
//     console.log("This is my function");
// }
// console.log(myFunction);

// Uncaught ReferenceError: 
// Cannot access 'firstName' before initialization
// let and const are also hoisted
// console.log(firstName);
// let firstName = "Himanshu";
// console.log(firstName);


// function execution context

// let foo = "foo";
// console.log(foo);
// function getFullName(firstName, lastName) {
//     console.log(arguments);
//     let myVar = "var inside func";
//     console.log(myVar);
//     const fullName = firstName + " " + lastName;
//     return fullName;
// }

// const personName = getFullName("Himanshu", "Khond");
// console.log(personName);


// lexical environment, scope chain

// const lastName = "Khond";
// const printName = () => {
//     const firstName = "Himanshu";
//     console.log(firstName);
//     console.log(lastName);
// }
// printName();





// Closures
// closure : 30-40%
// analyse : 70-80%
// real example : 100%

// Function can return function

// const outerFunction = () => {
//     const innerFunction = () => {
//         console.log("Hello World!");
//     }
//     return innerFunction;
// }
// const ans = outerFunction();
// // console.log(ans);
// ans();

// const printFullName= (firstName, lastName) => {
//     const printName = () => {
//         console.log(firstName, lastName);
//     }
//     return printName;
// }
// const ans = printFullName("Himanshu", "Khond");
// // console.log(ans);
// ans();

// const hello = (x) => {
//     const a = "varA";
//     const b = "varB";
//     return function() {
//         console.log(a,b,x);
//     }
// }
// const ans = hello("args");
// ans();

// const myFunction = (power) => {
//     return function(number) {
//         return number**power;
//     }
// }
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);

const func = () => {
    let counter = 0;
    return () => {
        if(counter < 1) {
            console.log("Hi, you called me");
            counter++;
        } else {
            console.log("Already called");
        }
    }
}

const myFunc = func();
// myFunc();
// myFunc();
