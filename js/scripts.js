function getTriangleArea(a, h) {

	if( a <= 0 || h <= 0) {
		console.log("Nieprawidłowe dane");
	} else {
		return a * h / 2;
	};
}

console.log(getTriangleArea(10, 6));

console.log(getTriangleArea(0, 6));


var triangle1Area = getTriangleArea(2, 7),

	triangle2Area = getTriangleArea(150, 456),

	triangle3Area = getTriangleArea(33, 31);



