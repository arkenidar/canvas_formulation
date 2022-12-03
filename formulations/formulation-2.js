
(x,y)=>{ // point, 2D coordinates

x=x+10 // translation (transformation)

// rotation (transformation)
var pi=Math.PI, cos=Math.cos, sin=Math.sin
var angle=pi/3

var x_rotated = cos(angle)*x - sin(angle)*y
var y_rotated = sin(angle)*x + cos(angle)*y

x = x_rotated ; y = y_rotated

// "approximate" equation via dis-equation
var diagonal = Math.abs(x-y)<10 //x==y // equation
        
// circle filled dis-equation
var ellipse = x**2 + y**2/3 <= 40**2

// square filled dis-equation
var rectangle = Math.max(Math.abs(x*2),Math.abs(y))<=100

// x,y points that are true are drawn (Boolean expressions)
return rectangle && !ellipse && !diagonal

}