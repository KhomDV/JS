
//---------------------------------------------------------------------------------------------------
// JavaScript class-like objects
// (7 kyu) https://www.codewars.com/kata/javascript-class-like-objects
//---------------------------------------------------------------------------------------------------
//---Task---
//### **JavaScript class-like objects**
// For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments.
// It should have a toString method that returns a human readable string indicating the argument information passed in.
// It should also allow the name property to be set.
// The following is an example of how the final code would be used and what the expected return values should be:
// var dog = new Animal('Max', 'dog');
// dog.toString(); // should return 'Max is a dog'
// dog.type; // should == 'dog'
// dog.name; // should == 'Max'
// dog.name = 'Lassie'; // should set name to 'Lassie'
//----------
//
//---Solution---
// class Animal {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   toString() {
//     return `${this.name} is a ${this.type}`;
//   }
// }
//---Test---
//=== End () ===


//---------------------------------------------------------------------------------------------------
// JavaScript class-like objects
// (7 kyu) https://www.codewars.com/kata/javascript-class-like-objects
//---------------------------------------------------------------------------------------------------
//---Task---
//### **JavaScript class-like objects**
// You're a junior dev fresh out of a three-month web development bootcamp.
// You've just taken on a lucrative contract from a trendy startup.
// You'll get paid more money than you'd ever thought you'd have.
// It's somewhat unclear what product or service this startup even sells, and their API documentation might as well have been written in Brainfuck,
// but you'd better learn fast, or you won't finish before the deadline and get paid.
// Your assignment today is to write a function in JavaScript.
// It seems simple enough, but the CEO insists that all developers who work at his company only use the absolute cutting-edge of technology.
// You must use only the newest of features and frameworks. But such new software tends to be rife with bugs...
// Create a function that won't throw an error no matter how new it is.
//----------
//
//---Solution---
// let newFunction = function newFunc(){
//   return newFunc
// }
//---Test---
// let myFunc = new new newFunction;
// console.log(myFunc);
//=== End () ===


//---------------------------------------------------------------------------------------------------
// Defining getters and setters on an existing class
// (6 kyu) https://www.codewars.com/kata/defining-getters-and-setters-on-an-existing-class
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Defining getters and setters on an existing class**
// Introduction to getter and setter
// Javascript classes can declare getter and setters using the following format:
//
// class Engine {
//   constructor(watts) {
//     this.watts = watts;
//   }
//   get horsepower() {
//     return this.watts / 745.7;
//   }
//   set horsepower(hp) {
//     this.watts = 745.7 * hp;
//   }
// }
// and be used as so:
//
// let bossV8 = new Engine(279637.5);
// console.log(bossV8.horsepower); // => 375
// bossV8.horsepower = 385;
// console.log(bossV8.watts); // => 287094.5
// The problem
// There is a preloaded class of Person and it needs a new getter and setter.
//  Person is defined with a constructor that takes a first name and a last name, and provides a mean to get the first name, last name, and full name. Bellow is the preloaded class:
//
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//
//   getName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }
// and can be used as so:
//
// let marcusFenix = new Person('Marcus', 'Fenix');
// console.log(marcusFenix.firstName); // => 'Marcus'
// console.log(marcusFenix.lastName); // => 'Fenix'
// console.log(marcusFenix.getName()); // => 'Marcus Fenix'
// Add a getter of name that returns the full name
// Add a setter of name that modifies first name and last name
// After adding the new getter and setter, a Person can be used as so:
//
// let augustusCole = new Person('Augustus', 'Cole');
// augustusCole.name = 'Cole Train';
// console.log(augustusCole.firstName); // => 'Cole'
// console.log(augustusCole.lastName); // => 'Train'
// console.log(augustusCole.getName()); // => 'Cole Train'
// console.log(augustusCole.name); // => 'Cole Train'
//----------
//
//----------
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }
//
// //---Solution---
// Object.defineProperty(Person.prototype, 'name', {
//   get() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set(value) {
//     [this.firstName, this.lastName] = value.split(" ");
//   }
// });
// //---Test---
// let marcusFenix = new Person('Marcus', 'Fenix');
// console.log(marcusFenix.firstName); // => 'Marcus'
// console.log(marcusFenix.lastName); // => 'Fenix'
// console.log(marcusFenix.getName()); // => 'Marcus Fenix'
// console.log(marcusFenix.name); // => 'Marcus Fenix'
//=== End () ===


//---------------------------------------------------------------------------------------------------
// Array Helpers
// (6 kyu) https://www.codewars.com/kata/array-helpers
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Array Helpers**
// This kata is designed to test your ability to extend the functionality of built-in classes.
//  In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
//
// Explanation:
// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!
//
// Example
// var numbers = [1, 2, 3, 4, 5];
//
// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]
//
//---Solution---
// Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
// Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
// Array.prototype.average = function () { return this.sum() / this.length; }
// Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
// Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
// Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }
//---Test---
// var numbers = [1, 2, 3, 4, 5];
// console.log(numbers.square());  // must return [1, 4, 9, 16, 25]
// console.log(numbers.cube());
// console.log(numbers.average());
// console.log(numbers.sum());
// console.log(numbers.even());
// console.log(numbers.odd());
//=== End () ===


