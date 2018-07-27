// function hello(event){
//     console.log('Attr handler', event)
// }

// function hello2(num){
//     console.log('I am hello2', num);
// }
// let prop_handler = document.getElementById('prop_handler');
// prop_handler.onclick = function(event){
//     // console.log('Prop handler', this, event)
   
//     Prop2.call(this, event);
// }

// function Prop2(event){
//     console.log('Prop handler 2', this, event)
// }

// let listener = document.getElementById('listener');
// listener.addEventListener('click', function(event){
//     // event.stopImmediatePropagation();  // --
//     //  event.stopPropagation();        //--  bablings tishavs orive
//     console.log('AddEventListener');
// })


// // Capturing/Bubbling
// // window.addEventListener('click', (evet) => {
// //     console.log(1);
// // }, true);

// // document.addEventListener('click', (evet) => {
// //     console.log(2);
// // }, true)

// // document.documentElement.addEventListener('click', (evet) => {
// //     console.log(3);
// // }, true);

// // document.body.addEventListener('click', (evet) => {
// //     console.log(4);
// // }, true)

// // document.querySelector('#listener').addEventListener('click',(evet) => {
// //     console.log(5);
// // }, true );

// document.querySelector('#listener').addEventListener('click',(event) => {
//     console.log(event.currentTarget, event.target, event.eventPhase);
// }, false );
// document.querySelector('#listener').addEventListener('click', function namedCB(event) {

// // function namedCB(event){
//     console.log('namedCB');
//     // console.log(event.currentTarget, event.target, event.eventPhase);

//     // event.stopPropagation();
//     event.target.removeEventListener('click', namedCB) ;  // -- chemi proeqtis problema!!!
    
//  }, false) 

//  let arrowfunction = document.querySelector('#arrowfunction');
//  arrowfunction.addEventListener('click', (event) =>{
//     console.log('arrowfunction', this)   // arrowfunction- shi this-s ar viyenebt, globalurad rcheba da ver ichers
//  })


//  document.querySelector('a').addEventListener('click', (event) =>{
//      event.preventDefault();  // - gavtishet googlis linkze gadasvlis funqcia

//  })

// document.body.addEventListener('click', (event) => {
//     console.log(event.currentTarget, event.target, event.eventPhase);
// }, false)

// document.documentElement.addEventListener('click', (event) => {
//     console.log(event.currentTarget, event.target, event.eventPhase);
// }, false);

// document.addEventListener('click', (event) => {
//     console.log(event.currentTarget, event.target, event.eventPhase);
// }, false)

// window.addEventListener('click', (event) => {
//     console.log(event.currentTarget, event.target,event.eventPhase);
// }, false);