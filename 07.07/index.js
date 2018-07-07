// window.onload = () =>{
//     init();

// }

// function init() {
//     func()
//     func()
//     func()
//     func()
// }
// fun1

// document.addEventListener('DOMContentLoaded', (event) => {
//     let h1 = document.getElementsByTagName('h1')[0];
//     console.log(h1);
//     h1.innerHTML = "hello from JS"
//     h1.style.color = "red";
//     h1.style.padding = "10px";
//     h1.style.backgroundColor = "blue";
//     h1.style.textAlign = "center";
// })

// function greet() {
//     alert("setTimeout()")
// }
// setTimeout(greet, 1000)

function printNumbersTimeout(from, to){
    let current = from;
    setTimeout(function go(){
        alert(current)
    })
}
