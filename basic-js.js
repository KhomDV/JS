

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
function calculateHanoi(disksNumber, turnsSpeed) {

};

//---Test---
let arrayTest = [
    [5, 4074],  //{turns: 31, seconds: 27});
    [38, 4594], //{turns: 274877906943, seconds: 215402800390});
    [34, 4005], //{turns: 17179869183, seconds: 15442579040});
    [19, 4770], //{turns: 524287, seconds: 395688});
    [23, 4344], //{turns: 8388607, seconds: 6951884});
    [9, 4347],  //{turns: 511, seconds: 423});
    [15, 4254], //{turns: 32767, seconds: 27729});
    [14, 4681], //{turns: 16383, seconds: 12599});
    [9, 4308],  //{turns: 511, seconds: 427});
    [18, 4442], //{turns: 262143, seconds: 212452});
    [10, 4159], //{turns: 1023, seconds: 885});
    [44, 4685], //{turns: 17592186044415, seconds: 13518008486636});
    [39, 4936], //{turns: 549755813887, seconds: 400956428280});
    [44, 4468], //{turns: 17592186044415, seconds: 14174545604273});
    [46, 4236]  //{turns: 70368744177663, seconds: 59803465306795});
]
//
//---View solution---
for (let i=0;i<arrayTest.length;i++) {
    let objHanoi = calculateHanoi(arrayTest[i][0],arrayTest[i][1]);
    document.write(objHanoi);
    document.write('-');
}
//
//let objHanoi = calculateHanoi(5, 4074); //{turns: 31, seconds: 27})
//document.write(objHanoi);
// 
//=== End ( hanoi-tower ) ===

