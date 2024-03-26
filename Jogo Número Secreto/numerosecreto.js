alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute = prompt("Escolha um número de 0 à 10");

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
  alert("Isso aí! Você descobriu o número secreto (4)");
} else {
  alert("Você errou :(");
}
