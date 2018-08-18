function dragStart (event) {
    try{
        event.dataTransfer.setData('text/plain', event.target.id);
    }
    catch(err){
        event.dataTransfer.setData('text', event.target.id);
    }
    sourceContainerId = this.parentElement.id;        
 }
 
 function dropped(event) {
    let id;
    cancel(event);
    if( this.id !== sourceContainerId){
    try{
        id = event.dataTransfer.getData("text/plain");
    }
    catch(err){
        id = event.dataTransfer.getData("text");
    }
}    
 
    event.target.appendChild(document.getElementById(id))
 };
 
 function cancel(event) {
    if(event.preventDefault) event.preventDefault();
    if(event.stopPropagation) event.stopPropagation();
    return false;
 }
 
//  let img = document.getElementById("snapshot");
//  img.addEventListener("dragstart", dragStart);
//  let target = document.getElementById("target_container");
//  target.addEventListener('drop', dropped)
//  target.addEventListener('dragover', cancel)
//  target.addEventListener('dragenter', cancel)

let targets = document.querySelectorAll("[data-role='drag-drop-target']");
[].forEach.call(targets, function(target){
    target.addEventListener('drop', dropped)
 target.addEventListener('dragover', cancel)
 target.addEventListener('dragenter', cancel)
});

let sources = document.querySelectorAll('[draggable="true"]');
[].forEach.call(sources, function(source){
    source.addEventListener('dragstart', dragStart, false);
})