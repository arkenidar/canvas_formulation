
(x,y)=>{
	var diagonal = x==y
	var circle = x**2 + y**2 <= 40**2
	var square = Math.max(Math.abs(x),Math.abs(y))<=100
	return square && !circle
}