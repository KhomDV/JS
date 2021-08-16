


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
function runYourString (arg, obj) {
  return new Function(obj.param, obj.func)(arg);
}
//
//---Test---
console.log( runYourString(16, {param: 'num', func: 'return Math.sqrt(num)'}) ); //, 4)
console.log( runYourString(true, {param: 'val', func: 'return val'}) ); //, true)
// 
//=== End ( Run your String ) ===





//---------------------------------------------------------------------------------------------------
// Credit Card Mask
// (7 kyu) https://www.codewars.com/kata/credit-card-mask
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Credit Card Mask**
//Usually when you buy something, you're asked whether your credit card number,
//phone number or answer to your most secret question is still correct.
//However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//Your task is to write a function maskify, which changes all but the last four characters into '#'.
//Examples
//maskify("4556364607935616") == "############5616"
//maskify(     "64607935616") ==      "#######5616"
//maskify(               "1") ==                "1"
//maskify(                "") ==                 ""
//// "What was the name of your first pet?"
//maskify("Skippy")                                   == "##ippy"
//maskify("Nananananananananananananananana Batman!") == "####################################man!"
//
//### **Алгоритм пузырьковой сортировки**
//Обычно, когда вы что-то покупаете, вас спрашивают, верен ли номер вашей кредитной карты,
//номер телефона или ответ на самый секретный вопрос. Однако, поскольку кто-то может взглянуть через ваше плечо,
//вы не хотите, чтобы это отображалось на вашем экране. Вместо этого мы маскируем это.
//Ваша задача - написать функцию maskify, которая заменяет все символы, кроме последних четырех, на '#'.
//Примеры
//maskify("4556364607935616") == "############5616"
//maskify(     "64607935616") ==      "#######5616"
//maskify(               "1") ==                "1"
//maskify(                "") ==                 ""
//// "What was the name of your first pet?"
//maskify("Skippy")                                   == "##ippy"
//maskify("Nananananananananananananananana Batman!") == "####################################man!"
//
//---Solution---
// function maskify(cc) {
//   return cc.length <= 4 ? cc : `${'#'.repeat(cc.length-4)}${cc.substring(cc.length-4)}`;
//   //
//   // return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
//   // return cc.replace(/.(?=....)/g, '#');
//   // return cc.replace(/.(?=.{4})/g, "#");
// }
//
//---Test---
// console.log( maskify('4556364607935616') ); //, '############5616');
// console.log( maskify('1') ); //, '1');
// console.log( maskify('11111') ); //, '#1111');
//
//=== End ( Credit Card Mask ) ===


//---------------------------------------------------------------------------------------------------
// Complementary DNA
// (7 kyu) https://www.codewars.com/kata/complementary-dna
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Complementary DNA**
//Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions"
//for the development and functioning of living organisms.
//If you want to know more: http://en.wikipedia.org/wiki/DNA
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
//You have function with one side of the DNA (string, except for Haskell);
//you need to get the other complementary side. DNA strand is never empty or there is no DNA at all
//(again, except for Haskell).
//More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
//Example: (input: output)
//DNAStrand ("ATTGC") // return "TAACG"
//DNAStrand ("GTAT") // return "CATA" 
//
//### **Комплементарная ДНК**
//Дезоксирибонуклеиновая кислота (ДНК) - это химическое вещество, обнаруженное в ядре клеток и несущее
//«инструкции» для развития и функционирования живых организмов.
//Если вы хотите узнать больше: http://en.wikipedia.org/wiki/DNA
//В цепочках ДНК символы «А» и «Т» дополняют друг друга, как «С» и «G». У вас есть функция с одной стороной ДНК
//(строка, кроме Haskell); вам нужно получить другую дополнительную сторону.
//Нить ДНК никогда не бывает пустой или ДНК вообще не бывает (опять же, за исключением Haskell).
//Более похожие упражнения можно найти здесь: http://rosalind.info/problems/list-view/ (источник)
//Пример: ( ввод: вывод )
//DNAStrand ("ATTGC") // return "TAACG"
//DNAStrand ("GTAT") // return "CATA" 
//
//---Solution---
// function DNAStrand(dna){
//   return dna.replace(/A|T|C|G/g, function(match) {
//     const repacements = {A: 'T', T: 'A', C: 'G', G: 'C'};
//     return repacements[match];
//   });
// }
// //2
// const DNAStrand = dna => dna.replace(/./g, m => 'CGAT'['GCTA'.indexOf(m)]);
// //3
// let pairs = {A:'T',T:'A',C:'G',G:'C'};
// const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);
// //4
// var pairs = {'A':'T','T':'A','C':'G','G':'C'};
// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }
//
//---Test---
// console.log( DNAStrand("AAAA") ); //,"TTTT","String AAAA is")
// console.log( DNAStrand("ATTGC") ); //,"TAACG","String ATTGC is")
// console.log( DNAStrand("GTAT") ); //,"CATA","String GTAT is")   
// 
//=== End ( Complementary DNA ) ===


