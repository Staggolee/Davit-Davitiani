// function Car(){
//     this.name = "";
//     this.color = "";
//     this.brand = "";
//     this.setColor = function(color){
//         this.color = color;
//         return this;
//     }
//     this.setName = function(name){
//         this.name = name;
//         return this;
//     }
//     this.setBrand = function(brand){
//         this.brand = brand;
//         return this;
//     }
//     this.save = function(){
//         console.log(`${this.name} ${this.brand} and ${this.color}`);
//         return this;
//     } 
// }

// let car = new Car().setBrand("BMW").setColor("blue").setName("XX").save();
// console.log(car)
// console.log(car.brand) davaleba manqana


// let str = "my string";
// console.log(str.includes('my'));
// console.log(str.startsWith('rign'));
// console.log(str.endsWith('oe'));

// let arr = [1,2,3];
// let clone = arr.slice();
// console.log(arr === clone);

// let str = "my string example"

// let sliced = str.slice(2,5); //minussac igebs, xshirad gamoyenebadi

// console.log(`sliced ${sliced}`);
// console.log(`sliced ${sliced.trim()}`);

// let subString = str.substring(0,6);
// console.log(`subString ${subString}`);

// let subStr = str.substr(4,3);
// console.log(`subStr ${subStr}`); // sigrdze




// function checkSpam(str){
// if(str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')){
  

// return true;
// }
// else {
//     return false;
// }
// }

// alert(checkSpam("buy VIagra now"));
// alert(checkSpam("free xxx"));
// alert(checkSpam("innocent rabbit")); ///example


// function truncate(str, maxlength){
//     if(str.lenght < maxlength){
//         console.log(str);
//     }
//     else{
//         return str.substr(0, maxlength - 1) + "..." ;
//     }
// }

// alert(truncate("what i'd like to tell on this topic is:", 20));



//DOCUMENT_NODE - window.document/document
// ELEMENT_NODE - <body> <a> <a> ...
//     ATTRIBUTE_NODE - class "ohooo"
//     TEXT_NODE - ნებისმიერი დაშორება ფაილში
//     DOCUMENT_TYPE_NODE - <!document html>
//     DOCUMENT_FRAGMENT_NODE documentcreateDoCU


// console.log(Node.DOCUMENT_POSITION_DISCONNECTED);
// Console.log(Node.ATTRIBUTE_NODE);
// console.log(Node.TEXT_NODE);

//Object > Node > Element > HTML*Element       იერარქია

// let nodeAnchor = document.querySelector('a')//პირველს
// let nodeAnchor = document.querySelectorALL('')//ყველას

// let props = [];

// for(let key in nodeAnchor){
//     props.push(key);
// }

// console.log(props.sort());

/* 
NODE PROPERTIES:
ChildNodes
FirstChild
LastChild
nestSibiling
PreviousSibiling
nodeName
nodeValue
parentNode

Node methods:
appendChild()
CloneNode()
contains()
hasChildNodes()
insertBefore()
isEqualNode()
removeChild()
replaceChild()

Document Methods:

document.createElement('tag')
document.createTextNode('string')

HTML*Element properties:
innerHTML
outerHTML
textContent
innerText
outerText
firstElementChild
lastElementChild
nextElementChild
perviousElementChild
children

*/

let div = document.createElement('div');
let text = document.createTextNode('next node example');
div.appendChild(text);

document.body.appendChild(div);

// ****DOM ELEMENT SELECTOR***

//document.querySelector('css selector')
//document.querySelectorALL('css selector')

//document.getElementById

 let menus = document.getElementById('menu')
 let menus2 = document.querySelectorAll('.menu')
//  console.log(menus)
// console.log(menus2)

let menusArray = Array.from(menus);

//console.log(menusArray);

let menuItem = document.querySelector('a');
console.log(menuItem.matches('#menu'));

