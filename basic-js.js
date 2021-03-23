

//---------------------------------------------------------------------------------------------------
// count-cats
//---------------------------------------------------------------------------------------------------
//---Solution---
//function countCats(matrix) {
//	let nCat = 0;
//
//    matrix.forEach(e => nCat = nCat + e.filter(e => e === "^^").length);
//
//  return (nCat);
//}
//
//---Test---
//matrix = [
//	["^^", ".", null, 0, false, "", NaN, 2, true, "dasdas", 1],
//	[2, NaN, "", false, "^^", "^^"],
//	[false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
//	["."],
//	[false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
//	[false, NaN, 1, 0, ".", "^^"],
//	[null, 1, NaN],
//	];
//
//matrix = [
//    ['##', 'dd', '00'],
//    ['^^', '..', 'ss'],
//    ['AA', 'dd', 'Oo'],
//    ];
//
//---View solution---
//let nCat = countCats(matrix);
//document.write(nCat);
//
//=== End ( count-cats ) ===



//---------------------------------------------------------------------------------------------------
// carbon-dating
//---------------------------------------------------------------------------------------------------
//---Solution---
//const MODERN_ACTIVITY = 15; 
//const HALF_LIFE_PERIOD = 5730;
//
//function dateSample(sampleActivity) {
//    
//    const reg = new RegExp('^-?\\d+\\.?\\d*$'); // /^-?\d+\.?\d*$/
//
//    if (typeof sampleActivity !== "string" || !(reg.test(sampleActivity)) ) { return (false)};
//    //return (/^-?\d+\.?\d*$/.test(sampleActivity));
//
//    const nActivity = parseFloat(sampleActivity);
//  
//    if (nActivity <= 0 || nActivity > 15) {return (false)};
//  
//    return ( Math.ceil( Math.log(MODERN_ACTIVITY / nActivity) / (Math.log(2) / HALF_LIFE_PERIOD) ) );
//  
//};
//
//---Test---
//const arrayTest = [
//    3,
//    3.312312,
//    false,
//    null,
//    undefined,
//    [3],
//    ['3'],
//    { '3.14': '3dec' },
//    'ACTIVITY OVER 9000',
//    'one',
//    '',
//    ' ',
//    ' \n\t\r',
//    '3',      //13305
//    '1',      //22387
//    '9',      //4223
//    '11',     //2564
//    '3.142',  //12923
//    '1.1',    //21599
//    '9.8888', //3445
//    '9.59383373526808',   //3695
//    '9.122605776326203',  //4111
//    '8.738732722522064',  //4467
//    '1.6196187736736514', //18401
//    '1.2790192613422384', //20353
//    '2.888875299486392',  //13617
//    '10.98064159551825',  //2579
//    '5.777957759163509',  //7887
//    '6.621137546046827',  //6761
//    '2.3428430852333437', //15349
//    '7.724878580528199',  //5486
//    '13.120235263248446', //1107
//    '8.324373471546389',  //4868
//    '1.7062450205046806'  //17970
//]
//
//---View solution---
//for (let i=0;i<arrayTest.length;i++) {
//    let nYear = dateSample(arrayTest[i]);
//    document.write(nYear);
//    document.write('-');
//}
//let nYear = dateSample();
//document.write(nYear);
//
//=== End ( carbon-dating ) ===



