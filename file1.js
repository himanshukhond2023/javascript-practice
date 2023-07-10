// console.log("hello world"); 

// String Indexing

// let firstName = "himanshu";
// console.log(firstName.length);
// console.log(firstName[firstName.length - 1]);





// String methods

// let firstName = "himanshukhond";
// let hobbies = "coding reading running";
// console.log(firstName.length);

// let newString = firstName.trim(); // trim method
// console.log(newString);
// console.log(newString.length);

// console.log(firstName.toUpperCase()); // toUpperCase method

// let firstName = "HIMANSHU"; 
// console.log(firstName.toLowerCase()); // toLowerCase method

// console.log(firstName.slice(0,5)); // slice method

// console.log(firstName.indexOf("m")); // indexOf method

// console.log(hobbies.lastIndexOf("running")); // lastIndexOf method

// console.log(hobbies.includes("reading")); // includes method

// console.log(hobbies.split(" "));





// typeof operator 

// let firstName = "himanshu";
// let age = 21;

// console.log(typeof age);

// Convert number to string
// age = String(age);
// console.log(typeof age);

// Convert String to Number
// let myStr = "34";
// myStr = Number(myStr)
// console.log(typeof myStr);





// String Concatenation

// let string1 = "himanshu";
// let string2 = "khond";
// let string1 = "21";
// let string2 = "07";

// let fullName = string1 + string2;
// let fullName = Number(string1) + Number(string2);

// console.log(fullName);





// Template Literals

// let fullName = `My name is ${firstName} and my age is ${age}`;
// console.log(fullName);





// if else condition

// let age = 18;
// if(age > 18) {
//     console.log("User can play valorant");
// } else {
//     console.log("User can play ludo");
// }

// let num = 14;
// if(num % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }





// Nested if else 

// Winning number 19
// 19 your guess is right
// 17 is too low
// 20 is too high

// let num = Number(prompt("Guess a number")); // Prompt takes input as a string

// if(num === 19) {
//     console.log("You guessed it right");
// } else {
//     if(num < 19) {
//         console.log("Low");
//     } else  {
//         console.log("High");
//     }
// }

// console.log(typeof num);





// if else if

// let temperature = 61;

// if(temperature < 0) {
//     console.log("Its extremely cold outside");
// } else if(temperature < 16) {
//     console.log("It is cold outside");
// } else if(temperature < 25) {
//     console.log("Weather is okay outside");
// } else if(temperature < 35) {
//     console.log("It is hot outside");
// } else if(temperature < 45) {
//     console.log("Turn on the AC");
// } else {
//     console.log("Too hot");
// }

// console.log("Hello my friend");





//  Ternary Operator

// let age = 3;
// let weight = 22;
// let drink = age >= 5 && weight >= 10 ? "Coffee" : (age <= 5 ? "Age issue" : (weight <= 10 ? "Weight issue" : "default"));
// console.log(drink);





// Switch statement

// let day = 7;

// switch(day) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thurday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid Day");
// }





// and or operator

// let firstName = "Himanshu";
// let age = 1;

// if(firstName[0] == "H" && age > 18) { // &&(AND) operator
//     console.log("Name starts with H and age is above 18");
// } else {
//     console.log("Name doesn't start with H and age is below 18");
// }

// if(firstName[0] == "H" || age > 18) { // ||(OR) operator
//     console.log("Inside if");
// } else {
//     console.log("Inside else");
// }





// While loop

// let a = 0;

// while(a < 10) {
//     console.log(a);
//     a++;
// }

// let num = 100;
// let sum = 0;

// while(num > 0) {
//     sum = sum + num;
//     num--;
// }

// console.log(sum);

// let sum = (num * (num + 1)) / 2;
// console.log(sum);





// do while loop

// let a = 10;

// do {
//     console.log(a);
//     a++;
// } while (a < 10);





// For loop

// for(let i  = 0; i < 10; i++) {
//     console.log(i);
// }

// let sum = 0;

// for(let i = 0; i <= 10; i++) {
//     sum = sum + i;
// }

// console.log(sum);





// break keyword

// for(let i = 0; i < 10; i++) {
//     if(i == 5) {
//         break;
//     } 

//     console.log(i)
// }





// continue keyword

// for(let i = 0; i < 10; i++) {
//     if(i == 5) {
//         continue;
//     } 

