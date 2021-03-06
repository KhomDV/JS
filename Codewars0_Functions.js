


//---------------------------------------------------------------------------------------------------
//   Codewars #0 Functions
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// Are arrow functions odd?
// (8 kyu) https://www.codewars.com/kata/are-arrow-functions-odd
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Are arrow functions odd?**
//Time to test your basic knowledge in functions! Return the odds from a list:
//[1, 2, 3, 4, 5]  -->  [1, 3, 5]
//[2, 4, 6]        -->  []
//
//### **Странные функции стрелок?**
//Пришло время проверить свои базовые знания о функциях! Верните коэффициенты из списка:
//[1, 2, 3, 4, 5]  -->  [1, 3, 5]
//[2, 4, 6]        -->  []
//
//---Solution---
// function odds(values) {
//   return values.filter( (x)=>x%2!==0 );
// }
//
//---Test---
// console.log( odds([1, 2, 3, 4, 5]) );  //[1, 3, 5]
// console.log( odds([2, 4, 6]) );  //[]
//=== End ( Are arrow functions odd? ) ===


//---------------------------------------------------------------------------------------------------
// Test Your Knowledge Of Function Scope
// (7 kyu) https://www.codewars.com/kata/test-your-knowledge-of-function-scope
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Test Your Knowledge Of Function Scope**
//Write a function that adds from two invocations.
//add(3)(4)  // 7
//add(12)(20) // 32
//
//### **Проверьте свои знания об объеме функций**
//Напишите функцию, которая складывает из двух вызовов.
//add(3)(4)  // 7
//add(12)(20) // 32
//
//---Solution---
// //--1--
// const add = (a) => (b) => a + b;
// //--2--
// function add(x) {
//   return function(y) {
//     return x + y
//   }
// }
//
//---Test---
// console.log( add(2)(5) ); //, 7,    'Should return the addition of these invocations!')
// console.log( add(14)(25) ); //, 39, 'Should return the addition of these invocations!')
// 
//=== End ( Test Your Knowledge Of Function Scope ) ===


//---------------------------------------------------------------------------------------------------
// Run your String
// (7 kyu) https://www.codewars.com/kata/run-your-string
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Run your String**
//1. Function should accept two arguments:
//arg: any type
//object with properties:
//param: string type.
//func: string type. This string is a body of executable function
//2. Function should evaluate code of string passed as 'func' with parameter arg passed as argument and
//return result of execution
//Example:
//var arg = 4,                         // arg for "string" function call
//    obj = {
//      param: 'num',                  // parameter name for function in string  
//      func: 'return Math.sqrt(num)'  // function that need call with arg var
//    };
//runYourString(arg, obj)              // we expect it should return 2 which is a result of square root of 4
//ps: Solution of this Kata just fun language trick.
//Usage of this code in production is not recommended.
//
//### **Запустите свою строку**
//1. Функция должна принимать два аргумента:
//аргумент: любой тип
//объект со свойствами:
//param: строковый тип.
//func: строковый тип. Эта строка представляет собой тело исполняемой функции
//2. Функция должна оценивать код строки, переданной как 'func' с параметром arg, переданным в качестве аргумента,
//и возвращать результат выполнения
//Пример:
//var arg = 4,                         // arg for "string" function call
//    obj = {
//      param: 'num',                  // parameter name for function in string  
//      func: 'return Math.sqrt(num)'  // function that need call with arg var
//    };
//runYourString(arg, obj)              // we expect it should return 2 which is a result of square root of 4
//ps: Решение этой каты просто забавный языковой трюк.
//Не рекомендуется использовать этот код в продакшене.
//
//---Solution---
// function runYourString (arg, obj) {
//   return new Function(obj.param, obj.func)(arg);
// }
//
//---Test---
// console.log( runYourString(16, {param: 'num', func: 'return Math.sqrt(num)'}) ); //, 4)
// console.log( runYourString(true, {param: 'val', func: 'return val'}) ); //, true)
// 
//=== End ( Run your String ) ===


