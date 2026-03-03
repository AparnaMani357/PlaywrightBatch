/**
 * As a performance tester, you collect API response times in milliseconds. 
 * Write a JavaScript program using a while loop that analyzes an array of response
 *  times and prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms). 
 * Use comparison operators for min/max tracking.
 */

let responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500;
let min=responseTimes[0];
let max=responseTimes[0];
let SLA_Breach=0;
let OverAllStatus="";

console.log("Total Requests:" +responseTimes.length);
for(let i=0;i<responseTimes.length;i++){
    if(responseTimes[i]<min){
        min=responseTimes[i]
    }else if (responseTimes[i]>max){
        max=responseTimes[i]
    }
    if(responseTimes[i]>500){
       SLA_Breach++; 
    }
}

if(SLA_Breach>0){
    OverAllStatus="❌ SLA VIOLATED"
}
console.log("Min Response: "+min);
console.log("Max Response: "+max);
console.log("SLA Breaches: "+SLA_Breach+"("+(SLA_Breach/responseTimes.length*100)+")%");
console.log("Overall Status: "+OverAllStatus);
