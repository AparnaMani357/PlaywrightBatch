/**
 * Create a program that determines whether a given year is a leap year. 
 * A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. 
 * Use an if-else statement to make this determination.
 * 
 */

let year = 1900;

if (year % 400 === 0) {
    console.log("Leap year");
} 
else if (year % 100 === 0) {
    console.log("Not a leap year");
} 
else if (year % 4 === 0) {
    console.log("Leap year");
} 
else {
    console.log("Not a leap year");
}
