// fifo
class Queue {
    constructor(){
        this.tasks = [];
    }

    enqueue(task){
        this.tasks.push(task);
    }
    dequeue(){
        return this.tasks.shift();
    }

    firstElement(){
        return this.tasks[0];
    }

    log(){
        console.log(this.tasks);
    }


}

class prQueue {
    constructor(){
        this.tasks = [];
    }

    enqueue(task){
        if( this.isEmpty() ) {
            this.tasks.push(task);
        }
        else {
            // let inserted = false;

            for( let i = 0; i < this.tasks.length; i++){
                if( task[1] < this.tasks[i][1] ){
                    this.tasks.splice( i, 0, task);
                    // inserted = true;
                    return;
                }
            }
            // if( !inserted ){
                this.tasks.push(task);
            //}
        }
    }
    dequeue(){
        return this.tasks.shift();
    }

    firstElement(){
        return this.tasks[0];
    }

    log(){
        console.log(this.tasks);
    }

    isEmpty(){
        this.tasks.length == 0;
    }

}



// let myQueue = new Queue();
// myQueue.enqueue('1')
// myQueue.enqueue('2')
// myQueue.enqueue('3')
// myQueue.enqueue('4')
// myQueue.enqueue('5')
// myQueue.enqueue('6')
// myQueue.enqueue('7')
// myQueue.log()
// console.log(myQueue.firstElement() )
// myQueue.dequeue();
// myQueue.log()
// console.log( myQueue.firstElement() )

let pQueue = new prQueue();

pQueue.enqueue( ['task', 1] )
pQueue.enqueue( ['task 2', 2] )
pQueue.enqueue( ['task 3', 3] )
pQueue.enqueue( ['task 4', 1] )

pQueue.log();


class Set {                                                 //set :  add(el)/has(el)/remove(el)/subSet
    constructor(){
        this.elements = [];
    }

    add(el){
       if(!this.has(el)
        this.elements.push(el);
        return true;
       
    }

    has(){
        return this.tasks.shift();
    }

    remove(){
        return this.tasks[0];
    }

    log(){
        console.log(this.tasks);
    }


}

let Set2 = new Set

Set2.add('new task')


