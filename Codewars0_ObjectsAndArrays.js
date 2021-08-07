


//---------------------------------------------------------------------------------------------------
//   Codewars #0 Objects & Arrays
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// Find the stray number
// (7 kyu) https://www.codewars.com/kata/find-the-stray-number
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Find the stray number**
//You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//Complete the method which accepts such an array, and returns that single different number.
//The input array will always be valid! (odd-length >= 3)
//Examples
//[1, 1, 2] ==> 2
//[17, 17, 3, 17, 17, 17, 17] ==> 3
//
//### **Найдите случайный номер**
//Вам дан массив целых чисел нечетной длины , в котором все они одинаковы, за исключением одного единственного числа.
//Завершите метод, который принимает такой массив и возвращает это единственное другое число.
//Входной массив всегда будет действительным! (нечетная длина> = 3)
//Примеры
//[1, 1, 2] ==> 2
//[17, 17, 3, 17, 17, 17, 17] ==> 3
//
//---Solution---
// function stray(numbers) {
//   return numbers.reduce((a, b) => a ^ b);
// }
//Решение:
//1. Методом бинарного исключающего ИЛИ (^)
//Длина массива - нечетная и один отличающийся элемент.
//Следовательно: множество одинаковых элементов - парное, их и исключаем - остается один искомый элемент
//2. Сравнение индексов элемента с начала массива и с конца массива - когда индекс один - элемент найден
//3. Сортировка и сравнение первого, среднего, последенего элемента
//4. min, max
//Ниже просто пример подсчета одинаковых элементов в массиве
// let oNumb = numbers.reduce((acc, el) => {
//   acc[el] = (acc[el] || 0) + 1;
//   return acc;
// }, {});
//
//---Test---
// console.log( stray([1, 1, 2]) ); //2
// console.log( stray([17, 17, 3, 17, 17, 17, 17]) ); //3
//=== End ( Find the stray number ) ===


//---------------------------------------------------------------------------------------------------
// Euclidean distance in n dimensions
// (7 kyu) https://www.codewars.com/kata/euclidean-distance-in-n-dimensions
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Euclidean distance in n dimensions**
//Implement a function to calculate the distance between two points in n-dimensional space.
//The two points will be passed to your function as arrays of the same length (tuples in Python).
//Round your answers to two decimal places.
//
//### **Евклидово расстояние в n измерениях**
//Реализуйте функцию для вычисления расстояния между двумя точками в n-мерном пространстве.
//Две точки будут переданы вашей функции в виде массивов одинаковой длины (кортежи в Python).
//Округлите ответы до двух десятичных знаков.
//
//---Solution---
// function euclideanDistance(point1, point2) {
//   return Math.ceil(( Math.sqrt( point1.reduce((sum, el, i) => sum + Math.pow((el - point2[i]), 2), 0) ) )*100)/100;
// }
//
//---Test---
// console.log( euclideanDistance([-1], [2]) ); //, 3);
// console.log( euclideanDistance([-1,2], [2,4]) ); //, 3.61);
// console.log( euclideanDistance([-1,2,5], [2,4,9]) ); //, 5.39);
// 
//=== End ( Euclidean distance in n dimensions ) ===

 
//---------------------------------------------------------------------------------------------------
// Create Phone Number
// (6 kyu) https://www.codewars.com/kata/create-phone-number
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Create Phone Number**
//Write a function that accepts an array of 10 integers (between 0 and 9),
//that returns a string of those numbers in the form of a phone number.
//Example
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//The returned format must be correct in order to complete this challenge.
//Don't forget the space after the closing parentheses!
//
//### **Создать номер телефона**
//Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9),
//который возвращает строку этих чисел в форме номера телефона.
//Пример
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//Возвращенный формат должен быть правильным для выполнения этой задачи.
//Не забывайте пробел после закрывающих скобок!
//
//---Solution---
// function createPhoneNumber(numbers) {
//   return numbers.join('').replace(/([\d]{3})([\d]{3})([\d]{4})/g,'($1) $2-$3');
//   return '(' + numbers.slice(0,3).join('') + ') ' + numbers.slice(3,6).join('') + '-' + numbers.slice(6).join('');
// }
//
//---Test---
// console.log( createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ); //, "(123) 456-7890");
// console.log( createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) ); //, "(111) 111-1111");
// console.log( createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ); //, "(123) 456-7890");
// 
//=== End ( Create Phone Number ) ===


