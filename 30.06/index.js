// let arr = ["I", "<3", "Javascript" ];
// let removed = arr.splice(1,1, "hate");
// let removed = arr.slice (1,2);
// console.log(arr, removed)

 let nums = [2, 4, 9, 5, 7, 13, 24, 1, -1];
// let users = [
//     {id: 1, name:"gela"},
//     {id: 2, name:"john"},
//     {id: 3, name:"jimsheri"},
//     {id: 4, name:"jimsheri11"},
//     {id: 5, name:"jimsheri12"},


//  ]
// function compare(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// console.log(nums.sort((a, b) => {return a - b}));

// let foundUser = users.find(user => user.id ==2); //erti konkretuli
// let filtered = users.filter(user => user.id < 4) //masivi
// console.log(foundUser);
// console.log(filtered);

// let doubled = nums.map((number, index, arr) =>{
// return number * 2;
// })
// //  console.table(doubled);

// let html = users.map(user =>{
//     return `
//     <div class="user">
//     <h2 class="title">${user.name} <small> Id - ${user.id}</small></h2></div>`;
// })

// document.body.innerHTML = htnl.join(" ");
// console.log(html);


// let john = {name:"john", age:25};
// let adam = {name:"adam", age:30};
// let mary = {name:"mary", age:28};

// let arr = [john, adam, mary];


// function compare(a, b) {
//         if (a.name > b.name) return 1;
//          if (a.name == b.name) return 0;
//         if (a.name < b.name) return -1;
//      }
//      console.log(arr.sort(compare));

// let values = ["John", "Harry", "Marry", "Beth", "Harry", "Mary", "John"];
// let filtered = values.filter(value => value.id > 0);
// function unique(a,b) {
//     if(a.value == b.value) return 0;
//     if (a.value > b.value) return 1;
//     if (a.value < b.value) return -1;
// }
// console.log(values.sort(unique));
// console.log(filtered)  // ver gavakeTe




 let mixedStr = ["A", "B", "A", "C", "D", "D", "C", "A"];
// let uniqueStr = mixedStr.filter((value,index)=>{
//     return mixedStr.indexOf(value) ==index
// });
// // console.log(uniqueStr); //pirveli xerxi- filtrit


// let tmp = [];
// for(item of mixedStr){
//     if(!tmp.includes(item)){
// tmp.push(item)
//     }
// }
// console.log(uniqueStr);
// console.log(tmp);

// let john = {name: "john", surname:"smith", id:1};
// let pete = {name: "pete", surname:"hunt", id:2};
// let mary = {name: "mary", surname:"key", id:3};

// let users = [john, pete, mary];

// let  = userMapped = users.map(user=>{
//     return {fullName: user.name + " " + user.surname
// id: user.id };
// })
// console.log(userMapped[0].id);
// console.log(userMapped[0].fulName);

// console.log(mixedStr);
function* generator(){
    yield 'H'
    // console.log("H")
    yield 'e'
    // console.log("e")
    yield 'l'
    // console.log("l")
    yield 'l'
    // console.log("l")
    yield 'o'
    // console.log("o")
}
// let g = generator();
// console.log(typeof g[Symbol.iterator] === 'function');
// console.log(typeof g.next() === 'function');
// console.log(g[Symbol.iterator]() ===g);
// console.log([...g])
// console.log(Array.from[g]);

// for(let char of g){
//     console.log(char)
// }


// let rangeCount ={
//     start :1,
//     end:13
// }
// rangeCount[Symbol.iterator] = function () {
//     return {
//         current: this.start,
//         last: this.end,
//         next(){
//             if(this.current<this.last){
//                 return {
//                     done:false,
//                     value:this.current++
//                 }
//             }
//             else{
//                 return {done: true}
//             }
//         }
//     }
// }
// for (let num of rangeCount){
//     console.log(num)
// }


// SET

let set = new Set ();

/*
set.add()
set.has()
set.delete()
set.clear()
set.size()

*/

// set.add(5).add(1).add(1).add(1).add(1);
// console.log(set);

// console.log(set.keys())

// for(let key of set.keys()) {
//     console.log(key);
// }

// console.log(set.values());

// console.log(set.entries());

// for(let entry of set.entries()){
//     console.log(entry)
// }
// for(let [a,b] of set.entries()){
//     console.log(a,b)
// }
// for(let [key,value] of set.entries()){
//     console.log(key,value)
// }




// let values = ["John", "Harry", "Marry", "Beth", "Harry", "Mary", "John"];

// let valuesSet = new Set(values);
// console.log(valuesSet);




// function subArr(arr) {
//     let sum = 0;
//     let mySet = new Set();

//     for(let num of arr){
//         sum +- num;
//         if(mySet.has(sum)) {
//         return true;
//     }
//     mySet.add(sum);

// }
// return false;
// }

// console.log(subArr(nums))




// date
// new Date()
//new Date(milliseconds)
//new Date(datestring)
//new Date(year, month, hours, minutes, seconds, ms)


// let now = new Date();
// console.log(now);

// //1970 1 jan ათვლის წერტილი

// let start = new Date(0);
// console.log(start)

// let fromString = new Date('2018-06-30')
// // console.log(fromString);

// let fromConst = new Date(2018, 5, 30, 14, 32, 48, 50);
// // console.log(fromConst)

// // console.log(fromConst.getFullYear());
// // console.log(fromConst.getMonth());
//  console.log(fromConst.getDate());
// // console.log(fromConst.getHours());
// // console.log(fromConst.getDay());

// console.log(fromConst.getUTCMonth())


// let old = Date.now();
// let i = 0;

// while (1<100000) {
//     i++;
// }

// let current = Date.now();
// console.log(`elapsed time ${old - current}ms`);

// function getSecondsToTomorrow(){
//     let now = new Date ();
//     let tomorrow = new Date();

//     tomorrow.setDate(now.getDate()+ 1);
//     tomorrow.setHours(0, 0, 0, 0,);

//     console.log(tomorrow-now)/1000;
// }
// getSecondsToTomorrow()

//MAP

// let myMap = new Map();

// //map.get()
// //map.set()

// myMap.set(1, "one")
// myMap.set(2, "two")
// myMap.set(false, 0)
// myMap.set(true, 1)
// myMap.set((name, "john"),"user")

// console.log(myMap)

// for(let value of myMap.values()){
//     console.log(value)
// }
// for(let key of myMap.keys()){
//     console.log(key)
// }
// for(let [key, value] of myMap.entries()){
//     console.log(key,value)
// }


// let prices = new Map([
//     ['banana',5],
//     ['apple',4],
//     ['kiwi',4],
// ])
// console.log(prices)

// let fromObj = new Map(Object.entries({
//     name:'john',
//     age:40
// }));
// console.log(fromObj)


function CountWords(sentence){

}

let sentence = ""



