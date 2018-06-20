// function defaultParams(x = 13, y = 1) {
//     return x * y;
// }

// console.log(defaultParams());

function checkAge(age, granted, denied) {
    if (age < 18) denied ();
    else granted ();
    
}

let age = prompt("what is your age?", 18);
grantAcces(
    alert("acces granted")
)

denyAcces 