//     console.log(i)
// }





// Array - reference type

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1, 2, 3, 4, 5];
// let mixed = [1, 2, 3.3, "string", null, undefined];

// console.log(fruits[1]);
// console.log(numbers);
// console.log(mixed);

// let fruits = ["apple", "mango", "grapes"];
// let obj = {};   // object literal
// fruits[0] = "banana";
// console.log(fruits);
// console.log(typeof fruits);
// console.log(typeof obj);
// console.log(Array.isArray(fruits)); // To check whether it is array or not
// console.log(Array.isArray(obj));





// Array methods

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);

// push method - appends a item and returns length of an array
// console.log(fruits.push("banana")); 
// console.log(fruits);

// pop method - removes last item and returns that item
// console.log(fruits.pop());
// console.log(fruits);

// unshift method - adds item at the start
// fruits.unshift("banana");
// console.log(fruits);

// shift method - removes first item and returns that item
// fruits.shift();
// console.log(fruits);





// Primitive vs reference datatypes

// let num1 = 7;
// let num2 = num1;
// console.log("Value of num1 is", num1);
// console.log("Value of num2 is", num2);
// num1++;
// console.log("After incrementing num1");
// console.log("Value of num1 is", num1);
// console.log("Value of num2 is", num2);

// Reference types 
// Array
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("Array1", array1);
// console.log("Array2", array2);
// array1.push("item3");
// console.log("After pushing element to array1");
// console.log("Array1", array1);
// console.log("Array2", array2);





// How to clone array

// let array1 = ["item1", "item2", ["item3", "item4"]];
// let array2 = array1.slice(0);    // first way to clone array
// let array2 = [].concat(array1);     // second way to clone array
// let array2 = [...array1];   // spread operator
// let array2 = JSON.parse(JSON.stringify(array1))
// array1.push("item3");
// array2.push("item4");
// array2[2].push("item");

// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);





// How to concatenate two arrays

// let array1 = ["item1", "item2"];
// let array2 = ["item3", "item4"];
// console.log(array1.concat(array2));
// array2 = [...array1];
// console.log(array2);





// for in loop in array

// let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i in fruits) {
//     console.log(fruits[i]);
// }





// Use const for creating array

// const fruits = ["apple", "mango"];
// fruits.push("banana");
// console.log(fruits);





// while loop in array

// let fruits = ["apple", "mango", "grapes", "banana"];
// let i = 0;

// while (i < fruits.length) {
//     console.log(fruits[i]);
//     i++;
// }





// for of loop in array

// let fruits = ["apple", "mango", "grapes", "banana"];

// for(let fruit of fruits) {
//     console.log(fruit);
// }





// Array Destructuring

// const myArray = ["value1", "value2", "value3"];
// let [myvar1, myvar2] = myArray; // destructuring
// console.log("Value of myvar1:", myvar1);
// console.log("Value of myvar2:", myvar2);

// const myArray = ["value1", "value2", "value3", "value4"];
// let [myvar1, myvar2, ...myNewArray] = myArray;  // with the help of spread operator
// console.log("Value of myvar1:", myvar1);
// console.log("Value of myvar2:", myvar2);
// console.log(myNewArray);





// Objects - reference type
// Arrays are good but not sufficient for real world data
// Objects store key value 
// Objects don't have index

// How to create objects

// const person = {name: "Himanshu", age: 21};
// const person = {
//     name: "Himanshu",
//     age: 21,
//     hobbies: ["Reading", "Playing"]
// };
// console.log(typeof person);


// How to access data from objects

// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["hobbies"]);


// How to add key-value pair to objects

// person.gender = "Male";
// console.log(person);


// Difference between dot and bracket notation

// const person = {
//     name: "Himanshu",
//     age: 21,
//     "person hobbies": ["Reading", "Playing"]
// };
// console.log(person["person hobbies"]);

// const key = "email";
// person[key] = "himanshuak.a06@gmail.com";
// console.log(person);


// How to iterate object

// const person = {
//     name: "Himanshu",
//     age: 21,
//     "person hobbies": ["Reading", "Playing"]
// };

// Two ways to iterate
// for in loop
// Object.keys

// for(let key in person) {
    // console.log(key);   // keys
    // console.log(person[key]);    // values
    // console.log(key, ":", person[key]);     // key-value pair
    // console.log(`${key} : ${person[key]}`);     // key-value pair
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));

