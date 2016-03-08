var question = prompt("Are you measuring a rectangle, circle, or L-shape?");


if (question === "rectangle"){
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
	var total = (length*width);
};

if (question === "circle"){
var radius = prompt('What is the radius?');

while (isNaN(radius)){
  	alert('Please enter a numeric value!');
  	radius = prompt('What is the radius?');
	}

	var total = (radius * radius * Math.PI);
}

if (question === "L-shape"){
	var areaLength1 = prompt('What is the total length of area 1?');
		while (isNaN(areaLength1)){
	  	alert('Please enter a numeric value!');
	  	areaLength1 = prompt('What is the total length of area 1?');
		}
		var areaWidth1 = prompt('What is the total width of area 1?');
		while (isNaN(areaWidth1)){
	  	alert('Please enter a numeric value!');
	  	areaWidth1 = prompt('What is the total width of area 1?');
		}
	var area1 = (areaLength1*areaWidth1);
	var areaLength2 = prompt('What is the total length of area 2?');
		while (isNaN(areaLength2)){
	  	alert('Please enter a numeric value!');
	  	areaLength2 = prompt('What is the total length of area 2?');
		}
		var areaWidth2 = prompt('What is the total width of area 2?');
		while (isNaN(areaWidth2)){
	  	alert('Please enter a numeric value!');
	  	areaWidth2 = prompt('What is the total width of area 2?');
		}
	var area2 = (areaLength2*areaWidth2);
	var total = (parseFloat(area1)+parseFloat(area2));
};

var gallons = Math.ceil(total/350);
console.log("How many square feet do you need to paint? " + total);
console.log("You will need to purchase " + gallons + " gallons of paint to cover " + total + ".");
