function outerFunction() {
    let message = "Hello World!";

    function innerFunction() {
        console.log(message);
    }

    return innerFunction;
}

let outputMessage = outerFunction();
outputMessage();