//---------------------------------------------------------------------------------------------------
// Bubblesort Once
// (7 kyu) https://www.codewars.com/kata/bubblesort-once
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Bubblesort Algorithm**
//Overview
//The Bubblesort Algorithm is one of many algorithms used to sort a list of similar
//items (e.g. all numbers or all letters) into either ascending order or descending order. Given a list (e.g.):
//[9, 7, 5, 3, 1, 2, 4, 6, 8]
//To sort this list in ascending order using Bubblesort, you first have to compare the first two terms of the list.
//If the first term is larger than the second term, you perform a swap. The list then becomes:
//[7, 9, 5, 3, 1, 2, 4, 6, 8] // The "9" and "7" have been swapped because 9 is larger than 7 and thus 9 should be after 7
//You then proceed by comparing the 2nd and 3rd terms, performing a swap when necessary,
//and then the 3rd and 4th term, then the 4th and 5th term, etc. etc.
//When you reach the end of the list, it is said that you have completed 1 complete pass.
//Task
//Given an array of integers, your function bubblesortOnce/bubblesort_once/BubblesortOnce
//(or equivalent, depending on your language's naming conventions) should return a new array equivalent
//to performing exactly 1 complete pass on the original array. Your function should be pure, i.e.
//it should not mutate the input array.
//
//### **Алгоритм пузырьковой сортировки**
//Обзор
//Алгоритм пузырьковой сортировки - один из многих алгоритмов, используемых для сортировки списка похожих
//элементов (например, всех цифр или всех букв) либо по возрастанию, либо по убыванию. Учитывая список (например):
//[9, 7, 5, 3, 1, 2, 4, 6, 8]
//Чтобы отсортировать этот список в порядке возрастания с помощью пузырьковой сортировки,
//сначала необходимо сравнить первые два члена списка. Если первый член больше второго, вы выполняете обмен.
//Список становится таким:
//[7, 9, 5, 3, 1, 2, 4, 6, 8] // The "9" and "7" have been swapped because 9 is larger than 7 and thus 9 should be after 7
//Затем вы сравниваете 2-й и 3-й члены, при необходимости выполняя замену , а затем 3-й и 4-й члены,
//затем 4-й и 5-й члены и т. Д. И т. Д. Когда вы дойдете до конца списка, будет сказано, что вы выполнили 1 полный проход.
//Задача
//Учитывая массив целых чисел, ваша функция bubblesortOnce/ bubblesort_once/ BubblesortOnce
//(или эквивалент, в зависимости от соглашений об именовании вашего языка) должна возвращать новый массив,
//эквивалентный выполнению ровно 1 полного прохода в исходном массиве.
//Ваша функция должна быть чистой, т.е. она не должна изменять входной массив.
//
//---Solution---
// function bubblesortOnce(a) {
//   //1-solution
//   return a.reduce((acc, el, i) => {
//     if (acc[i] >= a[i+1]) {
//       acc[i+1] = acc[i];
//       acc[i] = a[i+1]
//     }
//     return acc;
//   }, [...a]);
//   //2-solution
//   return [...a].map((e, i, arr) => e > arr[i+1] ? (arr[i] = arr[i+1], arr[i+1] = e, arr[i]) : e)
// }
//
//---Test---
// console.log( bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]) ); //, [7, 5, 3, 1, 2, 4, 6, 8, 9]);
//
//=== End ( Bubblesort Once ) ===


//---------------------------------------------------------------------------------------------------
// Sort with Arrow Functions
// (7 kyu) https://www.codewars.com/kata/sort-with-arrow-functions
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Sort with Arrow Functions**
//Order People by age Using Arrow Function
//Sort and Order people by their age using Arrow Functions
//Task
//Your task is to order a list containg people objects by age using the new Javascript Arrow Functions
//Input
//Input will be a valid array with People objects containing an Age and Name
//Output
//Output will be a valid sorted array with People objects sorted by Age in ascending order
//Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//
//### **Сортировка с помощью стрелок**
//Сортировка людей по возрасту с помощью стрелок
//Сортируйте и упорядочивайте людей по возрасту с помощью стрелочных функций
//Задача
//Ваша задача - упорядочить список, содержащий объекты людей по возрасту, используя новые стрелочные функции Javascript.
//Вход
//Ввод будет допустимым массивом с объектами People, содержащими возраст и имя.
//Выход
//Результатом будет действительный отсортированный массив с объектами People, отсортированными по возрасту в порядке возрастания.
//Ссылка: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//
//---Solution---
var OrderPeople = function(people) {
  return people.sort( (a, b) => a.age - b.age );
}
//
//---Test---
console.log( OrderPeople([ { age: 83, name: 'joel' },
                           { age: 46, name: 'roger' },
                           { age: 99, name: 'vinny' },
                           { age: 26, name: 'don' },
                           { age: 74, name: 'brendan' } ]) );
//[{age:26,name:"don"},{age:46,name:"roger"},{age:74,name:"brendan"},{age:83,name:"joel"},{age:99,name:"vinny"}], 'The array is still empty')
// 
//=== End ( Sort with Arrow Functions ) ===







//---------------------------------------------------------------------------------------------------
// Cat and Mouse - 2D Version
//7 kyu https://www.codewars.com/kata/cat-and-mouse-2d-version/
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Cat and Mouse - 2D Version**
//You will be given a string (map) featuring a cat "C" and a mouse "m".
//The rest of the string will be made up of dots (".")
//The cat can move the given number of moves up, down, left or right, but not diagonally.
//You need to find out if the cat can catch the mouse from it's current position and return "Caught!" or "Escaped!" respectively.
//Finally, if one of two animals are not present, return "boring without two animals".
//Examples
//moves = 5
//map =
//..C......
//.........
//....m....
//returns "Caught!" because the cat can catch the mouse in 4 moves
//moves = 5
//map =
//.C.......
//.........
//......m..
//returns "Escaped!" because the cat cannot catch the mouse in  5 moves
//
//### **Кошка и Мышь - 2D версия**
//Вам дадут веревочку ( map) с изображением кота "C"и мышки "m".
//Остальная часть строки будет состоять из точек ( ".").
//Кошка может перемещаться на указанное количество movesвверх, вниз, влево или вправо, но не по диагонали .
//Вам нужно выяснить, может ли кошка поймать мышь из текущей позиции и вернуться "Caught!"или "Escaped!"соответственно.
//Наконец, если одного из двух животных нет, вернитесь "boring without two animals".
//Примеры
//moves = 5
//map =
//..C......
//.........
//....m....
//returns "Caught!" because the cat can catch the mouse in 4 moves
//moves = 5
//map =
//.C.......
//.........
//......m..
//returns "Escaped!" because the cat cannot catch the mouse in  5 moves
// ---
//
//---Solution---
// function catMouse(map,moves){
//     //Локальное решение
//     if ( !map.includes("C") || !map.includes("m") ) return ('boring without two animals');
//
//     map = map.trim();
//
//     let arr = [];
//     while (true) {
//         const nInd = map.indexOf(' ');
//         if (nInd === -1) {
//             arr.push(map);
//             break;
//         }
//         arr.push(map.substring(0,nInd-1));
//         map = map.substring(nInd).trim();
//     }
//
//     let posC;
//     let posM;
//     arr.forEach((e,i)=> e.indexOf('C')>-1 ? posC = Array(i,e.indexOf('C')) : '');
//     arr.forEach((e,i)=> e.indexOf('m')>-1 ? posM = Array(i,e.indexOf('m')) : '');
//     const nStep = Math.abs(posC[0] - posM[0]) + Math.abs(posC[1] - posM[1]);
//    
//     return (nStep <= moves ? "Caught!" : "Escaped!");
//    
//
//     // Решение на Codewars
//     if ( !map.includes("C") || !map.includes("m") ) return ('boring without two animals');
//
//     const arr = map.split('\n');
//
//     let posC;
//     let posM;
//     arr.forEach((e,i)=> e.indexOf('C')>-1 ? posC = Array(i,e.indexOf('C')) : '');
//     arr.forEach((e,i)=> e.indexOf('m')>-1 ? posM = Array(i,e.indexOf('m')) : '');
//     const nStep = Math.abs(posC[0] - posM[0]) + Math.abs(posC[1] - posM[1]);
//    
//     return (nStep <= moves ? "Caught!" : "Escaped!");
// }
//
//---Test---
//let arrayTest = []
//
//---View solution---
//for (let i=0;i<arrayTest.length;i++) {
//     let map=
//  `..C......
//  .........
//  ....m....`
//       //'Caught!'
//     document.write(catMouse(map,5));
//     document.write(' | ');
//        
//     map=
//     `.C.......
//     .........
//     ......m..` //'Escaped!'
//     document.write(catMouse(map,5));
//     document.write(' | ');
//    
//     map=
//     `..C......
//     .........
//     .........` //'boring without two animals'
//     document.write(catMouse(map,5));
//     document.write(' | ');
//}
// 
//=== End ( Cat and Mouse - 2D Version ) ===


