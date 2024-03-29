


//---------------------------------------------------------------------------------------------------
//   Codewars #1
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
//  Numbers, strings
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// Absent vowel - Solution
// 7 kyu https://www.codewars.com/kata/absent-vowel
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Absent vowel**
//Your job is to figure out the index of which vowel is missing from a given string:
//A has an index of 0,
//E has an index of 1,
//I has an index of 2,
//O has an index of 3,
//U has an index of 4.
//Notes: There is no need for string validation and every sentence given will contain all vowles but one.
//Also, you won't need to worry about capitals.
//Examples
//"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
//"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
//
//### **Отсутствующая гласная**
//Ваша задача - выяснить, индекс какой гласной отсутствует в данной строке:
//A имеет индекс 0,
//E имеет индекс 1,
//I имеет индекс 2,
//O имеет индекс 3,
//U имеет индекс 4.
//Примечания: Нет необходимости в проверке строки, и каждое данное предложение будет содержать все гласные, кроме одной.
//Кроме того, вам не нужно беспокоиться о капиталах.
//Примеры
//"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
//"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
// ---
//
//---Solution---
// function absentVowel(x){
//   const a = ['A','E','I','O','U'];
//   for (let i=0; i<a.length; i++) {
//     if ( x.search(new RegExp(a[i],'ui')) < 0) return i;
//   }
// }
//--2--
// return ["a", "e", "i", "o", "u"].findIndex(v => !x.includes(v));
//
//---Test---
// console.log( absentVowel("John Doe hs seven red pples under his bsket") ); //0
// console.log( absentVowel("Bb Smith sent us six neatly arranged range bicycles") ); //3
// 
//=== End ( Absent vowel ) ===


//---------------------------------------------------------------------------------------------------
// Get the Middle Character - Solution
// 7 kyu https://www.codewars.com/kata/get-the-middle-character
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Get the Middle Character**
//You are going to be given a word. Your job is to return the middle character of the word.
//If the word's length is odd, return the middle character. If the word's length is even,
//return the middle 2 characters.
//#Examples:
//Kata.getMiddle("test") should return "es"
//Kata.getMiddle("testing") should return "t"
//Kata.getMiddle("middle") should return "dd"
//Kata.getMiddle("A") should return "A"
//#Input
//A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some
//test cases due to an error in the test cases). You do not need to test for this.
//This is only here to tell you that you do not need to worry about your solution timing out.
//#Output
//The middle character(s) of the word represented as a string.
//
//### **Получите средний персонаж**
//Вам дадут слово. Ваша задача - вернуть средний символ слова. Если длина слова нечетная, вернуть средний символ.
//Если длина слова четная, вернуть 2 средних символа.
//#Примеры:
//Kata.getMiddle("test") should return "es"
//Kata.getMiddle("testing") should return "t"
//Kata.getMiddle("middle") should return "dd"
//Kata.getMiddle("A") should return "A"
//#Вход
//Слово (строка) длины 0 < str < 1000(в javascript вы можете получить чуть больше 1000 в некоторых тестовых
//случаях из-за ошибки в тестовых случаях). Вам не нужно проверять это.
//Это сделано только для того, чтобы сообщить вам, что вам не нужно беспокоиться о том,
//что время ожидания решения истечет.
//#Выход
//Средний символ (символы) слова, представленного в виде строки.
// ---
//
//---Solution---
// function getMiddle(s)
// {
//   return s.substring( Math.floor(s.length/2) - (s.length%2 === 0 ? 1 : 0), Math.floor(s.length/2) + 1);
// }
//--2--
// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }
//
//---Test---
// console.log( getMiddle("test") ); //,"es");
// console.log( getMiddle("testing") ); //,"t");
// console.log( getMiddle("middle") ); //,"dd");
// console.log( getMiddle("A") ); //,"A");
// 
//=== End ( Get the Middle Character ) ===


//---------------------------------------------------------------------------------------------------
// Highest and Lowest - Solution
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
// function highAndLow(numbers) {
//     // const sortnumb = numbers.split(' ').map(e => +e).sort((a,b)=>b-a);
//     // return `${sortnumb[0]}  ${sortnumb[sortnumb.length-1]}`;
//     //--2--
//     return `${Math.max(...numbers.split(' '))}  ${Math.min(...numbers.split(' '))}`;
//   }
//
//---Test---
// console.log( highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") ); //"542 -214"
// 
//=== End ( Highest and Lowest ) ===


//---------------------------------------------------------------------------------------------------
// Jaden Casing Strings - Solution
//7 kyu https://www.codewars.com/kata/highest-and-lowest/
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Jaden Casing Strings**
//Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
//Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter,
//he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word,
//check out how contractions are expected to be in the example below.
//Your task is to convert strings to how they would be written by Jaden Smith.
//The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
//Example:
//Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
//Link to Jaden's former Twitter account @officialjaden via archive.org
//
//### **Обсадные колонны Jaden**
//Джейден Смит, сын Уилла Смита, является звездой таких фильмов, как The Karate Kid (2010) и After Earth (2013).
//Джейден также известен своей философией, которую он распространяет через Twitter . Когда он пишет в Твиттере,
//он известен тем, что почти всегда использует каждое слово с большой буквы. Для простоты вам придется писать
//каждое слово с заглавной буквы, посмотрите, как ожидается сокращение в приведенном ниже примере.
//Ваша задача - преобразовать строки в то, как они были бы написаны Джейденом Смитом.
//Строки - это настоящие цитаты Джейдена Смита, но они не пишутся с заглавной буквы так, как он их изначально набирал.
//Пример:
//Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
//Ссылка на бывший аккаунт Джейдена в Твиттере @officialjaden через archive.org
// ---
//
//---Solution---
// String.prototype.toJadenCase = function () {
//   return this.split(' ').map(e => e[0].toUpperCase() + e.substring(1)).join(' ');
//   //--2--
//   return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
// };
//
//---Test---
// const str = "How can mirrors be real if our eyes aren't real";
// console.log( str.toJadenCase() ); //, "How Can Mirrors Be Real If Our Eyes Aren't Real");
//
//=== End ( Jaden Casing Strings ) ===


//---------------------------------------------------------------------------------------------------
// Disemvowel Trolls - Solution
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
//    return str.split('').filter((e) => !/[aeiou]/gi.test(e) ).join('');
//    //best - str.replace(/[aeiou]/gi, '')
//}
//
//---Test---
//console.log( disemvowel("This website is for losers LOL!")); //"Ths wbst s fr lsrs LL!"
// 
//=== End ( Disemvowel Trolls ) ===


//---------------------------------------------------------------------------------------------------
// Isograms - Solution
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
//---
//
//---Solution---
// function isIsogram(str) {
//   return new Set(str.toUpperCase()).size === str.length;
// //--old--
// //     if (str.trim() === "" ) return true;
// //     const arr = str.split('').map((e)=>e.toUpperCase());
// //     return arr.length === Array.from(new Set(arr)).length ? true : false;
// //     //best- return !/(\w).*\1/i.test(str)
// //     //best- return new Set(str.toUpperCase()).size == str.length;
// }
//
//---Test---
// console.log( isIsogram("Dermatoglyphics") ); //true );
// console.log( isIsogram("isogram") ); //true );
// console.log( isIsogram("aba") ); //false, "same chars may not be adjacent" );
// console.log( isIsogram("moOse") ); //false, "same chars may not be same case" );
// console.log( isIsogram("isIsogram") ); //false );
// console.log( isIsogram("") ); //, true, "an empty string is a valid isogram" );
// 
//=== End ( Isograms ) ===


