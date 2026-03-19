
//function without arguement and return type
function greet(){
    console.log("Welcome");
}

greet();

//function with arguement and no return type
function greetWithName(name){
    console.log("Welcome",name);
}

greetWithName("Aparna");


//function with argument and return type
function sum(a,b){
    return a+b;
}

console.log(sum(5,6));



//function expression
const welcome=function(name){
    console.log("Welcome",name);
}
welcome("Aparna");

//arrow function

const greetings=(name1)=>"hello "+name1;
console.log(greetings("Aparna Pangare"));

//Immidiately Invoked Function Expression(IIFE)
(function (){console.log("IIFE function call")})
();

//rest of the parameter
function logResults(SuiteName,...Results){
    console.log("SuiteName: ",SuiteName);
    console.log("Results: ",Results.join(","));
}

logResults("MySuite","Pass","Fail","Skip","Pass");