//---------------------------------------------------------------------------------------------------
// Make a function that does arithmetic!
// (7 kyu) https://www.codewars.com/kata/make-a-function-that-does-arithmetic
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Make a function that does arithmetic!**
//Given two numbers and an arithmetic operator (the name of it, as a string),
//return the result of the two numbers having that operator used on them.
//a and b will both be positive integers, and a will always be the first number in the operation,
//and b always the second.
//The four operators are "add", "subtract", "divide", "multiply".
//A few examples:
//arithmetic(5, 2, "add")      => returns 7
//arithmetic(5, 2, "subtract") => returns 3
//rithmetic(5, 2, "multiply") => returns 10
//arithmetic(5, 2, "divide")   => returns 2.5
//ArithmeticFunction.arithmetic(5, 2, "add")      => returns 7
//ArithmeticFunction.arithmetic(5, 2, "subtract") => returns 3
//ArithmeticFunction.arithmetic(5, 2, "multiply") => returns 10
//ArithmeticFunction.arithmetic(5, 2, "divide")   => returns 2
//Try to do it without using if statements!
//
//### **Сделайте функцию, которая выполняет арифметические операции!**
//Учитывая два числа и арифметический оператор (его имя в виде строки),
//верните результат двух чисел, для которых используется этот оператор.
//aи bоба будут положительными целыми числами и aвсегда будут первым числом в операции и bвсегда вторым.
//Четыре оператора - это «сложение», «вычитание», «деление», «умножение».
//Несколько примеров:
//arithmetic(5, 2, "add")      => returns 7
//arithmetic(5, 2, "subtract") => returns 3
//arithmetic(5, 2, "multiply") => returns 10
//arithmetic(5, 2, "divide")   => returns 2.5
//ArithmeticFunction.arithmetic(5, 2, "add")      => returns 7
//ArithmeticFunction.arithmetic(5, 2, "subtract") => returns 3
//ArithmeticFunction.arithmetic(5, 2, "multiply") => returns 10
//ArithmeticFunction.arithmetic(5, 2, "divide")   => returns 2
//Попробуйте сделать это без использования операторов if!
//
//---Solution---
// function arithmetic(a, b, operator){
//   let compute = {add: '+', subtract: '-', multiply: '*', divide: '/'};
//   return eval(""+ a + compute[operator] + b);
// }
// //2
// const arithmetic = (a, b, operator) => ({
//   'add'     : a + b,
//   'subtract': a - b,
//   'multiply': a * b,
//   'divide'  : a / b
// }[operator])
//
//---Test---
// console.log( arithmetic(1, 2, "add") ); //, 3, "'add' should return the two numbers added together!");
// console.log( arithmetic(8, 2, "subtract") ); //, 6, "'subtract' should return a minus b!");
// console.log( arithmetic(5, 2, "multiply") ); //, 10, "'multiply' should return a multiplied by b!");
// console.log( arithmetic(8, 2, "divide") ); //, 4, "'divide' should return a divided by b!");
// 
//=== End ( Make a function that does arithmetic! ) ===


