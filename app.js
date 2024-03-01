let lisaDeNumeorosSOrteados = [];
// como manipular o html exemplo de como manipular tags 
//let titulo = document.querySelector('h1');
//innerhtml é algo como dentro do html
//titulo.innerHTML = 'Jogo Numero secreto';
console.log(lisaDeNumeorosSOrteados)
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';
let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativas = 0;
if (verificarChute){
    numeroTentativas =+ 1
}
function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

exibirTextoTela('h1', 'JOgo secreto');
exibirTextoTela('p', 'Escolha um numero de 1 a 10');
// function é um techo do codigo que tem alguma funcionalidade resposavel por uma determinada ação
function verificarChute() {
    // essa é a forma de pegar um valor no js .value
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        //a linha abaixo é um operador ternario se numero secreto maior que 1 então(?) opçao1 se não(:) opção2
        let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `vc arcetou,  com ${numeroTentativas} ${palavraTentativa}`;
        exibirTextoTela('h1', mensagem)
        exibirTextoTela('p', 'Boa!');
        // essa é a forma de selecionar um algo pelo id e depois remover o atributo do mesmo
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoTela('p', 'o numero secreto é menor');
        } else {
            exibirTextoTela('p', 'numero secreto é maior');
        }
        numeroTentativas++;
        limparCampo();
    }    
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeElementosNaLista = lisaDeNumeorosSOrteados.length;
    // a  maioria das linguagens ja existe um metodo para verificar se esta na lista ou não
    if (lisaDeNumeorosSOrteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        lisaDeNumeorosSOrteados.push(numeroEscolhido);
        console.log(lisaDeNumeorosSOrteados)
        return numeroEscolhido
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    numeroTentativas = 1;
    exibirTextoTela('h1', 'JOgo secreto');
    exibirTextoTela('p', 'Escolha um numero de 1 a 10');
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

console.log(lisaDeNumeorosSOrteados)