
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


//---------------------------------------------------------------------------------------------------
// Array#reduce
// (6 kyu) https://www.codewars.com/kata/array-number-reduce
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Array#reduce**
// In this kata, you must define the Array.reduce method.
// I have disabled the pre-existing reduce methods.
// Here's how it works:
// [1,2,3].reduce( function(sum, next){return sum+next}, 0) 
// // => 6
// ['a','b','a'].reduce( function(obj, elem){if(!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj}, {})
// // => {'a':2, 'b':1}
// Summary: The reduce method goes through each element of an array, applies the function to whatever the function returned last, and returns the last outcome. On the first iteration, it should pass the initial value to the function, as well as the first element of the array. If no initial value is passed, skip to the first element of the array.
// Ruby methods should expect a lambda.
//----------
//---Solution---
// Array.prototype.myReduce = function (process, initial) {
//   if (initial === undefined)  {
//     if (typeof this[0] === 'string') {
//       initial = '';
//     } else if (typeof this[0] === 'number') {
//       initial = 0;
//     }
//   }
//   this.forEach((e)=>initial=process(initial,e));
//   return initial;
// }
//--- Best Solution ---
// Array.prototype.reduce = function(process, memo = this.shift()) {
//   this.forEach( (e) => memo = process(memo, e) );
//   return memo;
// }
//---Test---
// const result = ['a','y','!'].myReduce(function(x,y){return x+y}, 'y'); //, 'yay!'
// console.log(result);
//=== End () ===


//---------------------------------------------------------------------------------------------------
// Implementing Object.create
// (6 kyu) https://www.codewars.com/kata/implementing-object-dot-create
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Implementing Object.create**
//---Solution---
// Object.create = function(prototype, properties) {
//   if (typeof prototype !== 'object' && prototype !== null) {
//     throw TypeError("Error");
//   }
//   const result = {
//     __proto__: prototype,
//   };
//   if (typeof properties !== 'undefined') {
//     Object.defineProperties(result, properties);
//   }
//   return result;
// };
//---Test---
//=== End () ===


//---------------------------------------------------------------------------------------------------
// PaginationHelper
// (5 kyu) https://www.codewars.com/kata/paginationhelper
//---------------------------------------------------------------------------------------------------
//---Task---
//### **PaginationHelper**
// For this exercise you will be strengthening your page-fu mastery.
// You will complete the PaginationHelper class, which is a utility
// class helpful for querying paging information related to an array.
// The class is designed to take in an array of values and an integer
// indicating how many items will be allowed per each page.
// The types of values contained within the collection/array are not relevant.
// The following are some examples of how this class is used:
// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid
// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1
//----------
//---Solution---
// class PaginationHelper {
// 	constructor(collection, itemsPerPage) {
//     this.collection = collection;
//     this.itemsPerPage = itemsPerPage;
// 	}
// 	itemCount() {
//     return this.collection.length;
// 	}
// 	pageCount() {
//     return Math.ceil(this.collection.length / this.itemsPerPage);
// 	}
// 	pageItemCount(pageIndex) {
//     return pageIndex < this.pageCount()
//     ? Math.min(
//         this.itemsPerPage,
//         this.collection.length - pageIndex * this.itemsPerPage
//       )
//     : -1;
// 	}
// 	pageIndex(itemIndex) {
//     return itemIndex < this.collection.length && itemIndex >= 0
//     ? Math.floor(itemIndex / this.itemsPerPage)
//     : -1;
// 	}
// }
//---Test---
// const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
// const helper = new PaginationHelper(collection, 10)
// console.log(helper.pageCount()); //', 3);
// console.log(helper.itemCount()); //', 24);
// console.log(helper.pageItemCount(10)); //, 1);
// console.log(helper.pageItemCount(4)); //, 2);
// console.log(helper.pageItemCount(-1)); //, 3);
// console.log(helper.pageIndex(-1)); //, 40);
// console.log(helper.pageIndex(2)); //, 22);
// console.log(helper.pageIndex(0)); //, 3);
// console.log(helper.pageIndex(0)); //, 0);
// console.log(helper.pageIndex(-1)); //, -1);
// console.log(helper.pageIndex(-1)); //, -23);
// console.log(helper.pageIndex(-1)); //, -15);
//=== End () ===


//---------------------------------------------------------------------------------------------------
// Undo/Redo
// (4 kyu) https://www.codewars.com/kata/undo-slash-redo
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Undo/Redo**
// The purpose of this kata is to implement the undoRedo function.
//  This function takes an object and returns an object that has these actions to be performed on the object
//  passed as a parameter:
// set(key, value) Assigns the value to the key. If the key does not exist, creates it.
// get(key) Returns the value associated to the key.
// del(key) removes the key from the object.
// undo() Undo the last operation (set or del) on the object.
//  Throws an exception if there is no operation to undo.
// redo() Redo the last undo operation (redo is only possible after an undo).
//  Throws an exception if there is no operation to redo.
// After set() or del() are called, there is nothing to redo.
// All actions must affect to the object passed to undoRedo(object) function.
//  So you can not work with a copy of the object.
// Any set/del after an undo should disallow new redos.
//----------
//---Solution---
// function undoRedo(object) {
//   let lastActions = [];
//   let undoneActions = [];
//   return {
//     set (key, value) {
//       if (object.hasOwnProperty(key) === true) {
//         lastActions.push(['edit', key, object[key], value]);
//       } else {
//         lastActions.push(['set', key, value]);
//       }
//       object[key] = value;
//       undoneActions = [];
//     },
//     get (key) {
//       return object[key];
//     },
//     del (key) {
//       if (object[key]) {
//         lastActions.push(['del', key, object[key]]);
//         delete object[key];
//         undoneActions = [];
//       };
//     },
//     undo () {
//       if (lastActions.length === 0) {
//         throw new Error("Error");
//       }
//       const popped = lastActions.pop();
//       if (popped[0] === 'set') {
//         delete object[popped[1]];
//       } else if (popped[0] === 'edit') {
//         object[popped[1]] = popped[2];
//       } else if (popped[0] === 'del') {
//         object[popped[1]] = popped[2];
//       }
//       undoneActions.push(popped);
//     },
//     redo () {
//       if (undoneActions.length === 0) {
//         throw new Error("Error");
//       }
//       const popped = undoneActions.pop();
//       if (popped[0] === 'set') {
//         object[popped[1]] = popped[2];
//       } else if (popped[0] === 'edit') {
//         object[popped[1]] = popped[3];
//       } else if (popped[0] === 'del') {
//         delete object[popped[1]];
//       }
//       lastActions.push(popped);
//     }
//   }
// }
//---Test---
//=== End () ===