//---------------------------------------------------------------------------------------------------
// Duplicate Encoder
//6 kyu https://www.codewars.com/kata/duplicate-encoder
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Duplicate Encoder**
//The goal of this exercise is to convert a string to a new string where each character
// in the new string is "(" if that character appears only once in the original string,
// or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.
//Examples
//"din"      =>  "((("
//"recede"   =>  "()()()"
//"Success"  =>  ")())())"
//"(( @"     =>  "))((" 
//Notes
//Assertion messages may be unclear about what they display in some languages.
//If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
//
//### **Дубликат кодировщика**
//Цель этого упражнения - преобразовать строку в новую строку,
//где каждый символ в новой строке соответствует тому,
//"("если этот символ появляется только один раз в исходной строке или ")"если этот символ появляется более одного раза в исходной строке.
//Игнорируйте использование заглавных букв при определении дубликата символа.
//Примеры
//"din"      =>  "((("
//"recede"   =>  "()()()"
//"Success"  =>  ")())())"
//"(( @"     =>  "))((" 
//Примечания
//В сообщениях с утверждениями может быть неясно, что они отображают на некоторых языках.
//Если вы читаете "...It Should encode XXX", "XXX"это ожидаемый результат, а не ввод!
// ---
//
//---Solution---
// function duplicateEncode(word){
//     const arrWord = word.toUpperCase().split('');
//     const strCode = arrWord.reduce((strCode,b)=>{
//         return strCode + ( arrWord.filter((e)=>e===b).length > 1 ? ')' : '(' );
//     }, "");
//     return strCode;
// }
//
//---Test---
// let arrayTest = [
//     "din",      //"(((");
//     "recede",   //"()()()");
//     "Success",  //")())())","should ignore case");
//     "(( @"      //"))((");
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//      document.write(duplicateEncode(arrayTest[i]));
//      document.write(' | ');
// }
//
//=== End ( Duplicate Encoder ) ===
//===================================================================================================


//---------------------------------------------------------------------------------------------------
//  Number
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// Squares sequence
//7 kyu https://www.codewars.com/kata/squares-sequence
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Squares sequence**
//Complete the function that returns an array of length n,
//starting with the given number x and the squares of the previous number.
//If n is negative or zero, return an empty array/list.
//Examples
//2, 5  -->  [2, 4, 16, 256, 65536]
//3, 3  -->  [3, 9, 81]
//
//### **Последовательность квадратов**
//Завершите функцию, которая возвращает массив длины n,
//начиная с данного числа xи квадратов предыдущего числа.
//Если nотрицательное значение или ноль, вернуть пустой массив / список.
//Примеры
//2, 5  -->  [2, 4, 16, 256, 65536]
//3, 3  -->  [3, 9, 81]
// ---
//
//---Solution---
// function squares(x, n) {
//     if ( n <= 0 ) return ([]);
//     let arr = [x];
//     for (let i=1; i<n; i++) {
//         arr.push(Math.pow(arr[i-1], 2));
//     }
//     return (arr);
// }
//
//---Test---
//let arrayTest = []
//
//---View solution---
// document.write(squares(2,5)); //,[2,4,16,256,65536]);
// document.write(' | ');
// document.write(squares(3,3)); //,[3,9,81]);  
// document.write(' | ');
// document.write(squares(5,3)); //,[5,25,625]);  
// document.write(' | ');
// document.write(squares(10,4)); //,[10,100,10000,100000000]);  
// document.write(' | ');
// document.write(squares(2,0)); //,[]);
// document.write(' | ');
// document.write(squares(2,-5)); //,[]);
// document.write(' | ');
// for (let i=0;i<arrayTest.length;i++) {
//      document.write(duplicateEncode(arrayTest[i]));
//      document.write(' | ');
// }
//
//=== End ( Squares sequence ) ===


