
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
function getCommonCharacterCount(s1, s2) {
  let result = 0;

  //let aStr = [...new Set([...( s1.length < s2.length ? s1 : s2)])];

  const aStr = [...new Set(s1)].filter(item => s2.includes(item));
  return [...new Set(s1)].filter(item => s2.includes(item)).reduce((sum, item) => sum + Math.min(s1.split('').filter((e)=>e===item).length, s2.split('').filter((e)=>e===item).length), 0);
}
//
//---Test---
let arrayTest = [
  ['aabcc', 'adcaa'], //3);
  ['zzzz', 'zzzzzzz'], //4);
  ['abca', 'xyzbac'], //3);
  ['', 'abc'], //0);
  ['a', 'b'] //0);
]
//
//---View solution---
for (let i=0;i<arrayTest.length;i++) {

    document.write(getCommonCharacterCount(arrayTest[i][0],arrayTest[i][1]));
    document.write(' | ');

}
//=== End ( 02-common-character-count ) ===