//---------------------------------------------------------------------------------------------------
// dream-team
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Команда мечты**
//
//Представьте себе, что вы с вашими друзьями решаете создать **команду мечты**. Эта команда должна иметь крутое секретное название, в котором зашифрована информация о ней. Например, это могут быть **первые буквы** имен ее членов **в верхнем регистре**, **отсортированные по алфавиту**.
//Ваша задача — реализовать функцию `createDreamTeam(members)`, которая возвращает имя только что созданной команды (`string`), основанной на именах ее членов (`array`). Удачи!
//Имена членов команды должны быть типа `string`. Значения другого типа должны быть **проигнорированы**. В случае неправильного **типа** аргумента `members` функция должна вернуть `false`.
//NB! Имя члена команды может содержать **пробелы**.
//Например:
//`createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])` => `'ADMM'`
//`createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])` => `'LOO'`
//Напишите ваш код в `src/dream-team.js`.
//
//---Solution---
//function createDreamTeam(members) {
//    //Добавляет в массив только один элемент
//    //sDream = [...new Set(members.filter(e => typeof (e) === "string").map(e => e.trim().substring(0,1).toUpperCase()))].sort().join('');
//    //return (members.filter(e => typeof (e) === "string").map(e => e.trim().substring(0,1).toUpperCase()).sort().join('') );
//	
//    if ( !Array.isArray(members) || members.length === 0 ) return (false);
//
//    sDream = members.filter(e => typeof (e) === "string").map(e => e.trim().substring(0,1).toUpperCase()).sort().join('');
//    if (typeof (sDream) === "string") {
//        return (sDream);
//    } else {
//        return (false);
//    }
//}
//
//---Test---
//matrix = [
//        '   William Alston ',
//        ' Paul Benacerraf',
//        '  Ross Cameron',
//        '       Gilles Deleuze',
//        '  Arda Denkel ',
//        '  Michael Devitt',
//        '  Kit Fine',
//        ' Nelson Goodman',
//        'David Kolb',
//        '   Saul Kripke',
//        '  Trenton Merricks',
//        '  Jay Rosenberg'
//        ]
//        //'ADGJKMNPRSTW'
//
//matrix = [
//    'Amelia',
//    null,
//    undefined,
//    'Ruby',
//    'Lily',
//    11,
//    'Grace',
//    22,
//    'Millie',
//    'Daisy',
//    true,
//    'Freya',
//    false,
//    'Erin',
//    new Set([1,2,3,4,5]),
//    'Megan',
//    {'John': 'Smith'},
//    'Jasmine',
//    1,
//    2,
//    3,
//    4,
//    5,
//    'Brooke'
//    ]
//    //'ABDEFGJLMMR'
//
//matrix = [
//    ['David Abram'],
//    ['Robin Attfield'],
//    'Thomas Berry',
//    ['Paul R.Ehrlich'],
//    'donna Haraway',
//    ' BrIaN_gOodWiN  ',
//    {0: 'Serenella Iovino'},
//    'Erazim Kohak',
//    '  val_plumwood'
//    ]
//    //'BDETV'
//
//---View solution---
//let sDream = createDreamTeam(matrix);
//document.write(sDream);
//
//=== End ( dream-team ) ===



