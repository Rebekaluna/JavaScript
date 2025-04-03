dia = prompt('Qual é o dia da semana?');

//converte para minúsculas:
dia = dia.toLocaleLowerCase();

if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}







let number = prompt("Digite um número: ");

if (number < 0) {
	alert ('Este número é negativo');
} else {
	alert('Este número é positivo');
}






pontuacao = 105;
if (pontuacao>-100) {
	console.log('Parabéns, você venceu!'); 
} else {
	console.log('Tente novamente para ganhar.')
}






let saldoConta = 500; //exemplo 
alert(`Seu saldo é de R$${saldoConta}.`)






let nome = prompt('Qual é o seu nome?');
alert(`Boas vindas ${nome}`);





//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número. 
let contador = 1;

while (contador <= 10) {
	console.log(contador);
	contador++;
}




//Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.
let contadoor = 10;

while (contadoor >= 0) {
	console.log(contadoor);
	contadoor--;
}




//Crie um programa de contagem regressiva. Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.
let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}



//Crie um programa de contagem progressiva. Peça um número ao usuario e conte de 0 até esté número, usando um loop while no console do navegador.
let numeroMax = prompt("Digite um número para a contagem progregressiva:");;
let contadur = 0;

while (contadur <= numeroMax) {
    console.log(contadur);
    contadur++
}







