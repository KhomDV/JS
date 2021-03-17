

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
//---Solution---
function createDreamTeam(members) {
    //Добавляет в массив только один элемент
    //sDream = [...new Set(members.filter(e => typeof (e) === "string").map(e => e.trim().substring(0,1).toUpperCase()))].sort().join('');
    return (members.filter(e => typeof (e) === "string").map(e => e.trim().substring(0,1).toUpperCase()).sort().join('') );
}
//.
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
matrix = [
    'Amelia',
    null,
    undefined,
    'Ruby',
    'Lily',
    11,
    'Grace',
    22,
    'Millie',
    'Daisy',
    true,
    'Freya',
    false,
    'Erin',
    new Set([1,2,3,4,5]),
    'Megan',
    {'John': 'Smith'},
    'Jasmine',
    1,
    2,
    3,
    4,
    5,
    'Brooke'
    ]
    //'ABDEFGJLMMR'
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

//---View solution---
let sDream = createDreamTeam(matrix);
document.write(sDream);
//
//=== End ( dream-team ) ===



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