//---------------------------------------------------------------------------------------------------
// extended-repeater
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Расширенный повторитель**
//Ваша задача — реализовать функцию `repeater(str, options)`.
//Эта функция возвращает повторяющуюся **строку**, основываясь на заданных параметрах:
//*	`str` это **строка**, которая будет повторена
//*	`options` это **объект** опций, который содержит следующие свойства:
//  - `repeatTimes` устанавливает число повторений `str`
//  - `separator` это строка, разделяющая повторения `str`
//  - `addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
//  - `additionRepeatTimes` устанавливает число повторений `addition`
//  - `additionSeparator` это строка, разделяющая повторения `addition`
//
//Параметры `str` и `addition` по умолчанию являются **строками**. В случае, если они другого типа, он должны быть преобразованы к строке.
//Параметры `separator` и `additionSeparator` являются строками.
//`repeatTimes` и `additionRepeatTimes` являются целыми числами (в случае отсутствия любого из них соответствующая строка не повторяется).
//Единственный обязательный параметр — это `str`, остальные могут не быть переданы.
//Значение `separator` по умолчанию это `'+'`. Значение `additionSeparator` по умолчанию это `'|'`.
//Например: `repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })` => `'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'`
//
//Напишите свой код в `src/extended-repeater.js`.
//
//---Solution---
// function repeater(str, options) {
//     let sRepeater = "";
//     let addStr = "";
//
//     let repeatTimes = "repeatTimes" in options ? options.repeatTimes : (str === "" ? 0: 1);
//     let separator = "separator" in options ? options.separator : '+';
//     let addition = "addition" in options ? options.addition : "";
//     let additionRepeatTimes = "additionRepeatTimes" in options ? options.additionRepeatTimes : (addition === "" ? 0 : 1);
//     let additionSeparator = "additionSeparator" in options ? options.additionSeparator : '|';
//
//     for (i=1;i<=repeatTimes;i++) {
//         addStr = "";
//         for (j=1;j<=additionRepeatTimes;j++) {
//             addStr = addStr.concat((addStr !== "" ? additionSeparator : ""), addition);
//         }    
//         sRepeater = sRepeater.concat((sRepeater !== "" ? separator : ""), str, addStr);
//     }
//
//     return (sRepeater);
// }
//
//---Test---
// let arrayTest = [
//     ['TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }], //'TESTstrADD!');
//     [9.234, { repeatTimes: 4, separator: '||', addition: {a: 5}, additionRepeatTimes: 3, additionSeparator: '&&' }], // '9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]')
//     [-222, { repeatTimes: 4, separator: '||', addition: new Map(), additionRepeatTimes: 3, additionSeparator: '&&' }], //'-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]');
//     [new Set(), { repeatTimes: 3, separator: '??? ', addition: [1, 2, 3, '4'], additionRepeatTimes: 2, additionSeparator: '!!!' }], //'[object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4');
//     [true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }], //'truefalse!!!false??? truefalse!!!false??? truefalse!!!false');
//     [null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }], //'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');  
//     ['REPEATABLE_STRING', {repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3}], //'REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION');
//     ['REPEATABLE_STRING', {repeatTimes: 2, addition: 'ADDITION', additionSeparator: '222', additionRepeatTimes: 3}], //'REPEATABLE_STRINGADDITION222ADDITION222ADDITION+REPEATABLE_STRINGADDITION222ADDITION222ADDITION');
//     ['REPEATABLE_STRING', {repeatTimes: 2, separator: '222', addition: 'ADDITION', additionRepeatTimes: 3}] // 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION222REPEATABLE_STRINGADDITION|ADDITION|ADDITION');
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     let sRepeate = repeater(arrayTest[i][0],arrayTest[i][1]);
//     document.write(sRepeate);
//     document.write('-');
// }
//
//const objWithSpecificCoercion = {
//    [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
//};
//let sRepeate = repeater(objWithSpecificCoercion, {repeatTimes: 2, addition: objWithSpecificCoercion});  //'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT');
//document.write(sRepeate);
//
//=== End ( extended-repeater ) ===


//---------------------------------------------------------------------------------------------------
// hanoi-tower
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Ханойская башня**
//
//![Визуализация алгоритма](https://ioecapsule.com/wp-content/uploads/2019/08/tower_of_hanoi_3_disks.gif)
//
// [Ханойская башня](https://www.britannica.com/topic/Tower-of-Hanoi) — знаменитая математическая головоломка 18 столетия.
// Она состоит из трех стержней и некоторого числа дисков разных размеров, которые могут быть надеты на стержень.
// Головоломка начинается с того, что диски расположены друг на друге, причем наименьший расположен сверху.
// Диски образуют конус.
// Цель головоломки — переместить всю стопку на другой стержень, следуя этим простым **правилам**:
// * перемещать можно только **один** диск за раз
// * можно брать только **верхний** диск с одной из стопок и помещать на **верхушку** другой стопки или на пустой стержень
// * диск **большего** размера нельзя класть на диск **меньшего** размера
// Ваша задача значительно легче, чем придумывать алгоритм, решающий эту задачу :)
// Реализуйте функцию `calculateHanoi`, которая принимает параметры `diskNumber` и `turnsSpeed`.
//  `diskNumber` — это число **дисков**, а `turnsSpeed` — скорость перемещения дисков (в **ходах** в **час**).
//   Оба параметра являются числами (тип `number`)
// Функция `calculateHanoi` возвращает объект с 2 свойствами:
// * `turns` (минимальное число (тип `number`) ходов, необходимое для решения головоломки)
// * `seconds` (минимальное число (тип `number`) **секунд**, необходимое для решения головоломки при заданной скорости;
//  должно быть целым числом, полученным в результате округления результата расчетов в меньшую **(floor)** сторону)
// Вам не нужно валидировать входные параметры.
// Например:
// `calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }`
// Напишите ваш код в `src/hanoi-tower.js`.
// ---
//
//---Solution---
// function calculateHanoi(disksNumber, turnsSpeed) {
//     let objHanoi = { turns: 0, seconds: 0 };
//     let turns = 0;
//
//     // for (i=1;i<=disksNumber;i++) {
//     //     turns = (turns * 2) + 1;
//     // }
//     turns = Math.pow(2, disksNumber) - 1;
//     objHanoi.turns   = turns;
//     objHanoi.seconds = Math.floor((3600/turnsSpeed) * turns);
//    
//     return (objHanoi);
// };
//
//---Test---
// let arrayTest = [
//     [5, 4074],  //{turns: 31, seconds: 27});
//     [38, 4594], //{turns: 274877906943, seconds: 215402800390});
//     [34, 4005], //{turns: 17179869183, seconds: 15442579040});
//     [19, 4770], //{turns: 524287, seconds: 395688});
//     [23, 4344], //{turns: 8388607, seconds: 6951884});
//     [9, 4347],  //{turns: 511, seconds: 423});
//     [15, 4254], //{turns: 32767, seconds: 27729});
//     [14, 4681], //{turns: 16383, seconds: 12599});
//     [9, 4308],  //{turns: 511, seconds: 427});
//     [18, 4442], //{turns: 262143, seconds: 212452});
//     [10, 4159], //{turns: 1023, seconds: 885});
//     [44, 4685], //{turns: 17592186044415, seconds: 13518008486636});
//     [39, 4936], //{turns: 549755813887, seconds: 400956428280});
//     [44, 4468], //{turns: 17592186044415, seconds: 14174545604273});
//     [46, 4236]  //{turns: 70368744177663, seconds: 59803465306795});
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     let objHanoi = calculateHanoi(arrayTest[i][0],arrayTest[i][1]);
//     document.write(objHanoi.turns);
//     document.write(':');
//     document.write(objHanoi.seconds);
//     document.write(' - ');
// }
//
//let objHanoi = calculateHanoi(5, 4074); //{turns: 31, seconds: 27})
//document.write(objHanoi);
// 
//=== End ( hanoi-tower ) ===



