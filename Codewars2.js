
//---------------------------------------------------------------------------------------------------
//   Codewars #2
//---------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------
//  Classes
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// Regular Ball Super Ball
// (8 kyu) https://www.codewars.com/kata/regular-ball-super-ball
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Regular Ball Super Ball**
//Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
//If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
//ball1 = new Ball();
//ball2 = new Ball("super");
//ball1.ballType     //=> "regular"
//ball2.ballType     //=> "super"//
//
//### **Обычный мяч Super Ball**
//Создайте класс Ball. Объекты Ball должны принимать один аргумент для «типа шара» при создании экземпляра.
//Если аргументы не указаны, объекты шара должны быть созданы с "типом шара" "обычный".
//ball1 = new Ball();
//ball2 = new Ball("super");
//ball1.ballType     //=> "regular"
//ball2.ballType     //=> "super"
//----------
//
//---Solution---
//var Ball = function(ballType="regular") {
//  this.ballType = ballType;
//};
//
//---Test---
// let arrayTest = []
//
//---View solution---
//    document.write(disemvowel("This website is for losers LOL!")); //"Ths wbst s fr lsrs LL!"
//console.log( new Ball().ballType ); //  , "regular");
//console.log( new Ball("super").ballType ); //, "super");
// 
//=== End ( Regular Ball Super Ball ) ===


//---------------------------------------------------------------------------------------------------
// Fun with ES6 Classes #2 - Animals and Inheritance
// (7 kyu) https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Fun with ES6 Classes #2 - Animals and Inheritance**
//Overview
//Preloaded for you in this Kata is a class Animal:
//class Animal {
//  constructor(name, age, legs, species, status) {
//    this.name = name;
//    this.age = age;
//    this.legs = legs;
//    this.species = species;
//    this.status = status;
//  }
//  introduce() {
//    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//  }
//}
//Task
//Define the following classes that inherit from Animal.
//I. Shark
//The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status.
// All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".
//II. Cat
//The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of "cat".
//Furthermore, the introduce/Introduce method for Cat should be identical to the original except there should be exactly 2 spaces and the words "Meow meow!" after the phrase.
//For example:
//var example = new Cat("Example", 10, "Happy");
//example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important
//III. Dog
//The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name of the dog's master which will be a string.
// Furthermore, dogs should have 4 legs and a species of "dog".
//Dogs have an identical introduce/Introduce method as any other animal, but they have their own method called greetMaster/GreetMaster which accepts no arguments
// and returns "Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master).
//
//### **Удовольствие с классами ES6 # 2 - Животные и наследство**
//Обзор
//Для вас в этом Ката предварительно загружены class Animal:
//class Animal {
//  constructor(name, age, legs, species, status) {
//    this.name = name;
//    this.age = age;
//    this.legs = legs;
//    this.species = species;
//    this.status = status;
//  }
//  introduce() {
//    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//  }
//}
//Задача
//Определите следующие классы, которые наследуются от Animal.
//I. Акула
//Функция конструктора для акулы должны принимать 3 аргумента в общей сложности в следующем порядке: name, age, status.
// Все акулы должны иметь количество ножки 0(так как они , очевидно , не имеют какую - либо ноги) и должны иметь speciesв "shark".
//II. Кот
//Функция-конструктор для Cat должна принимать те же 3 аргумента, что и для Shark : name, age, status. У кошек всегда должно быть количество ног 4и вид "cat".
//Кроме того, метод introduce/ Introduceдля Catдолжен быть идентичен исходному, за исключением того, что после фразы должно быть ровно 2 пробела и слова "Meow meow!".
//Например:
//var example = new Cat("Example", 10, "Happy");
//example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important
//III. Собака
//Конструктор собак должен принимать 4 аргументы в указанном порядке: name, age, status, master. masterимя хозяина собаки, которое будет строкой.
// Кроме того, у собак должны быть 4ноги и вид "dog".
//У собак есть такой же метод introduce/, Introduceкак и у любого другого животного, но у них есть свой собственный метод, называемый greetMaster/,
// GreetMasterкоторый не принимает аргументов и возвращает "Hello (insert_master_name_here)"(конечно, не буквальную строку,
// а замените (insert_master_name_here)на имя хозяина собаки).
//----------
//
//---Solution---
// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }
//
// class Shark extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 0, "shark", status);
//   }
// }
//
// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, "cat", status);
//   }
//   introduce() {
//     return super.introduce() + "  Meow meow!";
//   }
// }
//
// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, "dog", status);
//     this.master = master;
//   }
//   greetMaster() {
//     return `Hello ${this.master}`;
//   }
// }
//
//---Test---
//let arrayTest = []
//
//---View solution---
// const billy = new Shark("Billy", 3, "Alive and well");
// console.log( billy );
// console.log( billy.introduce() );
  // billy.name, "Billy");
  // billy.age, 3);
  // billy.legs, 0);
  // billy.species, "shark");
  // billy.status, "Alive and well");
  // billy.introduce(), `Hello, my name is Billy and I am 3 years old.`);