//---------------------------------------------------------------------------------------------------
// Factorial Factory
// (7 kyu) https://www.codewars.com/kata/factorial-factory
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Factorial Factory**
//In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every
//integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120
//Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.
//You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None .
//Note: 0! is always equal to 1. Negative values should return null;
//For more on Factorials : http://en.wikipedia.org/wiki/Factorial
//
//### **Факториал Завод**
//В математике факториал целого числа n записывается как n! Он равен произведению n и всех предшествующих целых чисел.
//Например: 5! = 1 х 2 х 3 х 4 х 5 = 120
//Ваша миссия проста: напишите функцию, которая принимает целое число n и возвращает n!
//Вам гарантирован целочисленный аргумент. При любых значениях за пределами положительного диапазона,
//возврат null, nilили None.
//Примечание: 0! всегда равно 1. Отрицательные значения должны возвращать null;
//Подробнее о факториалах: http://en.wikipedia.org/wiki/Factorial
//
//---Solution---
// function factorial (n) {
//   if (n < 0) return null;
//   let result = 1;
//   for (i=1; i<=n; i++) {
//     result = result * i;
//   }
//   return result;
// }
//--2-- Возможный вариант решения, но не лучший
// function factorial (n) {
//   if (n > -1)
//     return n == 0 ? 1 : n * factorial(n - 1);
// }
//
//---Test---
// console.log( factorial(2) ); //, 2, 'Your math may be incorrect');
// console.log( factorial(5) ); //, 120, 'Your math may be incorrect');
// console.log( factorial(-1) ); //, null, "Don't forget to check for negatives!");
//
//=== End ( Factorial Factory ) ===


//---------------------------------------------------------------------------------------------------
// Recursion 101
// (7 kyu) https://www.codewars.com/kata/recursion-101
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Recursion 101**
//In this Kata, you will be given two positive integers a and b and your task will be to apply the following operations:
//i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
//ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
//iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].
//a and b will both be lower than 10E8.
//More examples in tests cases. Good luck!
//Please also try Simple time difference
//
//### **Рекурсия 101**
//В этом ката, вы получите два положительных целых чисел aи , bи ваша задача будет применять следующие операции:
//i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
//ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
//iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].
//aи bоба будут ниже 10E8.
//Еще примеры в тестовых кейсах. Удачи!
//Пожалуйста, попробуйте также Простую разницу во времени
//
//---Solution---
// function solve(a,b) {
//   if (a === 0 || b === 0) {
//     return [a,b];
//   } else {
//     if (a >= 2*b) {
//       a = a - 2*b;
//       return solve(a,b);
//     } else {
//       if (b >= 2*a) {
//         b = b - 2*a;
//         return solve(a,b);
//       } else {
//         return [a,b];
//       }
//     }
//   }
// }
//--2-- Как вариант через стрелочную функцию
// const solve = (a, b) => 
//   !a || !b ? [a, b] : a >= 2 * b ? solve(a - 2 * b, b) : b >= 2 * a ? solve(a, b - 2 * a) : [a, b];
//
//---Test---
// console.log( solve(6,19) ); //,[6,7]);
// console.log( solve(2,1) ); //,[0,1]);
// console.log( solve(22,5) ); //,[0,1]);
// console.log( solve(2,10) ); //,[2,2]);
// 
//=== End ( Recursion 101 ) ===


//---------------------------------------------------------------------------------------------------
// Decimal to binary converter
// (7 kyu) https://www.codewars.com/kata/decimal-to-binary-converter
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Decimal to binary converter**
//Convert decimal numbers to binary. Enjoy! No cheating. No toString
//
//### **Преобразователь десятичных чисел в двоичные**
//Преобразуйте десятичные числа в двоичные. Наслаждаться! Без обмана. Нет toString
//
//---Solution---
// function decToBin(d) {
//   if (d === 0) return '0';
//   let converted = '';
//   while (d >= 1) {
//     converted = ''+(d%2) + converted;
//     d = Math.floor(d/2);
//   }
//   return converted;
// }
//--2--
// function decToBin(d) {
//   let s = ""
//   for (; d; d >>= 1) s = (d & 1) + s
//   return s || "0"
// }
//
//---Test---
// console.log( decToBin(0) ); //, '0');
// console.log( decToBin(1) ); //, '1');
// console.log( decToBin(2) ); //, '10');
// console.log( decToBin(3) ); //, '11');
// console.log( decToBin(21) ); //, '10101');
// console.log( decToBin(31) ); //, '11111');
// 
//=== End ( Decimal to binary converter ) ===
//===================================================================================================
