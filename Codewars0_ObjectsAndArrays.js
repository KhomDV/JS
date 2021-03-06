


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
// var OrderPeople = function(people) {
//   return people.sort( (a, b) => a.age - b.age );
// }
//
//---Test---
// console.log( OrderPeople([ { age: 83, name: 'joel' },
//                            { age: 46, name: 'roger' },
//                            { age: 99, name: 'vinny' },
//                            { age: 26, name: 'don' },
//                            { age: 74, name: 'brendan' } ]) );
//[{age:26,name:"don"},{age:46,name:"roger"},{age:74,name:"brendan"},{age:83,name:"joel"},{age:99,name:"vinny"}], 'The array is still empty')
// 
//=== End ( Sort with Arrow Functions ) ===


//---------------------------------------------------------------------------------------------------
// Who's Online?
// (7 kyu) https://www.codewars.com/kata/whos-online
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Who's Online?**
//You have a group chat application, but who is online!?
//You want to show your users which of their friends are online and available to chat!
//Given an input of an array of objects containing usernames, status and time since last activity (in mins),
//create a function to work out who is online, offline and away.
//If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
//The input data has the following structure:
//[{
//  username: 'David',
//  status: 'online',
//  lastActivity: 10
//}, {
//  username: 'Lucy', 
//  status: 'offline',
//  lastActivity: 22
//}, {
//  username: 'Bob', 
//  status: 'online',
//  lastActivity: 104
//}]
//The corresponding output should look as follows:
//{
//  online: ['David'],
//  offline: ['Lucy'],
//  away: ['Bob']
//}
//If for example, no users are online the output should look as follows:
//{
//  offline: ['Lucy'],
//  away: ['Bob']
//}
//username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#)
//and lastActivity will always be number >= 0.
//Finally, if you have no friends in your chat application, the input will be an empty array [].
//In this case you should return an empty object {} (empty Dictionary in C#).
//
//### **Кто онлайн?**
//У вас есть приложение для группового чата, но кто в сети !?
//Вы хотите показать своим пользователям, кто из их друзей в сети и доступен для общения в чате!
//Учитывая ввод массива объектов, содержащих имена пользователей,
//статус и время с момента последнего действия (в минутах), создайте функцию для определения, кто есть online,
//offline и away.
//Если кто-то есть, online но он lastActivity был более 10 минут назад, они должны быть рассмотрены away.
//Входные данные имеют следующую структуру:
//[{
//  username: 'David',
//  status: 'online',
//  lastActivity: 10
//}, {
//  username: 'Lucy', 
//  status: 'offline',
//  lastActivity: 22
//}, {
//  username: 'Bob', 
//  status: 'online',
//  lastActivity: 104
//}]
//Соответствующий вывод должен выглядеть следующим образом:
//{
//  online: ['David'],
//  offline: ['Lucy'],
//  away: ['Bob']
//}
//Если, например, пользователей нет, onlineрезультат должен выглядеть следующим образом:
//{
//  offline: ['Lucy'],
//  away: ['Bob']
//}
//имя пользователя всегда будет a string, статус всегда будет либо 'online'или 'offline'(перечисление UserStatus в C #),
//а lastActivity всегда будет number >= 0.
//Наконец, если в вашем приложении чата нет друзей, входом будет пустой массив [].
//В этом случае вы должны вернуть пустой объект {}(пустой словарь в C #).
//
//---Solution---
//---1---
// const whosOnline = (friends) => {
//   let statusChat = {};
//   for (let i=0; i<friends.length; i++) {
//     const user = friends[i];
//     const userStatus = user.status === 'online' && user.lastActivity > 10 ? 'away' : user.status;
//     let statusValue = statusChat[userStatus] || [];
//     statusValue.push(user.username);
//     statusChat[userStatus] = statusValue;
//   }
//   return statusChat;
// }
//---2---
// const whosOnline = friends => friends.reduce((a,{username, status, lastActivity}) => {
//   const fStatus = status === 'online' && lastActivity > 10 ? 'away' : status;
//   a[fStatus] ? a[fStatus].push(username) : a[fStatus] = [username];
//   return a;
// }, {})
//
//---Test---
// let friends = [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104
// }, {
//   username: 'Bob2',
//   status: 'online',
//   lastActivity: 104
// }, {
//   username: 'Lucy2',
//   status: 'offline',
//   lastActivity: 22
// }];
// console.log( whosOnline(friends) );
//{
//  online: ['David'],
//  offline: ['Lucy'],
//  away: ['Bob']
//}
// friends = [{
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104
// }];
// console.log( whosOnline(friends) );
//{
//  offline: ['Lucy'],
//  away: ['Bob']
//}
// 
//=== End ( Who's Online? ) ===


//---------------------------------------------------------------------------------------------------
// Homogenous arrays
// (7 kyu) https://www.codewars.com/kata/homogenous-arrays
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Homogenous arrays**
//Challenge:
//Given a two-dimensional array, return a new array which carries over only those arrays from the original,
//which were not empty and whose items are all of the same type (i.e. homogenous).
//For simplicity, the arrays inside the array will only contain characters and integers.
//Example:
//Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].
//Addendum:
//Please keep in mind that for this kata, we assume that empty arrays are not homogenous.
//The resultant arrays should be in the order they were originally in and should not have its values changed.
//No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.
//
//### **Однородные массивы**
//Испытание:
//Учитывая двумерный массив, верните новый массив, который переносит только те массивы из оригинала,
//которые не были пустыми и все элементы которых относятся к одному типу (т.е. однородны).
//Для простоты массивы внутри массива будут содержать только символы и целые числа.
//Пример:
//Учитывая [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], ваша функция должна вернуть [[1, 5, 4], ['b']].
//Дополнение:
//Имейте в виду, что в этом ката мы предполагаем, что пустые массивы неоднородны.
//Результирующие массивы должны быть в том порядке, в котором они были изначально, и не должны изменять свои значения.
//Неявное приведение типов не допускается. Подмассив [1, '2'] будет считаться недопустимым и должен быть отфильтрован.
//
//---Solution---
//---1---
// function filterHomogenous(arrays) {
//   let newArray = arrays.reduce((acc, el) => {
//     if (!el.some( e => typeof(e) !== typeof(el[0]) ) && el.length !== 0) {
//       acc = [...acc, el];
//     }
//     return acc;
//   }, []);
//   return newArray;
// }
//---2---
// function filterHomogenous(arr) {
//   return arr.filter(subArr => subArr.length > 0 && subArr.every(val => typeof val === typeof subArr[0]));
// }
//
//---Test---
// console.log( filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]) ); //, [[1, 5, 4], ['b']]);
// console.log( filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []]) ); //, [[123, 234, 432], ['', 'abc'], [''], ['', '1']]);
//
//=== End ( Homogenous arrays ) ===
//===================================================================================================
