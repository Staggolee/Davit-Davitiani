// #region
// let num = prompt("enter a number");
// ==, ===, !=, !==, >
// &&, ||, !
// if(num % 2 == 0) {
//     alert("even")
// }
// if (piroba){//moqmedeba}
// else{
//     alert("odd")
// }
// let x;

// if(!0){
//     alert("false")
// }
// let accesAllowed;
// let age = prompt("age");
// if(age>18){
//     accesAllowed = true;
// }
// else{
//     accesAllowed = false;
// }
// alert(accesAllowed);
// let result = cpndition? value_1 : value_2

// accesAllowed = (age > 18) ? true : false;
// accesAllowed = age > 18;

// let username = prompt("who's there");
//  if(username == 'admin') {
//     let pass = prompt("password",'');
//     if(pass=='TheMaster'){
//         alert("welcome!");
//     }
// }
// else if(pass = '' || pass == null){
//     alert("cancelled");

// }
// else{
//     alert("wrong password");
// }
// else if (username == '' || username ==null){
//     alert("cancelled";)
// }
// else{
//     alert("i dont know you")
// }
// #endregion
// let hour = 10;
// if (hour < 11 || hour > 18){
    // alert("closed");
// }
// true || false
// if (1||0){
//     alert("truthy");
// }
// alert(true || "the string");
// alert(null || 1);
// alert(null || 0);
// alert(undefined || null || 0);

// 
// alert(5 || 7 && 0)

// lesson
// let year;
// year = prompt("enter the year")
// if(year % 400 == 0 && year % 100 != 0 || year % 4 == 0){
//     alert("leap year")
// }

// a = 3;
// switch (a){
//     case 3:
//     alert("a = 3");

//     break;
//     case 4:
//     alert("a = 4");
//     break;
    
//     case 5: 
//     alert("a = 5");
//     break;

//     default:
//     alert("default")
//     break;
// }


// lesson
// let browser = prompt ("what is your browser?")
// if (browser =="edge"){
//     alert("you've got the edge!")
// }
// else if(browser == "chrome" || browser == "firefox" || browser == "safari" || browser == "opera"){
//     alert("okay we support that browser too")
// }
// else{
//     alert("we hope this page looks ok!")
// }



// let number1 = Number(prompt ("first number"));
// let number2 = Number(prompt ("second number"));
// let calculate = prompt("your calculate operation");
// if (calculate == "+") {
//     alert(number1 + number2)
// }
// else if (calculate == "-"){
//     alert(number1 - number2)
// }
// else if (calculate == "*"){
//     alert(number1 * number2)
// }
// else if (calculate == "/"){
//     alert(number1 / number2)
// }

// let i = 0;
// while (i < 10) {
//     document.writeln(i);
//     i++;

// }
// let i = 0;
// do{
// alert(i);
// i++
// }
// while(i < 5);

// let number = prompt("enter number");
// if(isNaN){
//     alert("yes")
// }
// else {
//     alert("error")
// }

// let number = Number (prompt("enter number"));
// let sum = 0
// while (number > 0) {
//     sum += number % 10;
    
//     number = parseInt(number / 10)
// }
//     alert(`sum is ${sum}`);

// for (let i = 0; i < 10; i++) {
//     alert(i);
    
// 
// let minNumber = Number(prompt("enter min number"));
// let maxNumber = Number(prompt("enter max number"));

// for (let i = minNumber; i < maxNumber ; i++) {
//     if (i % 2 !=0) continue;
//     document.writeln(i)    
// }
number = Number(prompt("enter number"));

   for (let i = 0; i < number; i++) {
    for (let i = 0; i < number; i++) {
        document.writeln("*");
    }
    document.writeln('<br>')
}