//---------------------------------------------------------------------------------------------------
// Basic JS - Calculating averages
// (7 kyu) https://www.codewars.com/kata/basic-js-calculating-averages
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Basic JS - Calculating averages**
//Let's build a calculator that can calculate the average for an arbitrary number of arguments.
//The test expects you to provide a Calculator object with an average method:
//Calculator.average()
//The test also expects that when you pass no arguments, it returns 0. The arguments are expected
//to be integers.
//It expects Calculator.average(3,4,5) to return 4.
//
//### **Basic JS - Расчет средних значений**
//Давайте построим калькулятор, который может вычислять среднее значение для произвольного
//количества аргументов.
//Тест ожидает, что вы предоставите объекту Calculator метод усреднения:
//Calculator.average()
//Тест также предполагает, что если вы не передаете аргументов, он вернет 0.
//Ожидается, что аргументы будут целыми числами.
//Ожидается, что Calculator.average (3,4,5) вернет 4.
//
//---Solution---
// var Calculator = {
//   average: function() {
//     return arguments.length === 0 ? 0 : [...arguments].reduce( (sum, el) => sum + el) / arguments.length;
//   }
// };
//
//---Test---
// console.log( Calculator.average(1,2,3,4) );
//
//=== End ( Calculating averages ) ===


//---------------------------------------------------------------------------------------------------
// Whose bicycle?
// (7 kyu) https://www.codewars.com/kata/whose-bicycle
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Whose bicycle?**
//I am the father of three wonderful sons. before the beginning of the school year,
//I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year.
//it's time to keep promises and I count on you.
//You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:
//{
//  'algebra': 6,
//  'history': 8,
//  'physics': 9,
//  'geography': 2,
//  'chemistry': 9
//}
//Return please :
//'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.
//'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.
//'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
//If two or three sons have the same highest marks, you need to choose the younger one. Use the age table which is constant and preloaded:
//const ageTable = {
//                  'firstSonAge': 14,
//                  'secondSonAge': 9,
//                  'thirdSonAge': 8
//                }
//
//### **Чей велосипед?**
//Я отец трех замечательных сыновей. Перед началом учебного года я пообещал им, что куплю велосипед тому,
//кто принесет лучшие оценки в конце учебного года. Пришло время выполнять обещания, и я рассчитываю на тебя.
//У вас есть 3 объекта ввода (школьные дневники) со школьными предметами и оценками (1-10). Например:
//{
//  'algebra': 6,
//  'history': 8,
//  'physics': 9,
//  'geography': 2,
//  'chemistry': 9
//}
//Верните пожалуйста:
//'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.
//'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.
//'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
//Если у двух-трех сыновей одинаковые высшие оценки, нужно выбрать младшего.
//Используйте постоянную и предварительно загруженную таблицу возрастов:
//const ageTable = {
//                  'firstSonAge': 14,
//                  'secondSonAge': 9,
//                  'thirdSonAge': 8
//                }
//
//---Solution---
//function whoseBicycle(diary1, diary2, diary3) {
// //--1--
// function whoseBicycle(...diary) {
//   const ageTable = {'firstSonAge': 14,
//                     'secondSonAge': 9,
//                     'thirdSonAge': 8
//                   };

//   const ageSon = Object.values(ageTable);

//   let maxMark = 0;
//   let marksSon = [];
//   let sonNumb = '';
//   for (i=0; i<diary.length; i++) {
//     const mark = Object.values(diary[i]).reduce( (sum, el) => sum + el);
//     if (maxMark < mark) {
//       maxMark = mark
//     };
//     sonNumb = '';
//     switch(i) {
//       case 0:
//         sonNumb = 'first';
//         break;
//       case 1:  
//         sonNumb = 'second';
//         break;
//       case 2:  
//         sonNumb = 'third';
//         break;
//     };
//     marksSon.push( {
//                     mark: mark,
//                     age: ageSon[i],
//                     son: sonNumb
//                     });
//   }

