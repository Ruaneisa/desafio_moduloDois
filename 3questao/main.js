const readline = require("readline");
const Pessoa = require("./pessoa");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main(){
    rl.question("Digite seu nome: ", (nome) =>{
        rl.question("Informe sua idade: ", (idade) => {
            rl.question("Você possue CNH(Carteira Nacional de Habilitação)? ", (cnh) => {
                const pessoa = new Pessoa(nome, idade, cnh);
                console.log(pessoa.exibirInformacoes());
                rl.close();
            });
        });
    });
}

main();