//---------------------------------------------------------------------------------------------------
// Nickname Generator - Solution
//7 kyu https://www.codewars.com/kata/nickname-generator
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Nickname Generator**
//Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters
//as a nickname.
//If the 3rd letter is a consonant, return the first 3 letters.
//nickname("Robert") //=> "Rob"
//nickname("Kimberly") //=> "Kim"
//nickname("Samantha") //=> "Sam"
//If the 3rd letter is a vowel, return the first 4 letters.
//nickname("Jeannie") //=> "Jean"
//nickname("Douglas") //=> "Doug"
//nickname("Gregory") //=> "Greg"
//If the string is less than 4 characters, return "Error: Name too short".
//Notes:
//Vowels are "aeiou", so discount the letter "y".
//Input will always be a string.
//Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
//The input can be modified
//
//### **Генератор псевдонимов**
//Напишите функцию, nicknameGeneratorкоторая принимает строковое имя в качестве аргумента и возвращает
//первые 3 или 4 буквы в качестве псевдонима.
//Если 3-я буква согласная, верните первые 3 буквы.
//nickname("Robert") //=> "Rob"
//nickname("Kimberly") //=> "Kim"
//nickname("Samantha") //=> "Sam"
//Если 3-я буква является гласной, верните первые 4 буквы.
//nickname("Jeannie") //=> "Jean"
//nickname("Douglas") //=> "Doug"
//nickname("Gregory") //=> "Greg"
//Если строка меньше 4 символов, вернуть «Ошибка: слишком короткое имя».
//Примечания:
//Гласные - это «aeiou», поэтому отбрасывайте букву «y».
//Ввод всегда будет строкой.
//При вводе первая буква всегда будет заглавной, а остальные строчные (например, Sam).
//Вход можно изменить
//---
//
//---Solution---
// function nicknameGenerator(name){
//   if (name.length <= 3) return "Error: Name too short";
//   return /[aeiou]/gi.test(name[2]) ? name.slice(0,4) : name.slice(0,3);
//   //--2--
//   return name.length<4?"Error: Name too short":name.match(/^\w{2}([auoie]\w|[^auoie])/)[0];
// }
//
//---Test---
// console.log( nicknameGenerator("Jiiimmy") ); //, "Jim");
// console.log( nicknameGenerator("Samantha") ); //, "Sam");
// console.log( nicknameGenerator("Sam") ); //, "Error: Name too short");
// console.log( nicknameGenerator("Kayne") ); //, "Kay", "'y' is not a vowel");
// console.log( nicknameGenerator("Melissa") ); //, "Mel");
// console.log( nicknameGenerator("James") ); //, "Jam");
// console.log( nicknameGenerator("Greg") ); //, "Greg");
// console.log( nicknameGenerator("Jean") ); //, "Jean");
// 
//=== End ( Nickname Generator ) ===


//---------------------------------------------------------------------------------------------------
// Digits explosion - Solution
//7 kyu https://www.codewars.com/kata/digits-explosion
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Digits explosion**
//Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals
//to its value.
//Examples
//Digits.Explode("312") = "333122"
//Digits.Explode("102269") = "12222666666999999999"
//
//### **Взрыв цифр**
//Учитывая строку, состоящую из цифр [0-9], верните строку, в которой каждая цифра повторяется столько раз,
//сколько соответствует ее значению.
//Примеры
//Digits.Explode("312") = "333122"
//Digits.Explode("102269") = "12222666666999999999"
//---
//
//---Solution---
// function explode(s) {
//   return s.split('').map(e => e.repeat(+e)).join('');
//   //return s.split('').map(e => +e !== 0 ? e.repeat(+e) : '').join('');
// }
//
//---Test---
// console.log( explode("312") ); //"333122"
// console.log( explode("102269") ); //"12222666666999999999"
// console.log( explode("0") );   //""
// console.log( explode("000") ); //""
// console.log( explode("123") ); //"122333"
//
//=== End ( Digits explosion ) ===


//---------------------------------------------------------------------------------------------------
// Handshake problem - Solution
//6 kyu https://www.codewars.com/kata/handshake-problem
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Handshake problem**
//Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".
//Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once.
//He also knows that some of the possible handshake combinations may not happen.
//However, Johnny would like to know the minimal amount of people that participated this year just by counting
//all the handshakes.
//Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people
//needed to perform these handshakes (a pair of farmers handshake only once).
//
//### **Проблема с рукопожатием**
//Джонни - фермер, и он ежегодно проводит съезд свекловодов «Брось свеклу».
//Каждый год он фотографирует рукопожатие фермеров. Джонни знает, что никакие два фермера не пожимают руки более
//одного раза. Он также знает, что некоторые из возможных комбинаций рукопожатий могут не произойти.
//Однако Джонни хотел бы узнать минимальное количество людей, которые участвовали в этом году,
//просто посчитав все рукопожатия.
//Помогите Джонни, написав функцию, которая берет количество рукопожатий и возвращает минимальное количество людей,
//необходимое для выполнения этих рукопожатий (пара фермеров пожимает руки только один раз).
//---
//
//---Solution---
// function getParticipants(handshakes){
//   let people = 1;
//   let n = 0;
//   while (handshakes > n) {
//     n = n + people++;
//     //sum += people++;
//   }
//   return people;
// }
//
//---Test---
// console.log( getParticipants(0) ); //, 1)
// console.log( getParticipants(1) ); //, 2)
// console.log( getParticipants(3) ); //, 3)
// console.log( getParticipants(6) ); //, 4)
// console.log( getParticipants(7) ); //, 5)
//
//=== End ( Handshake problem ) ===


//---------------------------------------------------------------------------------------------------
// Reverse or rotate? - Solution
//6 kyu https://www.codewars.com/kata/reverse-or-rotate
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Reverse or rotate?**
//The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string)
//of size sz (ignore the last chunk if its size is less than sz).
//If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk;
//otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
//If
//sz is <= 0 or if str is empty return ""
//sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
//Examples:
//revrot("123456987654", 6) --> "234561876549"
//revrot("123456987653", 6) --> "234561356789"
//revrot("66443875", 4) --> "44668753"
//revrot("66443875", 8) --> "64438756"
//revrot("664438769", 8) --> "67834466"
//revrot("123456779", 8) --> "23456771"
//revrot("", 8) --> ""
//revrot("123456779", 0) --> "" 
//revrot("563000655734469485", 4) --> "0365065073456944"
//Example of a string rotated to the left by one position:
//s = "123456" gives "234561".
//
//### **Обратный или поворотный?**
//Входные данные - это строка str цифр. Разрежьте строку на фрагменты (здесь фрагмент - это подстрока исходной строки)
//размера sz(игнорируйте последний фрагмент, если его размер меньше sz).
//Если фрагмент представляет собой целое число, например, сумма кубов его цифр делится на 2 , переверните этот фрагмент;
//в противном случае поверните его влево на одну позицию. Соедините эти измененные фрагменты и верните результат
//в виде строки.
//Если
//sz является <= 0или , если strэто emptyвозвращение «»
//sz больше (>)длины strневозможно взять кусок размера, szпоэтому верните "".
//Примеры:
//revrot("123456 987654", 6) --> "234561 876549"
//revrot("123456 987653", 6) --> "234561 356789"
//revrot("6644 3875", 4) --> "4466 8753"
//revrot("66443875", 8) --> "64438756"
//revrot("66443876 9", 8) --> "67834466"
//revrot("12345677 9", 8) --> "23456771"
//revrot("", 8) --> ""
//revrot("123456779", 0) --> "" 
//revrot("5630 0065 5734 4694 85", 4) --> "0365 0650 7345 6944"
//Example of a string rotated to the left by one position:
//s = "123456" gives "234561".
//---
//
//---Solution---
// function revrot(str, sz) {
//   let newStr = '';
//   if (sz === 0 || str.length === 0) return '';
//   for (let i=0; i < Math.floor(str.length/sz); i++) {
//     const fragment = str.slice(i*sz,sz*(i+1)).split('');
//     if (isSumCube(fragment)) {
//       newStr += fragment.reverse().join('');
//     } else {
//       fistSimbol = fragment.shift();
//       newStr += fragment.join('') + fistSimbol;
//     }
//   }
//   return newStr;
//   function isSumCube(arr) {
//     return arr.reduce((sum,e) => sum + Math.pow(+e,3),0) % 2 === 0;
//   }
// }
//--2--
// function revrot(str, sz) {
//   if (sz < 1 || sz > str.length) 
//     return '';

//   let reverse = s => s.split('').reverse().join('');
//   let rotate  = s => s.slice(1) + s.slice(0, 1);
//   let sum_cubes = c => c.split('').reduce((a, b) => a + +b ** 3, 0); 

