var length = prompt('What is the length?');
var width = prompt('What is the width?');
var sqFeet = (length*width);
console.log("How many square feet do you need to paint? " + sqFeet);
var gallons = Math.ceil(sqFeet/350);
console.log("You will need to purchase " + gallons + " gallons of paint to cover " + sqFeet + ".");
