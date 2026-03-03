/**
 * In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).
 * 
 */


let isPresent = true, isDisplayed = true, isEnabled = false
let Status="";
let Severity="";

if(isPresent === true && isDisplayed === true && isEnabled === true){
    Status="READY";
}
if(isPresent === true && isDisplayed === true && isEnabled !== true){
     Status="DISABLED";
     console.log("Status: "+Status);
}
if(isPresent === true && isDisplayed !== true ){
     Status="HIDDEN";
     console.log("Status: "+Status);
}
if(isPresent !== true ){
     Status="NOT FOUND";
     console.log("Status: "+Status);
}

if(Status === "READY"){
    Severity="Ok";
    console.log("Status: "+Status);
}
else if(Status === "NOT FOUND"){
    Severity="CRITICAL";
    console.log("Severity: "+Severity);
}else if(Status === "DISABLED" || Status==="NOT FOUND" ){
    Severity="WARNING";
    console.log("Severity: "+Severity);
}