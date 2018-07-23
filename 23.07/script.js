// // let a = 11;

// // console.log(a)
// // try{
// //     console.log(b)
// // }
// // catch(error){;
    
// //     console.log(error.message)
// // }

// // let b = 13

// // console.log( a + b );

// try{
//     // console.log("Start of Try")
//     undefinedVar;
//     // console.log("End of Try");

// }

// catch(error){
//     //stack, name, message -- shedgeba
//     // console.log(`Error has occured: ${error}`);

// }

// finally{
//     // console.log("Always ready to run");
// }


// //JSON - Javascript Object Notation

// /* 

// <user>
// <name> XML guys </name>    -- XML sintaqsi !
// <id>666</id>
// <isAdmin>1</isAdmin>
// </user>

// {
//     name: "JSON Guy",    -- JSON sintaqsi  !
//     id: 667,
//     isAdmin: true
// }

// */


// let myPerson = {
//     name: "JSON Guy",
//     id: 667,
//     isAdmin: true
// };

// let toSendData = [myPerson, myPerson, myPerson];
// // console.log(toSendData);
// let serialized = JSON.stringify(toSendData);
// // console.log(serialized)

// let json = `(NAME":"JSON Guy","id":667)`;
// try{
//     let data = JSON.parse(json);
//     if(! data.isAdmin){
//         throw new SyntaxError("incomplete data: isAdmin property ")
//     }
// }

//     catch(error) {
//         if (error instanceof SyntaxError){
//             console.log(`JSON error - ${error}`)
//         }
//         else {
//             console.log(`other error - ${error}`)
//         }
//     }


    // window.onerror = (message, url, line, col, error) =>{
    //     console.log(message, url, line, error)
    // }
    // console.log("A")

 class Error {
     constructor(message){
         this.message = message;
         this.name = "Error";
         //this stack =
     }
 }

 class ValidationError extends Error {
     constructor(message){
         super(message);
         this.name = 'ValidationError';
     }
 }

class PropertyRequiredError extends ValidationError { 
   constructor(missingProp){
       super(`no property - ${}` )
   }
} 
 

 function validateJSON(json){
     let user = JSON.parse(json);
     if( !user.age){
         throw new ValidationError("No Field : age");
     }
     if( !user.isAdmin){
         throw new ValidationError("No Field : isAdmin")
     }
 }

 try {
     let user = validateJSON(json);
 }
 catch(error){
     if(error instanceof ValidationError){
         console.log(`invalid data - ${error.message}`)
     }
     else if ( error instanceof SyntaxError){
         console.log(`JSON Syntax Error - ${error.message}`)
     }
     else{
         throw error;
     }

 }




// დავალება 


// class PropertyRequiredError extends ValidationError { 
//     // Your code here 
// } 
 
// function readUser(json) { 
//     let user = JSON.parse(json); 
//     if (!user.age) { 
//         throw new PropertyRequiredError("age"); 
//     } 
//     if (!user.name) { 
//         throw new PropertyRequiredError("name"); 
//     } 
//     return user; 
// }

   
//     try { 
//         let user = readUser('{ "age": 25 }'); 
//     } catch (err) { 
//         if (err instanceof ValidationError) { 
//             alert("Invalid data: " + err.message); // Invalid 
//     // data: No property: name 
//             alert(err.name); // PropertyRequiredError 
//             alert(err.missingProperty); // name 
//         } else if (err instanceof SyntaxError) { 
//             alert("JSON Syntax Error: " + err.message); 
//         } else { 
//             throw err; // unknown error, rethrow it 
//         } 
//     }
