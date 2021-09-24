


//---------------------------------------------------------------------------------------------------
//   Codewars #1
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
//  Numbers, strings
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// Absent vowel
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
// Get the Middle Character
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
// Jaden Casing Strings
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
//    return str.split('').filter((e) => !/[aeiou]/gi.test(e) ).join('');
//    //best - str.replace(/[aeiou]/gi, '')
//}
//
//---Test---
//console.log( disemvowel("This website is for losers LOL!")); //"Ths wbst s fr lsrs LL!"
// 
//=== End ( Disemvowel Trolls ) ===


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
// Nickname Generator
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
// Digits explosion
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
// Handshake problem
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
// Reverse or rotate?
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
// Multiples of 3 or 5
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


