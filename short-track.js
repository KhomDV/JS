
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
function getMatrixElementsSum(matrix) {

  let sum = 0;
  const aSwitch = new Array(matrix[0].length).fill(1);

  for (let i=0;i<matrix.length;i++) {
    for (let j=1;j<matrix[i].length;j++) {
      if (aSwitch[j] === 1) {
        if (matrix[i][j] === 0) {
          aSwitch[j] = 0;
        } else {
          sum += matrix[i][j];
        }
      }
    }
  }
  return sum;
}
//
//---Test---
let arrayTest = [ 
  [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
  ]
  ]
//
//---View solution---
for (let i=0;i<arrayTest.length;i++) {

    document.write(getMatrixElementsSum(arrayTest[i]));
    document.write(' | ');

}
//=== End ( 01-matrix-elements-sum ) ===