// const charles = new Shark("Billy", 3, "Alive and well");
// console.log( charles );
// console.log( charles.introduce() );
  // charles.name, "Charles");
  // charles.age, 8);
  // charles.legs, 0);
  // charles.species, "shark");
  // charles.status, "Finding a mate");
  // charles.introduce(), `Hello, my name is Charles and I am 8 years old.`);
// var cathy = new Cat("Cathy", 7, "Playing with a ball of yarn");
// console.log( cathy );
// console.log( cathy.introduce() );
  // cathy.name, "Cathy");
  // cathy.age, 7);
  // cathy.legs, 4);
  // cathy.species, "cat");
  // cathy.status, "Playing with a ball of yarn");
  // cathy.introduce(), "Hello, my name is Cathy and I am 7 years old.  Meow meow!");
// var spitsy = new Cat("Spitsy", 6, "sleeping");
// console.log( spitsy );
// console.log( spitsy.introduce() );
  // spitsy.name, "Spitsy");
  // spitsy.age, 6);
  // spitsy.legs, 4);
  // spitsy.species, "cat");
  // spitsy.status, "sleeping");
  // spitsy.introduce(), "Hello, my name is Spitsy and I am 6 years old.  Meow meow!");
// var doug = new Dog("Doug", 12, "Serving his master", "Eliza");
// console.log( doug );
// console.log( doug.introduce() );
// console.log( doug.greetMaster() );  
  // doug.name, "Doug");
  // doug.age, 12);
  // doug.legs, 4);
  // doug.species, "dog");
  // doug.status, "Serving his master");
  // doug.introduce(), "Hello, my name is Doug and I am 12 years old.");
  // doug.greetMaster(), "Hello Eliza");
//for (let i=0;i<arrayTest.length;i++) {
//    document.write(accum(arrayTest[i]));
//    document.write(' | ');
//}
// 
//=== End ( Fun with ES6 Classes #2 - Animals and Inheritance ) ===


//---------------------------------------------------------------------------------------------------
// Fun with ES6 Classes #4 - Cubes and Setters
// (7 kyu) https://www.codewars.com/kata/fun-with-es6-classes-number-4-cubes-and-setters
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Fun with ES6 Classes #4 - Cubes and Setters**
//Overview
//In Fun with ES6 Classes #3 - Cuboids, Cubes and Getters, we learned that if we knew all the dimensions (i.e. length, width, height) of a cuboid,
// we could easily work out its corresponding volume and surface area.
// The way we achieved this in our code was by the use of getters which automatically computed the volume and surface area of the cuboid whenever
// either one of length, width, height changed. However, in the previouos exercise,
// one thing we could not do is define setters for surface area or volume of a cuboid because for a given volume/SA, there were an infinite number
// of possibilities to the dimensions of the cuboid.
//However, for cubes (a special type of cuboid), since their length, width and height are always the same,
// it is possible to figure out the side length of a cube given its surface area and/or volume.
// Therefore, in this Kata, you will be asked to define setters as well as getters for both the surface area and volume of a cube.
//Task
//Define a class Cube whose constructor function takes exactly one parameter length and stores the value of the argument into this.length.
// You will then define both a getter and a setter for the surfaceArea and volume of the cube.
//No initial code will be given. You are free to use whatever syntax you like to complete this Kata but it is highly recommended that you use ES6 syntax
// and features to complete this Kata.
//Articles of Interest
//Below are some articles of interest that may help you complete this Kata:
//Setters - Mozilla Developer
//What are getters and setters? - Stack Overflow
//ES6 Classes Intro (includes section on getters and setters)
//
//### ****
//Обзор
//На занятиях №3 «Развлечения с ES6» - кубоидами, кубами и геттерами мы узнали, что если бы мы знали все размеры (т.е. length, width, height) кубоида,
// мы могли бы легко вычислить соответствующий ему объем и площадь поверхности.
// Мы достигли этого в нашем коде с помощью геттеров, которые автоматически вычисляли объем и площадь поверхности кубоида при изменении
// любого из них length, width, height. Однако в предыдущем упражнении одна вещь, которую мы не могли сделать, - это определить сеттеры для площади поверхности или объема кубоида,
// потому что для данного объема / SA существовало бесконечное количество возможностей для размеров кубоида.
//Однако для кубов (особый тип кубоида), поскольку их length, widthи heightвсегда одинаковы,
// можно вычислить длину стороны куба с учетом его площади поверхности и / или объема.
// Поэтому в этом Ката вам будет предложено определить сеттеры, а также геттеры как для площади поверхности, так и для объема куба.
//Задача
//Определите, class Cubeчья функция-конструктор принимает ровно один параметр lengthи сохраняет значение аргумента this.length.
// Затем определит как геттер и сеттер для surfaceAreaи volumeкубы.
//Первоначальный код не будет предоставлен. Вы можете использовать любой синтаксис для выполнения этого Ката,
// но настоятельно рекомендуется использовать синтаксис и функции ES6 для выполнения этого Ката .
//Интересные статьи
//Ниже приведены некоторые интересные статьи, которые могут помочь вам выполнить это Ката:
//-Сеттеры - разработчик Mozilla
//-Что такое геттеры и сеттеры? - Переполнение стека
//-Введение в классы ES6 (включает раздел о геттерах и сеттерах)
//----------
//
//---Solution---
// class Cube {
//   constructor(length) {
//     this.length = length;
//   }
//   get length() {
//     return this._length;
//   }
//   set length(length) {
//     this._length = length;
//     this._surfaceArea = Math.pow(this._length, 2) * 2 * 3;
//     this._volume = Math.pow(this._length, 3);
//   }
//   get surfaceArea() {
//     return this._surfaceArea;
//   }
//   set surfaceArea(surfaceArea) {
//     this._surfaceArea = surfaceArea;
//     this.length = Math.sqrt( ((this._surfaceArea / 3) / 2) );
//   }
//   get volume() {
//     return this._volume;
//   }
//   set volume(volume) {
//     this._volume = volume;
//     this.length = Math.cbrt(this._volume);
//   }
// }
//---Test---
//let arrayTest = []
//
//---View solution---
// var cube = new Cube(1);
// console.log( cube.length ); // , 1);
// console.log( cube.surfaceArea ); //, 6);
// console.log( cube.volume ); //, 1);
// cube.length = 2;
// console.log( cube.surfaceArea ); //, 24);
// console.log( cube.volume ); //, 8);
// cube.surfaceArea = 54;
// console.log( cube.length ); //, 3);
// console.log( cube.volume ); //, 27);
// cube.surfaceArea = 96;
// console.log( cube.length ); //, 4);
// console.log( cube.volume ); //, 64);
// cube.volume = 125;
// console.log( Math.roundTo(cube.length, 5) ); //, 5);
// console.log( Math.roundTo(cube.surfaceArea, 5) ); //, 150);
// cube.volume = 1000;
// console.log( Math.roundTo(cube.length, 5) ); //, 10);
// console.log( Math.roundTo(cube.surfaceArea, 5) ); //, 600);
// document.write() //
// 
//=== End ( Fun with ES6 Classes #4 - Cubes and Setters ) ===


