// Function Constructors
function Circle(radius){
	// console.log(this); //"this" points to the object that got created (Circle)
	this.radius = radius;
}
// var myCircle = new Circle(10);
// console.log(myCircle)
Circle.prototype.getArea = 
  function(){
  	return Math.PI * Math.pow(this.radius,2);
  }

  var myCircle = new Circle(10);
  console.log(myCircle.getArea());

  var myOtherCircle = new Circle(20);
  console.log(myOtherCircle);