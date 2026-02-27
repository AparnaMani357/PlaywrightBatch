/**
 * Write a program that classifies a triangle based on its side lengths. 
 * Given three input values representing the lengths of the sides, 
 * determine if the triangle is equilateral (all sides are equal), 
 * isosceles (exactly two sides are equal), 
 * or scalene (no sides are equal). 
 * Use an if-else statement to classify the triangle.
 */

let side1=10,side2=14,side3=10;

if(side1 === side2 && side1===side3)
    console.log("equilateral");
else if(side1 === side2 || side1===side3)
    console.log("isosceles");
else
    console.log("scalene");