//   return str
//     .match(new RegExp('.{' + sz + '}', 'g'))
//     .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
//     .join('');
// }
//
//---Test---
// console.log( revrot("1234", 0) ); //, "")
// console.log( revrot("", 0) ); //, "")
// console.log( revrot("1234", 5) ); //, "")
// console.log( revrot("733049910872815764", 5) ); //, "330479108928157")
//                                                   330479108928157
//=== End ( Reverse or rotate? ) ===


//---------------------------------------------------------------------------------------------------
// Multiples of 3 or 5 - Solution
//6 kyu https://www.codewars.com/kata/multiples-of-3-or-5
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Multiples of 3 or 5**
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
//The sum of these multiples is 23.
//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//Additionally, if the number is negative, return 0 (for languages that do have them).
//Note: If the number is a multiple of both 3 and 5, only count it once.
//Courtesy of projecteuler.net (Problem 1)
//
//### **Кратное 3 или 5**
//Если мы перечислим все натуральные числа ниже 10, которые кратны 3 или 5, мы получим 3, 5, 6 и 9.
//Сумма этих кратных 23.
//Завершите решение так, чтобы оно возвращало сумму всех кратных 3 или 5 ниже переданного числа.
//Кроме того, если число отрицательное, вернуть 0 (для языков, в которых они есть).
//Примечание: Если число кратно как 3 и 5, только считать это один раз .
//Предоставлено projecteuler.net ( Проблема 1 )
//---
//
//---Solution---
// function solution(number) {
//   if (number < 0) return 0;
//   let setNumb = new Set();
//   for (i=3;i < number;i+=3) {
//     setNumb.add(i);
//   }
//   for (i=5;i < number;i+=5) {
//     setNumb.add(i);
//   }
//   return Array.from(setNumb).reduce((sum,e) => sum + e, 0);
// }
//
//---Test---
// console.log( solution(10) ); //, 23
//
//=== End ( Multiples of 3 or 5 ) ===
//===================================================================================================


//---------------------------------------------------------------------------------------------------
//  Arrays
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// Head, Tail, Init and Last - Solution
//7 kyu https://www.codewars.com/kata/head-tail-init-and-last
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Head, Tail, Init and Last**
//Haskell has some useful functions for dealing with lists:
//$ ghci
//GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
//λ head [1,2,3,4,5]
//1
//λ tail [1,2,3,4,5]
//[2,3,4,5]
//λ init [1,2,3,4,5]
//[1,2,3,4]
//λ last [1,2,3,4,5]
//5
//Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems!
//Here's a cheat sheet:
//| HEAD | <----------- TAIL ------------> |
//[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
//| <----------- INIT ------------> | LAST |
//
//head [x] = x
//tail [x] = []
//init [x] = []
//last [x] = x
//Here's how I expect the functions to be called in your language:
//head([1,2,3,4,5]); => 1
//tail([1,2,3,4,5]); => [2,3,4,5]
//Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. There are 400 tests overall.
//No empty arrays will be given. Haskell has QuickCheck tests
//
//### **Голова, Хвост, Начало и Последний**
//В Haskell есть несколько полезных функций для работы со списками:
//$ ghci
//GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
//λ head [1,2,3,4,5]
//1
//λ tail [1,2,3,4,5]
//[2,3,4,5]
//λ init [1,2,3,4,5]
//[1,2,3,4]
//λ last [1,2,3,4,5]
//5
//Ваша задача - реализовать эти функции на выбранном вами языке. Убедитесь, что он не редактирует массив;
//это вызовет проблемы! Вот шпаргалка:
//| HEAD | <----------- TAIL ------------> |
//[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
//| <----------- INIT ------------> | LAST |
//
//head [x] = x
//tail [x] = []
//init [x] = []
//last [x] = x
//Вот как я ожидаю, что функции будут вызываться на вашем языке:
//head([1,2,3,4,5]); => 1
//tail([1,2,3,4,5]); => [2,3,4,5]
//Большинство тестов состоит из 100 случайно сгенерированных массивов, каждый из которых содержит четыре теста,
//по одному на каждую операцию. Всего 400 тестов. Никаких пустых массивов не будет. В Haskell есть тесты QuickCheck
//---
//
//---Solution---
// const head = a => a[0];
// const tail = a => a.slice(1);
// const init = a => a.slice(0,a.length-1);
// const last = a => a[a.length-1];
//
//---Test---
// console.log( solution(10) ); //, 23
// console.log( head([5,1]) ); //, 5 );
// console.log( tail([1]) ); //, [] );
// console.log( init([1,5,7,9]) ); //, [1,5,7] );
// console.log( last([7,2]) ); //, 2 );
//
//=== End ( Head, Tail, Init and Last ) ===


//---------------------------------------------------------------------------------------------------
// Array Deep Count - Solution
//6 kyu https://www.codewars.com/kata/array-deep-count
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Array Deep Count**
//Array.prototype.length will give you the number of top-level elements in an array.
//Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.
//For example:
//deepCount([1, 2, 3]);  
////>>>>> 3
//deepCount(["x", "y", ["z"]]);  
////>>>>> 4
//deepCount([1, 2, [3, 4, [5]]]);  
////>>>>> 7
//The input will always be an array.
//
//### **Глубокий подсчет массива**
//Array.prototype.length даст вам количество элементов верхнего уровня в массиве.
//Ваша задача - создать функцию, deepCountкоторая возвращает количество ВСЕХ элементов в массиве,
//включая любые внутри массивов внутреннего уровня.
//Например:
//deepCount([1, 2, 3]);  
////>>>>> 3
//deepCount(["x", "y", ["z"]]);  
////>>>>> 4
//deepCount([1, 2, [3, 4, [5]]]);  
////>>>>> 7
//На входе всегда будет массив.
//---
//
//---Solution---
// function deepCount(a) {
//   let n = 0;
//   for (let i=0; i<a.length; i++) {
//     n++;
//     if ( Array.isArray(a[i]) ) {
//       n += deepCount(a[i]);
//     }
//   }
//   return n;
// }
// //--2--
// function deepCount(a){
//   return a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);
// }
// //--3--
// function deepCount(a){
//   let count = a.length;
//   for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
//   return count;
// }
//
//---Test---
// console.log( deepCount([]) ); //, 0, "Expected 0")
// console.log( deepCount([1, 2, 3]) ); //, 3, "Expected 3")
// console.log( deepCount(["x", "y", ["z"]]) ); //, 4, "Expected 4")
// console.log( deepCount([1, 2, [3, 4, [5]]]) ); //, 7, "Expected 7")
// console.log( deepCount([[[[[[[[[]]]]]]]]]) ); //, 8, "Expected 8")
//
//=== End ( Array Deep Count ) ===


