


//---------------------------------------------------------------------------------------------------
//   Codewars #0 Data Types
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// Find the Squares
// (7 kyu) https://www.codewars.com/kata/find-the-squares
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Find the Squares**
//Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between
//two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"
//Examples
//9  -->  "25-16"
//5  -->  "9-4"
//7  -->  "16-9"
//
//### **Найдите квадраты**
//Завершите функцию, которая принимает нечетное целое число ( 0 < n < 1000000),
//которое представляет собой разницу между двумя последовательными точными квадратами,
//и верните эти квадраты в виде строки в формате"bigger-smaller"
//Примеры
//9  -->  "25-16"
//5  -->  "9-4"
//7  -->  "16-9"
//
//---Solution---
// const findSquares = num => {
//   const max = Math.ceil(num/2) ** 2;
//   const min = Math.floor(num/2) ** 2;
//   return `${max}-${min}`;
// };
//
//---Test---
// console.log( findSquares(9) );  //, '25-16');
// console.log( findSquares(5) );  //, '9-4');
// console.log( findSquares(81) ); //, '1681-1600');
// console.log( findSquares(25) ); //, '169-144');
//=== End ( Find the stray number ) ===


//---------------------------------------------------------------------------------------------------
// Sum of Triangular Numbers
// (7 kyu) https://www.codewars.com/kata/sum-of-triangular-numbers
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Sum of Triangular Numbers**
//Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.
//Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation
//of the natural numbers 1, 2, 3, 4, 5, etc."
//[01]
//02 [03]
//04 05 [06]
//07 08 09 [10]
//11 12 13 14 [15]
//16 17 18 19 20 [21]
//e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.
//Triangular Numbers cannot be negative so return 0 if a negative number is given.
//
//### **Сумма треугольных чисел**
//Ваша задача - вернуть сумму Треугольных чисел до Треугольного числа включительно nth.
//Треугольное число: «любая из серий чисел (1, 3, 6, 10, 15 и т. Д.),
//Полученных путем непрерывного суммирования натуральных чисел 1, 2, 3, 4, 5 и т. Д.»
//[01]
//02 [03]
//04 05 [06]
//07 08 09 [10]
//11 12 13 14 [15]
//16 17 18 19 20 [21]
//например , если 4дано: 1 + 3 + 6 + 10 = 20.
//Треугольные числа не могут быть отрицательными, поэтому верните 0, если задано отрицательное число.
//
//---Solution---
// function sumTriangularNumbers(n) {
//   let numb = 0;
//   let sum = 0;
//   for (i=1; i<=n; i++) {
//     sum += (numb += i);
//     //или
//     numb = numb + i;
//     sum = sum + numb;
//   }
//   return sum;
// }
// //2. Через формулу расчета
// function sumTriangularNumbers(n) {
//   return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
// }
//
//---Test---
// console.log( sumTriangularNumbers(6) ); //, 56);
// console.log( sumTriangularNumbers(34) ); //, 7140);
// console.log( sumTriangularNumbers(-291) ); //, 0);
// console.log( sumTriangularNumbers(943) ); //, 140205240);
// console.log( sumTriangularNumbers(-971) ); //, 0);
// 
//=== End ( Sum of Triangular Numbers ) ===


//---------------------------------------------------------------------------------------------------
// Rearrange Number to Get its Maximum
// (7 kyu) https://www.codewars.com/kata/rearrange-number-to-get-its-maximum
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Rearrange Number to Get its Maximum**
//Create a function that takes one positive three digit integer and rearranges its digits to get the maximum
//possible number. Assume that the argument is an integer.
//Return null (nil for Ruby, nothing for Julia) if the argument is not valid.
//maxRedigit(123); // returns 321
//
//### **Переставьте число, чтобы получить его максимум**
//Создайте функцию, которая принимает одно положительное трехзначное целое число и переставляет его цифры,
//чтобы получить максимально возможное число.
//Предположим, что аргумент является целым числом. Вернуть null( nilдля Ruby, nothingдля Julia),
//если аргумент недействителен.
//maxRedigit(123); // returns 321
//
//---Solution---
// var maxRedigit = function(num) {
//   return (num <= 0 || String(num).length !== 3) ? null : Number([...String(num)].sort((a,b)=>b-a).join('')); 
// };
//
//---Test---
// console.log( maxRedigit(123) ); //, 321, "123 => 321");
// console.log( maxRedigit(-1) ); //, null, "-1 => null");
// console.log( maxRedigit(0) ); //, null, "0 => null");
// console.log( maxRedigit(99) ); //, null, "0 => null");
// console.log( maxRedigit(3) ); //, null, "0 => null");
// console.log( maxRedigit(1000) ); //, null, "0 => null");
// console.log( maxRedigit(1502) ); //, null, "0 => null");
// 
//=== End ( Rearrange Number to Get its Maximum ) ===


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
