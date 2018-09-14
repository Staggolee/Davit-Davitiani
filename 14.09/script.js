import upperCase from 'upper-case';
import OS from 'os';
import { formatDate, formatTime } from './date_formatter';

// for( let i = 0; i < 10; i++ ){
//     console.log(i);
// }

// console.log(upperCase('lowercase'));
// console.log(`platform = ${OS.platform}`);
// console.log(`platform = ${OS.arch}`);
// console.log(`platform = ${OS.cpus()}`);


let current = new Date();

console.log(`Current Date - ${formatDate(current, ':')}`)
console.log(`Current Time - ${formatTime(current, '-')}`)