alert('Boas vindas ao jogo do número secreto'); //aparecerá na tela do usuário
let numeroMaximo = 5000; // usado para "guardar" uma variável
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
//Math.random() -> cria um número grande com várias casas decimais como: 0.485961235547005
//n(Math.random()) * 10 -> elimina a vírgula e os números em diante e pega apenas o número inteiro
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break; //fará com que saia do loop e parta para o alerta de acerto do usuário
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }