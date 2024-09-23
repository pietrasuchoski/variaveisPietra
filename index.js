const prompt = require('prompt-sync');
const entrada = prompt();

let idade = 28;
const anoNascimento = 1995;
let anoAtual = 2024
const nomeCompleto= "Lucas Stasiak";

console.log("Meu nome é "  + nomeCompleto + " nascido no ano de" + anoNascimento + " e no ano atual" + anoAtual + " completo" + idade + " anos");

anoAtual = anoAtual + 1;
console.log(anoAtual);

idade = idade + 1;
console.log(idade);


//Agencia e viagens Hawaii Paris Nova York Rio de Janeiro Tokyo
const listaDeDestinos = new Array(
  "Hawaii",
  " Paris",
  " Nova York",
  " Rio de Janeiro",
  " Toquio"
);

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push( " Coronel Vivida");
listaDeDestinos.push(" Curitiba");
listaDeDestinos.push(" Rio Branco");
listaDeDestinos.push(" Berlin");
console.log(listaDeDestinos);

var nomeComprador = entrada("Digite seu nome:");
var idadeComprador = entrada("qual a sua idade?");

if( idadeComprador >= 18) {
  console.log("Olá senhor(a)" + nomeComprador);
  console.log("Comprador maior de idade");
  console.log(" Escolha seu destino");
  
  var contador = 1;

  while(contador <9){
    console.log(listaDeDestinos[contador]);  
    contador++;
  } 
  var destino = entrada(" digite o numero que ao destino selecionado (0-8)");
  console(' destino selecionado foi:'
  $(litaDeDestinos[destino]});
  } else {
  console.log("Olá senhor(a)" + nomeComprador);
  console.log(" Nao foi possivel finalizar a compra");
  console.log(" voce é menor de idade");
}



























