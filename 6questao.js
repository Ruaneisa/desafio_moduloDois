process.stdin.setEncoding("utf-8");

function pergunta(){
    process.stdout.write("Você gosta de café? ");
}

let cafe;

process.stdin.on("data", (data) =>{
    cafe = data.trim();

    if(cafe.toLowerCase() === "sim" || cafe.toLowerCase() === "não"){
        let mensagem = cafe.toLowerCase() === "sim"? "Que legal! Você gosta de café." : "Você não gosta de café.";
        console.log(mensagem);
        process.exit();
    } else{
        process.stdout.write("Digite um valor válido!\n");
        pergunta();
    }

});

pergunta();