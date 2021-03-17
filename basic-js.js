

//---------------------------------------------------------------------------------------------------
// count-cats
//---------------------------------------------------------------------------------------------------

function countCats(matrix) {
	let nCat = 0;

    matrix.forEach(e => nCat = nCat + e.filter(e => e === "^^").length);

  //return array.reduce(function(sum, current) {return sum + current}, 0) / array.length;
  //cities.filter(e => e.population < 1000000).sort((a, b) => (b.population - a.population)).map(e => console.log(e.name + ': ' + e.population));
  return (nCat);
}

matrix = [
	["^^", ".", null, 0, false, "", NaN, 2, true, "dasdas", 1],
	[2, NaN, "", false, "^^", "^^"],
	[false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
	["."],
	[false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
	[false, NaN, 1, 0, ".", "^^"],
	[null, 1, NaN],
	];

matrix = [
    ['##', 'dd', '00'],
    ['^^', '..', 'ss'],
    ['AA', 'dd', 'Oo'],
    ];

let nCat = countCats(matrix);

document.write(nCat);


/* solution 1 
module.exports = function check(str, bracketsConfig) {
    // your solution
    let newStr,
        lastBracket,
        stack = [];
  
    newStr = str.split('');
    newStr.forEach((bracket, index) => {
        if (index === 0) {
            stack.push(bracket);
            return;
        }
        lastBracket = bracketsConfig.find(typeBracket => stack[stack.length - 1] === typeBracket[0]);
        lastBracket = lastBracket && lastBracket[1];
        if (bracket !== lastBracket) {
            stack.push(bracket);
        } else stack.pop();
    });
  
    return stack.length === 0;
};
*/

/* solution 2
module.exports = function check(str, bracketsConfig) {
    // your solution
	let arrStr = str.split("");

    for (let i = 0; i < arrStr.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (arrStr[i] === bracketsConfig[j][0] && arrStr[i+1] === bracketsConfig[j][1]) {
                arrStr.splice(i, 2);
                i = -1;
            }
        }
	}
    return arrStr.length === 0;
}
*/

// My Solution
//function check(str, bracketsConfig) {
//    // your solution
//
//	let arrayCache = [];
//	let lResult = false;
//
//	if ( !Array.isArray(bracketsConfig) ) return lResult;
//
//	for (let i=0; i < str.length; i++) {
//		simbol = str[i];
//
//		ruleConfig = bracketsConfig.find(elementConfig => simbol === elementConfig[1]);
//		if ( ruleConfig === undefined) {
//			arrayCache.push(simbol);
//		} else {
//			if ( ruleConfig[0] === ruleConfig[1] ) {
//				if ( arrayCache[arrayCache.length - 1] === simbol ) {
//					arrayCache.pop();
//				} else {
//					arrayCache.push(simbol);
//				}
//			} else {
//				if ( arrayCache[arrayCache.length - 1] === ruleConfig[0] ) {
//					arrayCache.pop();
//				} else {
//					arrayCache.push(simbol);
//					break;
//				}
//			}
//		}
//	}	
//
//	if (arrayCache.length === 0) {
//		lResult = true;
//	}
//
//	return lResult;
//
//}


//check('()', [['(', ')']]) // -> true
//check('((()))()', [['(', ')']]) // -> true
//check('())(', [['(', ')']]) // -> false
//check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
//check('[(])', [['(', ')'], ['[', ']']]) // -> false
//check('[]()', [['(', ')'], ['[', ']']]) // -> true
//check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// special case: opening and closing bracket can be the same :)

//check('||', [['|', '|']]) // -> true
//check('|()|', [['(', ')'], ['|', '|']]) // -> true
//check('|(|)', [['(', ')'], ['|', '|']]) // -> false
//check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true



//const config1 = [['(', ')']];
//const config2 = [['(', ')'], ['[', ']']];
//const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
//const config4 = [['|', '|']];
//const config5 = [['(', ')'], ['|', '|']];
//const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
//const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];


//const str = '111115611111111222288888822225577877778775555666677777777776622222'; //config6
//const str = '5555512575557777777555566667888888667661133833448441111222233333444442266666'; //config6
//const str = '8888877878887777777888888887777777887887788788887887777777788888888887788888'; //config6
//const str = '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222'; //config6
//const str = '1357887642'; //config6


//document.write(check(str, config6));