// for(i of Object.keys(person)) {
//     console.log(person[i]);
// }


// Computed properties

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// };

// console.log(obj);


// spread operator in array

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const newArray = [...array1, ...array2, 22];
// const newArray = [..."abc"];
// const newArray = [..."123456789"];
// console.log(newArray);


// spread operator in object

// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// };

// const obj2 = {
//     key1: "valueUnique",
//     key3: "value3",
//     key4: "value4"
// };

// const newObject = {...obj1, ...obj2};
// const newObject = {...obj2, ...obj1};
// console.log(newObject);


// Object destructuring

// const singer = {
//     singerName: "Arijit Singh",
//     famousSong: "Channa Mereya",
//     year: 2013,
//     songYear: 2016
// };

// let {singerName, famousSong, ...restProps} = singer;
// console.log(singerName, famousSong);
// console.log(restProps);

// let {singerName:var1, famousSong:var2} = singer;
// console.log(var1, var2);


// Objects inside array
// Very usefull in real world applications

// const users = [
//     {userId: 1, firstName: "Himanshu", gender: "Male"},
//     {userId: 2, firstName: "ABC", gender: "Female"},
//     {userId: 3, firstName: "XYZ", gender: "Male"},
// ];
// console.log(users);

// for(let user of users) {
//     console.log(user);
// }


// Nested Destructuring

// const users = [
//     {userId: 1, firstName: "Himanshu", gender: "Male"},
//     {userId: 2, firstName: "ABC", gender: "Female"},
//     {userId: 3, firstName: "XYZ", gender: "Male"},
// ];

// const [{firstName: user1Name}, user2, {gender: user3Gender}] = users;
// // console.log(firstName);
// console.log(user2);
// // console.log(gender);

// console.log(user1Name);
// console.log(user3Gender);





// Functions
// Function can be assigned to a variable  

// const isEven = (num) => {
//     if(num % 2 == 0) {
//         return true;
//     } 

//     return false;
// }

// const isEven = num => num % 2 == 0;

// console.log(isEven(4));


// Function inside function

// const app = () => {
//     const myFunc = () => {
//         console.log("Inside myFunc");
//     }

//     const addTwo = (num1, num2) => {
//         return num1 + num2;
//     }

//     console.log("Inside app");
//     myFunc();
//     console.log(addTwo(1, 2));
// }

// app()


// Lexical Scope

// const a = 22;

// const myApp = () => {
//     const a = 24;

//     const myFunc = () => {
//         const a = 20;
//         console.log("Inside myFunc", a);
//     }

//     console.log(a);
//     myFunc();
// }

// myApp();


// Block scope vs Function scope

// let and const are block scope
// var is function scope

// const firstName = "Khond";
// {
//     let firstName = "Himanshu";
//     console.log(firstName);
// }

// console.log(firstName);


// Default parameters

// const addTwo = (a, b = 8) => {
//     return a + b;
// }

// const ans = addTwo(2, 5);
// console.log(ans);


// Rest parameters

// const func = (a, b, ...c) => {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is `,c);
// }

// func(1, 2, 3, 4, 5, 6);

// const addAll = (...num) => {
//     let sum = 0;

//     for(let number of num) {
//         sum = sum + number;
//     }
    
//     return sum;
// }

// console.log(addAll(1,2,3,4,5));


// param destructuring

// const person = {
//     firstName: "Himanshu",
//     gender: "Male",
//     age: 21
// }

// const printDetails = (obj) => {
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// const printDetails = ({firstName, gender, age}) => {
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }

// printDetails(person);


// callback functions

// const myFunc2 = (name) => {
//     console.log("Inside myFunc2");
//     console.log(`My name is ${name}`);
// }

// const myFunc = (callback) => {   // Higher order function
//     console.log("Inside myFunc");
//     callback("himanshu");
// }

// myFunc(myFunc2);


// Function returning function 

// const myFunc = () => {  // Higher order function
//     const hello = () => {
//         return "Hello World";
//     }

//     return hello;
// }

// const ans = myFunc();
// console.log(ans());




// P@ssw0rd123
// Important array methods


// forEach

// const numbers = [4,2,5,8];

// const myFunc = (number, index) => {
//     console.log(`Index is ${index} and number is ${number}`);
// }