//   marksSon.sort (function (a,b) {
//     return 2 * (a.mark > b.mark ? 1 : a.mark < b.mark ? -1 : 0) + 1 * (a.age > b.age ? 1 : a.age < b.age ? -1 : 0)
//   });
//   const ind = marksSon.findIndex((x)=> x.mark === maxMark )

//   return `I need to buy a bicycle for my ${marksSon[ind].son} son.`;
// }
// //--2--
// function whoseBicycle(dairy1, dairy2, dairy3) {
//   const diaries = [dairy1, dairy2, dairy3];
//   const son = {
//     0: 'first',
//     1: 'second',
//     2: 'third'
//   };
//   const scores = diaries.map((diary, index) => {
//     const keys = Object.keys(diary);
    
//     return keys.reduce((acc, cur) => acc + diary[cur], 0);
//   });
  
//   const maxValue = Math.max(...scores);
  
//   const maxDiary = scores.lastIndexOf(maxValue);
  
//   return `I need to buy a bicycle for my ${son[maxDiary]} son.`;
// }
// //--3--
// function whoseBicycle(a, b, c) {
//   [a, b, c] = [a, b, c].map(x => Object.values(x).reduce((y, z) => y + z, 0));
//   let n = Math.max(a, b, c);
//   return `I need to buy a bicycle for my ${n === c ? "third" : n === b ? "second" : "first"} son.`;
// }
//
//---Test---
// console.log( Calculator.average(1,2,3,4) );
// let res = whoseBicycle(
//               {
//                 'algebra': 6,
//                 'history': 7,
//                 'physics': 8,
//                 'geography': 9,
//                 'chemistry': 10
//               },
//               {
//                 'algebra': 8,
//                 'history': 7,
//                 'physics': 8,
//                 'geography': 9,
//                 'chemistry': 10
//               },
//               {
//                 'algebra': 6,
//                 'history': 5,
//                 'physics': 5,
//                 'geography': 9,
//                 'chemistry': 10
//               }
//             ); //, 'I need to buy a bicycle for my second son.'
// console.log( res );
  
// res = whoseBicycle(
//               {
//                 'algebra': 6,
//                 'history': 7,
//                 'physics': 8,
//                 'geography': 9,
//                 'chemistry': 10
//               },
//               {
//                 'algebra':6,
//                 'history': 7,
//                 'physics': 8,
//                 'geography': 9,
//                 'chemistry': 10
//               },
//               {
//                 'algebra': 6,
//                 'history': 7,
//                 'physics': 8,
//                 'geography': 9,
//                 'chemistry': 10
//               }
//             ); //, 'I need to buy a bicycle for my third son.'
// console.log( res );
  
// res = whoseBicycle(
//               {
//                 'algebra': 6,
//                 'history': 7,
//                 'physics': 8,
//                 'geography': 9,
//                 'chemistry': 5
//               },
//               {
//                 'algebra':6,
//                 'history': 7,
//                 'physics': 8,
//                 'geography': 9,
//                 'chemistry': 10
//               },
//               {
//                 'algebra': 6,
//                 'history': 7,
//                 'physics': 8,
//                 'geography': 9,
//                 'chemistry': 10
//               }
//             ); //, 'I need to buy a bicycle for my third son.'
// console.log( res );
  
// res = whoseBicycle(
//               {
//                 'algebra': 3,
//                 'history': 7,
//                 'physics': 8,
//                 'geography': 4,
//                 'chemistry': 10
//               },
//               {
//                 'algebra':6,
//                 'history': 7,
//                 'physics': 8,
//                 'geography': 9,
//                 'chemistry': 4
//               },
//               {
//                 'algebra': 9,
//                 'history': 7,
//                 'physics': 9,
//                 'geography': 9,
//                 'chemistry': 10
//               }
//             ); //, 'I need to buy a bicycle for my third son.'
// console.log( res );
//
//=== End ( Whose bicycle? ) ===
//===================================================================================================