//---------------------------------------------------------------------------------------------------
// recursive-depth
//---------------------------------------------------------------------------------------------------
//---Task---
//### **Рекурсивный вычислитель глубины**
//![Идти глубже](https://i.imgur.com/k7lADiM.jpg)
//
//Ваша задача — реализовать класс `DepthCalculator` с методом `calculateDepth`, который принимает массив и возвращает его **глубину**.
//Метод `calculateDepth` должен проходить полученный массив **рекурсивно**. Глубина **плоского** массива — 1. Метод должен корректно работать с массивами,
// не содержащими элементов или содержащими пустые массивы.
//
//Например:
//`const depthCalc = new DepthCalculator();`
//`depthCalc.calculateDepth([1, 2, 3, 4, 5])` => `1`
//`depthCalc.calculateDepth([1, 2, 3, [4, 5]])` => `2`
//`depthCalc.calculateDepth([[[]]])` => `3`
//Напишите ваш код в `src/recursive-depth.js`.
//
//---Solution---
// depthCalc = class DepthCalculator {
//     static calculateDepth(arr) {
//         let depth = 1;
//         let currentDepth = 1;
//         arr.map(element => {
//             if (Array.isArray(element)) {
//                 currentDepth += this.calculateDepth(element);
//                 if (depth < currentDepth) {
//                     depth = currentDepth;
//                 }
//             }
//             currentDepth = 1;
//         })
//         return (depth);
//     }
// }
//
//---Test---
// let arrayTest = [
//     [1, 2, 3, 4, 5, 1], // 1);
//     [1, 2, 3, 4, 5, [1]], // 2);
//     [1, 2, 3, [1], 4, 5, [1]], // 2);
//     [1, 2, 3, [8, [2]], 4, 5, []], // 3);
//     [1, [8, [[]]], 2, 3, [8, []], 4, 5, []], // 4);
//     [1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575',['adas', ['dfg', [0]]]]],  //5);
//     [1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]], // 15);
//     [1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]], // 25);
//     [1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]], //31);
// ]
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     depth = depthCalc.calculateDepth(arrayTest[i]);
//     document.write(depth);
//     document.write(' - ');
// }
//
//let objHanoi = calculateHanoi(5, 4074); //{turns: 31, seconds: 27})
//document.write(objHanoi);
// 
//=== End ( recursive-depth ) ===



