

function testResults(testname,testresult){
    console.log(`${testname} test results is: ${testresult}`);
}

function mainTest(testname,callbackfunction){
    let testresult="pass";
    callbackfunction(testname,testresult);
    
}

mainTest("LoginTest",testResults);