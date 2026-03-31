


function loginTest(){
    return "pass";
}


function higherOrderFunction(testFunc){

    let result=testFunc();
    console.log(`Test result is ${result}`);
}

higherOrderFunction(loginTest);