//---------------------------------------------------------------------------------------------------
// simple-chain.
//---------------------------------------------------------------------------------------------------
//---Task---
// ### **Чейнмейкер**
// Давайте попрактикуемся в [чейнинге](https://en.wikipedia.org/wiki/Method_chaining)!
// Ваша задача — реализовать объект `chainMaker`, который будет создавать цепочки.
// Оконченная цепочка это строка (тип `string`) и выглядит следующим образом: `'( value1 )~~( value2 )~~( value3 )'`.
// `chainMaker` имееет несколько **методов** для создания цепочек и их модификации:
// * `getLength` возвращает текущую длину цепи в виде числа;
// * `addLink(value)` добавляет звено, содержащее строковое представление `value` к цепочке;
// * `removeLink(position)` удаляет звено цепи, находящееся в заданном положении;
// * `reverseChain` разворачивает цепь задом наперед;
// * `finishChain` завершает цепь и **возвращает** ее.
// Методы `addLink`, `reverseChain` и `removeLink` **чейнятся**, в то время как остальные – нет.
// Если `addLink` вызван без аргументов, он добавляет пустое звено (`'(  )'`) в цепочку.
// Если `removeLink` принимает **некорректную** позицию (например, не являющуюся числом,
// или дробное число, или ссылающуюся на несуществующее звено), он должен выбросить **ошибку**.
// После вызова метода `finishChain` существующая на данный момент цепь должна быть удалена,
// как и в случае, если была выброшена **ошибка**.
// Например:
// `chainMaker.addLink(1).addLink(2).addLink(3).finishChain()` => `'( 1 )~~( 2 )~~( 3 )'`
// `chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain()` => `'( 2 )~~( 3 )'`
// `chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()` => `'( 2 )~~( 1 )~~( 3 )'`
// Напишите ваш код в `src/simple-chain.js`.
// ---
//
//---Solution---
// const chainMaker = {
//   chain: [],
//
//   getLength() {
//     return this.chain.length;
//   },
//   addLink(value="  ") {
//     this.chain.push(`( ${String(value)} )`);
//     return this;
//   },
//   removeLink(position) {
//     if (!position || typeof position !== 'number' || position < 0 ) {
//       this.chain = [];
//       throw new Error();
//     };
//     this.chain.splice(position-1, 1);
//     return this;
//   },
//   reverseChain() {
//     this.chain.reverse();
//     return this;
//   },
//   finishChain() {
//     this.chainStr = this.chain.join("~~");
//     this.chain = [];
//     return this.chainStr;
//   }
// };
//
//---Test---
// let arrayTest = []
//
//---View solution---
//let objHanoi = chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(); //, '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
//let objHanoi = chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({0: 'first', 1: 'second', 'length': 2}).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain(); //, '( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )');
//let objHanoi = chainMaker.addLink(false).reverseChain().reverseChain().reverseChain().addLink({0: 'first', 1: 'second', 'length': 2}).addLink(1.233).addLink(false).addLink(1).reverseChain().addLink(1).finishChain(); //, '( 1 )~~( false )~~( 1.233 )~~( [object Object] )~~( false )~~( 1 )');
//let objHanoi = chainMaker.reverseChain().reverseChain().addLink(NaN).addLink({0: 'first', 1: 'second', 'length': 2}).addLink({0: 'first', 1: 'second', 'length': 2}).addLink({0: 'first', 1: 'second', 'length': 2}).reverseChain().reverseChain().addLink({0: 'first', 1: 'second', 'length': 2}).addLink(true).finishChain(); //, '( NaN )~~( [object Object] )~~( [object Object] )~~( [object Object] )~~( [object Object] )~~( true )');
//let objHanoi = chainMaker.addLink(1).reverseChain().addLink(0).reverseChain().addLink(NaN).addLink(1.233).addLink(null).addLink({0: 'first', 1: 'second', 'length': 2}).reverseChain().addLink({0: 'first', 1: 'second', 'length': 2}).finishChain(); //, '( [object Object] )~~( null )~~( 1.233 )~~( NaN )~~( 1 )~~( 0 )~~( [object Object] )');
//let objHanoi = chainMaker.addLink(NaN).addLink(null).addLink(Infinity).addLink(1).reverseChain().addLink(null).reverseChain().addLink({0: 'first', 1: 'second', 'length': 2}).addLink(22).addLink(333).finishChain(); //, '( null )~~( NaN )~~( null )~~( Infinity )~~( 1 )~~( [object Object] )~~( 22 )~~( 333 )');
//let objHanoi = chainMaker.addLink(0).addLink(NaN).addLink(1).reverseChain().addLink(0).reverseChain().reverseChain().addLink(1).addLink(Infinity).reverseChain().finishChain(); //, '( Infinity )~~( 1 )~~( 0 )~~( 0 )~~( NaN )~~( 1 )');
//let objHanoi = chainMaker.addLink('ABC').reverseChain().addLink(Infinity).addLink(null).addLink('8.963').addLink(false).addLink(Infinity).reverseChain().addLink(false).reverseChain().finishChain(); //, '( false )~~( ABC )~~( Infinity )~~( null )~~( 8.963 )~~( false )~~( Infinity )');
//let objHanoi = chainMaker.reverseChain().addLink('DEF').reverseChain().reverseChain().reverseChain().addLink(333).addLink(null).addLink(0).reverseChain().reverseChain().finishChain(); //, '( DEF )~~( 333 )~~( null )~~( 0 )');
//let objHanoi = chainMaker.addLink('DEF').reverseChain().addLink('8.963').reverseChain().reverseChain().reverseChain().addLink(3.14).reverseChain().reverseChain().reverseChain().finishChain();//, '( 3.14 )~~( DEF )~~( 8.963 )');
//let objHanoi = chainMaker.reverseChain().reverseChain().addLink(false).addLink(true).reverseChain().addLink(null).addLink(0).addLink(3.14).addLink('8.963').addLink('GHI').finishChain(); //, '( true )~~( false )~~( null )~~( 0 )~~( 3.14 )~~( 8.963 )~~( GHI )');
//let objHanoi = chainMaker.addLink(function() {}).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain(); //,'( 3rd )~~( function() {} )');
//document.write(objHanoi);
// 
//=== End ( simple-chain ) ===



