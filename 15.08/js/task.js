let Task = function(data){
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
    
}

let TaskService = ( function(){
    return {
        complete(task){
            task.completed = true;
        },
        setCompleteDate(task){
            task.CompleteDate = new Date();
            console.log(`${task.name} Completed on ${task.CompleteDate.toString()}`);
        },
        notifyCompletion(task, user){
            console.log(`Notifyibg ${ user } of the completion of ${ task.name }`);
        },
        save(task){
            console.log(`saving Task ${ task.name }`);
        }
    }


}) ()

let TaskServiceWrapper = function(){
    let completeAndNotify = function(myTask){
        TaskService.complete(myTask);
        if(myTask.completed == true){
            TaskService.setCompleteDate(myTask);
            TaskService.notifyCompletion(myTask, myTask.user);
            TaskService.save(myTask);
        }
    }
    return {
        completeAndNotify
    }
}();

let myTask = new Task({
    name: 'Ty Task',
    priority: 1,
    project: 'Techub',
    user: 'Davit',
    completed: false
});

console.log(myTask);
TaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);