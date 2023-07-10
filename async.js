// Synchronous programming
// JavaScript is synchronous programming and single threaded


// setTimeout

// console.log("Script start");
// setTimeout(() => {
//     console.log("Inside setTimeout");
// }, 1000);
// console.log("Script end");

// console.log("Script start");
// const id = setTimeout(() => {
//     console.log("Inside setTimeout");
// }, 0);
// for(let i = 0; i < 100; i++) {
//     console.log(".....");
// }
// console.log("setTimeout id is ", id);
// console.log("Clearing timeout");
// clearTimeout(id);
// console.log("Script end");





// setInterval

// console.log("Script start");
// setInterval(() => {
//     console.log(Math.random());
// }, 1000);
// console.log("Script end");

// const body = document.body;
// const button = document.querySelector("button");
// const intervalId = setInterval(() => {
//     const red = Math.floor(Math.random() * 126);
//     const green = Math.floor(Math.random() * 126);
//     const blue = Math.floor(Math.random() * 126);
//     const rgb = `rgb(${red},${green},${blue})`;
//     body.style.background = rgb;
// }, 1000);

// button.addEventListener("click", () => {
//     clearInterval(intervalId);
//     button.textContent = body.style.background;
// });





// Understand callback

// const myFunc = (call) => {
//     console.log("Function is doing task 1");
//     call();
// }
// const myFunc2 = () => {
//     console.log("Function is doing task 2");
// }
// myFunc(myFunc2);

// const getTwoNumbersAndAdd = (number1, number2, callback) => {
//     if(typeof number1 === "number" && typeof number2 === "number") {
//         callback(number1, number2);
//     } else {
//         console.log("Wrong Datatype");
//     }
// }
// const addTwoNumbers = (num1, num2) => {
//     console.log(num1 + num2);
// }
// getTwoNumbersAndAdd(4, 5, addTwoNumbers);

// const getTwoNumbersAndAdd = (number1, number2, onSuccess, onFailure) => {
//     if(typeof number1 === "number" && typeof number2 === "number") {
//         onSuccess(number1, number2);
//     } else {
//         onFailure();
//     }
// }
// // const addTwoNumbers = (num1, num2) => {
// //     console.log(num1 + num2);
// // }
// getTwoNumbersAndAdd(4, 5, (num1, num2) =>{
//     console.log(num1 + num2);
// }, () => {
//     console.log("Wrong Datatype");
//     console.log("Please pass numbers only");
// });

// callbacks, callback hell, pyramid of doom

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// callback hell or pyramid of doom
// setTimeout(() => {
//     heading1.textContent = "One";
//     heading1.style.color = "voilet";
//     setTimeout(() => {
//         heading2.textContent = "Two";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.textContent = "Three";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "Four";
//                 heading4.style.color = "pink";
//                 setTimeout(() => {
//                     heading5.textContent = "Five";
//                     heading5.style.color = "green";
//                     setTimeout(() => {
//                         heading6.textContent = "Six";
//                         heading6.style.color = "blue";
//                         setTimeout(() => {
//                             heading7.textContent = "Seven";
//                             heading7.style.color = "brown";
//                         }, 1000);
//                     }, 3000);
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }, 1000);

// const changeText = (element, text, color, time, onSuccessCallback, onFailureCallback) => {
//     setTimeout(() => {
//         if(element) {
//             element.textContent = text;
//             element.style.color = color;
//             if(onSuccessCallback) {
//                 onSuccessCallback();
//             }
//         } else {
//             if(onFailureCallback) {
//                 onFailureCallback();
//             }
//         }
//     }, time);
// };

// callback hell or pyramid of doom
// changeText(heading1, "One", "voilet", 1000, () => {
//     changeText(heading2, "Two", "purple", 2000, () => {
//         changeText(heading3, "Three", "red", 2000, () => {
//             changeText(heading4, "Four", "pink", 1000, () => {
//                 changeText(heading5, "Five", "green", 2000, () => {
//                     changeText(heading6, "Six", "blue", 3000, () => {
//                         changeText(heading7, "Seven", "browm", 1000, () => {
                            
//                         }, () => {console.log("Heading7 does not exist");});
//                     }, () => {console.log("Heading6 does not exist");});
//                 }, () => {console.log("Heading5 does not exist");});
//             }, () => {console.log("Heading4 does not exist");});
//         }, () => {console.log("Heading3 does not exist");});
//     }, () => {console.log("Heading2 does not exist");});
// }, () => {console.log("Heading1 does not exist");});





// Promise

// console.log("Script start")
// const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

// produce
// const friedRicePromise = new Promise((resolve, reject) => {
//     if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
//         // resolve("Fried Rice");
//         resolve({value: "fried rice"});
//     } else {
//         reject("Couldn't do it");
//         // reject(new Error("Something missing from bucket"));
//     }
// });

// consume
// friedRicePromise.then(
//     // When promise resolves
//     (myFriedRice) => {
//     console.log("Lets eat",myFriedRice);
//     }, 
//     // When promise rejects
//     (error) => {
//     console.log(error);
// });

// setTimeout(() => {
//     console.log("Hello from setTimeout 1");
// }, 0)
// friedRicePromise.then(
//     // When promise resolves
//     (myFriedRice) => {
//     console.log("Lets eat",myFriedRice);
//     }
// ).catch((error) => { // When promise rejects
//     console.log(error);
// });
// setTimeout(() => {
//     console.log("Hello from setTimeout 2");
// }, 0)
// for(let i = 0; i <= 100; i++) {
//     console.log(Math.random(), i);
// }
// console.log("Script end");


