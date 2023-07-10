// DOM (Document Object Model)

// console.log(document.URL);





// Getting HTML element/s using querySelector/All
// querySelector returns "first element" that match CSS Selector
// To get all matched elements we use querySelectorAll

// Access element/s
// let resultedElement = document.querySelectorAll("p");
// console.log(resultedElement);

// resultedElement.forEach((element) => {
//     console.log(element);
// });

// Access element with class
// let resultedClassElement = document.querySelector(".champ");
// console.log(resultedClassElement);

// Access element with Id
// let resultedIdElement = document.querySelector("#coders");
// console.log(resultedIdElement);

// Get elements by tagName - forEach method doesn't work
// let tagNameElements = document.getElementsByTagName("p");
// console.log(tagNameElements);

// Get element by className - forEach method doesn't work
// let classNameElements = document.getElementsByClassName("champ");
// console.log(classNameElements);

// Get element by id - forEach method doesn't work
// let elementById = document.getElementById("coders");
// console.log(elementById);





// UPDATING AND CHANGING CONTENT


// innerText - it ignore spaces
// Retrieve and set content in Plain text

// let heading = document.querySelector("h1");
// console.log(heading.innerText);

// let content = document.querySelector(".content");
// content.innerText += "reat Coders";
// console.log(content.innerText);


// innerHTML - it does not ignore spaces
// Retrieves and set content in HTML format

// console.log(heading.innerHTML);

// content.innerHTML += "<p>Great Coders</p>";
// console.log(content.innerHTML);





// GETTING AND SETTING ATTRIBUTE OF ELEMENT
// https://www.youtube.com/watch?v=618WV8D-Yo&t=425s

// let coderDostLink = document.querySelector("a");

// Get the attribute
// console.log(coderDostLink.getAttribute("href"));

// Set the attribute
// coderDostLink.setAttribute("href", "https://www.youtube.com/watch?v=618WV8D-Yo&t=425s");
// console.log(coderDostLink.getAttribute("href"));
// coderDostLink.innerText = "Master Class of React JS";





// ADDING THE STYLE

// let heading = document.querySelector("h1");
// heading.style.color = "Red";
// heading.style.backgroundColor = "Yellow";





// ADD, REMOVE AND REPLACE CLASS OF ELEMENT

// let heading = document.querySelector("h1");

// Add the class 
// heading.classList.add("newClass");

// Remove the class
// heading.classList.remove("newClass");

// Replace the class
// heading.classList.replace("main", "newClass");
 




// PARENT, CHILDREN AND SIBLING ELEMENT

// let parentElement = document.querySelector(".content");

// All Children of Parent
// console.log(parentElement.children);

// We cannot run forEach method on HTMLCollection, 
// so first convert it into array

// console.log(Array.from(parentElement.children));

// Array.from(parentElement.children).forEach((element) => {
//     element.classList.add("coders");
// })


// Child Element

// let childElement = document.querySelector(".child2");

// Find the parent of specific child
// console.log(childElement.parentElement);

// Find next sibling of child
// console.log(childElement.nextElementSibling);

// Find previous sibling of child
// console.log(childElement.previousElementSibling);





// EVENT BASICS (CLICK EVENT)

// let eventElement = document.querySelector(".clickMe");
// console.log(eventElement);

// eventElement.addEventListener("click", () => {
//     console.log("Clicked Me");
// });

// let elements = document.querySelectorAll("li");
// // console.log(elements);

// elements.forEach((element) => {
//     element.addEventListener("click", (e) => { // e -> event
//         // console.log("Item Clicked");
//         console.log(e.target);
//         e.target.style.textDecoration = "line-through";
//     });
// });


// Create and Remove the element

// Creating

// const ul = document.querySelector("ul");
// let button = document.querySelector(".clickMe");
// let count = 0;

// button.addEventListener("click", (e) => {
//     let li = document.createElement("li");
//     li.textContent = "Something new added " + count;
//     // ul.append(li);
//     ul.prepend(li);
//     count++;
// });

// Removing

// let elements = document.querySelectorAll("li");
// elements.forEach((element) => {
//     element.addEventListener("click", (e) => {
//         e.target.remove();
//     });
// });


// Event Bubbling and Delegation

// Bubbling

// const ul = document.querySelector("ul");
// ul.addEventListener("click", (e) => {
//     console.log("Inside UL");
//     console.log(e.target);
// });

// let elements = document.querySelectorAll("li");
// elements.forEach((element) => {
//     element.addEventListener("click", () => {
//         console.log("Inside LI");
//     });
// });


// Delegation

// const ul = document.querySelector("ul");
// ul.addEventListener("click", (e) => {
//     // console.log("Inside UL");
//     if(e.target.nodeName == "LI") {
//         e.target.remove();
//     }
// });


// Copy Event

// let copyRightElement = document.querySelector(".copy");
// copyRightElement.addEventListener("copy", () => {
//     console.log("This is copyrighted content");
// });


// Mouse Move Event

// let box = document.querySelector(".box");
// box.addEventListener("mousemove", (e) => {
//     console.log(e.offsetX, e.offsetY);
// })


// const allButtons = document.querySelectorAll(".my-buttons button");

// for(let button of allButtons) {
//     button.addEventListener("click", (e) => {
//         console.log(e.currentTarget);
//     });
// }

// console.log("Script start");
// allButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         console.log(e.currentTarget.textContent);
//     });
// });
// console.log("Script end");


// Little practice with click event 
// const allButtons = document.querySelectorAll(".my-buttons");

// allButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         // console.log(e.target);
//         e.target.style.backgroundColor = "yellow";
//         e.target.style.color = "black";
//     });
// });


// Practice

// const mainButton = document.querySelector("button");
// const body = document.body;
// const currentColor = document.querySelector(".current-color");

// const randomColorGenerator = () => {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const randomColor = `rgb(${red}, ${green}, ${blue})`;

//     return randomColor;
// }

// mainButton.addEventListener("click", (e) => {
//     const randomColor = randomColorGenerator();
//     body.style.backgroundColor = randomColor;
//     currentColor.innerText = randomColor;
// });


// keypress event
const body = document.body;
body.addEventListener("keypress", (e) => {
    console.log(e.key);
});


// mouseover event
const box = document.querySelector(".box");
box.addEventListener("mouseover", () => {
    console.log("Mouseover event occurred");
});


// mouseleave event
box.addEventListener("mouseleave", () => {
    console.log("Mouseleave event occurred");
});