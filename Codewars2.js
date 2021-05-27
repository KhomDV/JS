
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
//Kata and Series Overview
//You will be defining a class File (ES6 syntax please :) ) with the following properties and methods:
//Properties
//-fullName
//-filename
//-extension
//Methods
//-getContents()
//-write(str)
//-gets()
//-getc()
//Your File class should exhibit the following behaviour:
//Constructor
//Your constructor should accept two arguments in the following order: fullName and contents, where fullName is the full name of the file (including file extension)
//and contents is the file contents.
//An instance of your File class should exhibit the following behaviour:
//fullName (property)
//Should contain the full name of the file, including the file extension. Please note that the fullName property should be read-only, which means that attempts to reassign
// fullName a new value should fail and it should retain its original value. For example:
//var myFile = new File("hello.txt", "Hello World");
//console.log(myFile.fullName); // hello.txt
//myFile.fullName = "goodbye.txt"; // Reassignment should fail
//console.log(myFile.fullName); // still "hello.txt"
//filename (property)
//Should contain the name of the file, excluding the file extension. Should also be read-only which means reassignment attempts should fail. E.g.
//var file1 = new File("hello_world.txt", "Hello World");
//console.log(file1.filename); // "hello_world"
//file1.filename = "goodbye_world"; // Reassignment should fail
//console.log(file1.filename); // still "hello_world"
//var file2 = new File("class.phptester.php", "<?php /* Some PHP code here */ ?>");
//console.log(file2.filename); // "class.phptester" - the filename should be correctly identified even if the filename itself contains the '.' character
//extension (property)
//Should contain the file extension. Read-only. E.g.
//var fileWithComplexName = new File("alpha.beta.gamma.delta.txt", "alpha beta gamma delta");
//console.log(fileWithComplexName.extension); // "txt"
//fileWithComplexName.extension = "js"; // Reassignment should fail
//console.log(fileWithComplexName.extension); // still "txt"
//getContents (method)
//Should return the contents of the file every time. E.g.
//var myFile = new File("hello.txt", "Hello World\nHello World");
//console.log(myFile.getContents()); // "Hello World\nHello World"
//write (method)
//Should accept exactly 1 argument str, the new content to be written to the file. The new content should be written on a new line on the file. For example:
//var myFile = new File("example.txt", "");
//console.log(myFile.getContents()); // ""
//myFile.write("Line 1");
//console.log(myFile.getContents()); // "Line 1"
//myFile.write("Line 2");
//console.log(myFile.getContents()); // "Line 1\nLine 2"
//myFile.write("Line 3");
//console.log(myFile.getContents()); // "Line 1\nLine 2\nLine 3"
//gets (method)
//Returns a line on the file, starting on Line 1. Successive calls to the method should return successive lines on the file.
// If the number of calls exceeds the number of lines on the file, simple return undefined. E.g.:
//var myFile = new File("example.txt", "Line 1\nLine 2\nLine 3\nLine 4\nLine 5");
//console.log(myFile.gets()); // "Line 1"
//console.log(myFile.gets()); // "Line 2"
//console.log(myFile.gets()); // "Line 3"
//console.log(myFile.gets()); // "Line 4"
//console.log(myFile.gets()); // "Line 5"
//console.log(myFile.gets()); // undefined
//console.log(myFile.gets()); // undefined
//console.log(myFile.gets()); // undefined
//getc (method)
//Should return a character on the file, starting from the first character. Successive calls should return successive characters on the file.
// If the number of calls exceeds the number of characters on the file, it should simply return undefined. Example:
//var myFile = new File("Lorem Ipsum.txt", "Lorem ipsum dolor sit amet, adispicing eu.");
//console.log(myFile.getc()); // "L"
//console.log(myFile.getc()); // "o"
//console.log(myFile.getc()); // "r"
//console.log(myFile.getc()); // "e"
//console.log(myFile.getc()); // "m"
//console.log(myFile.getc()); // " "
//console.log(myFile.getc()); // "i"
//console.log(myFile.getc()); // "p"
// ... (many calls to myFile.getc())
//console.log(myFile.getc()); // undefined (when number of calls exceeds character count)
//Note regarding filenames
//For the purposes of this Kata, all filenames used in this Kata will be valid filenames. Valid filenames are summarized as follows:
//Contains a filename and extension (e.g. LICENSE.txt is a valid filename, LICENSE is not)
//Filename contains only alphanumeric characters (both uppercase and lowercase), underscores, spaces and/or dots (e.g. index.php, class.phptester.php,
// alpha beta.gamma_delta01.complicatedExample.txt are all valid filenames). Edge cases will not be considered (e.g. successive dots - Hello World..txt - will not appear in the test cases)
//Extension contains only lowercase alphanumeric characters (e.g. txt, php, php3 are all valid)
//Note regarding file content
//All file content will be valid. In this Kata, valid file content may include alphanumeric characters (uppercase or lowercase), underscores, ordinary whitespace,
// punctuation or mathematical symbols, in which each line will be separated from the next by a newline character ("\n").
// There will not be tabs or other whitespace/newline characters other than "\s" (spacebar) or "\n" and the contents of any file will not start or end with a newline.
// You may also assume that when the tests use the write(str) method, the string str will not contain newline characters itself.
//
//### ****
//Задача
//Вы будете определять class File(синтаксис ES6, пожалуйста :)) со следующими свойствами и методами:
//Характеристики
//-fullName
//-filename
//-extension
//Методы
//-getContents()
//-write(str)
//-gets()
//-getc()
//Ваш Fileкласс должен демонстрировать следующее поведение:
//Конструктор
//Конструктор должен принимать два аргумента в следующем порядке: fullNameи contents, где fullName- полное имя файла (включая расширение файла), а contents- содержимое файла.
//Экземпляр вашего Fileкласса должен демонстрировать следующее поведение:
//fullName (свойство)
//Должен содержать полное имя файла, включая расширение файла . Обратите внимание, что fullNameсвойство должно быть доступно только для чтения, что означает,
// что попытки переназначить fullNameновое значение должны завершиться неудачно, и оно должно сохранить свое исходное значение. Например:
//var myFile = new File("hello.txt", "Hello World");
//console.log(myFile.fullName); // hello.txt
//myFile.fullName = "goodbye.txt"; // Reassignment should fail
//console.log(myFile.fullName); // still "hello.txt"
//имя файла (свойство)
//Должен содержать имя файла без расширения файла . Также должен быть доступен только для чтения, что означает, что попытки переназначения не будут выполнены. Например
//var file1 = new File("hello_world.txt", "Hello World");
//console.log(file1.filename); // "hello_world"
//file1.filename = "goodbye_world"; // Reassignment should fail
//console.log(file1.filename); // still "hello_world"
//var file2 = new File("class.phptester.php", "<?php /* Some PHP code here */ ?>");
//console.log(file2.filename); // "class.phptester" - the filename should be correctly identified even if the filename itself contains the '.' character
//расширение (свойство)
//Должен содержать расширение файла. Только для чтения . Например
//var fileWithComplexName = new File("alpha.beta.gamma.delta.txt", "alpha beta gamma delta");
//console.log(fileWithComplexName.extension); // "txt"
//fileWithComplexName.extension = "js"; // Reassignment should fail
//console.log(fileWithComplexName.extension); // still "txt"
//getContents (метод)
//Должен каждый раз возвращать содержимое файла. Например
//var myFile = new File("hello.txt", "Hello World\nHello World");
//console.log(myFile.getContents()); // "Hello World\nHello World"
//написать (метод)
//Должен принимать ровно 1 аргумент str, новое содержимое будет записано в файл. Новый контент должен быть записан в новой строке файла. Например:
//var myFile = new File("example.txt", "");
//console.log(myFile.getContents()); // ""
//myFile.write("Line 1");
//console.log(myFile.getContents()); // "Line 1"
//myFile.write("Line 2");
//console.log(myFile.getContents()); // "Line 1\nLine 2"
//myFile.write("Line 3");
//console.log(myFile.getContents()); // "Line 1\nLine 2\nLine 3"
//получает (метод)
//Возвращает строку в файле, начиная со строки 1. Последовательные вызовы метода должны возвращать последовательные строки в файле.
// Если количество вызовов превышает количество строк в файле, простой возврат undefined. Например:
//var myFile = new File("example.txt", "Line 1\nLine 2\nLine 3\nLine 4\nLine 5");
//console.log(myFile.gets()); // "Line 1"
//console.log(myFile.gets()); // "Line 2"
//console.log(myFile.gets()); // "Line 3"
//console.log(myFile.gets()); // "Line 4"
//console.log(myFile.gets()); // "Line 5"
//console.log(myFile.gets()); // undefined
//console.log(myFile.gets()); // undefined
//console.log(myFile.gets()); // undefined
//getc (метод)
//Должен возвращать символ в файле, начиная с первого символа. Последовательные вызовы должны возвращать последовательные символы в файле.
// Если количество вызовов превышает количество символов в файле, он должен просто вернуться undefined. Пример:
//var myFile = new File("Lorem Ipsum.txt", "Lorem ipsum dolor sit amet, adispicing eu.");
//console.log(myFile.getc()); // "L"
//console.log(myFile.getc()); // "o"
//console.log(myFile.getc()); // "r"
//console.log(myFile.getc()); // "e"
//console.log(myFile.getc()); // "m"
//console.log(myFile.getc()); // " "
//console.log(myFile.getc()); // "i"
//console.log(myFile.getc()); // "p"
//// ... (many calls to myFile.getc())
//console.log(myFile.getc()); // undefined (when number of calls exceeds character count)
//Примечание относительно имен файлов
//Для целей этого Ката все имена файлов, используемые в этом Кате, будут действительными именами файлов. Допустимые имена файлов резюмируются следующим образом:
//Содержит имя файла и расширение (например, LICENSE.txtдопустимое имя файла, LICENSEнет)
//Имя файла содержит только буквенно - цифровые символы (прописные и строчные), подчеркивания, пробелов и / или точек (например index.php, class.phptester.php,
// alpha beta.gamma_delta01.complicatedExample.txtвсе действительные имена файлов).
// Пограничные случаи не будут рассматриваться (например, следующие друг за другом точки - Hello World..txt- не появятся в тестовых примерах)
//Расширение содержит только строчные буквенно - цифровых символов (например txt, php, php3все действительны)
//Примечание относительно содержимого файла
//Все содержимое файла будет действительным. В этом Ката допустимое содержимое файла может включать буквенно-цифровые символы (в верхнем или нижнем регистре),
// подчеркивания, обычные пробелы, знаки пунктуации или математические символы, в которых каждая строка будет отделена от следующей символом новой строки ( "\n").
// Там будет не быть вкладки или другие , чем другие пробельные / перевод строки символов "\s"(пробел) или "\n"и содержимое любого файла будет не начинаться
// или заканчиваться символом новой строки. Вы также можете предположить, что когда тесты используют этот write(str)метод, сама строка неstr будет содержать символов новой строки.
//----------
//
//---Solution---
// class File {
//   constructor(fullName, contents) {
//     this._fullName = fullName;
//     this.contents = contents;
//     this._filename = this._fullName.split('.').reverse().slice(1).reverse().join('.'); //edit
//     this._extension = this._fullName.split('.').pop();
//     this.row = 0;
//     this.col = 0;
//   }
//
//   get fullName() {
//     return this._fullName;
//   }
//   get filename() {
//     return this._filename;
//   }
//   get extension() {
//     return this._extension;
//   }
//   getContents() {
//     return this.contents;
//   }
//   write(str) {
//     if ( this.contents !== "" ) {
//       this.contents = this.contents + "\n";
//     }
//     this.contents = this.contents + str;
//   }
//   gets() {
//     return this.contents.split('\n')[this.row++];
//   }
//   getc() {
//     return this.contents[this.col++];
//   }
// }
//---Test---
// let arrayTest = []
//---View solution---
// var myFile = new File("hello.txt", "Hello World");
// console.log(myFile.fullName); // hello.txt
// myFile.fullName = "goodbye.txt"; // Reassignment should fail
// console.log(myFile.fullName); // still "hello.txt"
// console.log(myFile.filename); // still "hello.txt"
//
// var file1 = new File("hello_world.txt", "Hello World");
// console.log(file1.filename); // "hello_world"
// file1.filename = "goodbye_world"; // Reassignment should fail
// console.log(file1.filename); // still "hello_world"
//
// var file2 = new File("class.phptester.php", "<?php /* Some PHP code here */ ?>");
// console.log(file2.filename); // "class.phptester" 
//
// var fileWithComplexName = new File("alpha.beta.gamma.delta.txt", "alpha beta gamma delta");
// console.log(fileWithComplexName.extension); // "txt"
// fileWithComplexName.extension = "js"; // Reassignment should fail
// console.log(fileWithComplexName.extension); // still "txt"
//
// var myFile = new File("hello.txt", "Hello World\nHello World");
// console.log(myFile.getContents()); // "Hello World\nHello World"
//
// var myFile = new File("example.txt", "");
// console.log(myFile.getContents()); // ""
// myFile.write("Line 1");
// console.log(myFile.getContents()); // "Line 1"
// myFile.write("Line 2");
// console.log(myFile.getContents()); // "Line 1\nLine 2"
// myFile.write("Line 3");
// console.log(myFile.getContents()); // "Line 1\nLine 2\nLine 3"
//
// var myFile = new File("example.txt", "Line 1\nLine 2\nLine 3\nLine 4\nLine 5");
// console.log(myFile.gets()); // "Line 1"
// console.log(myFile.gets()); // "Line 2"
// console.log(myFile.gets()); // "Line 3"
// console.log(myFile.gets()); // "Line 4"
// console.log(myFile.gets()); // "Line 5"
// console.log(myFile.gets()); // undefined
// console.log(myFile.gets()); // undefined
// console.log(myFile.gets()); // undefined
//
// var myFile = new File("Lorem Ipsum.txt", "Lorem ipsum dolor sit amet, adispicing eu.");
// console.log(myFile.getc()); // "L"
// console.log(myFile.getc()); // "o"
// console.log(myFile.getc()); // "r"
// console.log(myFile.getc()); // "e"
// console.log(myFile.getc()); // "m"
// console.log(myFile.getc()); // " "
// console.log(myFile.getc()); // "i"
// console.log(myFile.getc()); // "p"
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
// console.log(myFile.getc());
//// ... (many calls to myFile.getc())
//console.log(myFile.getc()); // undefined 
//
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End ( Fun with ES6 Classes #6 - Fake Files (Basic) ) ===

//---------------------------------------------------------------------------------------------------
// Using closures to share class state
// (5 kyu) https://www.codewars.com/kata/using-closures-to-share-class-state
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Using closures to share class state**
//In object-oriented programming, it is sometimes useful to have private shared state among all instances of a class; in other languages, like ruby,
// this shared state would be tracked with a class variable. In javascript we achieve this through closures and immediately-invoked function expressions.
//In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object.
// The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.
//garfield = new Cat('garfield', 25);
//Cat.averageWeight(); // 25
//felix = new Cat('felix', 15);
//Cat.averageWeight();   // now 20
//But that's not all. Cats can change weight. Use Object.defineProperty to write custom setters and getters for the weight property so that the following works properly
// even as instances change their weight value:
//felix.weight = 25;
//felix.weight // 25
//Cat.averageWeight(); // now 25
//Object.defineProperty must be used to pass all tests. Storing a reference to all instances and recalculating the average weight each time is easier,
// but would prevent garbage collection from working properly if used in a production environment.
//Finally, since average weight is an aggregate statistic it's important that we validate constructor arguments so that no cats are created without a specified weight;
// so, make sure to throw an error if both arguments are not recieved by the constructor.
//Summary of requirements:
//-Cat constructor, requiring arguments for name and weight
//-Throw an error if name or weight not specified when invoking the constructor.
//-Cat.averageWeight() method should give the average weight of all cat instances created with Cat, even after if the instance's properties have changed.
//-Must use Object.defineProperty
//
//### **Использование замыканий для разделения состояния класса**
//В объектно-ориентированном программировании иногда полезно иметь частное общее состояние для всех экземпляров класса; на других языках, таких как ruby,
// это общее состояние будет отслеживаться с помощью переменной класса. В javascript мы достигаем этого с помощью замыканий и немедленно вызываемых функциональных выражений.
//В этом ката я хочу, чтобы вы написали Catконструктор, который принимает аргументы nameи weightсоздает экземпляр нового объекта cat.
// Конструктор также должен иметь averageWeightметод, который возвращает средний вес кошек, созданных с помощью конструктора.
//garfield = new Cat('garfield', 25);
//Cat.averageWeight(); // 25
//felix = new Cat('felix', 15);
//Cat.averageWeight();   // now 20
//Но это не все. Кошки могут менять вес. Используется Object.definePropertyдля написания пользовательских методов установки и получения для свойства веса,
// чтобы следующее работало правильно, даже когда экземпляры изменяют свое значение веса:
//felix.weight = 25;
//felix.weight // 25
//Cat.averageWeight(); // now 25
//Object.definePropertyнеобходимо использовать для прохождения всех тестов. Хранить ссылку на все экземпляры и каждый раз пересчитывать средний вес проще,
// но это помешает правильной работе сборки мусора при использовании в производственной среде.
//Наконец, поскольку средний вес является совокупной статистикой, важно, чтобы мы проверяли аргументы конструктора, чтобы кошки не создавались без указанного веса;
// поэтому не забудьте выдать ошибку, если оба аргумента не получены конструктором.
//Краткое изложение требований:
//-Catконструктор, требующий аргументов для nameиweight
//-Бросьте ошибку , если nameили weightне заданы при вызове конструктора.
//-Cat.averageWeight()должен давать средний вес всех экземпляров cat, созданных с помощью Cat, даже после того, как свойства экземпляра изменились.
//-Должен использовать Object.defineProperty
//----------
//
//---Solution---
//Let's make a Cat constructor!
//var Cat = (function () {
//// ... your code here.
//}());
//---My
// var Cat = (function () {
//   const cats = []
//   const constructor = function (name, weight) {
//     if (!name || !weight) throw Error('Error');
//     Object.defineProperty(this, 'name', {
//       get: () => name
//     });
//     Object.defineProperty(this, 'weight', {
//       get: () => weight,
//       set: value => weight = value
//     })
//     cats.push(this)
//   }
//   constructor.averageWeight = () => cats.reduce((acc, cat) => (acc + cat.weight), 0) / cats.length;
//   return constructor
// }());
// //---Best
// var Cat = (function () {
//   var cats = {
//     count: 0,
//     totalWeight: 0,
//     avgWeight: 0
//   }
//   function Cat (name, weight) {
//     if (!name || !weight) {
//       throw new Error('Both `name` and `weight` should be provided');
//     }
//     cats.count++;
//     this.name = name;
//     Object.defineProperty(this, 'weight', {
//       get: function () {
//         return this._weight || 0;
//       },
//       set: function (val) {
//         cats.totalWeight = cats.totalWeight - this.weight + val;
//         cats.avgWeight =  cats.totalWeight / cats.count;
//         return this._weight = val;
//       }
//     });
//     this.weight = weight;
//   }
//   Cat.averageWeight = function () {
//     return cats.avgWeight;
//   }
//   return Cat;
// }());
//---Test---
// let arrayTest = []
//
//---View solution---
// garfield = new Cat('garfield', 25);
// console.log(Cat.averageWeight()); // 25
// felix = new Cat('felix', 15);
// console.log(Cat.averageWeight());   // now 20
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End ( Using closures to share class state ) ===


//===================================================================================================


//---------------------------------------------------------------------------------------------------
//  Functions
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// Currying functions: multiply all elements in an array
// (7 kyu) https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array
//---------------------------------------------------------------------------------------------------
//---Task---
//### ****
//### ****
//----------
//
//---Solution---
// Была решена раньше
//---Test---
// let arrayTest = []
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(isIsogram(arrayTest[i]));
//     document.write(' | ');
// }
// 
//=== End ( Currying functions: multiply all elements in an array ) ===


//---------------------------------------------------------------------------------------------------
// The wheat/rice and chessboard problem
// (7 kyu) https://www.codewars.com/kata/the-wheat-slash-rice-and-chessboard-problem
//---------------------------------------------------------------------------------------------------
//---Task---
//### **The wheat/rice and chessboard problem**
//I assume most of you are familiar with the ancient legend of the rice (but I see wikipedia suggests wheat, for some reason) problem,
// but a quick recap for you: a young man asks as a compensation only 1 grain of rice for the first square,
// 2 grains for the second, 4 for the third, 8 for the fourth and so on, always doubling the previous.
//Your task is pretty straightforward (but not necessarily easy): given an amount of grains, you need to return up to which square of the chessboard
// one should count in order to get at least as many.
//As usual, a few examples might be way better than thousands of words from me:
//squaresNeeded(0) === 0
//squaresNeeded(1) === 1
//squaresNeeded(2) === 2
//squaresNeeded(3) === 2
//squaresNeeded(4) === 3
//Input is always going to be valid/reasonable: ie: a non negative number; extra cookie for not using a loop to compute square-by-square (at least not directly)
// and instead trying a smarter approach [hint: some peculiar operator]; a trick converting the number might also work: impress me!
//### **Проблема пшеницы / риса и шахматной доски**
//Я полагаю, что большинство из вас знакомы с древней легендой о рисе (но я вижу, что википедия по какой-то причине предлагает пшеницу ) проблема,
// но краткий итог: молодой человек просит в качестве компенсации только 1рисовое зерно за первый квадрат , 2зерна для второго, 4третьего, 8четвертого и так далее,
// всегда удваивая предыдущее.
//Ваша задача довольно проста (но не обязательно проста): учитывая количество зерен, вам нужно вернуться к тому, на какое поле шахматной доски нужно посчитать,
// чтобы получить как минимум столько же.
//Как обычно, несколько примеров могут быть лучше моих тысяч слов:
//squaresNeeded(0) === 0
//squaresNeeded(1) === 1
//squaresNeeded(2) === 2
//squaresNeeded(3) === 2
//squaresNeeded(4) === 3
//Ввод всегда будет действительным / разумным: то есть: неотрицательное число; дополнительный cookie, чтобы не использовать цикл для вычисления
// квадрата за квадратом (по крайней мере, не напрямую), а вместо этого попробовать более умный подход [подсказка: какой-то особенный оператор];
// также может сработать трюк с преобразованием числа: произведите на меня впечатление!
//----------
//
//---Solution---
// function squaresNeeded(grains){
//   return (grains === 0 ? 0 : Math.trunc(Math.log2(grains))+1 );
// }
//---Test---
// console.log(squaresNeeded(0)); // === 0
// console.log(squaresNeeded(1)); // === 1
// console.log(squaresNeeded(2)); // === 2
// console.log(squaresNeeded(3)); // === 2
// console.log(squaresNeeded(4)); // === 3
// 
//=== End ( The wheat/rice and chessboard problem ) ===


//---------------------------------------------------------------------------------------------------
// Function composition - 1
// (6 kyu) https://www.codewars.com/kata/function-composition-1
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Function composition - 1**
//Javascript functions can be combined to form new functions. For example the functions addOne and multTwo can be combined to form a new function which first
// adds one and then multiplies by two, as follows:
//const addOne = (a) => a + 1
//const multTwo = (b) => b * 2
//const addOneMultTwo = (c) => multTwo(addOne(c))
//addOneMultTwo(5) // returns 12
//Combining functions like this is called function composition. Functional programming libraries in Javascript such as Ramda include a generic compose function
// which does the heavy lifting of combining functions for you. So you could implement addOneMultTwo as follows:
//const addOneMultTwo = compose(multTwo, addOne)
//addOneMultTwo(5) // returns 12
//A simple implementation of compose, could work as follows:
//const compose = (f, g) => (a) => f(g(a))
//The arguments f and g are unary functions (i.e. functions which take one argument). The problem with this compose function is that it only composes two functions.
// Your task is to write a compose function which can compose any number of functions together.
//
//### **Состав функций**
//Функции Javascript можно комбинировать для создания новых функций. Например, функции addOne и multTwo можно объединить, чтобы сформировать новую функцию,
// которая сначала добавляет единицу, а затем умножает ее на два, как показано ниже:
//const addOne = (a) => a + 1
//const multTwo = (b) => b * 2
//const addOneMultTwo = (c) => multTwo(addOne(c))
//addOneMultTwo(5) // returns 12
//Подобное объединение функций называется композицией функций. Библиотеки функционального программирования в Javascript, такие как Ramda,
// включают общую функцию компоновки, которая выполняет за вас тяжелую работу по объединению функций. Итак, вы можете реализовать addOneMultTwo следующим образом:
//const addOneMultTwo = compose(multTwo, addOne)
//addOneMultTwo(5) // returns 12
//Простая реализация compose может работать следующим образом:
//const compose = (f, g) => (a) => f(g(a))
//Аргументы f и g являются унарными функциями (то есть функциями, которые принимают один аргумент).
// Проблема с этой функцией compose состоит в том, что она объединяет только две функции. Ваша задача - написать функцию компоновки,
// которая может составлять любое количество функций вместе.
//----------
//
//---Solution---
//My 
//const compose = (...fns) => input => fns.reduceRight((mem, fn) => fn(mem), input);
//Best
//function compose(...args) {
//  return function(n) {
//      args.reverse().forEach((i) => n=i(n));
//      return n;
//  }
//}
//---Test---
//const addOne = (a) => a + 1;
//const multTwo = (b) => b * 2;
//console.log( compose()(10) );
//console.log( compose(multTwo, addOne)(5) ); //, 12, 'compose two functions')
//console.log( compose(addOne, multTwo, addOne, addOne)(2) ); //, 9, 'compose four functions')
//console.log( compose(addOne)(3) ); //, 4, 'compose one function')
//console.log( compose()(10) ); //, 10, 'compose no functions')
// 
//=== End ( Function composition - 1 ) ===


//---------------------------------------------------------------------------------------------------
// Function Composition (2)
// (6 kyu) https://www.codewars.com/kata/function-composition
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Function Composition (2)**
//Function composition is a mathematical operation that mainly presents itself in lambda calculus and computability.
// It is explained well here, but this is my explanation, in simple mathematical notation:
//f3 = compose( f1 f2 )
//   Is equivalent to...
//f3(a) = f1( f2( a ) )
//Your task is to create a compose function to carry out this task, which will be passed two functions or lambdas.
// Ruby functions will be passed, and should return, either a proc or a lambda. Remember that the resulting composed function may be passed multiple arguments!
//compose(f , g)(x)
//=> f( g( x ) )
//This kata is not available in haskell; that would be too easy!
//### ****
//Композиция функций - это математическая операция, которая в основном проявляется в лямбда-исчислении и вычислимости.
// Это объясняется хорошо здесь , но это мое объяснение, в простой математической нотации:
//f3 = compose( f1 f2 )
//   Is equivalent to...
//f3(a) = f1( f2( a ) )
//Ваша задача - создать composeфункцию для выполнения этой задачи, которой будут переданы две функции или лямбды.
// Функции Ruby будут передаваться и должны возвращать либо процедуру, либо лямбду. Помните, что полученной составной функции может быть передано несколько аргументов!
//compose(f , g)(x)
//=> f( g( x ) )
//Это ката недоступно в haskell; это было бы слишком просто!
//----------
//
//---Solution---
//const compose = (f,g) => (...args) => f(g(...args));
//---
// function compose(f,g) {
//   return function(...a) {
//     return f(g(...a));
//   }
// }
//---
// function compose(f, g) {
//   return function() {
//     return f(g.apply(this, arguments));
//   };
// }
//---
// function compose(f, g) {
//   return (...args) => f(g(...args));
// }
//---Test---
//
//=== End ( Function Composition (2) ) ===


//---------------------------------------------------------------------------------------------------
// Closures and Scopes
// (6 kyu) https://www.codewars.com/kata/closures-and-scopes
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Closures and Scopes**
//We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:
//var callbacks = createFunctions(5); // create an array, containing 5 functions
//callbacks[0](); // must return 0
//callbacks[3](); // must return 3
//We already implemented that function, but when we actually run the code, the result doesn't look like what we expected.
// Can you spot, what's wrong with it? A test fixture is also available
//### **Замыкания и области видимости**
//Мы хотим создать функцию, которая возвращает массив функций, которые возвращают свой индекс в массиве. Для лучшего понимания вот пример:
//var callbacks = createFunctions(5); // create an array, containing 5 functions
//callbacks[0](); // must return 0
//callbacks[3](); // must return 3
//Мы уже реализовали эту функцию, но когда мы действительно запускаем код, результат не похож на то, что мы ожидали.
// Вы можете заметить, что с этим не так? Также доступен тестовый стенд.
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