// for(let i = 0; i < numbers.length; i++) {
//     myFunc(numbers[i], i);
// }

// numbers.forEach(myFunc);

// const arr = [];
// numbers.forEach((number) => {
//     arr.push(number*2);
// });

// console.log(arr);

// const users = [
//     {firstName: "Himanshu", age: 21},
//     {firstName: "Ayaan", age: 21},
//     {firstName: "ABC", age: 22},
//     {firstName: "XYZ", age: 23},
// ];

// users.forEach((user, index) => {
//     console.log(user.firstName, index);
// });


// map method
// A function inside map method must always return
// It will give result in an new array so it does not change the original array

// const numbers = [3,4,6,1,8];

// const square = (number) => {
//     return number * number;
// }
// let squareNumber = numbers.map(square);
// console.log(squareNumber);

// const squareNumber = numbers.map((number, index) => {
//     return `Index: ${index}, ${number * number}`;
// });
// console.log(squareNumber);

// const users = [
//     {firstName: "Himanshu", age: 21},
//     {firstName: "Ayaan", age: 21},
//     {firstName: "ABC", age: 22},
//     {firstName: "XYZ", age: 23},
// ];

// const userNames = users.map((user) => {
//     return user.firstName;
// });

// console.log(userNames);


// filter method
// It will return the elements that pass a test provided by a function
// It will give result in an new array so it does not change the original array

// const numbers = [1,2,3,6,4,8];

// const isEven = (number) => {
//     return number % 2 === 0;
// }

// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);


// reduce method

// const numbers = [1,2,3,4,5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 100); 
// console.log(sum);

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000}
// ];

// const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
//     return totalPrice + currentProduct.price;
// }, 0);
// console.log(totalAmount);


// sort method
// ASCII TABLE
// char : ASCII value

// const numbers = [5,9,1200,400,3000];

// numbers.sort();
// console.log(numbers);   // [1200, 3000, 400, 5, 9]

// numbers.sort((a, b) => {
//     return a - b;
// });
// console.log(numbers);

// const products = [
//     {productId: 1, productName: "p1", price: 300}, 
//     {productId: 2, productName: "p2", price: 3000}, 
//     {productId: 3, productName: "p3", price: 200}, 
//     {productId: 4, productName: "p4", price: 8000}, 
//     {productId: 5, productName: "p5", price: 500}
// ];

// lowToHigh
// const lowToHigh = products.slice(0).sort((a,b) => {
//     return a.price - b.price;
// });
// console.log(lowToHigh);

// highToLow
// const highToLow = products.slice(0).sort((a,b) => {
//     return b.price - a.price;
// });
// console.log(highToLow);


// find method

// const myArray = ["hello", "cat", "dog", "lion"];

// const ans = myArray.find((str) => {
//     return str.length === 3;
// });
// console.log(ans);

// const users = [
//     {userId: 1, userName: "Himanshu"},
//     {userId: 2, userName: "Ayaan"},
//     {userId: 3, userName: "ABC"},
//     {userId: 4, userName: "PQR"},
//     {userId: 5, userName: "XYZ"}  
// ];

// const findUserId = users.find((user) => {
//     return user.userId === 3;
// });
// console.log(findUserId);


// every method 
// Returns true if condition matches with all elements or false

// const numbers = [2,4,6,8,10];

// const ans = numbers.every((number) => {
//     return number % 2 === 0;
// });
// console.log(ans); // true if all elements are even number or false

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000}
// ];

// Check every product price < 30000
// const ans = userCart.every((cartItem) => {
//     return cartItem.price < 30000;
// });
// console.log(ans);


// some method
// Returns true if atleast one element matches the condition or false

// const numbers = [3,5,8,9];

// Check atleast there is one even number in array
// const ans = numbers.some((number) => {
//     return number % 2 === 0;
// });
// console.log(ans);

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000},
//     {productId: 4, productName: "macbook", price: 250000}
// ];

// const ans = userCart.some((cartItem) => {
//     return cartItem.price > 100000;
// });
// console.log(ans);


// fill method
// value, start, end
// It changes the original array

// const myArray = new Array(10).fill(0);
// console.log(myArray);

// const numbers = [1,2,3,4,5,6,7,8,9];
// numbers.fill(22, 3, 7);
// console.log(numbers);


// splice
// start, delete, insert

// const myArray = ["item1", "item2", "item3"];

