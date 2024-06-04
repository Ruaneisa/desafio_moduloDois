process.stdin.setEncoding("utf-8");

function askName(){
    process.stdout.write("Qual seu nome? ");
}

function askAge(){
    process.stdout.write("Qual sua idade? ");
}

let userName = "";
let userAge = "";

let condition = "Name";

process.stdin.on("data", (data) =>{
    const input = data.trim();

    if(condition === "Name"){
        userName = input;
        condition = "Age";
        askAge();
    } else if(condition === "Age"){
        userAge = input;
        process.stdout.write(`Olá, seu nome é: ${userName}! Você tem ${userAge} anos.\n`);
        process.exit();
    }
});

askName();