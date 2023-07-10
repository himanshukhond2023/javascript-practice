// DATE AND TIME
// Date Object always carry both "Date" and "Time"

// Using Date Method
// Date(year,month,day,hours,minutes,seconds,ms)
// 0 to 11 (Month)


// let currentDate = new Date(2021,5,25);
// console.log(currentDate);


// Using timeStamp(integer number represent in "ms" from 1-1-1970)

// let currentDate = new Date(86400000); // 0 is time in ms
// console.log(currentDate); // 1 day = 24 * 60 * 60 = 86400000


// To get time in "ms"

// let currentDate = new Date().getTime();
// console.log(currentDate);


// Date and Time methods

let completeDateAndTime = new Date();
console.log(completeDateAndTime);

// get full year
// console.log(completeDateAndTime.getFullYear());

// get month
// console.log(completeDateAndTime.getMonth() + 1); // 0 to 11

// week day
console.log(completeDateAndTime.getDay());  // 0 to 6
// 0 - Sunday, 1 - Monday and so on..

// month day
console.log(completeDateAndTime.getDate());

// get hours
console.log(completeDateAndTime.getHours());