//---------------------------------------------------------------------------------------------------
// transform-array.
//---------------------------------------------------------------------------------------------------
// ### **Преобразование массива**
// Ваша задача — реализовать функцию `transform(arr)`, которая принимает массив (тип `array`)
// и возвращает **преобразованный** массив, основываясь на **управляющих последовательностях**, которые содержит `arr`.
// **Управляющие последовательности** — это определенные строковые элементы вышеупомянутого массива:
// * `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
// * `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
// * `--double-next` удваивает следующий за ней элемент исходного массива в преобразованном массиве.
// * `--double-prev` удваивает предшествующий ей элемент исходного массива в преобразованном массиве.
// Например:
// `transform([1, 2, 3, '--double-next', 4, 5])` => `[1, 2, 3, 4, 4, 5]`
// `transform([1, 2, 3, '--discard-prev', 4, 5])` => `[1, 2, 4, 5]`
// Функция не должна изменять исходный массив.
// Управляющие последовательности применяются **последовательно, слева направо** к элементам из исходного массива.
// Управляющие последовательности **не попадают** в преобразованный массив.
// Управляющие последовательности в исходном массиве не встречаются подряд (не следуют одна за другой).
// Если около управляющей последовательности **нет элемента**, к которому она может быть применена в исходном массиве,
// либо он был удален в процессе преобразования массива, **она не делает ничего**. Функция должна выбросить ошибку, если `arr` не является массивом.
// Напишите свой код в `src/transform-array.js`.
// ---
//
//---Solution---
// function transform(arr) {
//     let result = [];
//
//     if (!Array.isArray(arr)) throw new Error();
//     if (arr.length === 0) return arr;
//  
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i] === undefined) {
//             arr[i] = null;
//         }
//         switch (arr[i]) {
//         case `--discard-next`:
//             result.push(null);
//             i++;
//             break;
//         case `--discard-prev`:
//             if (result.length > 0) {
//                 result.pop();
//             }
//             break;
//         case `--double-next`:
//             if (arr.length-1 > i) {
//                 result.push(arr[i+1]);
//             }
//             break;
//         case `--double-prev`:
//             if (result.length > 0) {
//                 result.push(result[result.length-1]);
//             }
//             break;
//         default:
//             result.push(arr[i]);
//             break;
//         }
//     }
//
//     result = result.filter( (e) => e !== null);
//     return result;
// }    
//
//---Test---
// let arrayTest = [
//         [null, null, 1, 2, 3, null, 4, null, 5, null],
//         ['--discard-prev', 1, 2, 3], //[1, 2, 3]
//         ['--double-prev', 1, 2, 3],  //[1, 2, 3]
//         [1, 2, 3, '--double-next'],  //[1, 2, 3]
//         [1, 2, 3, '--discard-next'], //[1, 2, 3]
//         [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],  //[1, 2, 3, 4, 5]
//         [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5],   //[1, 2, 3, 1337, 1337, 1337, 4, 5]
//         [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5], //[1, 2, 3, 4, 5]
//         [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5],  //[1, 2, 3, 1337, 4, 5]
//     ];
//
//---View solution---
// for (let i=0;i<arrayTest.length;i++) {
//     const arrayTransform = transform(arrayTest[i]);
//     document.write(arrayTransform);
//     document.write(' - ');
// }
//
//let arrayTransform = transform(); //
//document.write(arrayTransform);
// 
//=== End ( transform-array ) ===



//---------------------------------------------------------------------------------------------------
// vigenere-cipher.
//---------------------------------------------------------------------------------------------------
// ### **Шифр Виженера**
// Криптография — это здорово! Давайте попробуем наладить производство шифровальных машин.
// Наши машины будут использовать один из методов шифрования, которые легки для понимания,
// но не могут быть разгаданы посредством простого криптоанализа — [**шифр Виженера**](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher).
// Наша машина будет иметь 2 модификации: **прямая** и **обратная** (тип машины определяется в момент создания).
// **Прямая** машина просто шифрует и дешифрует строку, переданную в нее,
// а **обратная** машина возвращает **перевернутую** задом наперед строку после шифрования и дешифрования.
// Ваша задача — реализовать класс `VigenereCipheringMachine`.
// `constructor` этого класса принимает `true` (**или ничего**), чтобы создать **прямую** машину и `false`, чтобы создать **обратную** машину.
// Каждый экземляр `VigenereCipheringMachine` должен иметь 2 метода: `encrypt` и `decrypt`.
// Метод `encrypt` принимает 2 параметра: `message` (строка, чтобы ее зашифровать) и `key` (строку-кодовое слово).
// Метод `decrypt` принимает 2 параметра: `message` (строка, чтобы ее расшифровать) и `key` (строку-кодовое слово)
// Эти параметры для обоих методов являются **обязательными**. Если хотя бы один из них не был передан,
// должна быть выброшена ошибка. Машины шифруют и дешифруют **только символы латинского алфавита** (другие символы не изменяются).
// Строка, возвращаемая этими методами, должна иметь **верхний регистр**.
// Вам не нужно валидировать значение, переданное в `contructor` и в методы `encrypt` и `decrypt`
// (за исключением выбрасывания ошибки при отсутствии аргумента для для этих методов).
// Например:
// `const directMachine = new VigenereCipheringMachine();`
// `const reverseMachine = new VigenereCipheringMachine(false);`
// `directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'`
// `directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'`
// `reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'`
// `reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'`
// Напишите свой код в `src/vigenere-cipher.js`.
// ---
//
//---Solution---
class VigenereCipheringMachine {
    constructor(lineCrypt=true) {
        this.lineCrypt = lineCrypt;
    }

    encrypt(message, key) {
        if ( !message || !key) throw new Error();

        let strCrypto = "";
        let i_key = 0;

        for (let i=0; i<message.length; i++) {
            const char = message[i].toUpperCase();
            if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
              const charKey = key[i_key].toUpperCase();
              let charCode = (char.charCodeAt(0)-65) + (charKey.charCodeAt(0)-65);
              if (Math.trunc(charCode / 25) > 0 ) {
                charCode = (charCode % 25)-1;
              }
              strCrypto = strCrypto + String.fromCharCode(charCode + 65);
              i_key++;
              if (i_key > key.length-1) {
                i_key = 0;
              }
            } else {
              strCrypto = strCrypto + message[i];
            }
        }
        if (!this.lineCrypt) {
          strCrypto.split().reverse.join('');
        }
        return (strCrypto);
    }


    decrypt(message, key) {
        if ( !message || !key) throw new Error();

        let strDeCrypto = "";
        let i_key = 0;

        for (let i=0; i<message.length; i++) {
            const charCrypto = message[i].toUpperCase();
            if (charCrypto.charCodeAt(0) >= 65 && charCrypto.charCodeAt(0) <= 90) {
              const charKey = key[i_key].toUpperCase();
              let charCode = (charCrypto.charCodeAt(0)-65) - (charKey.charCodeAt(0)-65);
              if ( charCode < 0 ) {
                charCode = 26 + (charCrypto.charCodeAt(0)-65) - (charKey.charCodeAt(0)-65);
              }
              strDeCrypto = strDeCrypto + String.fromCharCode(charCode + 65);
              i_key++;
              if (i_key > key.length-1) {
                i_key = 0;
              }
            } else {
              strDeCrypto = strDeCrypto + message[i];
            }
        }
        if (!this.lineCrypt) {
          strDeCrypto.split().reverse.join('');
        }
        return (strDeCrypto);
    }

}
directMachine = new VigenereCipheringMachine;

