process.stdin.setEncoding("utf-8");

function anoNascimento (){
    process.stdout.write("Informe o ano em que você nasceu: ");
}

function calculoIdade(){    
    return anoReferencia-anoInput;
}

let anoInput;
const anoReferencia = 2024;

function validarAno(ano) {
    return !isNaN(ano) && ano >1900 && ano <= anoReferencia && Number.isInteger(calculoIdade());
}


process.stdin.on("data", (data) => {
    anoInput = data.trim();
    
    if(validarAno(anoInput)){
        process.stdout.write(`Você tem ${calculoIdade()} anos.`);
        process.exit();
    } else{
        process.stdout.write("Digite um valor válido!\n");
        anoNascimento();
    }

});

anoNascimento();
