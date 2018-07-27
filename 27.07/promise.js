// pending
// rejected
// fulfilled

function doAsync(){
    let p = new Promise( function(resolve, reject){
        console.log("in promise code");
        setTimeout( function(){
            console.log("resolving");
            // console.log("rejecting");
            resolve();

        }, 2000)
    });
    return p;
}

// let promise = doAsync();

// doAsync().then(function(){
//     console.log('fulfiled')
// }, function(error){
//     console.log(error.message)

// })

doAsync().then(function(){
    console.log('fulfiled')
    return "continue";
})
.then((msg) =>{
    console.log(msg);
})
.catch(function(error){
    console.log(error.message)

})

//promise.resolve()
//promise.reject()
//promise.all(iterables)   // masivi sheidzleb gadaeces; ramdenime paralelur rejimshi da ara tanmimd.
//promise.race(iterables)  // pirveli romelic morcha imas gamoitans