// delete
// const deletedItem = myArray.splice(1, 1);
// console.log(deletedItem);

// insert 
// myArray.splice(2, 0, "inserted item");
// console.log(myArray);

// insert and delete
// const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2");
// console.log(deletedItem);


// flat method
// It creates a new array with the elements of the subarrays
// "concatenated" into it

// let arr = [1,2,3,[4,5,[6,7,8]]];
// console.log("Before flat(): ",arr); // No effect on original array

// let result = arr.flat(2) // by default 1(depth value) value
// console.log("After flat():",result);


// "flatMap" method
// It is the combination of the "map()" method
// followed by the "flat()" method of depth "1"

// let cart = [
//     {name: "Mobile", qty: 2, price: 500},
//     {name: "Tablet", qty: 1, price: 1000}
// ];

// let newCart = cart.flatMap((item) => {
//     if(item.name == "Tablet") {
//         return [item, {name: "Screen Protector", qty: 1, price: 0}]
//     } else {
//         return [item];
//     }
// })

// console.log(newCart)


// join method

let words = ["cat", "dog", "horse"];
let result = words.join(", ");
console.log(result);

// Chain of methods

// let num = [1,2,3,4,5,6];
// let result = num.slice(0,3).splice(2,1,7).push(8);
// console.log(result);
// console.log(num);




// Iterables
// On which we can use for of loop
// string, array are iterable
// object is not iterable

// on string implementation
// const name = "himanshu"; 
// for(let char of name) {
//     console.log(char);
// }

// on array implementation
// const items = ["item1", "item2", "item3"];
// for(let item of items) {
//     console.log(item);
// }





// Array like object
// Those who have length property
// Where we can access index
// example :- string

// const name = "himanshu";
// console.log(name.length);
// console.log(name[2]);





// Sets (It is iterable)
// Stores data
// Sets also have its own methods
// No index-based access
// Order is not guaranteed
// Unique items only (no duplicates allowed)

// const numbers = new Set([1,2,3]);
// console.log(numbers);
// console.log(numbers[2]);    // index based access not allowed

// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElement = new Set(myArray);
// console.log(myArray);
// console.log(uniqueElement);

// Set methods - add, size, 

// const items = ["item1", "item2", "item3"];
// const numbers = new Set();
// console.log(numbers);

// add method
// numbers.add(1);
// numbers.add(2);
// numbers.add(items);
// numbers.add(["item1", "item2"]);
// console.log(numbers);

// size method
// console.log(numbers.size);

// delete method 
// Returns true, if element that is deleted else return false if element is not present
// numbers.delete("item1");
// console.log(numbers.delete(1));
// console.log(numbers);

// clear method
// numbers.clear();
// console.log(numbers);

// entries method
// const getEntries = numbers.entries();
// for(const i of getEntries) {
//     console.log(i);
// }

// has method
// console.log(numbers.has(items.includes("item1")));
// console.log(numbers.has("item1"));

// values method
// const getValues = numbers.values();
// console.log(getValues);
// for(const i of getValues) {
//     console.log(i);
// }

// keys method
// const keys = numbers.keys();
// console.log(keys);





// Maps
// Map is an iterable
// Store data in ordered fashion
// Store key-value pair (like object)
// Duplicate keys are not allowed like objects

// const person = new Map();

// set method - to add key-value pair
// person.set("firstName", "Himanshu");
// person.set("age", 7);
// person.set(1,'one');
// person.set([1,2,3], "onetwothree");
// person.set({1: "one"}, "onetwothree");
// console.log(person);

// get method - to get the value of key
// console.log(person.get("age"));

// keys method
// for(let key of person.keys()) {
//     console.log(key, typeof key);
// }

// for(let [key, value] of person) {
//     console.log(key, value);
// }

// const person = new Map(["firstName", "Himanshu"],["age", 7]);
// console.log(person);

// const person1 = {
//     id: 1,
//     firstName: "Himanshu"
// }
// const person2 = {
//     id: 2,
//     firstName: "Himanshi"
// }

// const extraInfo = new Map();
// extraInfo.set(person1, {age: 21, gender: "Male"});
// extraInfo.set(person2, {age: 21, gender: "Female"});
// // console.log(extraInfo);
// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).gender);





// Clone using Object.assign

// const obj = {
//     key1: "value1",
//     key2: "value2"
// }

