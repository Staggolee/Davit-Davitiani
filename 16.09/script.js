const EventEmitter = require('events')/EventEmitter;

const getResource = ( c ) => {
    let e = new EventEmitter();
    process.nextTick ( ) => {
        let count = 0;
        e.emit('start');
        let t = setInterval( () => {
            e.emit('data', ++count);

            if( count == c){
                e.emit('amd', count);
                clearInterval(t);
            }
            });
        };
    

    

        
   
return a;


let res = getResource(0);

res.on('start')