//---Test---
let arrayTest = [
        [1, 'Windows', 'win'], //
        [1, 'attack at dawn!', 'alphonse'], //'AEIHQX SX DLLU!'
        [1, 'Example of sequence: 1, 2, 3, 4.', 'lilkey'], //'PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.'
        [1, 'cryptography', 'verylongkeyword'],  //'XVPNECTXKTFU'
        [1, 'Samelengthkey', 'Samelengthkey'],   //'KAYIWIAMMOUIW'
        [1, 'Same length key', 'Samelengthkey'], //'KAYI WIAMMO UIW'
        [2, 'UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'],  //'LEARN FRONTEND DEVELOPMENT :)'
        [2, 'ICWWQAM KECEIK JVZZT EADGG!', 'rollingscopes'],   //'ROLLING SCOPES SHOOL RULES!'
        [2, 'TRVVFB VT JSUIFMYL!', 'learning'], //'INVEST IN YOURSELF!'
        [2, 'HSVD AJAL ^^', 'behappy'],  //'GOOD LUCK ^^'
    ];
//
//---View solution---
for (let i=0;i<arrayTest.length;i++) {
    let strCrypt = "";
    if (arrayTest[i][0] === 1) {
        strCrypt = directMachine.encrypt(arrayTest[i][1], arrayTest[i][2]);
    } else {
        strCrypt = directMachine.decrypt(arrayTest[i][1], arrayTest[i][2]);
    }
    document.write(strCrypt);
    document.write(' - ');
}
//
//let strCrypt = directMachine.encrypt('Same length key', 'Samelengthkey'); //'KAYI WIAMMO UIW'
//let strCrypt = directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'); //'LEARN FRONTEND DEVELOPMENT :)'
//document.write(strCrypt);
// 
//=== End ( vigenere-cipher ) ===