// const obj2 = {...obj};  // spread operator
// const obj2 = Object.assign({}, obj);
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);





// Optional Chaining (?.)

// const user = {
//     firstName: "harshit",
//     // address: {houseNumber: "1234"}
// }

// let user;

// console.log(user?.firstName);
// console.log(user?.address?.houseNumber);





// methods

// function inside object

// const person = {
//     firstName: "Himanshu",
//     age: 21,
//     about: function() {
//         // console.log(`Person name is ${this.firstName} and age is ${this.age}`);
//         console.log(this)
//     }
// }
// person.about();

// const person = {
//     firstName: "Himanshu",
//     age: 21,
//     about: function(firstName, age) {
//         console.log(`Person name is ${firstName} and age is ${age}`);
//     }
// }
// person.about("ABC", 22);

// function personInfo() {
//     console.log(`Person name is ${this.firstName} and age is ${this.age}`);
// }

// const person1 = {
//     firstName: "Himanshu",
//     age: 21,
//     about: personInfo
// }
// const person2 = {
//     firstName: "ABC",
//     age: 22,
//     about: personInfo
// }
// const person3 = {
//     firstName: "XYZ",
//     age: 21,
//     about: personInfo
// }

// person1.about();
// person2.about();
// person3.about();


// call method - takes arguments separately

// const user1 = {
//     firstName: "Himanshu",
//     age: 21,
//     about: function() {
//         console.log(this.firstName, this.age);
//     }
// }
// const user2 = {
//     firstName: "ABC",
//     age: 22,
// }
// // user1.about();
// user1.about.call(user2);

// function about(hobby, favSinger) {
//     console.log(this.firstName, this.age, hobby, favSinger);
// }
// const user1 = {
//     firstName: "Himanshu",
//     age: 21
// }
// const user2 = {
//     firstName: "ABC",
//     age: 22,
// }
// about.call(user1, "Playing", "Arijit Singh");


// apply method - same as call() but takes arguments as an array

// function about(hobby, favSinger) {
//     console.log(this.firstName, this.age, hobby, favSinger);
// }
// const user1 = {
//     firstName: "Himanshu",
//     age: 21,
//     about: function(hobby, favSinger) {
//         console.log(this.firstName, this.age, hobby, favSinger);
//     }
// }
// const user2 = {
//     firstName: "ABC",
//     age: 22
// }
// user1.about.apply(user2, ["Playing", "Arijit Singh"]);


// bind method - returns function

// function about(hobby, favSinger) {
//     console.log(this.firstName, this.age, hobby, favSinger);
// }
// const user1 = {
//     firstName: "Himanshu",
//     age: 21
// }
// const user2 = {
//     firstName: "ABC",
//     age: 22,
// }
// const func = about.bind(user1, "Playing", "Arijit Singh");
// func();

// const user1 = {
//     firstName: "Himanshu",
//     age: 21,
//     about: function() {
//         console.log(this.firstName, this.age);
//     }
// }

// // user1.about();
// const myFunc = user1.about.bind(user1);
// myFunc();


// Short syntax of function in object

// const user1 = {
//     firstName: "Himanshu",
//     age: 21,
//     about: function() {
//         console.log(this.firstName, this.age);
//     }
// }

// const user1 = {
//     firstName: "Himanshu",
//     age: 21,
//     about() {
//         console.log(this.firstName, this.age);
//     }
// }
// user1.about()





// Prototype

// const user1 = {
//     firstName: "Himanshu",
//     lastName: "Khond",
//     email: "himanshu.k@codearray.tech",
//     age: 21,
//     address: "House Number, Colony, Pincode, State",
//     about: function() {
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function() {
//         return this.age >= 18;
//     }
// }

// const userMethods = {
//     about: function() {
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function() {
//         return this.age >= 18;
//     }
// }
// const createUser = (firstName, lastName, email, age, address) => {
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;

//     return user;
// }

// const user1 = createUser("Himanshu", "Khond", "himanshu.k@codearray.tech", 21, "Vikhroli");
// const user2 = createUser("ABC", "Khond", "himanshu.k@codearray.tech", 21, "Vikhroli");
// const user3 = createUser("XYZ", "Khond", "himanshu.k@codearray.tech", 21, "Vikhroli");
// console.log(user1);
// console.log(user1.about());
// console.log(user3.about());


