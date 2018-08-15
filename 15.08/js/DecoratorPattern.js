
let Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log(`Completing task: ${this.name}`);
    this.completed = true;
}

Task.prototype.save = function(){
    console.log( `Saving task: ${this.name}` );
}

let myTask = new Task('I have to learn JS');

myTask.complete();
myTask.save();

let decoratedMytask = new Task('Decorated Task');

decoratedMytask.Priority = 2;
decoratedMytask.notify = function(){
    console.log('Notifying important people!...');
}

decoratedMytask.complete();
decoratedMytask.save = function(){
    this.notify();
    Task.prototype.save.call(this);
}
decoratedMytask.save();
