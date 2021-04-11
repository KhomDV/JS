
//---------------------------------------------------------------------------------------------------
//   rs-school-short-track-2021
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// 01-matrix-elements-sum
//---------------------------------------------------------------------------------------------------
//---Task---
// Given matrix, a rectangular matrix of integers,
// just add up all the values that don't appear below a "0".
// @param {Array<Array>} matrix
// @return {Number}
// @example
// matrix = [
//  [0, 1, 1, 2],
//  [0, 5, 0, 0],
//  [2, 0, 3, 3]
// ]
// The result should be 9
// ---
//
//---Solution---
// function getMatrixElementsSum(matrix) {
//
//   let sum = 0;
//   const aSwitch = new Array(matrix[0].length).fill(1);
//
//   for (let i=0;i<matrix.length;i++) {
//     for (let j=1;j<matrix[i].length;j++) {
//       if (aSwitch[j] === 1) {
//         if (matrix[i][j] === 0) {
//           aSwitch[j] = 0;
//         } else {
//           sum += matrix[i][j];
//         }
//       }
//     }
//   }
//   return sum;
// }
//
//---Test---
// let arrayTest = [ 
//   [
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3]
//   ]
//   ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//
//     document.write(getMatrixElementsSum(arrayTest[i]));
//     document.write(' | ');
//
// }
//=== End ( 01-matrix-elements-sum ) ===


//---------------------------------------------------------------------------------------------------
// 02-common-character-count
//---------------------------------------------------------------------------------------------------
//---Task---
// Given two strings, find the number of common characters between them.
// @param {String} s1
// @param {String} s2
// @return {Number}
// @example
// For s1 = "aabcc" and s2 = "adcaa", the output should be 3
// Strings have 3 common characters - 2 "a"s and 1 "c".
// ---
//
//---Solution---
// function getCommonCharacterCount(s1, s2) {
//   let result = 0;
//
//   //let aStr = [...new Set([...( s1.length < s2.length ? s1 : s2)])];
//
//   const aStr = [...new Set(s1)].filter(item => s2.includes(item));
//   return [...new Set(s1)].filter(item => s2.includes(item)).reduce((sum, item) => sum + Math.min(s1.split('').filter((e)=>e===item).length, s2.split('').filter((e)=>e===item).length), 0);
// }
//
//---Test---
// let arrayTest = [
//   ['aabcc', 'adcaa'], //3);
//   ['zzzz', 'zzzzzzz'], //4);
//   ['abca', 'xyzbac'], //3);
//   ['', 'abc'], //0);
//   ['a', 'b'] //0);
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//
//     document.write(getCommonCharacterCount(arrayTest[i][0],arrayTest[i][1]));
//     document.write(' | ');
//
// }
//=== End ( 02-common-character-count ) ===


//---------------------------------------------------------------------------------------------------
// 03-sort-by-height
//---------------------------------------------------------------------------------------------------
//---Task---
//
// Given an array with heights, sort them except if the value is -1.
// @param {Array} arr
// @return {Array}
// @example
// arr = [-1, 150, 190, 170, -1, -1, 160, 180]
// The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
// ---
//
//---Solution---
// function sortByHeight(arr) {
//   let nLen = arr.length - 1;
//   let numbMax = 0;
//   for (let i=0; i < nLen; i++) {
//     let j = 0;
//     while (j < (nLen - i)) {
//       if (arr[j] !== -1) {
//         let k = j + 1;
//         while (k <= nLen) {
//           if (arr[k] !== -1) {
//             if (arr[j] > arr[k]) {
//               numbMax = arr[j];
//               arr[j] = arr[k];
//               arr[k] = numbMax;
//             }
//             break;
//           } else {
//             k++;
//           }
//         }
//         j = k;
//       } else {
//         j++;
//       }
//     }
//   }
//   return arr;
// }
//
//---Test---
// let arrayTest = [
//   [-1, 150, 190, 170, -1, -1, 160, 180] //[-1, 150, 160, 170, -1, -1, 180, 190]
// ]
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//   document.write(sortByHeight(arrayTest[i]));
//   document.write(' | ');
// }
//=== End ( 03-sort-by-height ) ===


