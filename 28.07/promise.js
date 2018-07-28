window.onload = () => {      // globaluri rom ar gaxdes da kodi davmalot konsolshi!!!
    let usersEndPoint = 'https://jsonplaceholder.typicode.com/users';

fetch(usersEndPoint, {
    method: 'get'
})

.then((response) => {
// console.log(response);
if( response.status === 200){
    // console.log("yep");
    return response.json();
}
})
.then(usersList => {
    // console.log(usersList);
    document.body.innerHTML = usersList.map( user => {
        // onclick = "ShowDetailsByID(${user.id})"
        return `<div data-user-id="${user.id}" >
        <h2>${user.name} <small> id - ${user.id}</small></h2>
        
        </div>`
    }).join('');

    let users = document.querySelectorAll('[data-user-id]');
    // console.log(users)
    users.forEach( user =>{
        user.addEventListener('click', (event) => {
            // console.log('I am an event', event.target);
            let userDiv = event.target;
            // console.log( parentNode);
            if( userDiv.tagName.toLowerCase() != 'div'){
                while( userDiv.tagName.toLowerCase() != 'div') {
                    userDiv = userDiv.parentNode;
                }


            }
            console.log(userDiv.dataset)
            let userId = user.dataset.userId;
            ShowDetailsByID(userId)
        }, false)   
    })
})

.catch( (error) => {
    console.log(`Error - ${error.message}`)
})



// let objArray =[
//     { id : 1, name: 'test 1'},
//     { id : 2, name: 'test 2'},
//     { id : 3, name: 'test 3'},

// ]

// let newArray = JSON.stringify(objArray);

// let response = JSON.parse(newArray);
// console.log(response);


function ShowDetailsByID(userId){
    console.log(`${usersEndPoint}/${userId}`)
    fetch(`${usersEndPoint}/${userId}`, {
        method: 'get'
    })
    
    .then((response) => {
    // console.log(response);
    if( response.status === 200){
        // console.log("yep");
        return response.json();
    }
    })
    .then(usersDetail => {
        // console.log(usersDetail)
        document.body.innerHTML = `
        <div class="user_detail--item">
        <h2>${usersDetail.name}</h2>
        <h3>phone - ${usersDetail.phone}</h3>
        <h3>website - ${usersDetail.website}</h3>
        <h3>email - ${usersDetail.email}</h3>

        </div>
        `;
        
    
    
    })
    .catch( (error) => {
        console.log(`Error - ${error.message}`)
    })
    
}
}