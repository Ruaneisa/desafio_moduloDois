class Pessoa{

    #nome;
    #idade;
    #cnh;

    constructor (nome, idade, cnh){
        this.#nome = nome;
        this.#idade = idade;
        this.#cnh = cnh.toLowerCase() === "sim" ? "você possui CNH" : "você não possui CNH.";
    }

    get nome() {
        return this.#nome;
    }

    set nome(valor) {
        this.#nome = valor;
    }

    get idade() {
        return this.#idade;
    }

    set idade(valor) {
        if(valor>= 0){
            this.#idade = valor;
        } else{
            console.log("Digite uma idade válida!");
        }
    }

    get cnh(){
        return this.#cnh;
    }

    set cnh(valor) {
        if(valor.toLowerCase() === "sim"){
            console.log("Você possui CNH");
        } else{
            console.log("Você não possui CNH");
        }
    }

    exibirInformacoes(){
        return `Olá, ${this.#nome}, sua idade é de: ${this.#idade} e ${this.#cnh}`;
    }
}

module.exports = Pessoa;