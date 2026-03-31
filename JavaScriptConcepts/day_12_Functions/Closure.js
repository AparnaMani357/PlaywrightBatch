

function outer(){

    let message="Hello";
    
    function inner(){
        console.log(`I am inner function ${message}`);
    }

    return inner;
}

let check=outer();
check();