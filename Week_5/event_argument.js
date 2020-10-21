// Event Handling 
document.addEventListener("DOMContentLoaded",
	function(event){

		function sayHello(event){
			console.log(event);
			console.log(this);
			this.textContent = "Said it!";
 			var name = document.getElementById("name").value;
 			var message = "<h2>Hello " + name + "!</h2>";

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

		document.querySelector("body").addEventListener("mousemove",
			function(event){
				if(event.shiftKey === true){
					console.log("x:" + event.clientX);
					console.log("y:" + event.clientY);
				}
			}
		)
	} //End function(event)
); //End document.querySelector(DOMContentLoaded)


