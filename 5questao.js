process.stdin.setEncoding("utf-8");

function idadeInput(){
    process.stdout.write("Digite sua idade: ");
}

function validarEntrada(ano){
    return !isNaN(ano) && Number.isInteger(ano/1) && ano >= 0;
}

let valorIdade, mensagem;

process.stdin.on("data", (data) => {
    valorIdade = data.trim();
    if(validarEntrada(valorIdade)){
        mensagem = valorIdade>=18? "Você é maior de idade!" : "Você não é maior de idade.";
        console.log(mensagem);
        process.exit();
    } else{
        process.stdout.write("Digite um valor válido!\n");
        idadeInput();

    }

});

idadeInput();
