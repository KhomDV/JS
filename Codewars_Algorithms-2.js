


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
// function tree(trunks) {
//   this.trunks = trunks;
//   this.branches = trunks * 10;
//   this.twigs = trunks * 100;
//   this.leaves = trunks * 1000;
// }
// tree.prototype.chopLeaf = function(n) {
//   this.leaves = n > this.leaves ? 0 : this.leaves - n;
//   //this.leaves = Math.max(this.leaves - n, 0);
// }
// tree.prototype.chopTwig = function(n) {
//   this.twigs = n > this.twigs ? 0 : this.twigs - n;
//   this.chopLeaf(10*n);
// }
// tree.prototype.chopBranch = function(n) {
//   this.branches = n > this.branches ? 0 : this.branches - n;
//   this.chopTwig(10*n);
// }
// tree.prototype.chopTrunk = function(n) {
//   this.trunks = n > this.trunks ? 0 : this.trunks - n;
//   this.chopBranch(10*n);
// }
// tree.prototype.describe = function() {
//   return `This tree has ${this.trunks} trunks, ${this.branches} branches, ${this.twigs} twigs and ${this.leaves} leaves.`
// }
//
//---Test---
// var myTree = new tree(10);
// myTree.chopLeaf(1);
// console.log( myTree.leaves ); //, 9999);
// myTree.chopTwig(1);
// console.log( myTree.twigs ); //, 999);
// console.log( myTree.leaves ); //, 9989, 'Removing a twig should also remove 10 leaves');
// myTree.chopBranch(1);
// console.log( myTree.branches ); //, 99);
// console.log( myTree.twigs ); //, 989, 'Removing a branch should also remove 10 twigs');
// console.log( myTree.leaves ); //, 9889, 'Removing a branch should also remove 100 leaves');
// myTree.chopTrunk(1);
// console.log( myTree.trunks ); //, 9);
// console.log( myTree.branches ); //, 89, 'Removing a trunk should also remove 10 branches');
// console.log( myTree.twigs ); //, 889, 'Removing a trunk should also remove 100 twigs');
// console.log( myTree.leaves ); //, 8889, 'Removing a trunk should also remove 1000 leaves');
// console.log( myTree.describe() ); //, 'This tree has 9 trunks, 89 branches, 889 twigs and 8889 leaves.');
//=== End ( The Deca Tree ) ===


//---------------------------------------------------------------------------------------------------
// Next Prime
// (7 kyu) https://www.codewars.com/kata/next-prime
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Next Prime**
//Get the next prime number!
//You will get a numbern (>= 0) and your task is to find the next prime number.
//Make sure to optimize your code: there will numbers tested up to about 10^12.
//Examples
//5   =>  7
//12  =>  13
//
//### **Следующий прайм**
//Получите следующее простое число!
//Вы получите число n(> = 0), и ваша задача - найти следующее простое число.
//Убедитесь, что ваш код оптимизирован: там будут числа, проверенные примерно до 10^12.
//Примеры
//5   =>  7
//12  =>  13
//
//---Solution---
// function nextPrime(n) {
//   //have fun ^.^
//   if (n <= 1) return 2; 
//   if (n === 2) return 3;
//   let numbPrime;
//   if (n%2 === 0) {
//     numbPrime = n + 1;
//   } else {
//     numbPrime = n + 2;
//   }
//   while (true) {
//     if (!isPrime(numbPrime)) return numbPrime;
//     numbPrime += 2;
//   }
//   function isPrime(numb) {
//     for (let i = 3; i <= Math.sqrt(numb); i = i + 2) {
//       if (numb % i === 0) return true;
//     }
//     return false;
//   }
// }
//--2--
// function nextPrime(n) {
//   if ( ++n < 2 ){ return 2 }
//   for ( let i = 2; i <= Math.sqrt(n); i++ ){
//     if ( n % i === 0 ){
//       return nextPrime(n); 
//     }
//   }
//   return n;
// }
//
//---Test---
// console.log( '= '+ nextPrime(0) ); //, 2);
// console.log( '= '+ nextPrime(1) ); //, 2);
// console.log( '= '+ nextPrime(2) ); //, 3);
// console.log( '= '+ nextPrime(3) ); //, 5);
// console.log( '= '+ nextPrime(5) ); //, 7);
// console.log( '= '+ nextPrime(11) ); //, 13);
// console.log( '= '+ nextPrime(7) ); //, 11);
// console.log( '= '+ nextPrime(8) ); //, 11);
// console.log( '= '+ nextPrime(9) ); //, 11);
// console.log( '= '+ nextPrime(10) ); //, 11);
// console.log( '= '+ nextPrime(11) ); //, 11);
// console.log( '= '+ nextPrime(17) ); //, 19);
// console.log( '= '+ nextPrime(2971) ); //, 2999);
// 
//=== End ( Next Prime ) ===


//---------------------------------------------------------------------------------------------------
// Lottery Ticket
// (6 kyu) https://www.codewars.com/kata/lottery-ticket
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Lottery Ticket**
//Time to win the lottery!
//Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
//Example ticket:
//[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
//To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it.
//If the character code of any of the characters in the string matches the number, you get a mini win.
//Note you can only have one mini win per sub array.
//Once you have counted all of your mini wins, compare that number to the other input provided (win).
//If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
//All inputs will be in the correct format. Strings on tickets are not always the same length.
//
//### **Лотерейный билет**
//Время выигрывать в лотерею!
//Учитывая лотерейный билет (билет), представленный массивом из двух значений, вы должны выяснить,
//выиграли ли вы джекпот.
//Пример билета:
//[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
//Для этого вы должны сначала подсчитать «мини-выигрыши» на своем билете. В каждом подмассиве есть как строка,
//так и номер. Если код любого из символов в строке совпадает с номером, вы получаете мини-выигрыш.
//Обратите внимание, что у вас может быть только одна мини-победа на подмассив.
//После того, как вы подсчитали все свои мини-выигрыши, сравните это число с другим введенным значением (выигрыш).
//Если ваша сумма больше или равна (выигрыш), верните «Победитель!». Иначе верните «Неудачник!».
//Все входные данные будут в правильном формате. Строки на билетах не всегда имеют одинаковую длину.
//
//---Solution---
function bingo(ticket, win) {
  return ticket.reduce((sum, el) => 
    (el[0].split('').some(e=>e.charCodeAt(0)===el[1])) ? sum + 1 : sum, 0) >= win ? 'Winner!' : 'Loser!';
  //--1--
  // return ticket.reduce((sum, el) => {
  //     return (el[0].split('').some(e=>e.charCodeAt(0)===el[1])) ? sum + 1 : sum;
  //   },0) >= win ? 'Winner!' : 'Loser!';
  //--2--
  // let winner = 0;
  // for (i=0; i < ticket.length; i++) {
  //   if (ticket[i][0].split('').some(e=>e.charCodeAt(0)===ticket[i][1])) winner++;
  // }
  // return winner >= win ? 'Winner!' : 'Loser!';
}
//
//---Test---
console.log( bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2) ); //, 'Loser!');
console.log( bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1) ); //, 'Winner!');
console.log( bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3) ); //, 'Loser!');
// 
//=== End ( Lottery Ticket ) ===





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
