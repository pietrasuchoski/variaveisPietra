const prompt = require('prompt-sync')
  const entrada = prompt('');

const nomeCompleto = "Pietra V S da Silva";
const anoNascimento = 2006;
let anoAtual = 2024;
let idade = 18;
const anoFormatura = 2029;

console.log("olá eu sou " +  nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " anos " + " e nasci no ano de " + anoNascimento);

idade = idade + 1;
anoAtual = anoAtual + 1;
console.log("Eu vou fazer " + idade + " anos, ano que vem, em " + anoAtual + ". Quero cursar Direito, e pretendo me formar em " + anoFormatura);


//Agência de viagens Hawaii Paris China Russia Cuba
console.log(" ");
console.log("______________________________");
console.log("|     agencia de viagens      |");
console.log("-------------------------------");
console.log(" ");
const listaDeDestinos = new Array(
  "hawaii",
  "russia",
  "china",
  "Paris",
  "cuba"
);

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel Vivida");
console.log(listaDeDestinos);
listaDeDestinos.push("Campo Mourão");
console.log*(listaDeDestinos);
listaDeDestinos.push("Ponta grossa");
console.log(listaDeDestinos);
listaDeDestinos.push("Cabo Frio");
console.log(listaDeDestinos);


const loginCerto = "pietra";
const senhaCerta = 1305;
var login = entrada("Digite seu login: ");
var senha = entrada("Digite sua senha: ");
while(login != loginCerto || senha != senhaCerta){
  console.log("Login ou senhas incorretas");
   login = entrada("Qual é o seu login");  
  senha = entrada("Qual é a sua senha?");
}

var nomeComprador = entrada("Qual seu nome?");  
var idadeComprador = entrada("Qual sua idade?");
if(idadeComprador >= 18) {
  console.log("Ola Senhor(a) " + nomeComprador)
  console.log("Comprador maior de idade");
  console.log("Destinos disṕniveis: " + listaDeDestinos);
}
if(idadeComprador <= 18)
console.log("O senhor(a)não é maior de idade")

var contador= 0;
while(contador <9){
console.log(listaDeDestinos[contador]);  
  contador++;


}
var destino = entrada("Digite um numero que corresponde ao destino(0-8)");
console.log(`destino selecionado: ${listaDeDestinos[destino]}`);





























