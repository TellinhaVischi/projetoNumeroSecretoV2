let listaDeSorteados = []
let limite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;
mensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2})
}

function mensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (numeroSecreto == chute) {
        exibirTextoNaTela("h1", "Parabéns você acertou!");
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você descobriu o numero secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroSecreto > chute) {
            exibirTextoNaTela("p", "O número secreto é maior!");

        } else {
            exibirTextoNaTela("p", "O número secreto é menor!");
        }
        tentativa++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limite + 1);
    let quantidadeDeElementosLista = listaDeSorteados.length;

    if (quantidadeDeElementosLista == limite);
    if(listaDeSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = ""
}

function reiniciarJogo() {
    mensagemInicial();
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    tentativa = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