// ### **Какая пора года??**

// Ваша задача — реализовать функцию `getSeason(date)`, которая принимает объект `Date` и возвращает соответствующую ему пору года. Пора года должна быть типа `string`.

// ---
// <details>

// <summary>Названия пор года в англиийском языке</summary>
// В английском поры года имеют следующие наименования: весна — spring, лето — summer, осень — autumn (fall), зима — winter.

// </details>

// ---

// Если аргумент `date` не был передан, функция должна вернуть строку `'Unable to determine the time of year!'` Если аргумент `date` **некорректный**, функция должна выбросить ошибку (`Error`).

// Тссс! Среди аргументов, которые попадают в эту функцию, затесался вражеский агент.

// ![Disguised](https://www.famousbirthdays.com/faces/disguised-toast-image.jpg)

// Он руководствуется знаменитой поговоркой: "Если это выглядит как **утка**, плавает как **утка**, и крякает как **утка**, тогда это, скорее всего, **утка** (и неважно, что это **на самом деле**)". Он **искусно маскируется** под настоящую дату (`date`), но умелый javascript-разработчик может поймать его и выбросить ошибку как раз вовремя!

// Например:

// `const springDate = new Date(2020, 02, 31)`

// `getSeason(springDate) => 'spring'`

// Напишите ваш код в `src/what-season.js`.

// ---
