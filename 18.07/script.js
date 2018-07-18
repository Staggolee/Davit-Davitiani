//var; let; const.

let myArray =[1,2,3,4,5,6,7,8,9];
// console.table(myArray);


// for(let i=0; i<myArray.length; i+= 1){
//     console.log(`index - ${i}, value - ${myArray[i]} `)
// }

// myArray.forEach(function(value,index,arr){
// console.log(`index - ${index}, value - ${value}`);
// console.log(arr)
// });


// Generator/Generator Functions
// Iterable protocol
// Iterator protocol


let myIterable = {
    [Symbol.iterator]: () => ({
        items:'Hello Iterator'.split(''),
        next: function next(){
            return {
                done:this.items.length === 0,
                value: this.items.shift()
            }
        }

    })
}