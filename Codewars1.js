


//---------------------------------------------------------------------------------------------------
//   Codewars #1
//---------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------
//  String
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// Disemvowel Trolls
// 7 kyu https://www.codewars.com/kata/disemvowel-trolls/
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Disemvowel Trolls**
//Trolls are attacking your comment section!
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//Note: for this kata y isn't considered a vowel.
//
//### **Дисемгласные тролли**
//Тролли атакуют ваш раздел комментариев!
//Обычный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
//Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
//Например, строка «Этот сайт для неудачников LOL!» станет "Ths wbst s fr lsrs LL!".
//Примечание: для этого ката yне считается гласной.
// ---
//
//---Solution---
//disemvowel = (str) => {
//    return str.split('').filter((e) => !/[aeiou]/.test(e.toLowerCase()) ).join('');
//    //best - str.replace(/[aeiou]/gi, '')
//}
//
//---Test---
// let arrayTest = []
//
//---View solution---
//    document.write(disemvowel("This website is for losers LOL!")); //"Ths wbst s fr lsrs LL!"
// 
//=== End ( Disemvowel Trolls ) ===


//---------------------------------------------------------------------------------------------------
// Mumbling
// 7 kyu https://www.codewars.com/kata/mumbling/
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Mumbling**
//This time no story, no theory. The examples below show you how to write function accum:
//Examples:
//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"
//The parameter of accum is a string which includes only letters from a..z and A..Z.
//
//### **Бормотание**
//На этот раз ни рассказа, ни теории. В приведенных ниже примерах показано, как писать функцию accum:
//Примеры:
//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"
//Параметр аккумулятора - это строка, состоящая только из букв от a..zи A..Z.
// ---
//
//---Solution---
//accum = (str) => {
//    return str.split('').map((e,i)=>e.toUpperCase() + e.repeat(i).toLowerCase()).join('-');
//}
//
//---Test---
//let arrayTest = [
//    'ZpglnRxqenU', //'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
//    'NyffsGeyylB', //'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb'
//    'MjtkuBovqrU', //'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu'
//    'EvidjUnokmM', //'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm'
//    'HbideVbxncC'  //'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc'
//    ]
//
//---View solution---
//for (let i=0;i<arrayTest.length;i++) {
//
//    document.write(accum(arrayTest[i]));
//    document.write(' | ');
//
//}
// 
//=== End ( Mumbling ) ===


//---------------------------------------------------------------------------------------------------
// Highest and Lowest
//7 kyu https://www.codewars.com/kata/highest-and-lowest/
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Highest and Lowest**
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//Example:
//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"
//Notes:
//All numbers are valid Int32, no need to validate them.
//There will always be at least one number in the input string.
//Output string must be two numbers separated by a single space, and highest number is first.
//
//### **Самый высокий и самый низкий**
//В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее числа.
//Пример:
//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"
//Примечания:
//Все числа действительны Int32, подтверждать их не нужно .
//Во входной строке всегда будет хотя бы одно число.
//Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.
// ---
//
//---Solution---
// function highAndLow(numbers){
//     const sortnumb = numbers.split(' ').map(e => +e).sort((a,b)=>b-a);
//     return `${sortnumb[0]}  ${sortnumb[sortnumb.length-1]}`;
// }
//
//---Test---
//let arrayTest = []
//
//---View solution---
// document.write(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")) //"542 -214"
// 
//=== End ( Highest and Lowest ) ===


//---------------------------------------------------------------------------------------------------
// Isograms
//7 kyu https://www.codewars.com/kata/isograms/
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Isograms**
//An isogram is a word that has no repeating letters, consecutive or non-consecutive.
//Implement a function that determines whether a string that contains only letters is an isogram.
//Assume the empty string is an isogram. Ignore letter case.
//isIsogram "Dermatoglyphics" == true
//isIsogram "aba" == false
//isIsogram "moOse" == false -- ignore letter case
//
//### **Изограммы**
//Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных.
//Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой.
//Предположим, что пустая строка является изограммой. Игнорировать регистр букв.
//isIsogram "Dermatoglyphics" == true
//isIsogram "aba" == false
//isIsogram "moOse" == false -- ignore letter case
// ---
//
//---Solution---
// function isIsogram(str){
//     if (str.trim() === "" ) return true;
//     const arr = str.split('').map((e)=>e.toUpperCase());
//     return arr.length === Array.from(new Set(arr)).length ? true : false;
//     //best- return !/(\w).*\1/i.test(str)
//     //best- return new Set(str.toUpperCase()).size == str.length;
// }
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
//=== End ( Isograms ) ===


