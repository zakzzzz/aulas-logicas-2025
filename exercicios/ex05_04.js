//faça um programa que leia 10 valores inteiros e enconte  e mostre o maior e menor valor, e calucle a média dos numeros lidos

const prompt = require('prompt-synv')();

let i = 0
let entrada
let maior = 0
let menor1 = Infinity
let soma = 0
while (i <= 10){
    entrada = Number(prompt(`digite um numero: `))
    if (entrada > maior){
    vslor = entrada
    }
    if (entrada < menor){
    menor = entrada
    }

    soma += entrada
    //soma = entrada + soma
    i++
}
let media = soma / 10;
console.log (`maior valor: ${maior}`)
console.log (`menor valor: ${menor}`)
console.log (`media ${media.toFixed(2)}`)