alert('Boas vindas ao nosso site!');

let nome = "";
let idade = "";

let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = "Erro! Preencha todos os campos"

alert(mensagemDeErro);

let pergunta1 = prompt('Qual o nome do usuário?');

    console.log(nome, "Antes");
    console.log(nome = pergunta1);
    console.log(nome, "Depois");

    let pergunta2 = prompt('Digite sua idade');

    console.log(idade, "Antes");
    console.log(idade = pergunta2);
    console.log(idade, "Depois");

    if (pergunta2 >= 18) {
        alert ("Pode tirar a habilitação!")
    }