//---------------------------------------------------------------------------------------------------
// Fun with ES6 Classes #6 - Fake Files (Basic)
// (6 kyu) https://www.codewars.com/kata/fun-with-es6-classes-number-6-fake-files-basic
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Fun with ES6 Classes #6 - Fake Files (Basic)**
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===

//---------------------------------------------------------------------------------------------------
// 
// (5 kyu) https://www.codewars.com/kata/using-closures-to-share-class-state
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//===================================================================================================


//---------------------------------------------------------------------------------------------------
//  Functions
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
// (7 kyu) https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (7 kyu) https://www.codewars.com/kata/the-wheat-slash-rice-and-chessboard-problem
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (6 kyu) https://www.codewars.com/kata/function-composition-1
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (6 kyu) https://www.codewars.com/kata/function-composition
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (6 kyu) https://www.codewars.com/kata/closures-and-scopes
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (6 kyu) https://www.codewars.com/kata/can-you-keep-a-secret
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (5 kyu) https://www.codewars.com/kata/function-cache
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===



//===================================================================================================


//---------------------------------------------------------------------------------------------------
//  Asynchronous
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
// (6 kyu) https://www.codewars.com/kata/i-promise-not-to-optimize
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (6 kyu) https://www.codewars.com/kata/jokes-youve-been-awaiting-for-dot-dot-dot-promise
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// 6 kyu) https://www.codewars.com/kata/nuclear-missile-manager
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//===================================================================================================


//---------------------------------------------------------------------------------------------------
//  OOP, Design Patterns
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
// (7 kyu) https://www.codewars.com/kata/santaclausable-interface
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (7 kyu) https://www.codewars.com/kata/singleton-pattern
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (7 kyu) https://www.codewars.com/kata/patterncraft-adapter/
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (7 kyu) https://www.codewars.com/kata/patterncraft-visitor/
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (6 kyu) https://www.codewars.com/kata/patterncraft-state/
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (6 kyu) https://www.codewars.com/kata/patterncraft-strategy/
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (6 kyu) https://www.codewars.com/kata/patterncraft-decorator/
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (6 kyu) https://www.codewars.com/kata/extract-nested-object-reference
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (6 kyu) https://www.codewars.com/kata/image-host-filename-generator
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (5 kyu) https://www.codewars.com/kata/replicate-new
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//---------------------------------------------------------------------------------------------------
// 
// (5 kyu) https://www.codewars.com/kata/simple-events
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//
//### ****
//----------
//
//---Solution---
//
//---Test---
// let arrayTest = [
//     "Dermatoglyphics", //true );
//     "isogram", //true );
//     "aba", //false, "same chars may not be adjacent" );
//     "moOse", //false, "same chars may not be same case" );
//     "isIsogram", //false );
//     "" //, true, "an empty string is a valid isogram" );
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End (  ) ===


//===================================================================================================


//---------------------------------------------------------------------------------------------------
//===================================================================================================


