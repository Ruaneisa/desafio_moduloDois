process.stdin.setEncoding("utf-8");

function numberInput(){
    process.stdout.write("Digite um número: ");
}

let number, mensagem;

process.stdin.on("data", (data) =>{
    number = data.trim();

    if(!isNaN(number)){
        if(Number.isInteger(number/1) && number%2 === 0){
            mensagem = "O número é par.";
        } else{
            mensagem =  "O número é impar.";
        }
        console.log(mensagem);
        process.exit();
    } else{
        process.stdout.write("Digite um número válido! \n");
        numberInput();
    }
});

numberInput();