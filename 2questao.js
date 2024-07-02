process.stdin.setEncoding("utf-8");

function askName() {
    process.stdout.write("Qual seu nome? \n");
}

function askAge() {
    process.stdout.write("Qual sua idade? \n");
}

function askCnh() {
    process.stdout.write("Você tem CNH(Carteira nacional de habilitação)? \n");
}

let userName, userAge, userCnh, mensagem;
let step = 0;

process.stdin.on("data", (data) => {
    const input = data.trim();
    
    if (step === 0) {
        userName = input;
        step++;
        askAge();
    } else if (step === 1) {
        userAge = input;
        step++;
        askCnh();
    } else if (step === 2){
        userCnh = input;

        if (userCnh.toLowerCase() === "sim"){
            mensagem = "Você possui CNH";
        } else{
            mensagem = "Você não possui CNNH";
        }

        process.stdout.write(`Olá, seu nome é: ${userName}! Você tem ${userAge} anos. ${mensagem} \n`);
        process.exit();
    }
});

askName();
