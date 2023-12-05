let listaDeNumerosSorteados = [];
let limite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial () {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100:');
}

mensagemInicial();

function verificarChute()  {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor que ' +chute);
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior que ' +chute);
        }
        tentativa++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limite + 1);
    let tamanho = listaDeNumerosSorteados.length;
    if (tamanho == limite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// desafio 

// let listaGenerica = [];
// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
// console.log(linguagensDeProgramacao);
// linguagensDeProgramacao.push('Java');
// linguagensDeProgramacao.push('Ruby');
// linguagensDeProgramacao.push('GoLang');
// console.log(linguagensDeProgramacao);
// console.log(linguagensDeProgramacao[0]);
// console.log(linguagensDeProgramacao[1]);
// console.log(linguagensDeProgramacao[2]);

// function areaPerimetro (raio) {
//     let pi = 3.14;
//     let area = pi * (raio * raio);
//     let perimetro = 2 * pi * raio;
//     console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//     console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
// }

// areaPerimetro(4);

// function calcularAreaPerimetroSalaRetangular(altura, largura) {
//     let area = altura * largura;
//     let perimetro = 2 * (altura + largura);
    
//     console.log(`Área da sala: ${area} metros quadrados`);
//     console.log(`Perímetro da sala: ${perimetro} metros`);
//   }
  
//   // Exemplo de uso
//   let altura = 3; // em metros
//   let largura = 5; // em metros
//   calcularAreaPerimetroSalaRetangular(altura, largura);

//   function exibeTabuada(numero) {
//     for (let i=0; i<=10; i++) {
//         let result = numero * i;
//         console.log(`${numero} x ${i} = ${result}`);
//     }
//   }

//   exibeTabuada(10);