//---------------------------------------------------------------------------------------------------
// 04-mine-sweeper
//---------------------------------------------------------------------------------------------------
//---Task---
//
// In the popular Minesweeper game you have a board with some mines and those cells
// that don't contain a mine have a number in it that indicates the total number of mines
// in the neighboring cells. Starting off with some arrangement of mines
// we want to create a Minesweeper game setup.
// @param {Array<Array>} matrix
// @return {Array<Array>}
// @example
// matrix = [
//  [true, false, false],
//  [false, true, false],
//  [false, false, false]
//]
// The result should be following:
// [
//  [1, 2, 1],
//  [2, 1, 1],
//  [1, 1, 1]
// ]
// ---
//
//---Solution---
// function minesweeper(matrix) {
//   let aMine = Array(matrix.length);
//   for (i=0; i < matrix.length; i++) {
//     aMine[i] = Array(matrix[i].length);
//   }
//   for (let i=0; i < matrix.length; i++) {
//     for (let j=0; j < matrix[i].length; j++) {
//       const nStartX = (i-1) < 0 ? 0 : (i-1);
//       const nEndX = (i+1) > (matrix.length-1) ? (matrix.length-1) : (i+1);
//       const nStartY = (j-1) < 0 ? 0 : (j-1);
//       const nEndY = (j+1) > (matrix[i].length-1) ? (matrix[i].length-1) : (j+1);
//       let nMine = 0;
//       for (let k=nStartX; k <= nEndX; k++) {
//         for (let q=nStartY; q <= nEndY; q++) {
//           if (i !== k || j !== q) {
//             if (matrix[k][q] === true) {
//               nMine++;
//             }
//           }
//         }
//       }
//       aMine[i][j] = nMine;
//     }
//   }
//   return aMine;
// }
//
//---Test---
// let arrayTest = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
// ]
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//   document.write(minesweeper(arrayTest));
//   document.write(' | ');
// }
//=== End ( 04-mine-sweeper ) ===


//---------------------------------------------------------------------------------------------------
// 05-delete-digit
//---------------------------------------------------------------------------------------------------
//---Task---
// * Given some integer, find the maximal number you can obtain
// * by deleting exactly one digit of the given number.
// * @param {Number} n
// * @return {Number}
// * @example
// * For n = 152, the output should be 52
// ---
//
//---Solution---
// function deleteDigit(n) {
//   const str = String(n);
//   result = "";
//   for (i=0; i < str.length-1; i++) {
//     if (+str[i] < +str[i+1]) {
//       result = str.substring(0,i) + str.substring(i+1);
//       break;
//     } else {
//       if (i === str.length-2) {
//         if (+str[i] < +str[i+1]) {
//           result = str.substring(0,i) + str.substring(i+1);  
//         } else {
//           result = str.substring(str.length-1,0);
//         }
//       }
//     }
//   }
//   return Number(result);
// }
//
//---Test---
// let arrayTest = [
//   152,
//   7272,
//   221,
//   929919,
//   45678541,
//   449,
//   441
// ]
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//   document.write(deleteDigit(arrayTest[i]));
//   document.write(' | ');
// }
//=== End ( 05-delete-digit ) ===


//---------------------------------------------------------------------------------------------------
// 06-mac-address
//---------------------------------------------------------------------------------------------------
//---Task---
// The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
// separated by hyphens.
// Your task is to check by given string inputString
// whether it's a MAC-48 address or not.
// @param {Number} inputString
// @return {Number}
// @example
// For 00-1B-63-84-45-E6, the output should be true.
// ---
//
//---Solution---
// function isMAC48Address(n) {
//   macAddress = n.split("-");
//   let lResult = true;
//   for (let i=0; i < macAddress.length-1; i++) {
//     // if (macAddress[i].length !== 2) {
//     //   lResult = false;
//     //   break;
//     // }
//     if (!/^[0-9A-F]{2,2}$/.test(macAddress[i])) {
//       lResult = false;
//       break;
//     }
//   }
//   return lResult;
// }
//
//---Test---
// let arrayTest = [
//   '00-1B-63-84-45-E6', //true);
//   'Z1-1B-63-84-45-E6', //false);
//   'not a MAC-48 address', //false);
//   'FF-FF-FF-FF-FF-FF', //true);
//   'G0-00-00-00-00-00' //false);
// ]
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//   document.write(isMAC48Address(arrayTest[i]));
//   document.write(' | ');
// }
//=== End ( 06-mac-address ) ===