// Function returning promise

// const friedRicePromise = () => {
//     const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
//     return new Promise((resolve, reject) => {
//         if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
//             resolve("Fried Rice");
//         } else {
//             reject("Couldn't do it");
//         }
//     });
// };

// friedRicePromise()
//     .then((myFriedRice) => {
//         console.log("Lets eat",myFriedRice);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// Promise and setTimeout
// I want to resolve/reject promise after 2 seconds

// const myPromise = () => {
//     let value = false;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(value) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 2000);
//     });
// };

// myPromise()
//     .then(()=> {
//         console.log("Resolved");
//     })
//     .catch(() => {
//         console.log("Rejected");
//     });





// Promise.resolve

// const myPromise = Promise.resolve(5);

// myPromise.then((value) => { // 1 way
//     console.log(value);
// });

// Promise.resolve(5).then((value) => { // 2 way
//     console.log(value);
// });


// then() 
// then method always returns a promise


// Promise chaining

// const myPromise = () => {
//     return new Promise((resolve, reject) => {
//         resolve("foo");
//     })
// }

// myPromise()
//     .then((value) => {
//         console.log(value);
//         value += "bar";
//         return value;   // return Promise.resolve(value)
//     })
//     .then((value) => {
//         console.log(value);
//         value += "foo";
//         return value;
//     })
//     .then((value) => {
//         console.log(value);
//     });


// Callback hell solving with promise

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// const changeText = (element, text, color, time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(element) {
//                 element.textContent = text;
//                 element.style.color = color;
//                 resolve();
//             } else {
//                 reject("Element not found");
//             }
//         }, time);
//     });
// }; 

// changeText(heading1, "One", "voilet", 1000)
//     .then(() => {
//         return changeText(heading2, "Two", "purple", 2000);
//     })
//     .then(() => {
//         return changeText(heading3, "Three", "red", 2000);
//     })
//     .then(() => {
//         return changeText(heading4, "Four", "pink", 1000);
//     })
//     .then(() => {
//         return changeText(heading5, "Five", "green", 1000);
//     })
//     .then(() => {
//         return changeText(heading6, "Six", "blue", 3000);
//     })
//     .then(() => {
//         return changeText(heading7, "Seven", "brown", 1000);
//     })
//     .catch((error) => {
//         alert(error);
//     });


// BASIC THEORY

// AJAX : Asynchronous JavaScript and XML

// HTTP request
// is a set of "web development technique"
// using many web technologies on the "client-side"
// to create asynchronous web applications.

// With AJAX, web application can send and retrive
// data from a server asynchronously (in the background)
// without interfering with the display and 
// behaviour of the existing page

// We don't use data in XML format anymore.
// We use JSON now

// We have 3 most common ways to create and send request to server
// 1.) xmlHttpRequest (old way of doing)
// 2.) fetch API (new way of doing)
// 3.) axios (this is third party library)


// xmlHttpRequest

// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// console.log(xhr);

// Step 1:
// xhr.open("GET", URL);
// xhr.onreadystatechange = () => {
//     if(xhr.readyState === 4) {
//         console.log(xhr);
//         const response = xhr.response();
//         const data = JSON.parse(response);
//         console.log(typeof data);
//     }
// }

// xhr.onload = () => {
//     if(xhr.status >= 200 && xhr.status < 300) {
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//     } else { 
//         console.log("Something went wrong");
//     }
// }

// xhr.onerror = () => {
//     console.log("Network Error");
// }

// xhr.send();


// XHR using promises

// const URL = "https://jsonplaceholder.typicode.com/posts";

// const sendRequest = (method, url) => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);

//         xhr.onload = () => {
//             if(xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.response);
//             } else {
//                 reject(new Error("Something Went Wrong"));
//             }
//         }

//         xhr.onerror = () => {
//             console.log("Network Error");
//         }

//         xhr.send();
//     })
// }

// sendRequest("GET", URL)
//     .then((response) => {
//         const data = JSON.parse(response);
//         // console.log(data);
//         return data;
//     })
//     .then((data) => {
//         const id = data[3].id;
//         // console.log(id);
//         return id;
//     })
//     .then((id) => {
//         const url = `${URL}/${id}`;
//         return sendRequest("GET", url);
//     })
//     .then((newResponse) => {
//         const newData = JSON.parse(newResponse);
//         console.log(newData);
//     })
//     .catch((error) => {
//         console.log(error);
//     });





// fetch

// const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL, {
//     method: "POST",
//     body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 1,
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",
//     },
//     })
//     .then((response) => {
//         if(response.ok) {
//             return response.json();
//         } else {
//             throw new Error("Something went wrong!");
//         }
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("Inside catch");
//         console.log(error);
//     });





// async await

const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });

console.log("Script start");
const getPosts = async () => {
    const response = await fetch(URL);
    if(!response.ok) {
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;
}

// const myData = getPosts();
// console.log(myData);

getPosts()
    .then((myData) => {
        console.log(myData);
    })
    .catch((error) => {
        console.log("Inside catch");
        console.log(error);
    });

console.log("Script end");