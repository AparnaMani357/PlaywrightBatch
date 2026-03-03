/**
 * After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). 
 * Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. 
 * Print a test report with total tests, counts, pass rate percentage, and a verdict 
 * (all passed → ready for release, ≤2 failures → review, >2 failures → block release).
 * 
 */

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
let Total_Count=testResults.length,pass_count=0,fail_count=0,skipped_count=0;
for(let i=0;i<testResults.length;i++){
    if(testResults[i] === "pass")
    {
        pass_count++;
    }
    else if(testResults[i] === "fail") 
    {
        fail_count++;
    }
    else if (testResults[i] === "skip"){
        skipped_count++;
    }
}

console.log("Total Tests :"+Total_Count+" Passed: "+pass_count+" Failed: "+fail_count+" skipped: "+skipped_count+" PassRate: "+((pass_count/Total_Count)*100)+"%")
if(fail_count === 0){
    console.log("VERDICT:ready for release");
}
else if(fail_count <= 2 ){
    console.log("VERDICT:Review");
}
else if(fail_count > 2 ){
    console.log("VERDICT:Block Relase");
}