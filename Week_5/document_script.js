// DOM Manipulation
// console.log(document.getElementById('title'));
document.addEventListener("DOMContentLoaded",
	function(event){
function sayHello(){
	this.textContent = "Said it!";
	// console.log(document.getElementById("name"));
 //This will only show the element that has the id name in the console. We need to accept value from the user.. for that..
 	var name = document.getElementById("name").value;
 	var message = "<h2>Hello " + name + "!</h2>";


 // Inserting a text element:

 		// document.getElementById("content").textContent = message;

 // Want the name in an h2 tag: 
 		// innerHTML interprets the thing assigned to it as HTML
 	document.getElementById("content").innerHTML = message;

// Adding behaviour to the page:

	if(name === "student"){
		var title = document.querySelector("#title").textContent;
		title += " & Lovin' it!";
		// textContent is a primitive. (Pass by Value) and therefore if the value of title is changed the value of textContent remains the same. So, we need to explicitly mention again, the below command, to change the value of textContent.
		document.querySelector("#title").textContent = title;
	}
}


// Unobtrusive event binding
	document.querySelector("button").addEventListener("click", sayHello);
	}
);


