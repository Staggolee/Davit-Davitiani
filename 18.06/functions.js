 let box = document.querySelector('.box');
 box.style.backgroundColor = 'red';


// window.onload
// DOMContentLoaded
// 
// function init() {
//     alert('DOMContentLoaded');
// }

// document.addEventListener('DOMContentLoaded', init);
// window.onload = function () {
//     alert('window.onload');
// }




// hoisted
// function name() {
//     not hoisted 
//     let name = function() {
        
//     }
// }



// getName();
// function getName() {
//     alert("name")
// }



// let getNameV2 = function () {
//     alert("nameV2")
// }
// getNameV2();

// function showMessage(from, text) {
//     from = `*${from}`
//     alert(`${from}:${text}`)
// }
// let from = 'john';
// showMessage (from, 'Hello');
// alert(from); // =>john

// function sum(x,y) {
//     return x + y;
// }

// let result = sum(5, 8);


// function checkMovie(age){
//     if  (age < 18) return;
//     alert("acces granted..")
// }
// checkMovie(21);
// console.log(result)


// let x = Number(prompt("insert number"))
// let n = Number(prompt("insert number"))
// if (n > 0 && n % 1 === 0);
// let result = (x ** n);
// console.log(result);
// function pow(x, n) {
// }
// pow(x,n)

// let n = Number(prompt("insert number"));
// function isPrime(n) {
//     if (n % 1 == n && n % n == 1) 
    
//     isPrime(n);
// }
// alert("prime number");


function ask(question, yes, no) {
    if(confirm(question)){
        yes()
    }
        else{
            no()
        }
    }
    function showOkay() {
        alert("you agreed");
    }
    function showCancel() {
        alert("you canceled");
    }
    ask("do you agree ?", showOkay, showCancel);
    


    


    
    
