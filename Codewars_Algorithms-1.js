


//---------------------------------------------------------------------------------------------------
//   Codewars Algorithms-1
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// Matrix creation
// (7 kyu) https://www.codewars.com/kata/matrix-creation
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Matrix creation**
//Create an identity matrix of the specified size( >= 0).
//Some examples:
//(1)  =>  [[1]]
//(2) => [ [1,0],
//         [0,1] ]
//(5) => [ [1,0,0,0,0],
//         [0,1,0,0,0],
//         [0,0,1,0,0],
//         [0,0,0,1,0],
//         [0,0,0,0,1] ]
//
//### **Создание матрицы**
//Создайте единичную матрицу указанного размера (> = 0).
//Некоторые примеры:
//(1)  =>  [[1]]
//(2) => [ [1,0],
//         [0,1] ]
//(5) => [ [1,0,0,0,0],
//         [0,1,0,0,0],
//         [0,0,1,0,0],
//         [0,0,0,1,0],
//         [0,0,0,0,1] ]
//
//---Solution---
// function getMatrix(number) {
//   result = [];
//   for (i=1; i <= number; i++) {
//     result.push(Array(number).fill(0));
//     result[i-1][i-1] = 1;
//   }
//   return result;
// }
//--2-- Как решение...
// const getMatrix = n => [...Array(n)].map((e,i)=> [...Array(n)].map((s,j)=> +(i == j))); 
//
//---Test---
// console.log( getMatrix(1) ); //, [[1]]);
// console.log( getMatrix(2) ); //, [[1, 0], [0, 1]]);
// console.log( getMatrix(5) ); //, [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]);
//=== End ( Matrix creation ) ===


//---------------------------------------------------------------------------------------------------
// Basics 04: Rotate Matrix
// (7 kyu) https://www.codewars.com/kata/basics-04-rotate-matrix
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Basics 04: Rotate Matrix**
//Your task is to rotate a matrix 90 degree to the left. The matrix is an array of integers with dimension n,m.
//So this kata checks some basics, it's not too difficult.
//There's nothing more to explain, no tricks, no "bad cases";-). Perhaps you take a look at the testcases...
//One easy example:
//Input: {{-1, 4, 5},
//        { 2, 3, 4}}
//Output: {{ 5, 4},
//         { 4, 3},
//         {-1, 2}}
//First there are some static tests, later on random tests too...
//
//### **Основы 04: Поворот матрицы**
//Ваша задача - повернуть матрицу на 90 градусов влево. Матрица представляет собой массив целых чисел размерности n, m.
//Итак, это ката проверяет некоторые основы, это не так уж сложно.
//Больше объяснять нечего, никаких уловок, никаких "плохих дел" ;-). Возможно, вы посмотрите тестовые примеры ...
//Один простой пример:
//Input: {{-1, 4, 5},
//        { 2, 3, 4}}
//Output: {{ 5, 4},
//         { 4, 3},
//         {-1, 2}}
//Сначала есть статические тесты, потом тоже случайные ...
//
//---Solution---
// var rotateMatrix = arr => {
//   const n = arr[0].length;
//   let result = new Array(n);
//   for (let i = 0; i < n; i++) {
//     result[i] = Array(arr.length);
//     for (let j = 0; j < arr.length; j++) {
//       result[i][j] = arr[j][n-1-i];
//     }
//   }
//   return result;
// }
// //--2--
// return arr[0].map((x, i) => arr.map(x => x[x.length - 1 - i]));
// //--3--
// let rotateMatrix = a => a[0].map((_, i) => a.map(r => r[i])).reverse();
//
//---Test---
// console.log( rotateMatrix([[-1,4,5],[2,3,4]]) ); // b = [[5,4],[4,3],[-1,2]];
// 
//=== End ( Basics 04: Rotate Matrix ) ===


//---------------------------------------------------------------------------------------------------
// Convert Hash To An Array
// (7 kyu) https://www.codewars.com/kata/convert-hash-to-an-array
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Convert Hash To An Array**
//Convert a hash into an array. Nothing more, Nothing less.
//{name: 'Jeremy', age: 24, role: 'Software Engineer'}
//should be converted into
//[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
//Note: The output array should be sorted alphabetically.
//
//### **Преобразовать хеш в массив**
//Преобразуйте хеш в массив. Ни больше ни меньше.
//{name: 'Jeremy', age: 24, role: 'Software Engineer'}
//следует преобразовать в
//[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
//Примечание . Выходной массив следует отсортировать по алфавиту.
//
//---Solution---
function convertHashToArray(hash) {
  return Object.entries(hash).sort();
}
//--2--
const convertHashToArray = (hash) => Object.keys(hash).map(key => [key, hash[key]]).sort();
//
//---Test---
console.log( convertHashToArray({name: "Jeremy"}) ); //,[["name", "Jeremy"]]);
console.log( convertHashToArray({name: "Jeremy", age: 24}) ); //,[["age", 24], ["name", "Jeremy"]]);
console.log( convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}) ); //,[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
console.log( convertHashToArray({product: "CodeWars", powerLevelOver: 9000}) ); //,[["powerLevelOver", 9000], ["product", "CodeWars"]]);
console.log( convertHashToArray({}) ); //,[]);
// 
//=== End ( Convert Hash To An Array ) ===







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
