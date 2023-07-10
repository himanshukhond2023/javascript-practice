import { firstName as fName } from "./utils/fname.js";
import { age } from "./utils/age.js";
import { Person } from "./utils/person.js";

console.log(fName, age);

const person = new Person("Himanshu", "Khond", "21");
person.info();
console.log(person);