/**
 * As an SDET, you frequently need to generate test data for form testing. 
 * Write a JavaScript program that generates test user data using a for loop. 
 * Each user should have a unique ID (USR-0001 format), name, email, and role 
 * (cycling through: admin, editor, viewer, tester, manager). 
 * Every 3rd user should be inactive (edge case testing). 
 * Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).
 * 
 */

let uniqueID="USR-000",Username="TestUser_",email="testuser",Userstatus="ACTIVE";
let roles=[ "admin", "editor", "viewer", "tester", "manager"],role="";
for(let i=1;i<=8;i++){
    Userstatus="ACTIVE";
    uniqueID="USR-000"+i;
    Username="TestUser_"+i;
    email="testuser"+i+"@testingacademy.com";
    role=roles[(i-1) % roles.length];
    if(i%3==0){
        Userstatus="INACTIVE"
    }

    console.log(uniqueID+"|"+Username+"|"+email+"|"+role+"|"+Userstatus);
}