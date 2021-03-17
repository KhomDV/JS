

// My Solution
function towelSort(matrix) {
    // your solution

	if ( !Array.isArray(matrix) ) return [];
	if (matrix.length === 0) return [];

//	let arraySort = new Array();
//	let iterator = 1;
	return matrix.map((element, i)=> (i%2 !== 0) ? element.reverse() : element).flat();


	//(elemen, i) => { if (i%2 !== 0) { matrix[i].reverse() }}

//	for (let i=0; i<matrix.length; i++) {
//		if (iterator === 1) {
//			arraySort = arraySort.concat(matrix[i]);
//		} else {
//			arraySort = arraySort.concat(matrix[i].reverse());
//		}
//		iterator = iterator * (-1);
//	}
//
//	return arraySort;

}



const matrix1 = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
];

document.write(towelSort(matrix1));
