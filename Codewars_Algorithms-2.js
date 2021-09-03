


//---------------------------------------------------------------------------------------------------
//   Codewars Algorithms-2
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// The Deca Tree
// (7 kyu) https://www.codewars.com/kata/the-deca-tree
//---------------------------------------------------------------------------------------------------
//---Task---
//### **The Deca Tree**
//In the Deca Forest, grow the Deca Trees.
//On each Deca Tree, a trunk has 10 branches.
//On each branch, there are 10 twigs.
//On each twig, there are 10 leaves.
//Unfortunately, the Deca Forest is becoming wildly overgrown and is endangering the local wildlife.
//You must add methods to the tree object so that the woodcutter can remove parts of a tree as follows,
//where n is a positive integer:
//chopTrunk(n)     will remove n trunks
//chopBranch(n)    will remove n branches
//chopTwig(n)      will remove n twigs
//chopLeaf(n)      will remove n leaves
//Make sure that when you remove any part of the tree, you also remove all the smaller parts attached to it. e.g.
//if you remove a twig you must also remove 10 leaves from the tree object.
//The woodcutter's aim is to trim back this forest, so he will try to remove as much of the tree as possible
//each time he chops.
//Conversely, when you remove a smaller part, you do not need to remove the larger parts it is attached to -
//for example you could pick off all the leaves from a tree and the number of twigs,
//branches and trunks would be unaffected.
//The tree cannot have a negative number of trunks, branches, leaves or twigs. That would be highly unnatural.
//You must also add a method 'describe' that allows the Deca Forest tourguides to describe each tree.
//It should describe the tree in the following format:
//"This tree has a trunks, b branches, c twigs and d leaves."
//(where a, b, c and d are integer values)
//Your methods will be tested for trees with varying numbers of trunks and for removing random numbers of leaves,
//twigs, branches and trunks. The test will use only positive integers for these values.
//
//### **Дека дерево**
//В лесу Дека вырастите деревья Дека.
//На каждом Дека-дереве у ствола есть 10 ветвей.
//На каждой ветке по 10 веточек.
//На каждой веточке по 10 листочков.
//К сожалению, лес Дека сильно зарастает и ставит под угрозу местную дикую природу.
//Вы должны добавить методы к объекту дерева, чтобы дровосек мог удалять части дерева следующим образом,
//где n- положительное целое число:
//chopTrunk(n)     will remove n trunks
//chopBranch(n)    will remove n branches
//chopTwig(n)      will remove n twigs
//chopLeaf(n)      will remove n leaves
//Убедитесь, что, удаляя любую часть дерева, вы также удаляете все прикрепленные к нему более мелкие части.
//например, если вы удалите ветку, вы также должны удалить 10 листьев с дерева.
//Цель дровосека - подрезать этот лес, чтобы он старался убирать как можно больше дерева каждый раз, когда рубит.
//И наоборот, когда вы удаляете меньшую часть, вам не нужно снимать большие части, к которым она прикреплена - например,
//вы можете сорвать все листья с дерева, и это не повлияет на количество веток, веток и стволов.
//У дерева не может быть отрицательного числа стволов, веток, листьев или веток.
//Это было бы в высшей степени неестественно.
//Вы также должны добавить метод «description», позволяющий туристическим гидам Deca Forest описывать каждое дерево.
//Он должен описывать дерево в следующем формате:
//«У этого дерева есть aстволы, bветви, cпрутья и dлистья».
//(где a, b, cи dявляются целые значения)
//Ваши методы будут проверены на деревьях с различным количеством стволов и на удаление случайного количества листьев,
//веток, веток и стволов. Для этих значений в тесте будут использоваться только положительные целые числа.
//
//---Solution---
function tree(trunks) {
  this.trunks = trunks;
  this.branches = trunks * 10;
  this.twigs = trunks * 100;
  this.leaves = trunks * 1000;
}
tree.prototype.chopLeaf = function(n) {
  this.leaves = n > this.leaves ? 0 : this.leaves - n;
  //this.leaves = Math.max(this.leaves - n, 0);
}
tree.prototype.chopTwig = function(n) {
  this.twigs = n > this.twigs ? 0 : this.twigs - n;
  this.chopLeaf(10*n);
}
tree.prototype.chopBranch = function(n) {
  this.branches = n > this.branches ? 0 : this.branches - n;
  this.chopTwig(10*n);
}
tree.prototype.chopTrunk = function(n) {
  this.trunks = n > this.trunks ? 0 : this.trunks - n;
  this.chopBranch(10*n);
}
tree.prototype.describe = function() {
  return `This tree has ${this.trunks} trunks, ${this.branches} branches, ${this.twigs} twigs and ${this.leaves} leaves.`
}
//
//---Test---
var myTree = new tree(10);
myTree.chopLeaf(1);
console.log( myTree.leaves ); //, 9999);
myTree.chopTwig(1);
console.log( myTree.twigs ); //, 999);
console.log( myTree.leaves ); //, 9989, 'Removing a twig should also remove 10 leaves');
myTree.chopBranch(1);
console.log( myTree.branches ); //, 99);
console.log( myTree.twigs ); //, 989, 'Removing a branch should also remove 10 twigs');
console.log( myTree.leaves ); //, 9889, 'Removing a branch should also remove 100 leaves');
myTree.chopTrunk(1);
console.log( myTree.trunks ); //, 9);
console.log( myTree.branches ); //, 89, 'Removing a trunk should also remove 10 branches');
console.log( myTree.twigs ); //, 889, 'Removing a trunk should also remove 100 twigs');
console.log( myTree.leaves ); //, 8889, 'Removing a trunk should also remove 1000 leaves');
console.log( myTree.describe() ); //, 'This tree has 9 trunks, 89 branches, 889 twigs and 8889 leaves.');
//=== End ( The Deca Tree ) ===






