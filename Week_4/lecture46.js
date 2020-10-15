//Funtions are First-Class Data Types
// Functions ARE Objects
function multiply(x,y){
	return x*y;
}
multiply.version = "v.1.0.0";
console.log(multiply.version);

// Function Factory
function makeMultiplier(multiplier) {
	var myFunc = function(x) {
		return multiplier*x;
	};

	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing functions as arguments

function doOperation(x,operation){
	return operation(x);
}

var result = doOperation(5,multiplyBy3);
console.log(result);
var result = doOperation(100,doubleAll);
console.log(result);