//---------------------------------------------------------------------------------------------------
// Concatenated Sum
//7 kyu https://www.codewars.com/kata/concatenated-sum
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Concatenated Sum**
//The number 198 has the property that 198 = 11 + 99 + 88, i.e.,
//if each of its digits is concatenated twice and then summed,
//the result will be the original number.
//It turns out that 198 is the only number with this property.
//However, the property can be generalized so that each digit is concatenated n times and then summed.
//eg:-
//original number =2997 , n=3
//2997 = 222+999+999+777 and here each digit is concatenated three times.
//original number=-2997 , n=3
//-2997 = -222-999-999-777 and here each digit is concatenated three times.
//Write afunction named check_concatenated_sum that tests if a number has this generalized property.
//
//
//### **Конкатенированная сумма**
//Номер 198имеет свойство, что 198 = 11 + 99 + 88, i.e.,
//if each of its digits is concatenated twice and then summed,
//the result will be the original number.
//Оказывается, это 198единственный номер с таким свойством. Однако это свойство можно обобщить так, чтобы каждая цифра объединялась несколько nраз, а затем суммировалась.
//например:-
//original number =2997 , n=3
//2997 = 222+999+999+777 and here each digit is concatenated three times.
//original number=-2997 , n=3
//-2997 = -222-999-999-777 and here each digit is concatenated three times.
//Напишите функцию с именем, check_concatenated_sumкоторая проверяет, обладает ли число этим обобщенным свойством.
// ---
//
//---Solution---
// function checkConcatenatedSum(number,n){
//     //my
//     const sum = String(Math.abs(number)).split('').reduce((sum,e)=>sum + Number(e.repeat(n)),0);
//     return ( Math.abs(number) === sum ? true : false);
//     //best
//     //var abs = Math.abs(sum);
//     //return abs === [...abs+""].reduce((s, d) => +d.repeat(n) + s, 0);
// }
//
//---Test---
//let arrayTest = []
//
//---View solution---
// document.write(checkConcatenatedSum(2997,3)); //,true)
// document.write(' | ');
// document.write(checkConcatenatedSum(-2997,3)); //,true)
// document.write(' | ');
// for (let i=0;i<arrayTest.length;i++) {
//      document.write(duplicateEncode(arrayTest[i]));
//      document.write(' | ');
// }
//
//=== End ( Concatenated Sum ) ===


//---------------------------------------------------------------------------------------------------
// Filter the number
//7 kyu https://www.codewars.com/kata/filter-the-number
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Filter the number**
//Oh no! The number has been mixed up with the text.
//Your goal is to retreive the number from the text,
//can you return the number back to it's original state?
//Task
//Your task is to return a number from a string.
//Details
//You will be given a string of numbers and letters mixed up,
//you have to return all the numbers in that string in the order they occur.
//
//### **Отфильтровать число**
//Отфильтровать число
//о нет! Число перепутано с текстом.
//Ваша цель - получить номер из текста, можете ли вы вернуть номер в исходное состояние?
//Задача
//Ваша задача - вернуть число из строки.
//Подробности
//Вам будет предоставлена ​​строка из смешанных цифр и букв,
//вы должны вернуть все числа в этой строке в том порядке, в котором они встречаются.
// ---
//
//---Solution---
// var FilterString = function(value) {
//     return +value.replace(/[^+\d]/g, '');
// }
//
//---Test---
// let arrayTest = [
//     "123", //123, 'Just return the numbers');
//     "a1b2c3", //123, 'Just return the numbers');
//     "aa1bb2cc3dd" //123, 'Just return the numbers');
//     ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(FilterString(arrayTest[i]));
//     document.write(' | ');
// }
//
//=== End ( Filter the number ) ===


//---------------------------------------------------------------------------------------------------
// N-th Fibonacci
//6 kyu https://www.codewars.com/kata/n-th-fibonacci
//---------------------------------------------------------------------------------------------------
//---Task---
//### **N-th Fibonacci**
//I love Fibonacci numbers in general, but I must admit I love some more than others.
//I would like for you to write me a function that when given a number (n) returns the n-th number
// in the Fibonacci Sequence.
//For example:
//   nthFibo(4) == 2
//Because 2 is the 4th number in the Fibonacci Sequence.
//For reference, the first two numbers in the Fibonacci sequence are 0 and 1,
// and each subsequent number is the sum of the previous two.
//
//### **N-й уровень Фибоначчи**
//В целом я люблю числа Фибоначчи, но должен признать, что одни люблю больше, чем другие.
//Я хотел бы, чтобы вы написали мне функцию, которая при задании числа (n) возвращает n-е число
// в последовательности Фибоначчи.
//Например:
//   nthFibo(4) == 2
//Потому что 2 - это 4-е число в последовательности Фибоначчи.
//Для справки: первые два числа в последовательности Фибоначчи - это 0 и 1,
// а каждое последующее число является суммой двух предыдущих.
// ---
//
//---Solution---
// function nthFibo(n) {
//   if (n <= 1) return 0;
//   let a = 0;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
//
//---Test---
// let arrayTest = [
//     1, //0,"1-st Fibo");
//     2, //1,"2-nd Fibo");
//     3, //1,"3-rd Fibo");
//     4  //2,"4-th Fibo");
//     ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(nthFibo(arrayTest[i]));
//     document.write(' | ');
// }
//
//=== End ( N-th Fibonacci ) ===

//===================================================================================================