//---------------------------------------------------------------------------------------------------
// Valid string - Solution
//6 kyu https://www.codewars.com/kata/valid-string
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Valid string**
//You are given a sequence of valid words and a string. Test if the string is made up by one or more words from
//the array.
//Task
//Test if the string can be entirely formed by consecutively concatenating words of the dictionary.
//For example:
//dictionary: ["code", "wars"]
//s1:         "codewars" =>  true  -> match 'code', 'wars'
//s2:         "codewar"  =>  false -> match 'code', unmatched 'war'
//One word from the dictionary can be used several times.
//
//### **Действительная строка**
//Вам дается последовательность допустимых слов и строка. Проверьте, состоит ли строка из одного
//или нескольких слов из массива.
//Задача
//Проверьте, может ли строка быть полностью сформирована последовательным соединением слов словаря.
//Например:
//dictionary: ["code", "wars"]
//s1:         "codewars" =>  true  -> match 'code', 'wars'
//s2:         "codewar"  =>  false -> match 'code', unmatched 'war'
//Одно слово из словаря можно использовать несколько раз.
//---
//
//---Solution---
// var validWord = function(dictionary, word) {
//   if (dictionary.length === 0) return false;
//   strReg = '^';
//   strReg += dictionary.reduce((r,e,i) => r + e + (i == dictionary.length-1 ? ')' : '|'), '(');
//   strReg += '*$';
//   return new RegExp(strReg).test(word);
// //--2--
//   reg = new RegExp('^(' + dictionary.join('|') + ')+$');
//   return reg.test(word);
// };
//
//---Test---
// console.log( validWord(['y','hc','ar','n','vzhy','qox','z','spo'], 'yhcarnvzhy') ); // true
// console.log( validWord(['code', 'wars'], 'codewars') ); //true
// console.log( validWord(['code', 'wars'], 'codecodewars') ); //true
// console.log( validWord(['wars', 'code'], 'codewars') ); //true
// console.log( validWord(['code', 'wars'], 'codewar') ); //false
// console.log( validWord(['code', 'wars'], 'codewarscode') ); //true
// console.log( validWord(['code', 'star', 'wars'], 'starwars') ); //true
// console.log( validWord(['Star', 'Code', 'Wars'], 'StarCodeWars') ); //true
// console.log( validWord(['Star', 'Code', 'Wars'], 'WarsStarCode') ); //true
// console.log( validWord(['Star', 'Code', 'Wars'], 'CodeStarsWar') ); //false
// console.log( validWord([], 'codewars') ); //false
// console.log( validWord(['code', 'wars'], 'code') ); //true
// console.log( validWord(['a', 'b', 'c', 'd', 'e', 'f'], 'abcdef') ); //true
// console.log( validWord(['a', 'b', 'c', 'd', 'e', 'f'], 'abcdefg') ); //false
// console.log( validWord(['ab', 'a', 'bc'], 'abc') ); //true
// console.log( validWord(['ab', 'bc'], 'abc') ); //false
//
//=== End ( Valid string ) ===


//---------------------------------------------------------------------------------------------------
// Vasya - Clerk - Solution
//6 kyu https://www.codewars.com/kata/vasya-clerk
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Vasya - Clerk**
//The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing
//in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
//Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
//Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets
//strictly in the order people queue?
//Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment.
//Otherwise return NO.
//Examples:
//tickets([25, 25, 50]) // => YES 
//tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
//tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change
// (you can't make two bills of 25 from one of 50)
//
//### **Вася - делопроизводитель**
//Только что вышел новый фильм «Мстители»! В кассах кинотеатра много людей, стоящих в огромную очередь.
//Каждый из них имеет один 100, 50или 25купюру. Билет на «Мстителей» стоит 25 dollars.
//Вася сейчас работает клерком. Он хочет продать билет каждому человеку в этой очереди.
//Может ли Вася продать билет каждому и отдать сдачу, если у него изначально нет денег и он продает билеты строго
//в порядке очереди?
//Вернитесь YES, если Вася сможет продать билет каждому и отдать сдачу с имеющимися у него в данный момент купюрами.
//В противном случае вернитесь NO.
//Примеры:
//tickets([25, 25, 50]) // => YES 
//tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
//tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change
// (you can't make two bills of 25 from one of 50)
//---
//
//---Solution---
// function tickets(peopleInLine) {
//   let bills = {
//     25: 0,
//     50: 0,
//     100: 0
//   }
//
//   for (i=0; i < peopleInLine.length; i++) {
//     switch (peopleInLine[i]) {
//       case 25:
//         bills[25] += 1;
//         break;
//
//       case 50:
//         if (bills[25] === 0) return 'NO';
//         bills[25] -= 1;
//         bills[50] += 1;
//         break;
//          
//       case 100:
//         if ((bills[50] === 0 && bills[25] < 3) || (bills[50] > 0 && bills[25] === 0)) return 'NO';
//         if (bills[50] > 0) {
//           bills[25] -= 1;
//           bills[50] -= 1;
//         } else {
//           bills[25] -= 3;
//         }
//         bills[100] += 1;
//         break;
//     }
//   }
//   return 'YES';
// }
//--2 -- Через класс
// function Clerk(name) {
//   this.name = name;
//  
//   this.money = {
//     25 : 0,
//     50 : 0,
//     100: 0 
//   };
//  
//   this.sell = function(element, index, array) {
//     this.money[element]++;
//
//     switch (element) {
//       case 25:
//         return true;
//       case 50:
//         this.money[25]--;
//         break;
//       case 100:
//         this.money[50] ? this.money[50]-- : this.money[25] -= 2;
//         this.money[25]--;
//         break;
//     }
//     return this.money[25] >= 0;
//   };
// }
//
// function tickets(peopleInLine){
//   var vasya = new Clerk("Vasya");
//   return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
// }
//
//---Test---
// console.log( tickets([25, 25, 50, 50]) ); //, "YES"],
// console.log( tickets([25, 100]) ); //,        "NO"]
//
//=== End ( Vasya - Clerk ) ===


//---------------------------------------------------------------------------------------------------
// Sorting by bits - Solution
//6 kyu https://www.codewars.com/kata/sorting-by-bits
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Sorting by bits**
//In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on bits they have.
//E.g Given the array [7, 6, 15, 8]
//7 has 3 on bits (000...0111)
//6 has 2 on bits (000...0011)
//15 has 4 on bits (000...1111)
//8 has 1 on bit (000...1000)
//So the array in sorted order would be [8, 6, 7, 15].
//In cases where two numbers have the same number of bits, compare their real values instead.
//E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but
//the integer 10 is less than 12 so it comes first in sorted order.
//Your task is to write the function sortBybit() that takes an array of integers and sort them as described above.
//Note: Your function should modify the input rather than creating a new array.
//sortByBit([3, 8, 3, 6, 5, 7, 9, 1]) // => [1, 8, 3, 3, 5, 6, 9, 7]
//
//### **Сортировка по битам**
//В этом ката вы ожидали сортировать массив 32-битных целых чисел в порядке возрастания числа на бит у них есть.
//Например, учитывая массив [7, 6, 15, 8]
//7 имеет 3 бит (000 ... 0 111 )
//6 имеет 2 двоичных разряда (000 ... 00 11 )
//15 имеет 4 бит (000 ... 1111 )
//8 имеет 1 бит (000 ... 1 000)
//Таким образом, массив в отсортированном порядке будет [8, 6, 7, 15] .
//В случаях, когда два числа имеют одинаковое количество битов, вместо этого сравните их реальные значения.
//Например , в пределах от 10 (... 1010) и 12 (... 1100) , оба они имеют одинаковое число на бит « 2 » ,
// но целое число 10 меньше , чем 12 , так что приходит первым в отсортированном порядке.
//Ваша задача - написать функцию, sortBybit()которая принимает массив целых чисел и сортирует их, как описано выше.
//Примечание. Ваша функция должна изменять ввод, а не создавать новый массив.
//sortByBit([3, 8, 3, 6, 5, 7, 9, 1]) // => [1, 8, 3, 3, 5, 6, 9, 7]
//---
//
//---Solution---
// function sortByBit(arr) {
//   return arr.sort(function(a,b) {
//     a1 = String(a.toString(2)).split('').reduce((s,e)=>s + +e, 0);
//     b1 = String(b.toString(2)).split('').reduce((s,e)=>s + +e, 0);
//     if (a1<b1) return -1;
//     if (a1===b1) {
//       if (a<b) return -1;
//       if (a===b) return 0;
//       if (a>b) return 1;
//     }
//     if (a1>b1) return 1;
//   });
// }
// //--2--
// const sortByBit = arr => arr.sort((a, b) => a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '') || a - b)
//
//---Test---
// console.log( sortByBit([3, 8, 3, 6, 5, 7, 9, 1]) ); //[1, 8, 3, 3, 5, 6, 9, 7]
// console.log( sortByBit([9,4,5,3,5,7,2,56,8,2,6,8,0]) ); //[0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]
// console.log( sortByBit([20,0,11]) ); //[0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]
// console.log( sortByBit([965997,973785,901104]) ); //[0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]
//
//=== End ( Sorting by bits ) ===
//===================================================================================================


