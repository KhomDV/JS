


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
function catMouse(map,moves){
    //coding and coding...
    return map;
    
}
//
//---Test---
//let arrayTest = []
//
//---View solution---
//for (let i=0;i<arrayTest.length;i++) {
    let map=
    `..C......
    .........
    ....m....` //'Caught!'
    document.write(catMouse(map,5));
    document.write(' | ');
        
    map=
    `.C.......
    .........
    ......m..` //'Escaped!'
    document.write(catMouse(map,5));
    document.write(' | ');
    
    map=
    `..C......
    .........
    .........` //'boring without two animals'
    document.write(catMouse(map,5));
    document.write(' | ');
//}
// 
//=== End ( Cat and Mouse - 2D Version ) ===


//---------------------------------------------------------------------------------------------------
// 
//6 kyu https://www.codewars.com/kata/duplicate-encoder
//---------------------------------------------------------------------------------------------------
//===================================================================================================




//---------------------------------------------------------------------------------------------------
//  Number
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
//7 kyu https://www.codewars.com/kata/squares-sequence
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
//7 kyu https://www.codewars.com/kata/concatenated-sum
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
//7 kyu https://www.codewars.com/kata/filter-the-number
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
//6 kyu https://www.codewars.com/kata/n-th-fibonacci
//---------------------------------------------------------------------------------------------------
//===================================================================================================


//---------------------------------------------------------------------------------------------------
//  Array
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
//7 kyu https://www.codewars.com/kata/playing-with-sets-intersection
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
//7 kyu https://www.codewars.com/kata/divide-and-conquer
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
//6 kyu https://www.codewars.com/kata/find-the-odd-int/
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
//6 kyu https://www.codewars.com/kata/find-the-parity-outlier
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 
//6 kyu https://www.codewars.com/kata/zipwith
//---------------------------------------------------------------------------------------------------
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


