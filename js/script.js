let exponentiation = function(a,b){
    const result = Math.pow(a,b);
    return alert(result);
}

let multiply = function(a,b){
    const result = a * b;
    return alert(result);
}

let division = function(a,b){
    const result = a / b;
    return alert(result);
}

let modulo = function(a,b){
    const result = a % b;
    return alert(result);
}

let isValidNumber = function(arg){
    if (typeof (arg) === "number" && !isNaN(+arg)){
        return true;
    }

    return false;
}

function mainFunction(callback){
    const num1 = prompt(`Type a num:`);
    const num2 = prompt(`Type a degree:`);

    if (!isValidNumber(num1)) return `wrong num1`;
    if (!isValidNumber(num2)) return `wrong num2`;

    //if (typeof (num1) !== "number" || isNaN(num1)) return `wrong num1!`;
    //if (typeof (num2) !== "number" || isNaN(num2)) return `wrong num2!`;

    return callback(num1,num2)
}

//mainFunction(exponentiation);
//mainFunction(multiply);
//mainFunction(division);
mainFunction(modulo);