//---------------------------------------------------------------------------------------------------
// Char Code Calculation
//7 kyu https://www.codewars.com/kata/char-code-calculation
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Char Code Calculation**
//Given a string, turn each character into its ASCII character code and join them together
// to create a number - let's call this number total1:
//'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
//Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
//total1 = 656667
//              ^
//total2 = 656661
//              ^
//Then return the difference between the sum of the digits in total1 and total2:
//  (6 + 5 + 6 + 6 + 6 + 7)
//- (6 + 5 + 6 + 6 + 6 + 1)
//-------------------------
//                       6
//
//### **Расчет кода символа**
//Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе,
// чтобы создать число - давайте назовем это число total1:
//'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
//Затем замените любую частоту числа 7на число 1и назовите это число 'total2':
//total1 = 656667
//              ^
//total2 = 656661
//              ^
//Затем верните разницу между суммой цифр total1и total2:
//  (6 + 5 + 6 + 6 + 6 + 7)
//- (6 + 5 + 6 + 6 + 6 + 1)
//-------------------------
//                       6
// ---
//
//---Solution---
//function calc(x){
//    const total1 = x.split('').map((e)=>e.charCodeAt()).join('');
//    const total2 = total1.replace(/[7]/g, '1');
//    return (total1.split('').reduce((a,b)=>a + Number(b), 0) - total2.split('').reduce((a,b)=>a + Number(b), 0));
//}
//
//---Test---
//let arrayTest = [
//    'ABC', //6
//    'abcdef', //6
//    'ifkhchlhfd', //6
//    'aaaaaddddr',  //30
//    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' // 96
//]
//
//---View solution---
//for (let i=0;i<arrayTest.length;i++) {
//    document.write(calc(arrayTest[i]));
//    document.write(' | ');
//}
// 
//=== End ( Char Code Calculation ) ===


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
function zipWith(fn,a0,a1) {
  
  return eval("+fn(a0,a1)");
  //return [];
}
//
//---Test---
let arrayTest = [
      [plus, [0,1,2,3,4,5], [6,5,4,3,2,1]], // [6,6,6,6,6,6]);
      [plus, [0,1,2,3,4  ], [6,5,4,3,2,1]], //[6,6,6,6,6  ]);
      [plus, [0,1,2,3,4,5], [6,5,4,3,2  ]], //[6,6,6,6,6  ]);
      [Math.pow, [10,10,10,10], [0,1,2,3]], //[1,10,100,1000]);
      [Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1], //[4,7,7,4,7,7]);
      [function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3]], //[0,2,4,6]);
      [(a,b) => a+b, [0,1,2,3], [0,1,2,3]] // [0,2,4,6]);
]
//
//---View solution---
for (let i=0;i<arrayTest.length;i++) {
    document.write(findOutlier(arrayTest[i][0],arrayTest[i][1],arrayTest[i][2]));
    document.write(' | ');
}
//
//=== End ( zipWith ) ===

//===================================================================================================


//---------------------------------------------------------------------------------------------------
//  Date
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
//7 kyu https://www.codewars.com/kata/it-is-written-in-the-stars
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
//6 kyu https://www.codewars.com/kata/friday-the-13ths
//---------------------------------------------------------------------------------------------------
//===================================================================================================


//---------------------------------------------------------------------------------------------------
//  Object
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
//7 kyu https://www.codewars.com/kata/counting-array-elements
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
//7 kyu https://www.codewars.com/kata/who-is-the-killer-1
//---------------------------------------------------------------------------------------------------
//===================================================================================================


//---------------------------------------------------------------------------------------------------
//  Regular expression
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
//8 kyu https://www.codewars.com/kata/simple-validation-of-a-username-with-regex
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
//6 kyu https://www.codewars.com/kata/validate-my-password
//---------------------------------------------------------------------------------------------------
//===================================================================================================





//---------------------------------------------------------------------------------------------------
//===================================================================================================


