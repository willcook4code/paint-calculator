var length = prompt('What is the length?');
while (isNaN(length)){
  	alert('Please enter a numeric value!');
  	length = prompt('What is the length?');
}
var width = prompt('What is the width?');
while (isNaN(width)){
  	alert('Please enter a numeric value!');
  	width = prompt('What is the width?');
}
var sqFeet = (length*width);
var gallons = Math.ceil(sqFeet/350);




console.log("How many square feet do you need to paint? " + sqFeet);
console.log("You will need to purchase " + gallons + " gallons of paint to cover " + sqFeet + ".");
