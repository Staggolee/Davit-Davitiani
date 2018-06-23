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


let speed = 300;
let color = "black";
let year = 2018;

// this - obieqti wertilamde 

let car = {
    speed,
    color,
    year,
    engine: 6.3,
    beep:function(){
        alert("pi, pi, pi");
    }
}
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
//     alert("Hello")
// }

// user.sayHi();
// user['sayHi']();
// car.beer()