//---------------------------------------------------------------------------------------------------
//  Functions
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// Closures and Scopes - Solution
//6 kyu https://www.codewars.com/kata/closures-and-scopes
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Closures and Scopes**
//We want to create a function, which returns an array of functions, which return their index in the array.
//For better understanding, here an example:
//var callbacks = createFunctions(5); // create an array, containing 5 functions
//callbacks[0](); // must return 0
//callbacks[3](); // must return 3
//We already implemented that function, but when we actually run the code, the result doesn't look like
//what we expected. Can you spot, what's wrong with it? A test fixture is also available
//
//### **Замыкания и области видимости**
//Мы хотим создать функцию, которая возвращает массив функций, которые возвращают свой индекс в массиве.
//Для лучшего понимания вот пример:
//var callbacks = createFunctions(5); // create an array, containing 5 functions
//callbacks[0](); // must return 0
//callbacks[3](); // must return 3
//Мы уже реализовали эту функцию, но когда мы действительно запускаем код, результат не такой, как мы ожидали.
//Вы можете заметить, что с этим не так? Также доступен тестовый стенд.
//---
//---Solution---
// function createFunctions(n) {
//   var callbacks = [];
//   for (let i=0; i<n; i++) {
//     //Это правильно для "let i=0"
//     //Если в цикле описание "var i=0", то
//     //const j = i;
//     callbacks.push(function() {
//       //return j;
//       return i;
//     });
//   }
//   return callbacks;
// }
//
//---Test---
// var callbacks = createFunctions(5); // create an array, containing 5 functions
// console.log( callbacks[0]() ); // must return 0
// console.log( callbacks[3]() ); // must return 3
//
//=== End ( Closures and Scopes ) ===


//---------------------------------------------------------------------------------------------------
// Can you keep a secret? - Solution
//6 kyu https://www.codewars.com/kata/can-you-keep-a-secret
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Can you keep a secret?**
//There's no such thing as private properties on a coffeescript object! But, maybe there are?
//Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object
//with ONLY two methods
//getSecret() which returns the secret
//setSecret() which sets the secret
//obj = createSecretHolder(5)
//obj.getSecret() # returns 5
//obj.setSecret(2)
//obj.getSecret() # returns 2
//
//### **Замыкания и области видимости**
//Вы можете сохранить в тайне?
//Для объекта coffeescript не существует такой вещи, как частные свойства! Но, может быть, есть?
//Реализуйте функцию, createSecretHolder(secret)которая принимает любое значение как секретное и возвращает
//объект ТОЛЬКО двумя методами.
//getSecret() который возвращает секрет
//setSecret() который устанавливает секрет
//obj = createSecretHolder(5)
//obj.getSecret() # returns 5
//obj.setSecret(2)
//obj.getSecret() # returns 2
//---
//---Solution---
// function createSecretHolder(secret) {
//   return {
//     getSecret: function() {
//       return secret;
//     },
//     setSecret: function(value) {
//       secret = value;
//     }
//   }
// }
//
//---Test---
// obj = createSecretHolder(5);
// console.log( obj ); // # returns 5
// console.log( obj.getSecret() ); // # returns 5
// obj.setSecret(2);
// console.log( obj.getSecret() ); // # returns 2
//
//=== End ( Can you keep a secret? ) ===


//---------------------------------------------------------------------------------------------------
//  Date
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// The Coupon Code - Solution
//7 kyu https://www.codewars.com/kata/the-coupon-code
//---------------------------------------------------------------------------------------------------
//---Task---
//### **The Coupon Code**
//Story
//Your online store likes to give out coupons for special occasions. Some customers try to cheat the system
//by entering invalid codes or using expired coupons.
//Task
//Your mission:
//Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
//A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format:
//"MONTH DATE, YEAR".
//Examples:
//checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
//checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
//
//### **Код купона**
//История
//Ваш интернет-магазин любит раздавать купоны для особых случаев. Некоторые клиенты пытаются обмануть систему,
//вводя неверные коды или используя просроченные купоны.
//Задача
//Ваша миссия:
//написать функцию с именем, checkCouponкоторая проверяет, действителен ли код купона и не истек его срок действия.
//Купон больше не действует в день ПОСЛЕ истечения срока его действия. Все даты будут переданы как строки в таком
//формате: "MONTH DATE, YEAR".
//Примеры:
//checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
//checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
//---
//---Solution---
// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   return ((enteredCode === correctCode) && new Date(currentDate) <= new Date(expirationDate));
// }
//
//---Test---
// console.log( checkCoupon('123','123','September 5, 2014','October 1, 2014') ); //, true);
// console.log( checkCoupon('123a','123','September 5, 2014','October 1, 2014') ); //, false);
//
//=== End ( The Coupon Code ) ===


//---------------------------------------------------------------------------------------------------
// Unlucky Days - Solution
//7 kyu https://www.codewars.com/kata/unlucky-days
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Unlucky Days**
//Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
//Find the number of Friday 13th in the given year.
//Input: Year in Gregorian calendar as integer.
//Output: Number of Black Fridays in the year as an integer.
//Examples:
//unluckyDays(2015) == 3
//unluckyDays(1986) == 1
//
//### **Несчастливые дни**
//Пятница 13-е или Черная пятница считается несчастливым днем. Посчитайте, сколько неудачных дней в данном году.
//Найдите число пятницы 13 числа в данном году.
//Ввод: год по григорианскому календарю в виде целого числа.
//Выходные данные: Число черных пятниц в году в виде целого числа.
//Примеры:
//unluckyDays(2015) == 3
//unluckyDays(1986) == 1
//---
//---Solution---
// function unluckyDays(year){
//   mounth = [0,1,2,3,4,5,6,7,8,9,10,11];
//   return mounth.reduce((s,e) => s + (new Date(year,e,13).getDay() === 5 ? 1 : 0), 0);
// }
//
//---Test---
// console.log( unluckyDays(2021) ); //, 1, "should be: 1");
// console.log( unluckyDays(1586) ); //, 1, "should be: 1");
// console.log( unluckyDays(1001) ); //, 3, "should be: 3");
// console.log( unluckyDays(2819) ); //, 2, "should be: 2");
// console.log( unluckyDays(2792) ); //, 2, "should be: 2");
// console.log( unluckyDays(2723) ); //, 2, "should be: 2");
// console.log( unluckyDays(1909) ); //, 1, "should be: 1");
// console.log( unluckyDays(1812) ); //, 2, "should be: 2");
// console.log( unluckyDays(1618) ); //, 2, "should be: 2");
// console.log( unluckyDays(2132) ); //, 1, "should be: 1");
// console.log( unluckyDays(2065) ); //, 3, "should be: 3");
//
//=== End ( Unlucky Days ) ===


