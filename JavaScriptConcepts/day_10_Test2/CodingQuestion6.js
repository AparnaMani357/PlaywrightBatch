/**
 * As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else that prints the bug severity level.

Classification Matrix:
- always + blocker → P0 | always + major → P1 | always + minor → P2
- often + blocker → P1 | often + major → P2 | often + minor → P3
- rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4
 * frequency = "always", impact = "blocker"
 * 
 */

let frequency = "rarely", impact = "blocker"
let priority="";

if(frequency==="always" && impact === "blocker"){
    priority="P0";
}else if(frequency==="rarely" && impact === "minor"){
     priority="P4";
}else if(frequency==="always" && impact === "major"){
    priority="P1";
}else if(frequency==="often" && impact === "blocker"){
    priority="P1";
}
else if(frequency==="often" && impact === "major"){
    priority="P2";
}
else if(frequency==="rarely" && impact === "blocker"){
    priority="P2";
}else if(frequency==="always" && impact === "minor"){
    priority="P2";
}else if(frequency==="often" && impact === "minor"){
    priority="P3";
}
else if(frequency==="rarely" && impact === "major"){
    priority="P3";
}
console.log(priority);