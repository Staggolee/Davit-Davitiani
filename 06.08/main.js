// $(document).ready( function(){

//     // $('h1').myPlugin();
//     // $('h1').myPlugin2();
//     $('h1')
//     .styleElement({
//         text: 'Hello Plugin',
//         color: 'green',
//         fontSize: '28px',
//         backgroundColor: '#ccc'
//     })
    
//     let worker = new Worker('work.js')
//     worker.postMessage('Hello my Worker!...');
//     // worker.terminate()
//     worker.addEventListener('message', (event)=> {
//         console.log(event.data);
//         worker.terminate();
//     })

// });


fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json => console.log(json))