//---------------------------------------------------------------------------------------------------
// Human readable duration format - Solution
//4 kyu https://www.codewars.com/kata/human-readable-duration-format
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Human readable duration format**
//Your task in order to complete this Kata is to write a function which formats a duration,
//given as a number of seconds, in a human-friendly way.
//The function must accept a non-negative integer. If it is zero, it just returns "now".
//Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
//It is much easier to understand with an example:
//formatDuration(62)    // returns "1 minute and 2 seconds"
//formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
//For the purpose of this Kata, a year is 365 days and a day is 24 hours.
//Note that spaces are important.
//Detailed rules
//The resulting expression is made of components like 4 seconds, 1 year, etc. In general,
//a positive integer and one of the valid units of time, separated by a space.
//The unit of time is used in plural if the integer is greater than 1.
//The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ",
//just like it would be written in English.
//A more significant units of time will occur before than a least significant one.
//Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
//Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
//A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid,
//but it should be just 1 minute.
//A unit of time must be used "as much as possible". It means that the function should not return 61 seconds,
//but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than
//any valid more significant unit of time.
//
//### **Удобочитаемый формат продолжительности**
//Ваша задача для выполнения этого Ката - написать функцию, которая форматирует длительность,
//заданную как количество секунд, удобным для человека способом.
//Функция должна принимать неотрицательное целое число. Если он равен нулю, он просто возвращается "now".
//В противном случае, длительность выражается в виде комбинации years, days, hours, minutesи seconds.
//Это намного проще понять на примере:
//formatDuration(62)    // returns "1 minute and 2 seconds"
//formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
//Для этого Ката год составляет 365 дней, а день - 24 часа.
//Обратите внимание, что пробелы важны.
//Подробные правила
//Результирующее выражение состоит из таких компонентов, как 4 seconds, 1 yearи т. Д.
//Как правило, положительное целое число и одна из допустимых единиц времени, разделенных пробелом.
//Единица времени используется во множественном числе, если целое число больше 1.
//Компоненты разделяются запятой и пробелом ( ", "). За исключением последнего компонента,
//который разделен значком " and ", как если бы он был написан на английском языке.
//Более значимые единицы времени наступят раньше, чем наименее значимые.
//Следовательно, 1 second and 1 yearне правильно, но 1 year and 1 secondесть.
//У разных компонентов разная единица времени. Так что нет повторяющихся единиц, как в 5 seconds and 1 second.
//Компонент вообще не появится, если его значение равно нулю. Следовательно, 1 minute and 0 secondsнедействительно,
//но это должно быть справедливо 1 minute.
//Единица времени должна использоваться «как можно больше». Это означает, что функция должна не возвращаться 61 seconds,
//а 1 minute and 1 secondвместо этого. Формально продолжительность, указанная в компоненте,
//не должна превышать любую допустимую более значимую единицу времени.
//---
//---Solution---
// function formatDuration (seconds) {
//   let sayTime = '';
//
//   if (seconds <= 0) return 'now';
//
//   y1 = seconds / (60 * 60 * 24 * 365);
//   y = Math.floor(y1);
//   d1 = (y1 - y) * 365;
//   d = Math.floor(d1);
//   h1 = (d1 - d) * 24;
//   h = Math.floor(h1);
//   m1 = (h1 - h) * 60;
//   m = Math.floor(m1);
//   s1 = (m1 - m) * 60;
//   s = Math.round(s1);
//   if (s === 60) {
//     m += 1;
//     s = 0;
//   }
//
//   if (y > 0) sayTime = sayTime + y + (y > 1 ? ' years' : ' year');
//   if (d > 0) sayTime = sayTime + (sayTime === '' ? '' : (h===0 && m===0 && s===0 ? ' and ' : ', ')) + d + (d > 1 ? ' days' : ' day');
//   if (h > 0) sayTime = sayTime + (sayTime === '' ? '' : (m===0 && s===0 ? ' and ' : ', ')) + h + (h > 1 ? ' hours' : ' hour');
//   if (m > 0) sayTime = sayTime + (sayTime === '' ? '' : (s===0 ? ' and ' : ', ')) + m + (m > 1 ? ' minutes' : ' minute');
//   if (s > 0) sayTime = sayTime + (sayTime === '' ? '' : ' and ') + s + (s > 1 ? ' seconds' : ' second');
//   return sayTime;
// }
// //--2--
// function formatDuration (seconds) {
//   var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
//       res = [];
//
//   if (seconds === 0) return 'now';
//  
//   for (var key in time) {
//     if (seconds >= time[key]) {
//       var val = Math.floor(seconds/time[key]);
//       res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
//       seconds = seconds % time[key];
//     }
//   }
// 
//   return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
// }
// //--3--
// function formatDuration (seconds) {
//   if(!seconds)return "now";
//   var strout = "";
//   var s = seconds%60;
//   seconds = (seconds-s)/60;
//   var m = seconds%60;
//   seconds = (seconds-m)/60;
//   var h = seconds%24;
//   seconds = (seconds-h)/24;
//   var d = seconds%365;
//   seconds = (seconds-d)/365;
//   var y = seconds;
//  
//   var english=[];
//   if(y)english.push(y+" year"+(y>1?'s':''));
//   if(d)english.push(d+" day"+(d>1?'s':''));
//   if(h)english.push(h+" hour"+(h>1?'s':''));
//   if(m)english.push(m+" minute"+(m>1?'s':''));
//   if(s)english.push(s+" second"+(s>1?'s':''));
//  
//   return english.join(", ").replace(/,([^,]*)$/," and$1");
//  
// }
// //--4--
// const delegates = [
//   { s: 'year', v: 60 * 60 * 24 * 365 },
//   { s: 'day', v: 60 * 60 * 24 },
//   { s: 'hour', v: 60 * 60 },
//   { s: 'minute', v: 60 },
//   { s: 'second', v: 1 }
// ];
//
// function formatDuration (seconds) {
//   if (!seconds) return 'now';
//
//   return delegates.reduce((ret, dg, idx) => {
//     const val = Math.floor(seconds / dg.v);
//     if (!val) return ret;
//     seconds -= dg.v * val;
//     const str = val > 1 ? dg.s + 's' : dg.s;
//     const add = !ret ? '' : (seconds > 0 ? ', ' : ' and ');
//     return ret + add + `${val} ${str}`;
//   }, '');
// }
//
//---Test---
// console.log( formatDuration(0) ); //, "1 second");
// console.log( formatDuration(1) ); //, "1 second");
// console.log( formatDuration(60) ); //, "1 minute and 2 seconds");
// console.log( formatDuration(62) ); //, "1 minute and 2 seconds");
// console.log( formatDuration(120) ); //, "2 minutes");
// console.log( formatDuration(3600) ); //, "1 hour");
// console.log( formatDuration(3662) ); //, "1 hour, 1 minute and 2 seconds");
//
//=== End ( Human readable duration format ) ===



//---------------------------------------------------------------------------------------------------
//  Objects
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// My Languages - Solution
//7 kyu https://www.codewars.com/kata/mylanguages
//---------------------------------------------------------------------------------------------------
//---Task---
//### **My Languages**
//Task
//You are given a dictionary/hash/object containing some languages and your test results in the given languages.
//Return the list of languages where your test score is at least 60, in descending order of the results.
//Note: the scores will always be unique (so no duplicate values)
//Examples
//{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
//{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
//{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
//My other katas
//If you enjoyed this kata then please try my other katas! :-)
//Translations are welcome!
//
//### **Мои языки**
//Задача
//Вам предоставляется словарь / хэш / объект, содержащий некоторые языки, и результаты вашего теста на этих языках.
//Верните список языков, на которых ваш тестовый балл не ниже 60, в порядке убывания результатов.
//Примечание: оценки всегда будут уникальными (чтобы не было повторяющихся значений).
//Примеры
//{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
//{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
//{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
//Мои другие каты
//Если вам понравилось это ката, попробуйте другие мои ката ! :-)
//Переводы приветствуются!
//---
//---Solution---
// function myLanguages(results) {
//   return Object.entries(results).filter(e=>e[1]>=60).sort((a,b)=>b[1]-a[1]).map(e=>e[0]);
// }
//
//---Test---
// console.log( myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}) ); //, ["Ruby", "Python"])
// console.log( myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}) ); //, ["Dutch", "Greek", "Hindi"])
// console.log( myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}) ); //, [])
//
//=== End ( My Languages ) ===

