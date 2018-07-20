var remove = document.querySelector("#remDay");
var add = document.querySelector("#addDay");
var update = document.querySelector("#update");
var struct = document.querySelector(".dayGraphN");
var visible = struct.innerHTML.replace("dayGraphN","dayGraph");
 
function createElementFromHTML(htmlString) {
	var div = document.createElement('div');
	div.innerHTML = htmlString.trim();
  
	
	return div.firstChild; 
  }
 
var ele;
add.addEventListener('click',function(){
	

	var elmnt = document.querySelector(".dayGraphN").innerHTML;

	document.querySelector(".container").insertAdjacentHTML('beforeend',"<div class='dayView'>"+elmnt+"</div>");
	sumStats();
	eves();
});



remove.addEventListener('click',function(){
var cc = document.querySelectorAll('.dayView').length;

	document.querySelectorAll('.dayView')[cc - 1].remove();
	sumStats();
	
});



var dayevs;
function eves(){

var evs = document.querySelectorAll(".inp");

var handler = function() {
	var pt = prompt("Enter Point", "");

	if(pt == 0){
		this.setAttribute("id", "missed");	

	}
	else{
		this.setAttribute("id", "");	
	}
	this.innerHTML = pt;
	sumStats();

};


	evs.forEach(function(elem) {




		elem.removeEventListener("click",handler);


		elem.addEventListener("click",handler );


	});



	
}

function sumStats(){
	var totday = document.querySelectorAll('.dayView').length;
	document.querySelector('#tot').innerHTML = totday;

	var missed = document.querySelectorAll("#missed").length;
	document.querySelector('#missedless').innerHTML = missed;
}
