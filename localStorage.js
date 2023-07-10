// Local Storage
// Store and retrieve data from local storage
// It is an API provided by browser to store date inside browser

// console.log(localStorage);


// Local Storage Method
// set item
// get item
// update item

// Set the item in local storage
// localStorage.setItem("Passion", "Programming");
// localStorage.setItem("Age", 21);
// console.log(localStorage);


// Get item from local storage
// console.log(localStorage.getItem("Passion"));
// console.log(localStorage.getItem("Age"));


// Update an item
// localStorage.setItem("Age", 22); // Overwrite the previous value
// localStorage.setItem("Passion", "Coding");
// console.log(localStorage);


// Remove an item
// localStorage.removeItem("Age");


// Clear
// localStorage.clear();





// How to store complex data structure like
// Array of object

// Ultimately in local storage data store in string format

// let vehicles = [
//     {company: "Honda", model: "2009"},
//     {company: "Toyota", model: "2010"}
// ];
// console.log(vehicles);

// let stringOfVehicles = JSON.stringify(vehicles);
// console.log(stringOfVehicles);

// localStorage.setItem("vehicles", stringOfVehicles);
// console.log(localStorage);


// Get stored item again in object format

// let storedData = localStorage.getItem("vehicles");
// let objectFormat = JSON.parse(storedData);
// console.log(objectFormat);