//---------------------------------------------------------------------------------------------------
//  Array
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// Playing with Sets : Intersection
//7 kyu https://www.codewars.com/kata/playing-with-sets-intersection
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Playing with Sets : Intersection**
//Set objects are new JavaScript built-in objects defined since ECMAScript 2015
//A Set lets you store unique values of any type.
//It comes with some useful methods like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . .
//Intersection
//A new set can be constructed by determining which members two sets have "in common".
//The intersection of A and B, denoted by A ∩ B, is the set of all things that are members of both A and B.
//If A ∩ B = ∅, then A and B are said to be disjoint.
//Examples:
//  {1, 2} ∩ {1, 2} = {1, 2}.
//  {1, 2} ∩ {2, 3} = {2}.
//Task
//Create function inter getting 2 sets as arguments and returning a new Set as result of intersection of these 2 sets.
//Examples:
//A = new Set([1,2]);
//B = new Set([2,3]);
//C = inter(A,B) // -> {2}
//
//### **Игра с множествами: пересечение**
//Новый набор можно построить, определив, какие элементы у двух наборов «общие».
//Пересечение А и В, обозначим через А П В, есть множество всех вещей , которые являются членами А и B.
//Если A ∩ B = ∅, то А и В , как говорят, не пересекаются .
//Примеры:
//  {1, 2} ∩ {1, 2} = {1, 2}.
//  {1, 2} ∩ {2, 3} = {2}.
//Задача
//Создайте функцию, interполучающую 2 набора в качестве аргументов и возвращающую новый набор в результате пересечения этих двух наборов.
//Примеры:
//A = new Set([1,2]);
//B = new Set([2,3]);
//C = inter(A,B) // -> {2}
// ---
//
//---Solution---
// function inter(s1, s2){
//     //my
//     var s3 = new Set();
//     for (var elem of s2) {
//         if (s1.has(elem)) {
//             s3.add(elem);
//         }
//     }
//     return s3;
//     //best
//     //return new Set( [...s1].filter( e => s2.has(e) ) )
// }
//
//---Test---
// let arrayTest = [
//     [[1,2],[2,3]],
//     [[1,2],[3,4]],
//     [[1,2],[]],
//     [[],[3,4]]
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(inter(arrayTest[i][0],arrayTest[i][1]));
//     document.write(' | ');
// }
//
//=== End ( Playing with Sets : Intersection ) ===


//---------------------------------------------------------------------------------------------------
// Divide and Conquer
//7 kyu https://www.codewars.com/kata/divide-and-conquer
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Divide and Conquer**
//Given a mixed array of number and string representations of integers,
//add up the string integers and subtract this from the total of the non-string integers.
//Return as a number.
//
//### **Разделяй и властвуй**
//Учитывая смешанный массив числовых и строковых представлений целых чисел,
//сложите строковые целые числа и вычтите это из общего количества целых чисел, не являющихся строковыми.
//Возврат в виде числа.
// ---
//
//---Solution---
// function divCon(x){
//     //my
//     let sumString = 0;
//     let sumNumber = 0;
//     x.forEach(element => {
//         if (typeof(element)==='string') {
//             sumString += Number(element);
//         } else {
//             sumNumber += element;
//         }
//     });
//     return (sumNumber - sumString);
//     //best
//     //return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
//     //const divCon=x=>x.reduce((a,b)=>a+(0+b==b?b:-+b),0)
// }
//
//---Test---
// let arrayTest = [
//     [9, 3, '7', '3'], // 2);
//     ['5', '0', 9, 3, 2, 1, '9', 6, 7], //14); 
//     ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] //13);
// ]    
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(divCon(arrayTest[i]));
//     document.write(' | ');
// }
//
//=== End ( Divide and Conquer ) ===


//---------------------------------------------------------------------------------------------------
// Find the odd int
//6 kyu https://www.codewars.com/kata/find-the-odd-int/
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Find the odd int**
//Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.
//
//### **Найдите нечетное число**
//Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.
//Всегда будет только одно целое число, которое встречается нечетное количество раз.
// ---
//
//---Solution---
// function divCon(x){
//     let result = 0;
//     let arr = [...new Set(x)];
//     for (i=0; i<arr.length; i++) {
//         if ( (x.filter((e) => e===arr[i] ).length % 2) !== 0 ) {
//             result = arr[i];
//         }    
//     }
//     return result;
//     //оригинально!!!
//     //return x.reduce((a, b) => a ^ b);
// }
//
//---Test---
// let arrayTest = [
//     [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], // 5);
//     [1,1,2,-2,5,2,4,4,-1,-2,5],// -1);
//     [20,1,1,2,2,3,3,5,5,4,20,4,5], //5);
//     [10], //10);
//     [1,1,1,1,1,1,10,1,1,1,1], //10);
//     [5,4,3,2,1,5,4,3,2,10,10] //1);
// ]    
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(divCon(arrayTest[i]));
//     document.write(' | ');
// }
//
//=== End ( Find the odd int ) ===


//---------------------------------------------------------------------------------------------------
// Find The Parity Outlier
//6 kyu https://www.codewars.com/kata/find-the-parity-outlier
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Find The Parity Outlier**
//You are given an array (which will have a length of at least 3, but could be very large) containing integers.
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
//Write a method that takes the array as an argument and returns this "outlier" N.
//Examples
//[2, 4, 0, 100, 4, 11, 2602, 36]
//Should return: 11 (the only odd number)
//[160, 3, 1719, 19, 11, 13, -21]
//Should return: 160 (the only even number)
//
//### **Найдите выбросы по четности**
//Вам предоставляется массив (который будет иметь длину не менее 3, но может быть очень большим),
//содержащий целые числа. Массив либо полностью состоит из нечетных целых чисел,
//либо полностью состоит из четных целых чисел, за исключением одного целого числа N.
//Напишите метод, который принимает массив в качестве аргумента и возвращает этот «выброс» N.
//Примеры
//[2, 4, 0, 100, 4, 11, 2602, 36]
//Should return: 11 (the only odd number)
//[160, 3, 1719, 19, 11, 13, -21]
//Should return: 160 (the only even number)
// ---
//
//---Solution---
// function findOutlier(integers){
//     arr = integers.map((e)=>Math.abs(e)%2);
//     return integers[arr.indexOf( (arr.reduce((sum, e)=>sum+e,0) > 1) ? 0 : 1)];
// }
//
//---Test---
// let arrayTest = [
//     [0, 1, 2], //1)
//     [1, 2, 3], //2)
//     [2,6,8,10,3], //3)
//     [0,0,3,0,0], //3)
//     [1,1,0,1,1] // 0)    
// ]    
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(findOutlier(arrayTest[i]));
//     document.write(' | ');
// }
//
//=== End ( Find The Parity Outlier ) ===