//---------------------------------------------------------------------------------------------------
// Run-length encoding - Solution
//6 kyu https://www.codewars.com/kata/run-length-encoding
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Run-length encoding**
//Run-length encoding (RLE) is a very simple form of data compression in which runs of data
//(that is, sequences in which the same data value occurs in many consecutive data elements)
//are stored as a single data value and count, rather than as the original run. Wikipedia
//Task
//Your task is to write such a run-length encoding. For a given string, return a list (or array)
//of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original
//string by replicating the character sx ix times and concatening all those strings.
//Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.
//Examples
//As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data,
//as one can see in the following example:
//runLengthEncoding("hello world!")
// //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
//It's very effective if the same data value occurs in many consecutive data elements:
//runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
// // => [[34,'a'], [3,'b']]
//
//### **Кодирование длин серий**
//Задача
//Кодирование длин серий (RLE) - это очень простая форма сжатия данных, при которой серии данных
//(то есть последовательности, в которых одно и то же значение данных встречается во многих последовательных
//элементах данных) сохраняются как одно значение данных и счетчик, а не как оригинальный пробег. Википедия
//Задача
//Ваша задача написать такую ​​кодировку длин серий. Для данной строки вернуть список (или массив)
//пар (или массивов) [(i 1 , s 1 ), (i 2 , s 2 ),…, (i n , s n )], чтобы можно было восстановить исходную строку,
//реплицируя символ s x i x раз и объединяя все эти строки. Кодировка длины прогона должна быть минимальной,
//т.е. для всех i значения s i и s i + 1 должны различаться.
//Примеры
//Как говорится в статье, RLE - это очень простая форма сжатия данных. Это подходит только для прогонов данных,
//как показано в следующем примере:
//runLengthEncoding("hello world!")
// //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
//Это очень эффективно, если одно и то же значение данных встречается во многих последовательных элементах данных:
//runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
// // => [[34,'a'], [3,'b']]
//---
//---Solution---
// var runLengthEncoding = function(str){
//   let arr = [];
//   str.split('').forEach(e => {
//     (arr.length === 0 || arr[arr.length-1][1] !== e) ? arr.push([1,e]) : arr[arr.length-1][0] += 1;
//   });
//   return arr;
// }
// //--2--
// var runLengthEncoding = function(str){
//   return (str.match(/(.)\1*/g) || []).reduce(function(r, s){
//     return r.push([s.length, s[0]]), r;
//   }, []);
// }
// //--3--
// function runLengthEncoding(str) {
//   return (str.match(/(.)\1*/g)||[]).map(function(c) {
//     return [c.length, c[0]];
//   });
// }
//
//---Test---
// console.log( runLengthEncoding("") ); //, []);      
// console.log( runLengthEncoding("abc") ); //, [[1,'a'],[1,'b'],[1,'c']]);
// console.log( runLengthEncoding("aab") ); //, [[2,'a'],[1,'b']]);      
// console.log( runLengthEncoding("hello world!") ); //[[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]);
// console.log( runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb") ); // [[34,'a'], [3,'b']]);
// console.log( runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW") ); // [[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]
//
//=== End ( Run-length encoding ) ===

//---------------------------------------------------------------------------------------------------
// Urban Dictionary - Solution
//6 kyu https://www.codewars.com/kata/urban-dictionary
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Urban Dictionary**
//Design a data structure that supports the following two operations:
//addWord (or add_word) which adds a word,
//search which searches a literal word or a regular expression string containing lowercase
//letters "a-z" or "." where "." can represent any letter
//You may assume that all given words contain only lowercase letters.
//Examples
//addWord("bad")
//addWord("dad")
//addWord("mad")
//search("pad") === false
//search("bad") === true
//search(".ad") === true
//search("b..") === true
//Note: the data structure will be initialized multiple times during the tests!
//
//### **Словарь городского сленга**
//Разработайте структуру данных, которая поддерживает следующие две операции:
//addWord(или add_word) добавляющее слово,
//searchкоторый ищет буквальное слово или строку регулярного выражения,
//содержащую строчные буквы "a-z"или "."где "."может представлять любую букву
//Вы можете считать, что все заданные слова содержат только строчные буквы.
//Примеры
//addWord("bad")
//addWord("dad")
//addWord("mad")
//search("pad") === false
//search("bad") === true
//search(".ad") === true
//search("b..") === true
//Примечание: структура данных будет инициализирована несколько раз во время тестов!
//---
//---Solution---
// var WordDictionary = function () {
//   this.dictionary = [];
// };

// WordDictionary.prototype.addWord = function (word) {
//   this.dictionary.push(word);
// };

// WordDictionary.prototype.search = function (word) {
//   const reg = new RegExp('^'+word+'$','g');
//   return this.dictionary.some(e => reg.test(e));
// };
//
//---Test---
// let wd = new WordDictionary();
// wd.addWord('a');
// wd.addWord('at');
// wd.addWord('ate');
// wd.addWord('ear');
// console.log( wd.search('a') ); //, true);
// console.log( wd.search('a.') ); //, true);
// console.log( wd.search('a.e') ); //, true);
// console.log( wd.search('b') ); //, false);
// console.log( wd.search('e.') ); //, false);
// console.log( wd.search('ea.') ); //, true);
// console.log( wd.search('ea..') ); //, false);
// wd.addWord('co');
// wd.addWord('cod');
// wd.addWord('code');
// wd.addWord('codewars');
// console.log( wd.search('........') ); //, true);
// console.log( wd.search('c.o') ); //, false);
// console.log( wd.search('cod.') ); //, true);
// console.log( wd.search('c.o') ); //, false);
// console.log( wd.search('co..w..s') ); //, true);
// console.log( wd.search('co..w..') ); //, false);
//
//=== End ( Urban Dictionary ) ===



//---------------------------------------------------------------------------------------------------
//  Data Structures
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// Convert a linked list to a string - Solution
//7 kyu https://www.codewars.com/kata/convert-a-linked-list-to-a-string
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Convert a linked list to a string**
//Convert a linked list to a string
//Related Kata
//Although this Kata is not part of an official Series, you may also want to try out Parse a linked
//list from a string if you enjoyed this Kata.
//Preloaded
//Preloaded for you is a class, struct or derived data type Node (depending on the language) used to construct
//linked lists in this Kata:
//class Node {
//  constructor(data, next = null) {
//    this.data = data;
//    this.next = next;
//  }
//}
//If you are attempting this Kata in NASM then note that the code example shown directly above may not be relevant;
//please refer to the Sample Tests (written in C) for the exact definition of the Node structure.
//Prerequisites
//This Kata assumes that you are already familiar with the idea of a linked list. If you do not know what that is,
//you may want to read up on this article on Wikipedia. Specifically,
//the linked lists this Kata is referring to are singly linked lists,
//where the value of a specific node is stored in its data/$data/Data property,
//the reference to the next node is stored in its next/$next/Next/next_node property and the terminator
//for a list is null/NULL/None/nil/nullptr/null().
//Task
//If you are attempting this Kata in NASM, the code examples shown below may not be relevant at all - please
//refer to the Sample Tests (written in C) for the exact requirements.
//Create a function stringify which accepts an argument list/$list and returns a string representation of the list.
//The string representation of the list starts with the value of the current Node,
//specified by its data/$data/Data property, followed by a whitespace character,
//an arrow and another whitespace character (" -> "), followed by the rest of the list.
//The end of the string representation of a list must always end with null/NULL/None/nil/nullptr/null()
//(all caps or all lowercase depending on the language you are undertaking this Kata in).
//For example, given the following list:
//new Node(1, new Node(2, new Node(3)))
//... its string representation would be:
//"1 -> 2 -> 3 -> null"
//And given the following linked list:
//new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))
//... its string representation would be:
//"0 -> 1 -> 4 -> 9 -> 16 -> null"
//Note that null/NULL/None/nil/nullptr/null() itself is also considered a valid linked list. In that case,
//its string representation would simply be "null"/"NULL"/"None"/"nil"/"nullptr"/@"NULL"/"null()"
//(again, depending on the language).
//For the simplicity of this Kata, you may assume that any Node in this Kata may only contain non-negative
//integer values. For example, you will not encounter a Node whose data/$data/Data property is "Hello World".
//Enjoy, and don't forget to check out my other Kata Series :D
//
//### **Преобразовать связанный список в строку**
//Преобразовать связанный список в строку
//Связанные Ката
//Хотя это Ката не является частью официальной серии, вы также можете попробовать Парсить связанный список из строки,
//если вам понравилось это Ката.
//Предзагружено
//Для вас предварительно загружен класс, структура или производный тип данных Node(в зависимости от языка),
//используемый для создания связанных списков в этом Ката:
//class Node {
//  constructor(data, next = null) {
//    this.data = data;
//    this.next = next;
//  }
//}
//Если вы пытаетесь выполнить это Ката в NASM, обратите внимание, что приведенный выше пример кода может
//не иметь отношения к делу; Пожалуйста, обратитесь к Образцам тестов (написанным на C) для точного
//определения Nodeструктуры.
//Предпосылки
//Это Ката предполагает, что вы уже знакомы с идеей связного списка. Если вы не знаете, что это такое,
//вы можете прочитать эту статью в Википедии . В частности, связанные списки, на которые ссылается Ката,
//являются односвязными списками , где значение конкретного узла хранится в его свойстве data/ $data/ Data,
//ссылка на следующий узел хранится в его свойстве next/ $next/ Next/, next_nodeа терминатор для списка.
//это null/ NULL/ None/ nil/ nullptr/ null().
//Задача
//Если вы пытаетесь выполнить это Ката в NASM, приведенные ниже примеры кода могут вообще не иметь
//отношения - пожалуйста, обратитесь к образцам тестов (написанным на C) для получения точных требований.
//Создайте функцию, stringifyкоторая принимает аргумент list/ $listи возвращает строковое представление списка.
//Строковое представление списка начинается со значения текущего Node, указанного в его свойстве data/ $data/ Data,
//за которым следуют пробельный символ, стрелка и еще один пробельный символ ( " -> "),
//за которым следует остальная часть списка. Конец строкового представления списка всегда должен
//заканчиваться null/ NULL/ None/ nil/ nullptr/ null()(все заглавные или все строчные буквы в зависимости от языка,
//на котором вы выполняете это Ката). Например, учитывая следующий список:
//new Node(1, new Node(2, new Node(3)))
//... его строковое представление будет:
//"1 -> 2 -> 3 -> null"
//И учитывая следующий связанный список:
//new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))
//... его строковое представление будет:
//"0 -> 1 -> 4 -> 9 -> 16 -> null"
//Обратите внимание, что null/ NULL/ None/ nil/ nullptr/ null()сам по себе также считается допустимым связанным списком.
//В этом случае его строковое представление будет просто "null"/ "NULL"/ "None"/ "nil"/ "nullptr"/ @"NULL"/ "null()"
//(опять же, в зависимости от языка).
//Для простоты этого Ката вы можете предположить, что любое Nodeв этом Ката может содержать только неотрицательные
//целые числа . Например, вы не встретите, Nodeчье свойство data/ $data/ .Data"Hello World"
//Наслаждайтесь и не забудьте проверить мою другую серию Ката: D
//---
//---Solution---
// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }
// function stringify(list) {
//   let str = '';
//   if (list === null) return 'null';
//   str += list.data + (list.next === null ? ' -> null' : ' -> '+ stringify(list.next));
//   return str;
// }
//--2--
// function stringify(list) {
//   return list === null ? "null" : `${list.data} -> ${stringify(list.next)}`; 
// }
//
//---Test---
// console.log( stringify(new Node(1, new Node(2, new Node(3)))) ); //, "1 -> 2 -> 3 -> null");
// console.log( stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))) ); //, "0 -> 1 -> 4 -> 9 -> 16 -> null");
// console.log( stringify(null) ); //, "null");
//
//=== End ( Convert a linked list to a string ) ===


