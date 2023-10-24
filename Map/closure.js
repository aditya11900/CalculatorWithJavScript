function outer(){
    let outerFunction = 10;
    function inner(){
        console.log(outerFunction);
    }
    return inner;
}

let innerFunction = outer();
innerFunction();