//---------------------------------------------------------------------------------------------------
// zipWith
//6 kyu https://www.codewars.com/kata/zipwith
//---------------------------------------------------------------------------------------------------
//---Task---
//### **zipWith**
//zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
//The function value is one new array.
//If the arrays are of unequal length, the output will only be as long as the shorter one.
//(Values of the longer array are simply not used.)
//Inputs should not be modified.
//Examples
//zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
//zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]
//zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
//zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions.
//Input validation
//Assume all input is valid.
//
//### **Воплощать в жизнь zipWith**
//zipWithпринимает функцию и два массива и объединяет их вместе, применяя функцию к каждой паре значений.
//Значение функции - один новый массив.
//Если массивы имеют неодинаковую длину, результат будет такой же длины, как и самый короткий.
//(Значения более длинного массива просто не используются.)
//Входные данные не должны изменяться.
//Примеры
//zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
//zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]
//zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
//zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions.
//Проверка ввода
//Предположим, что все введенные данные действительны.
// ---
//
//---Solution---
// function zipWith(fn,a0,a1) {
//   if (!Array.isArray(a0) || !Array.isArray(a1)) return [];
//   let result = []; 
//   const nlength = Math.min(a0.length, a1.length);
//   for (let i=0; i<nlength; i++) {
//     result.push(fn(a0[i],a1[i]));
//   }
//   return result;
// }
//
//---Test---
// const plus = (a,b) => a+b ;
// let arrayTest = [
//       [plus, [0,1,2,3,4,5], [6,5,4,3,2,1]], // [6,6,6,6,6,6]);
//       [plus, [0,1,2,3,4  ], [6,5,4,3,2,1]], //[6,6,6,6,6  ]);
//       [plus, [0,1,2,3,4,5], [6,5,4,3,2  ]], //[6,6,6,6,6  ]);
//       [Math.pow, [10,10,10,10], [0,1,2,3]], //[1,10,100,1000]);
//       [Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1]], //[4,7,7,4,7,7]);
//       [function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3]], //[0,2,4,6]);
//       [(a,b) => a+b, [0,1,2,3], [0,1,2,3]] // [0,2,4,6]);
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//   document.write(zipWith(arrayTest[i][0],arrayTest[i][1],arrayTest[i][2]));
//     document.write(' | ');
// }
//
//=== End ( zipWith ) ===

//===================================================================================================


//---------------------------------------------------------------------------------------------------
//  Date
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// It is written in the stars
//7 kyu https://www.codewars.com/kata/it-is-written-in-the-stars
//---------------------------------------------------------------------------------------------------
//---Task---
//### **It is written in the stars**
//Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
//Task:
//Your job for today is to finish the starSign function by finding the astrological sign,
//given the birth details as a Date object.
//Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:
//Aquarius ------ 21 January - 19 February
//Pisces --------- 20 February - 20 March
//Aries ---------- 21 March - 20 April
//Taurus -------- 21 April - 21 May
//Gemini -------- 22 May - 21 June
//Cancer -------- 22 June - 22 July
//Leo ------------- 23 July - 23 August
//Virgo ----------- 24 August - 23 September
//Libra ----------- 24 September - 23 October
//Scorpio -------- 24 October - 22 November
//Sagittarius ---- 23 November - 21 December
//Capricorn ----- 22 December - 20 January
//Test info: 100 random tests (dates range from January 1st 1940 until now)
//
//### **Это написано в звездах**
//Вы когда-нибудь интересовались феноменами астрологии, звездных знаков, Таро, вуду ? (хорошо, не вуду, это слишком жутко) ...
//Задача:
//твоя задача на сегодня - завершить starSignфункцию, найдя астрологический знак, учитывая данные о рождении как Dateобъект.
//Даты начала и окончания для знаков зодиака различаются в зависимости от ресурсов,
//поэтому мы будем использовать эту таблицу, чтобы получить согласованные результаты:
//Водолей ------ 21 января - 19 февраля
//Рыбы --------- 20 февраля - 20 марта
//Овен ---------- 21 марта - 20 апреля
//Телец -------- 21 апреля - 21 мая
//Близнецы -------- 22 мая - 21 июня
//Рак -------- 22 июня - 22 июля
//Лев ------------- 23 июля - 23 августа
//Дева ----------- 24 августа - 23 сентября
//Весы ----------- 24 сентября - 23 октября
//Скорпион -------- 24 октября - 22 ноября
//Стрелец - 23 ноября - 21 декабря.
//Козерог ----- 22 декабря - 20 января
//Информация о тестах: 100 случайных тестов (диапазон дат с 1 января 1940 года по настоящее время)
// ---
//
//---Solution---
// function starSign(date) {
//   const dDate = new Date(date);
//   const numbDate = String(dDate.getMonth()+1) + String(dDate.getDate()).padStart(2,"0");
//   let stars = "";
//   if (numbDate >= 121 && numbDate <= 219) {
//       stars = 'Aquarius'; // ------ 21 January - 19 February
//   } else if (numbDate >= 220 && numbDate <= 320) {
//       stars = 'Pisces'; // ------ 20 February - 20 March
//   } else if (numbDate >= 321 && numbDate <= 420) {
//       stars = 'Aries'; // ------ 21 March - 20 April
//   } else if (numbDate >= 421 && numbDate <= 521) {
//       stars = 'Taurus'; // ------ 21 April - 21 May
//   } else if (numbDate >= 522 && numbDate <= 621) {
//       stars = 'Gemini'; // ------ 22 May - 21 June
//   } else if (numbDate >= 622 && numbDate <= 722) {
//       stars = 'Cancer'; // ------ 22 June - 22 July
//   } else if (numbDate >= 723 && numbDate <= 823) {
//       stars = 'Leo'; // ------ 23 July - 23 August
//   } else if (numbDate >= 824 && numbDate <= 923) {
//       stars = 'Virgo'; // ------ 24 August - 23 September
//   } else if (numbDate >= 924 && numbDate <= 1023) {
//       stars = 'Libra'; // ------ 24 September - 23 October
//   } else if (numbDate >= 1024 && numbDate <= 1122) {
//       stars = 'Scorpio'; // ------ 24 October - 22 November
//   } else if (numbDate >= 1123 && numbDate <= 1221) {
//       stars = 'Sagittarius'; // ------ 23 November - 21 December
//   } else if (numbDate >= 1222 || numbDate <= 120) {
//       stars = 'Capricorn'; // ------ 22 December - 20 January
//   }
//   return stars;
// }
//
//---Test---
// let arrayTest = [
//   [new Date(1970, 5, 5)], // 'Gemini');
//   [new Date(2000, 1, 15)], // 'Aquarius');
//   [new Date(1987, 7, 23)] // 'Leo');
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(starSign(arrayTest[i]));
//     document.write(' | ');
// }
//
//=== End ( It is written in the stars ) ===


