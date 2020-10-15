// ARRAYS

// var array = new Array();
// array[0] = "Ronald";
// array[1] = 2;
// array[2] = function(name){
// 	console.log("Hello " + name);
// };
// array[3] = {course: "HTML, CSS, JS"};

// console.log(array);
// console.log(array[0]);
// array[2](array[0]); //or
// array[2]("Ronald");

// console.log(array[3].course);

// Short Hand Array Creation

// var names = ["Ronald", "Albert", "Reginald"];
// console.log(names);

// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " + names[i]);
// }

// names[100] = "Jim";
// for (var i = 0; i < names.length; i++) {
//  console.log("Hello " + names[i])
// }

var names2 = ["Ronald", "Albert", "Reginald"];

var myObj = {
	name: "Ronald",
	course: "HTML,CSS,JS",
	platform: "Coursera"
};
for(var prop in myObj){ //I want to grab every property in myObj is what this means.
	console.log(prop + ":" + myObj[prop]);
}