// 'use strict'; 
// let user = new Object();

 let user_2 = {};  //carieli obieqti

// JSON {}

let user = {
    name: "John", 
    age: "29",
}

user_2.name = "User_2";
user_2.age = 29;

/*

{}
{        |  {
         |
name,    |   name,
age      |    age,
}        |   }
*/

user.isAdmin = true;
Object.defineProperty(user,"lastname",{
    value:'doe',
    writable: false,
    configurable: false,
    enumerable:false,
})

// console.log(user.lastname);

// user.lastname = 'smith'
// console.log(user.lastname);
// delete user.lastname;
// console.log(user.lastname);

// Object.defineProperties(user_2,{
//     name:{value: "test", writable:false},
//     lastname:{value:"lastname",writable:false}
// })


// console.log(user.name,user['name'],user.isAdmin);
// delete user.age;

// console.log(user);
// let key = prompt("enter key:", 'name','isAdmin')

// alert(user[key]);

// let object = {};
// object.name = "laptop";
// object.price = 1200;
// object.price = 1000;

// console.log(object, name,);
// delete object.name;
// console.log(object)

/*

property - 4 qve property:
value,:
 writable,:true 
 enumerable, :true
 configurable,:true
*/


// let speed = 300;
// let color = "black";
// let year = 2018;

// this - obieqti wertilamde 

// let car = {
//     speed,
//     color,
//     year,
//     engine: 6.3,
//     beep:function(){
//         alert("pi, pi, pi");
//     }
// }
// let car_2 = car;

// Object.defineProperty(car, 'speed',{
//     value:speed,
//     enumerable:false
// })
// console.log(car_2 == car)

// const myConst = {
//     name: "const",
// }
// myConst.new = 'new';
    
// console.log(myConst);

// myConst={
//     name:"const",
//     new:'new',
// }
// Object.defineProperty(car, 'speed',{
// value: speed,
// enumerable: false,
// })
// console.log(car)
// console.log('age' in car);
// console.log('engine' in car); // shemowmeba arsebobs tu ara property

// for(let key in car) {
//     console.log(`key:${key}, value:${car [key]}`);
// }

// let salaries = {
//     john:100,
//     ann:160,
//     peter:130
// }
// let sum = 0;

// for(let key in salaries){
//     console.log(`key:${key}, value:${salaries[key]}`);
//     sum += salaries[key];
//     console.log(sum);
// }

// let clone = Object.assign({},user);
// console.log(user,clone)

// user.sayHi = function() {
//     // alert("Hello")
//     alert(this.name)
// }

// user.sayHi();
// user['sayHi']();

// car.beer()

// function blabla() {
//     // alert(this)
// }
// blabla();

// let userV2 = {
//     name:"javascript",
//     sayHi(){
//         let func =() => alert(this.name)
//         func()
//     }
// }
// userV2.sayHi();

// let calculator = {
// read: function(){
//     this.x = Number(prompt("enter number 1"));
//     this.y = Number(prompt("enter number 2"));
// },

// sum() {
//     return this.x + this.y;
// },

// mul() {
//     return this.x * this.y;
// }
// }
    

// console.log(calculator)
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


// let ladder = {
//     step: 0,
//     up(){
//         this.step++;
//         return this;
//     },
//     down(){
//         this.step--;
//         return this;
//     },
//     showstep: function() {
//         alert(this.step);
//     }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showstep();

// ladder.up().up().down().showstep();

// function greet(){
//     alert(this.name)
// }

// function say(time,phrase){
//     alert(`[${time}] ${this.name}:${phrase}`)
// }
//call, apply - damxmare funqciebi

let client = {name:'client'}
let admin = {name:'admin'}
let john = {name: 'john'}

// greet.call(client); //this = client
// greet.call(admin); //this = admin
// say.call(john,'10:00','Hello') //this = john

// let message = ['10:00','Hello'];
// say.apply(john,message);






// let id = Symbol('id');
// let id1 = Symbol('id');
// console.log(id == id1);

// john[id] = "ID Value";
// console.log(john[id]);
// console.log(john);
// for (let key in john) {
//     console.log(key);
// }

// let costumer = {
//     name: 'super',
//     [id]:140
// }
// console.log(costumer);

// function User(name){
//     //this => {}
//     this.name = name;
//     this.isAdmin = false;
//     this.sayHello = function(){
//         alert(`my name is : ${this.name}`)
//     }
// }

// let conUser = new User("new user");
// console.log(conUser);
// conUser.sayHallo();






///////////////////////////////////////////////////////////////////

    

//     function Calculator(){
//         this.read = function(){
//             this.x = Number(prompt("enter number 1"));
//             this.y = Number(prompt("enter number 2"));
//         }
//         this.sum = function(){
//             return this.x + this.y;
//         }
//         mul = function() {
//             return this.x * this.y;
//         }
//     }


//     let calculator = new Calculator()
//     calculator.read();


// alert("sum = " + calculator.sum());
// alert("Mul=" + calculator.mul());

function Accumulator(StartingValue){
    this.value = StartingValue
    this.read = function(){
    this.Value += Number( prompt("enter the number"));    
    
}
};

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);


num=5

let single = 'single';
let double = 'double';
let backticks = 'backticks';

console.log('my' + num + single);
console.log('my' + num + double);
console.log(`my ${num}${double}`);

alert('\u00A9');
console.log('\u{00A9}');
console.log('\u{20331}');
console.log('I\u{1f60d}');
console.log('I\'m good\\\\');

let str = "Hello";
console.log("String".length);
console.log(str.charAt(2));
console.log(str[0]);

for(let char of str){
    console.log(char)
}

// str[0] = 'h';
srt = 'hello';
// console.log(str);

// console.log("uppercase". toUpperCase());
// console.log('LOWERCASE'.toLowerCase());

srt = 'hello from the other side';
// console.log(str.indexOf("l"));
// console.log(str.lastIndexOf("l"));

let target = 'the';
let pos = 0;

while(true){
    let foundPos = str.indexOf(target,pos);
    if(foundPos == -1) break;
    console.log(`found at ${foundpos}`);
    pos = foundpos +1
}
console.log('2-3'.split('_').join(':'));

