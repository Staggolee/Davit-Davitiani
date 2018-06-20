// function defaultParams(x = 13, y = 1) {
//     return x * y;
// }

// console.log(defaultParams());

////////

// function checkAge(age, granted, denied) {
//     if (age < 18) denied ();
//     else granted ();
    
// }

// let age = prompt("what is your age?", 18);
// grantAcces(
//     alert("acces granted")
// )

// denyAcces 



// let years = new Array (10);
// let years2 = [10];

// console.log(years.length);
// years.lenghts = 5;
// console.log(years2.length);



// let fruits = ["Apple", "Banana", "Cherry"];

// // friut.lenght - 1

// console.log(fruits);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// fruits[2] = "Lemon";

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let arr = ["Apple", {name:"John"}, true, ()=> {alert("hello from array")}];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[1].name);
// console.log(arr[2]);
// console.log(arr[3]);
// arr[3]();

// let numbers = [];

// push / pop


// numbers.push(1)
// numbers.push(3)
// numbers.push(8)
// numbers.push(13)
// numbers.push(51)

// console.log(numbers)

// let removed = numbers.pop();

// console.log(`removed:${removed}`);
// console.log(numbers)
// numbers.length = 0;
// console.log(numbers);

// //fifo
// //shift/unshift

// numbers.unshift(1);
// numbers.unshift(8);
// numbers.unshift(13);
// console.log(numbers);

// removed = numbers.shift()
// console.log(`removed: ${removed}`);
// console.log(numbers);

// let numbers = [];

// let n = numbers;

// numbers.push(1);
// numbers.push(3);
// numbers.push(8);
// numbers.push(13);
// numbers.push(51);

// console.log(n);

// n.push(33);
// console.log(numbers);

// let clone = Object.assign({}, numbers);
// console.log(clone);

// let clone = numbers.slice();
// clone.push(64);
// console.log(numbers);
// console.log(clone);


// clone.age = 11;
// console.log(clone ['age']);

// for (let index = 0; index < numbers.lenght; index +=1){
//     console.log(number[index]);
//  }
// for (number of numbers){
//     // console.log(number);
// }

// for(number in numbers){
    // console.log(numbers[number])
// }

// console.log(numbers.toString);
// console.log(numbers.join("-"));
// console.log(numbers);

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// console.log(matrix[0][1])



//DOM

// console.log(document);
// console.log(document.documentElement);
//childNodes, firstChild, lastChild

// console.log(document.body);
// console.log(document.body);

// console.log(document.body.childNodes);
// console.log(document.body.firstChild);

for (let index = 0; index < document.body.childNodes.length; index++) {
    console.log(document.body.childNodes[index]);
    
}