//---------------------------------------------------------------------------------------------------
// Friday the 13ths
//6 kyu https://www.codewars.com/kata/friday-the-13ths
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Friday the 13ths**
//Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive),
//and returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).
//The return value should be a string where each date is seperated by a space.
//The date should be formatted like 9/13/2014 where months do not have leading zeroes
//and are separated with forward slashes.
//If no end year is given, only return friday the thirteenths during the start year.
//Examples
//fridayTheThirteenths(1999, 2000) // returns "8/13/1999 10/13/2000"
//fridayTheThirteenths(2014, 2015) // returns "6/13/2014 2/13/2015 3/13/2015 11/13/2015"
//fridayTheThirteenths(2000) // returns "10/13/2000"
//This kata was designed to use the built-in Date object.
//Dates can often be finicky, so while there are other methods to get the correct dates,
//I can't gurantee they will work.
//
//### **Пятница 13-е**
//Создайте функцию, fridayTheThirteenthsкоторая принимает startгод и endгод ( включительно )
//и возвращает все даты, когда 13-е число месяца приходится на пятницу в заданном диапазоне лет (лет).
//Возвращаемое значение должно быть строкой, в которой каждая дата разделена пробелом.
//Дата должна быть отформатирована так, как 9/13/2014если бы месяцы не начинались с нулей и разделялись косой чертой.
//Если endгод не указан, верните только пятницу тринадцатого числа в течение startгода.
//Примеры
//fridayTheThirteenths(1999, 2000) // returns "8/13/1999 10/13/2000"
//fridayTheThirteenths(2014, 2015) // returns "6/13/2014 2/13/2015 3/13/2015 11/13/2015"
//fridayTheThirteenths(2000) // returns "10/13/2000"
//Это ката было разработано для использования встроенного Dateобъекта.
//Сроки часто бывают привередливыми, поэтому, хотя есть и другие способы получить правильные даты,
//я не могу гарантировать, что они сработают.
// ---
//
//---Solution---
// function fridayTheThirteenths(start, end) {
//   if (end === undefined) end = start;
//   let strFriday = "";
//   for (i=start;i<=end;i++) {
//     for (m=0;m<12;m++) {
//       const dDate = new Date(i,m,13);
//       if ( dDate.getDay() === 5 ) {
//         strFriday = strFriday + (strFriday === "" ? "" : " ") + ((dDate.getMonth()+1)+"/13/"+dDate.getFullYear());
//       }
//     }
//   }
//   return strFriday;
// }
//
//---Test---
// let arrayTest = [
  // document.write(fridayTheThirteenths(1999, 2000));//, "8/13/1999 10/13/2000");
  // document.write(' | ');
  // document.write(fridayTheThirteenths(2112));//, "10/13/2000");
  // document.write(' | ');
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(starSign(arrayTest[i]));
//     document.write(' | ');
// }
//
//=== End ( Friday the 13ths ) ===
//===================================================================================================


//---------------------------------------------------------------------------------------------------
//  Object
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// Counting Array Elements
//7 kyu https://www.codewars.com/kata/counting-array-elements
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Counting Array Elements**
//Write a function that takes an array and counts the number of each unique element present.
//count(['james', 'james', 'john']) 
//#=> { 'james': 2, 'john': 1}
//
//### **Подсчет элементов массива**
//Напишите функцию, которая принимает массив и подсчитывает количество каждого присутствующего уникального элемента.
//count(['james', 'james', 'john']) 
//#=> { 'james': 2, 'john': 1}
// ---
//
//---Solution---
// function count(array){
//   return array.reduce((acc, n) => (acc[n] = (acc[n] || 0) + 1, acc), {});
// }
//
//---Test---
// let arrayTest = [
// document.write(count(['a', 'a', 'b', 'b', 'b'])); //, { 'a': 2, 'b': 3 }));
// document.write(' | ');
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(starSign(arrayTest[i]));
//     document.write(' | ');
// }
//
//=== End ( Counting Array Elements ) ===



