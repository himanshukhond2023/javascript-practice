// Write a function that returns a sequence (index begins with 1)
// of all the even characters from a string. 
// If the string is smaller than two characters or longer 
// than 100 characters, the function should return “invalid string”.


// let str = "himanshu";
// let result =  "";

// // Checking if string is in range between 2 to 100 characters
// if(str.length > 2 || str.length < 100) {
//     for(let i = 0; i < str.length; i++) {
//         if(i % 2 == 1) {
//             result = result + str[i];
//         }
//     }

//     console.log(result);

// } else { 
//     console.log("Invalid String");
// }





// You will be given two strings a and b and your task will be 
// to return the characters that are not common in the two strings.

// let str1 = "himanshu";
// let str2 = "ayaan";
// const arr = new Set();

// const findCommonCharacters = (a, b) => {
//     for(let i = 0; i < a.length; i++) {
//         if(!b.includes(a[i])) {
//             arr.add(a[i]);
//         }
//     }
// }

// findCommonCharacters(str1, str2);
// findCommonCharacters(str2, str1);

// console.log(arr);





// 1 bottle of milk:
// getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5
 
// 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Cereals", quantity: 1, price: 2.50 }
// ]) ➞ 4

// 3 bottles of milk:
// getTotalPrice([
//     { product: "Milk", quantity: 3, price: 1.50 }
// ]) ➞ 4.5

// Several groceries:
// getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Eggs", quantity: 12, price: 0.10 },
//     { product: "Bread", quantity: 2, price: 1.60 },
//     { product: "Cheese", quantity: 1, price: 4.50 }
// ]) ➞ 10.4

// Some cheap candy:
// getTotalPrice([
//     { product: "Chocolate", quantity: 1, price: 0.10 },
//     { product: "Lollipop", quantity: 1, price: 0.20 }
// ]) ➞ 0.3


// 1 bottle of milk:
// const grocery = [
//     { product: "Milk", quantity: 1, price: 1.50 }
// ]; 

// 1 bottle of milk & 1 box of cereals:
// const grocery = [
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Cereals", quantity: 1, price: 2.50 }
// ];

// 3 bottles of milk:
// const grocery = [
//     { product: "Milk", quantity: 3, price: 1.50 }
// ]; 

// Several groceries:
// const grocery = [
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Eggs", quantity: 12, price: 0.10 },
//     { product: "Bread", quantity: 2, price: 1.60 },
//     { product: "Cheese", quantity: 1, price: 4.50 }
// ]; 

// Some cheap candy:
// const grocery = [
//     { product: "Chocolate", quantity: 1, price: 0.10 },
//     { product: "Lollipop", quantity: 1, price: 0.20 }
// ]; 

// Easy solution
// let sum = 0;
// for(let i in grocery) {
//     sum = sum + grocery[i].quantity * grocery[i].price;
// }
// console.log(sum.toFixed(1));

// By using reduce method
// const ans = grocery.reduce((totalPrice, item) => {
//     return totalPrice + item.price * item.quantity;
// }, 0);
// console.log(ans.toFixed(1));





// Create a function that takes an array of numbers 
// and return both the minimum and maximum numbers, 
// in that order.

// let arr = [58,49,54,42,5];
// let result = [];

// const findMinMax = (arr,result) => {
//     arr.sort((a,b) => {
//         return a - b;
//     });

//     result.push(arr[0]);
//     result.push(arr[arr.length - 1]);

//     return result;
// };

// console.log(findMinMax(arr, result));





// Create a function that returns true if the 
// first array can be nested inside the second and 
// false otherwise.

// arr1 can be nested inside arr2 if:

    // arr1's min is greater than arr2's min.
    // arr1's max is less than arr2's max.

// let arr1 = [9, 9, 8];
// let arr2 = [8, 9];

// const isNested = (arr1, arr2) => {
//     let arr1Min = Math.min(...arr1);
//     let arr1Max = Math.max(...arr1);

//     let arr2Min = Math.min(...arr2);
//     let arr2Max = Math.max(...arr2);

//     if(arr1Min > arr2Min && arr1Max < arr2Max) {
//         return true;
//     }

//     return false;
// }

// console.log(isNested(arr1, arr2));





// Create a function that takes an array of strings and 
// return an array, sorted from shortest to longest.

// let arr = ["Google", "Apple", "Microsoft"];
// let arr = ["Leonardo", "Michelangelo", "Raphael", "Donatello"];


// const sortByLength = (arr) => {
//     let sortedArray = arr.sort((a, b) => {
//         return a.length - b.length;
//     });

//     return sortedArray;
// }
// console.log(sortByLength(arr));





// Take an array of integers (positive or negative 
// or both) and return the sum of the absolute value 
// of each element.

// let arr = [2, -1, 4, 8, 10];

// const getAbsSum = (arr) => {
//     let result = arr.reduce((total, currentValue) => {
//         return total + Math.abs(currentValue);
//     }, 0);

//     return result;
// }

// console.log(getAbsSum(arr));





// A group of friends have decided to start a secret 
// society. The name will be the first letter of each of 
// their names, sorted in alphabetical order.

// Create a function that takes in an array of names and 
// returns the name of the secret society.

let names = ["Adam", "Sarah", "Malcolm"];
// let names = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"];

const societyName = (names) => {
    let char = [];
    names.forEach((name) => {
        char.push(name[0]);
    });

    char.sort();

    return char.join("");
};
console.log(societyName(names));


// array = ["Adam", "Sarah", "Malcolm"];

// const sortingArray = () => {
//   let newarray = [...array]
//   newarray.sort()  
//   let string = ''
//   for(let i in newarray){
//     string += (newarray[i][0])
// }
// console.log(newarray)
// console.log(array)
// console.log(string)
// }

// sortingArray()

// console.log(array);
