const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function firstNumber(){
    rl.question("Digite o primeiro número: ", (input) => {
        const number1 = parseFloat(input);
        if(isNaN(number1)){
            console.log("Insira um número válido!");
            firstNumber();
        } else{
            secondNumber(number1);
        }
    });
}

function secondNumber(number1){
    rl.question("Digite o segundo número: ", (input2) => {
        const number2 = parseFloat(input2);
        if(isNaN(number2)){
            console.log("Insira um número válido!");
            secondNumber(number1);
        } else{
            thirNumber(number1, number2);
        }
    });
}

function thirNumber(number1, number2){
    rl.question("Digite o terceiro número: ", (input3) => {
        const number3 = parseFloat(input3);
        if(isNaN(number3)){
            console.log("Insira um número válido!");
            thirNumber(number1, number2);
        } else{
            determineLargestNumber(number1, number2, number3);
        }
    });
}

function determineLargestNumber(number1, number2, number3){
    const largest = Math.max(number1, number2, number3);
    console.log(`O maior número entre: ${number1}, ${number2} e ${number3} é ${largest}.`)
    rl.close();
}

firstNumber();