//---------------------------------------------------------------------------------------------------
// Basics 04: Rotate Matrix
// (7 kyu) https://www.codewars.com/kata/basics-04-rotate-matrix
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Basics 04: Rotate Matrix**
//Your task is to rotate a matrix 90 degree to the left. The matrix is an array of integers with dimension n,m.
//So this kata checks some basics, it's not too difficult.
//There's nothing more to explain, no tricks, no "bad cases";-). Perhaps you take a look at the testcases...
//One easy example:
//Input: {{-1, 4, 5},
//        { 2, 3, 4}}
//Output: {{ 5, 4},
//         { 4, 3},
//         {-1, 2}}
//First there are some static tests, later on random tests too...
//
//### **Основы 04: Поворот матрицы**
//Ваша задача - повернуть матрицу на 90 градусов влево. Матрица представляет собой массив целых чисел размерности n, m.
//Итак, это ката проверяет некоторые основы, это не так уж сложно.
//Больше объяснять нечего, никаких уловок, никаких "плохих дел" ;-). Возможно, вы посмотрите тестовые примеры ...
//Один простой пример:
//Input: {{-1, 4, 5},
//        { 2, 3, 4}}
//Output: {{ 5, 4},
//         { 4, 3},
//         {-1, 2}}
//Сначала есть статические тесты, потом тоже случайные ...
//
//---Solution---
// var rotateMatrix = arr => {
//   const n = arr[0].length;
//   let result = new Array(n);
//   for (let i = 0; i < n; i++) {
//     result[i] = Array(arr.length);
//     for (let j = 0; j < arr.length; j++) {
//       result[i][j] = arr[j][n-1-i];
//     }
//   }
//   return result;
// }
// //--2--
// return arr[0].map((x, i) => arr.map(x => x[x.length - 1 - i]));
// //--3--
// let rotateMatrix = a => a[0].map((_, i) => a.map(r => r[i])).reverse();
//
//---Test---
// console.log( rotateMatrix([[-1,4,5],[2,3,4]]) ); // b = [[5,4],[4,3],[-1,2]];
// 
//=== End ( Basics 04: Rotate Matrix ) ===


//---------------------------------------------------------------------------------------------------
// Convert Hash To An Array
// (7 kyu) https://www.codewars.com/kata/convert-hash-to-an-array
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Convert Hash To An Array**
//Convert a hash into an array. Nothing more, Nothing less.
//{name: 'Jeremy', age: 24, role: 'Software Engineer'}
//should be converted into
//[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
//Note: The output array should be sorted alphabetically.
//
//### **Преобразовать хеш в массив**
//Преобразуйте хеш в массив. Ни больше ни меньше.
//{name: 'Jeremy', age: 24, role: 'Software Engineer'}
//следует преобразовать в
//[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
//Примечание . Выходной массив следует отсортировать по алфавиту.
//
//---Solution---
// function convertHashToArray(hash) {
//   return Object.entries(hash).sort();
// }
// //--2--
// const convertHashToArray = (hash) => Object.keys(hash).map(key => [key, hash[key]]).sort();
//
//---Test---
// console.log( convertHashToArray({name: "Jeremy"}) ); //,[["name", "Jeremy"]]);
// console.log( convertHashToArray({name: "Jeremy", age: 24}) ); //,[["age", 24], ["name", "Jeremy"]]);
// console.log( convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}) ); //,[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
// console.log( convertHashToArray({product: "CodeWars", powerLevelOver: 9000}) ); //,[["powerLevelOver", 9000], ["product", "CodeWars"]]);
// console.log( convertHashToArray({}) ); //,[]);
// 
//=== End ( Convert Hash To An Array ) ===


