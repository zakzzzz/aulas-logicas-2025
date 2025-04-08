//importando a biblioteca para entrada de dados
const prompt = require('prompt-sync')();


//variaveis constante
//passo 1: receber o nome da pessoa
//passo 2: receber a idade da pessoa
//passo 3: receber o peso da pessoa
//passo 4: exibir o nome, a idade e peso
let nome = "isac" ;
let idade = 16 ;
let peso = 68.3
console.log(nome, idade, peso);
//receber e armazenar o texto em uma variavel
let         curso        =          "desenvolvimento de sistemas"
//#tipo     nome       recebe       valor   da variavel

//exibir o valor armazenado
console.log ("curso") //imprimo uma string (texto)
console.log (curso) //imprimi o valor que esta dentro da variavel
console.log ("curso", curso)

//criando e atribuindo valor a outras variaveis
let idade2 = 16 // valor do tipo int
let temperatura = 23.5 //valor do tipo float
let nome2 = "lionel"

console.log("ola", nome2, "você tem", idade2, "e hoje esta fazendo", temperatura, "ºC")

//usando template string
console.log(`ola ${nome2}, voce tem ${idade2} e hoje está fazendo: ${temperatura}ºc`)

let chovendo = false; 
let dia = true;
// as constantes não podem ser reatribuidas novos valores
const PI = 3.1415;
console.log(PI)

//utilizando prompt para receber dados
//entrada de dados
//no prompt sempre recebemos uma string
nome = prompt(`qual seu nome?`)
//usando o parsefloat converte os valores recebidos
//que vem como string para int ou float
idade = prompt(`qual sua idade?`)
peso = parseFloat(prompt(`qual seu peso?`))

console.log(`seu nome é ${nome}, voce tem ${idade} e pesa ${peso}`)
//valida o tipo de variavel
console.log(typeof(idade))
console.log(typeof(peso))
//apos a conversao dos valores é possivel realizar
//calculos matematicos
console.log(idade + peso)

//exemplo criado por mim
let puxada = 73
puxada = prompt (`quanto voce faz na puxada?`)
console.log("voce faz puxada com 73 kilos")