//---------------------------------------------------------------------------------------------------
// Fun with trees: array to tree - Solution
//5 kyu https://www.codewars.com/kata/fun-with-trees-array-to-tree
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Fun with trees: array to tree**
//You are given a non-null array of integers. Implement the method arrayToTree which creates a binary tree from
//its values in accordance to their order, while creating nodes by depth from left to right.
//For example, given the array [17, 0, -4, 3, 15] you should create the following tree:
//    17
//   /  \
//  0   -4
// / \
//3   15 
//The class TreeNode is available for you:
//var TreeNode = function(value, left, right) {
//  this.value = value;
//  this.left = left;
//  this.right = right;
//};
//This kata is part of fun with trees series:
//Fun with trees: max sum
//Fun with trees: array to tree
//Fun with trees: is perfect
//
//### **Развлечение с деревьями: от массива к дереву**
//Вам дан ненулевой массив целых чисел. Реализуйте метод arrayToTree,
//который создает двоичное дерево из его значений в соответствии с их порядком, создавая узлы по глубине слева направо.
//Например, имея массив [17, 0, -4, 3, 15], вы должны создать следующее дерево:
//    17
//   /  \
//  0   -4
// / \
//3   15 
//Вам доступен класс TreeNode:
//var TreeNode = function(value, left, right) {
//  this.value = value;
//  this.left = left;
//  this.right = right;
//};
//Это ката является частью серии « Веселье с деревьями »:
//Развлечение с деревьями: максимальная сумма
//Развлечение с деревьями: от массива к дереву
//Развлечение с деревьями: идеально
//
//---
//---Solution---
// var TreeNode = function(value, left, right) {
//   this.value = value;
//   this.left = left;
//   this.right = right;
// };
// function arrayToTree(array, i = 0) {
//   if (i >= array.length) return;
//   return new TreeNode(
//     array[i],
//     arrayToTree(array, 2 * i + 1),
//     arrayToTree(array, 2 * i + 2)
//   )
// }
//
//---Test---
// array = [17, 0, -4, 3, 15];
// console.log( arrayToTree(array) ); // new TreeNode(17, new TreeNode(0, new TreeNode(3), new TreeNode(15)), new TreeNode(-4)));
//
//=== End ( Fun with trees: array to tree ) ===

//---------------------------------------------------------------------------------------------------
//===================================================================================================


//---------------------------------------------------------------------------------------------------
//  String
//---------------------------------------------------------------------------------------------------

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





























/*


Date
7 kyu https://www.codewars.com/kata/mylanguages
My Languages
Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function myLanguages(results) {

}

describe("myLanguages", function(){
  it("Fixed tests", function(){
    Test.assertDeepEquals(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"])
    Test.assertDeepEquals(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"])
    Test.assertDeepEquals(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}), [])
  });
});

Задача
Вам предоставляется словарь / хэш / объект, содержащий некоторые языки, и результаты вашего теста на этих языках. Верните список языков, на которых ваш тестовый балл не ниже 60, в порядке убывания результатов.

Примечание: оценки всегда будут уникальными (чтобы не было повторяющихся значений).

Примеры
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []



6 kyu https://www.codewars.com/kata/run-length-encoding
Run-length encoding
Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. Wikipedia

Task
Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

Examples
As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:

runLengthEncoding("hello world!")
 //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
It's very effective if the same data value occurs in many consecutive data elements:

runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
 // => [[34,'a'], [3,'b']]


 var runLengthEncoding = function(str){
  return [] // << fix this
}


var randomString = function(n){
  var i, s = "";
  for(i = 0; i < n; ++i)
    s += (new Array((Math.random() * 5 + 1) | 0)).join(String.fromCharCode((Math.random() * 26 + "A".charCodeAt(0)) | 0));
  return s;
}

describe("runLengthEncoding",function(){
  it("should work for some examples",function(){
    Test.assertSimilar(runLengthEncoding(""), []);      
    Test.assertSimilar(runLengthEncoding("abc"), [[1,'a'],[1,'b'],[1,'c']]);
    Test.assertSimilar(runLengthEncoding("aab"), [[2,'a'],[1,'b']]);      
    Test.assertSimilar(runLengthEncoding("hello world!"),
      [[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]);
    Test.assertSimilar(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"),
      [[34,'a'], [3,'b']]);
    Test.assertSimilar(
      runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"),
      [[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]
    );
  });
});
describe("inverse operations",function(){
  it("should return the original string",function(){
    var i, inversRLE = function(arr){
      return arr.reduce(function(p,e){ return p += (new Array(e[0] + 1).join(e[1])); }, "");
    }, s;
    for(i = 0;  i < 100; ++i){
      s = randomString(20);
      Test.assertEquals(inversRLE(runLengthEncoding(s)), s);
    }     
  });
});

Кодирование длин серий

Кодирование длин серий (RLE) - это очень простая форма сжатия данных, при которой серии данных (то есть последовательности, в которых одно и то же значение данных встречается во многих последовательных элементах данных) сохраняются как одно значение данных и счетчик, а не как оригинальный пробег. Википедия

Задача
Ваша задача написать такую ​​кодировку длин серий. Для данной строки вернуть список (или массив) пар (или массивов) [(i 1 , s 1 ), (i 2 , s 2 ),…, (i n , s n )], чтобы можно было восстановить исходную строку, реплицируя символ s x i x раз и объединяя все эти строки. Кодировка длины прогона должна быть минимальной, т.е. для всех i значения s i и s i + 1 должны различаться.

Примеры
Как говорится в статье, RLE - это очень простая форма сжатия данных. Это подходит только для прогонов данных, как показано в следующем примере:

runLengthEncoding("hello world!")
 //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
Это очень эффективно, если одно и то же значение данных встречается во многих последовательных элементах данных:

runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
 // => [[34,'a'], [3,'b']]




*/