//---------------------------------------------------------------------------------------------------
// Who is the killer?
//7 kyu https://www.codewars.com/kata/who-is-the-killer-1
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Who is the killer?**
//Who is the killer?
//Some people have been killed!
//You have managed to narrow the suspects down to just a few. Luckily,
//you know every person who those suspects have seen on the day of the murders.
//Task.
//Given a dictionary with all the names of the suspects and everyone that they have seen on that day which
//may look like this:
//{'James': ['Jacob', 'Bill', 'Lucas'],
// 'Johnny': ['David', 'Kyle', 'Lucas'],
// 'Peter': ['Lucy', 'Kyle']}
//and also a list of the names of the dead people:
//['Lucas', 'Bill']
//return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'
//
//### **Кто убийца?**
//Кто убийца?
//Некоторые люди были убиты!
//Вам удалось сузить круг подозреваемых до нескольких.
//К счастью, вы знаете каждого человека, которого подозреваемые видели в день убийства.
//Задача.
//Учитывая словарь со всеми именами подозреваемых и всех, кого они видели в тот день, который может выглядеть так:
//{'James': ['Jacob', 'Bill', 'Lucas'],
// 'Johnny': ['David', 'Kyle', 'Lucas'],
// 'Peter': ['Lucy', 'Kyle']}
//а также список имен погибших:
//['Lucas', 'Bill']
//вернуть имя одного убийцы, в нашем случае,
//'James'потому что он единственный человек, который видел и то, 'Lucas'и другое.'Bill'
// ---
//
//---Solution---
// function killer(suspectInfo, dead) {
//   let killer = "";
//   for (let key in suspectInfo) {
//     const arr = suspectInfo[key];
//     if ( arr.filter(item => dead.includes(item)).length === dead.length ) {
//       killer = key;
//     }
//   }
//   return (killer);
//  //best
//  //return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
//  //
//  //for (let name in suspectInfo) {
//  //  if (dead.every(deadPerson => suspectInfo[name].includes(deadPerson))) {
//  //    return name;
//  //  }
//  //}
//}
//
//---Test---
// let arrayTest = [
//   [{'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']], //'James');
//   [{'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']] // 'Megan');
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(killer(arrayTest[i][0],arrayTest[i][1]));
//     document.write(' | ');
// }
//
//=== End ( Who is the killer? ) ===

//===================================================================================================


//---------------------------------------------------------------------------------------------------
//  Regular expression
//
//--- https://jex.im/regulex/ ---
//--- https://regexr.com/ ---
//
//---------------------------------------------------------------------------------------------------

//--- https://jex.im/regulex/ ---
//--- https://regexr.com/ ---

//---------------------------------------------------------------------------------------------------
// Simple validation of a username with regex
//8 kyu https://www.codewars.com/kata/simple-validation-of-a-username-with-regex
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Simple validation of a username with regex**
//Write a simple regex to validate a username. Allowed characters are:
//lowercase letters,
//numbers,
//underscore
//Length should be between 4 and 16 characters (both included).
//
//### **Простая проверка имени пользователя с помощью регулярного выражения**
//Напишите простое регулярное выражение для проверки имени пользователя. Допустимые символы:
//строчные буквы,
//числа
//нижнее подчеркивание
//Длина должна быть от 4 до 16 символов (включая оба символа).
// ---
//
//---Solution---
// function validateUsr(username) {
//   res =  /^[a-z_0-9]{4,16}$/.test(username) 
//   return res
// }
//
//---Test---
// let arrayTest = [
//     'asddsa', //true);
//     'a', //false);
//     'Hass', //false);
//     'Hasd_12assssssasasasasasaasasasasas', //false);
//     '', //false);
//     '____', //true);
//     '012', //false);
//     'p1pp1', //true);
//     'asd43 34', //false);
//     'asd43_34' //true);
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(validateUsr(arrayTest[i]));
//     document.write(' | ');
// }
//
//--- https://jex.im/regulex/ ---
//--- https://regexr.com/ ---
//=== End ( Simple validation of a username with regex ) ===


//---------------------------------------------------------------------------------------------------
// Validate my Password
//6 kyu https://www.codewars.com/kata/validate-my-password
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Validate my Password**
//I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.
//Passwords must abide by the following requirements:
//More than 3 characters but less than 20.
//Must contain only alphanumeric characters.
//Must contain letters and numbers.
//
//### **Подтвердите мой пароль**
//Я дам тебе веревочку. Вы отвечаете «VALID», если строка соответствует требованиям, или «INVALID», если нет.
//Пароли должны соответствовать следующим требованиям:
//Более 3 символов, но менее 20.
//Должен содержать только буквенно-цифровые символы.
//Должен содержать буквы и цифры.
// ---
//
//---Solution---
// function validPass(password){
//   const reg = new RegExp('^(?=.*[a-z])(?=.*\\d)[a-z\\d]{4,19}$','i');
//   return reg.test(password) ? "VALID" : "INVALID";
//   //return /^(?=.*[a-z])(?=.*\d)[a-z\d]{4,19}$/i.test(password) ? "VALID" : "INVALID";
// }
//
//---Test---
// let arrayTest = [
//   'Username123', //'VALID' );
//   'Username', //'INVALID' );
//   '1Username', //'VALID' );
//   '123', //'INVALID' );
//   'a12', //'INVALID' );
//   'Username123!', //'INVALID' );
//   'Username123n', //'INVALID' );
//   'ThisPasswordIsTooLong1234' //, 'INVALID' )  
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     document.write(validPass(arrayTest[i]));
//     document.write(' | ');
// }
//
//--- https://jex.im/regulex/ ---
//--- https://regexr.com/ ---
//=== End ( Validate my Password ) ===
//===================================================================================================


//---------------------------------------------------------------------------------------------------
//===================================================================================================


