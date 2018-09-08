// function recursiveCount(max, current){
//     if( current > max){
//         return;
//     }

//     // console.log(current);
//     // recursiveCount(max, current+1);
// }

// recursiveCount(10, 1);


// function fibanacci(n){
//     if( n <= 2){
//         return 1;
//     }
//     else {
//         return fibanacci(n - 1) + fibanacci(n - 2);

//     }
// }

// for( let i = 0; i < 12; i++){
//     // console.log(`i - ${i}, num - ${fibanacci(1) }`);
// }

// function factorial( number ){
//     if( number < 2) return 1;
//     return number * factorial( number - 1);
// }
// // console.log( factorial(3))

// function addNumbers( number){
//     if ( number === 0) return number;
//     else{ 
//         return number + addNumbers( number - 1); 
//     }
// }

// addNumbers(3)

// //3 + numbers(2)
// //3 + 2 + numbers(1)
// //3 + 2 + 1 

// function tailAddNumbers( number, sum = 0 ){ 
//     if ( number === 0) return sum;
//     else{ 
//         return tailAddNumbers( number - 1, sum + number); 
//     }

// }
// // console.log(tailAddNumbers(3))

// // tailAddNumbers (3, 0)
// // tailAddNumbers (2, 3)
// // tailAddNumbers (1, 5)
// // tailAddNumbers (0, 6)

// function bubbleSort(numbers){
//    do{
//        var isSorting = false;
//        for( let i = 0; i < numbers.length; i++ ){
//            if( numbers[i] > numbers[i+1] ){
//                let t = numbers[i];
//                numbers[i] = numbers[i+1];
//                numbers[i+1] = t;
//                isSorting = true;
//            }
//        }
//     }
//    while(isSorting);
// }

// // let arr = [-7, -3, 5, 8, 10, 14, 1, 3];
// // bubbleSort(arr);
// // console.log(arr)


// // function insertionSort(numbers){
// //     for (var i = 0; i < numbers.length; i++) {
// //         let num = numbers[i];
// //         for( var newStr = i - 1; newStr > -1 && numbers[newStr] > num; newStr--) {
// //             numbers[newStr + 1] = numbers[newStr]
// //         }

// //         numbers[newStr +1] = num;

// //     }
// //     return list
// // }

// // let list = [1, -3, 2, 5, 8];

// // console.log(insertionSort(list))

// function insertionSort(numbers){
//     for(let i = 0; i < numbers.length; i++){
//         for( let j = 0; j < 1; j++){
//             if( numbers[i] < numbers[j]){
//                 let temp = numbers.splice(i, 1);
//                 numbers.splice(j, 0, temp[0]);
//             }
//         }
//     }
// }

// // let arr = [-7, -3, 5, 8, 10, 14, 1, 3];
// // insertionSort(arr);
// // console.log(arr)

// function mergeSort(numbers){
//     if( numbers.length < 2){
//         return numbers;
//     }

//     const length = numbers.length;
//     const middle = math.floor(length / 2);
//     const left = numbers.slice(0, middle);
//     const right = numbers.slice(middle);
//     return merge( mergeSort(left), mergeSort(right) );
// }

// function merge(left, right){
//     const sortedArray = [];

//     while(left.length && rigth.length){
//         if( left[0] <= right[0]){
//             sortedArray.push(left.shift())
//         }
//         else {
//             sortedArray.push(right.shift())
//         }

//     }

//     return sortedArray.concat(left, right);


// }

// let arr = [-7, -3, 5, 8, 10, 14, 1, 3];

// console.log(mergeSort(arr))

function quickSort(numbers){
    if( numbers.length <= 1) return numbers;

    const pivot = numbers[numbers.length - 1];
    const left = [];
    const right = [];

    for( let i = 0; i < numbers.length - 1; i++){
        if( numbers[i] < pivot){
            left.push( numbers[i] );
        }
        else{
            right.push( numbers[i] )
        }
    }

    return [ ...quickSort(left), pivot, ...quickSort(right) ];
}

let arr = [-7, -3, 5, 8, 10, 14, 1, 3, 4, 2];
console.log(quickSort(arr))


/*
SELECT;
INSERT;
UPDATE;
DELETE;
//bazidan informaciis amotvirTvistvis sachiro kitxvebi


///\\\

 
Table - contacts
id | first_name | last_name
1  | john       | doe


class Contact{
    constructor(name, last){
        this.name = name;
        this.lastname = last;               --- modeli controleristvis, sadac informacia unda gaiweros klasshi 

    }
}

///\\\

SELECT first_name, last_name FROM contacts;     /// movitxovet bazidan konkretuli informacia - 'select' gamoyenebit
SELECT * FROM contats   --- * - rogorc css - shi yvelas monishvna//


*/