//---------------------------------------------------------------------------------------------------
// 07-file-names
//---------------------------------------------------------------------------------------------------
//---Task---
//There's a list of file, since two files cannot have equal names,
//the one which comes later will have a suffix (k),
//where k is the smallest integer such that the found name is not used yet.
//Return an array of names that will be given to the files.
//@param {Array} names
//@return {Array}
//@example
//For input ["file", "file", "image", "file(1)", "file"],
//the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
// ---
//---Solution---
// function renameFiles(names) {
//   oCounter = {};
//   names = names.map(function(item) {
//     let itemName = item;
//     if (item in oCounter) {
//       itemName = item+"("+oCounter[item]+")";
//       oCounter[item] += 1;
//       if (!(itemName in oCounter)) {
//         oCounter[itemName] = 1;
//       }
//     } else {
//       oCounter[item] = 1;
//     }
//     return itemName;
//   });
//   return names;
// }
//
//---Test---
// let arrayTest = [
//   ["file", "file", "image", "file(1)", "file"], //["file", "file(1)", "image", "file(1)(1)", "file(2)"]
//   ['doc', 'doc', 'image', 'doc(1)', 'doc'], //), ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']);
//   ['a', 'b', 'cd', 'b ', 'a(3)'], //), ['a', 'b', 'cd', 'b ', 'a(3)']);
//   [] //), []);
// ]
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//   document.write(renameFiles(arrayTest[i]));
//   document.write(' | ');
// }
//=== End ( 07-file-names ) ===


//---------------------------------------------------------------------------------------------------
// 08-remove-from-list
//---------------------------------------------------------------------------------------------------
//---Task---
//Given a singly linked list of integers l and an integer k,
//remove all elements from list l that have a value equal to k.
//@param {List} l
//@param {Number} k
//@return {List}
//@example
//For l = [3, 1, 2, 3, 4, 5] and l = 3,
//the output should be [1, 2, 4, 5]
//Singly - linked lists are already defined with this interface
//function ListNode(x) {
//  this.value = x;
//  this.next = null;
//}
// ---
//---Solution---
// function removeKFromList(l, k) {
//   result = l.filter(item => item !== k);
//   return result;
// }
//
//---Test---
// let arrayTest = [
//   [[3, 1, 2, 3, 4, 5], 3] //[1, 2, 4, 5]);
// ]
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//   document.write(removeKFromList(arrayTest[i][0],arrayTest[i][1]));
//   document.write(' | ');
// }
//=== End ( 08-remove-from-list ) ===


//---------------------------------------------------------------------------------------------------
// 09-sum-digits
//---------------------------------------------------------------------------------------------------
//---Task---
//Given a number, replace this number with
//the sum of its digits until we get to a one digit number.
//@param {Number} n
//@return {Number}
//@example
//For 100, the result should be 1 (1 + 0 + 0 = 1)
//For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
// ---
//---Solution---
// function getSumOfDigits(n) {
//   n = String(n).split('').reduce((sum, item)=> sum + (+item),0);
//   if (n >= 10) {
//     n = getSumOfDigits(n);
//   };
//   return n;
// }
//
//---Test---
// let arrayTest = [
//   100, // 1
//   91,  // 1
//   89,  // 8
//   35,  //8);
//   99,  //9);
//   123 //6);
// ]
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//   document.write(getSumOfDigits(arrayTest[i]));
//   document.write(' | ');
// }
//=== End ( 09-sum-digits ) ===


//---------------------------------------------------------------------------------------------------
// 10-find-index
//---------------------------------------------------------------------------------------------------
//---Task---
//Given a sorted array, find the index of the element with the given value.
//Time complexity should be O(logN)
//@param {Array} array
//@param {Number} value
//@return {Number}
//@example
//For ([1, 2, 3], 1) should return 0
//For ([1, 2, 3], 2) should return 1
// ---
//---Solution---
// function findIndex(array, value) {
//   return array.findIndex((item)=>item===value);
// }
//
//---Test---
// let arrayTest = [
//   [[1, 2, 3, 4, 5], 5], //4);
//   [[1, 2, 3, 4, 5], 3], //2);
//   [[1, 2, 3, 4, 5], 1], //0);
//   [[5, 6, 7], 7], //2);
//   [[5, 6, 7], 5]  //0);
// ]
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//   document.write(findIndex(arrayTest[i][0],arrayTest[i][1]));
//   document.write(' | ');
// }
//=== End ( 10-find-index ) ===


//---------------------------------------------------------------------------------------------------
// 11-encode-line
//---------------------------------------------------------------------------------------------------
//---Task---
//Given a string, return its encoding version.
//@param {String} str
//@return {String}
//@example
//For aabbbc should return 2a3bc
// ---
//---Solution---
function encodeLine(str) {
  throw new Error('Not implemented');
}
//
//---Test---
let arrayTest = [
  ['aaaatttt'], //'4a4t');
  ['aabbccc'], //'2a2b3c');
  ['abbcca'], //'a2b2ca');
  ['xyz'], //'xyz');
  [''] // '');
]
//---View solution---
for (let i=0;i<arrayTest.length;i++) {
  document.write(encodeLine(arrayTest[i]));
  document.write(' | ');
}
//=== End ( 11-encode-line ) ===


