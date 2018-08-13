let regExp = new RegExp('abcd'); // new RegExp (pattern, flags)
let regexp2 = /abcd/; // pattern/flags

//test(), exec()

let sourceStr = 'Hello RegExp Hello';
let helloRegEx = /hello/gi;
//[] - Character Set

let chSet = /[ts]ell/   // tell / sell
// let result = helloRegEx.test(sourceStr);
// let result2 = helloRegEx.exec(sourceStr);
// console.log(result);
// console.log(result2)
// let str = 'sell';

// console.log(chSet.test(str));

// range

// console.log(/[a-e]/i.test('abcdef'));

let alt = /red|green car/;

console.log(alt.test('red car'));
console.log(alt.test('green car'));
console.log(alt.test('yellow car'));


// დავალება -- ნებისმიერი 10-ნიშნა რიცხვს უნდა ემთხვეოდეს
// 

console.log()