//---------------------------------------------------------------------------------------------------
// Array.diff
// (6 kyu) https://www.codewars.com/kata/array-dot-diff
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Array.diff**
//Your goal in this kata is to implement a difference function,
//which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.
//arrayDiff([1,2],[1]) == [2]
//If a value is present in b, all of its occurrences must be removed from the other:
//arrayDiff([1,2,2,2,3],[2]) == [1,3]
//
//### **Array.diff**
//Ваша цель в этом ката - реализовать функцию различия,
//которая вычитает один список из другого и возвращает результат.
//Он должен удалить все значения из списка a, которые присутствуют в списке, b сохраняя их порядок.
//arrayDiff([1,2],[1]) == [2]
//Если значение присутствует в b, все его вхождения должны быть удалены из другого:
//arrayDiff([1,2,2,2,3],[2]) == [1,3]
//
//---Solution---
// function arrayDiff(a, b) {
//   return a.filter(x=>b.findIndex(e=>e===x) === -1);
// }
// //--2--
// return a.filter(e => !b.includes(e));
//
//---Test---
// console.log( arrayDiff([], [4,5]) ); //, [], "a was [], b was [4,5]");
// console.log( arrayDiff([3,4], [3]) ); //, [4], "a was [3,4], b was [3]");
// console.log( arrayDiff([1,8,2], []) ); //, [1,8,2], "a was [1,8,2], b was []");
// console.log( arrayDiff([1,2,3], [1,2]) ); //, [3], "a was [1,2,3], b was [1,2]")
//
//=== End ( Array.diff ) ===


//---------------------------------------------------------------------------------------------------
// Element equals its index
// (6 kyu) https://www.codewars.com/kata/element-equals-its-index
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Element equals its index**
//Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index
//for which array[index] == index.
//Return -1 if there is no such index.
//Your algorithm should be very performant.
//[input] array of integers ( with 0-based nonnegative indexing )
//[output] integer
//Examples:
//input: [-8,0,2,5]
//output: 2 # since array[2] == 2
//input: [-1,0,3,6]
//output: -1 # since no index in array satisfies array[index] == index
//Random Tests Constraints:
//Array length: 200 000
//Amount of tests: 1 000
//Time limit: 150 ms
//
//### **Элемент равен своему индексу**
//Учитывая отсортированный массив различных целых чисел, напишите функцию, indexEqualsValueкоторая возвращает
//наименьший индекс, для которого array[index] == index.
//Вернуть, -1если такого индекса нет.
//Ваш алгоритм должен быть очень производительным.
//[вход] массив целых чисел (с 0неотрицательной индексацией)
//[выход] целое число
//Примеры:
//input: [-8,0,2,5]
//output: 2 # since array[2] == 2
//input: [-1,0,3,6]
//output: -1 # since no index in array satisfies array[index] == index
//Ограничения случайных тестов:
//Длина массива: 200 000
//Количество тестов: 1000
//Ограничение по времени: 150 мс
//
//---Solution---
// function indexEqualsValue(a) {
//   let result = -1;
//   let indBeg = 0;
//   let indEdn = a.length-1;
//   if (a[indBeg] === indBeg) return indBeg;
//   while (true) {
//     const index = indBeg + Math.floor((indEdn - indBeg) / 2);
//     if ((indEdn - indBeg)-1 === 0) {
//       if (a[indBeg] === indBeg) return indBeg;
//       if (a[indEdn] === indEdn) return indEdn;
//       break;
//     } 
//     if (a[index] < index) {
//       indBeg = index;
//     } else {
//       indEdn = index;
//     }
//   }
//   return result;
// }
// //--2--
// indexEqualsValue=(a,b=0,c=a.length-1,i=(b+c)>>1)=>b<c?i<=a[i]?indexEqualsValue(a,b,i):indexEqualsValue(a,++i,c):a[c]==c?c:-1
//
//---Test---
// console.log( indexEqualsValue([-8,0,2,5]) ); //, 2 );
// console.log( indexEqualsValue([-1,0,3,6]) ); //, -1 );
// console.log( indexEqualsValue([-3,0,1,3,10]) ); //, 3 );
// console.log( indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]) ); //, 1 );
// console.log( indexEqualsValue([9,10,11,12,13,14]) ); //, -1 );
// console.log( indexEqualsValue([0]) ); //, 0 );
// 
//=== End ( Element equals its index ) ===

//===================================================================================================
