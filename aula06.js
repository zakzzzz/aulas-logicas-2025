const prompt = require("prompt-sync")

//operações com variáveis

console.log (`a soma entre ${nr1} + ${nr2} é igual: ${soma}`);


let subtracao = nr1 - nr2
console.log (`a subtracao entre ${nr1} - ${nr2} é igual:${subtracao}`)
console.log (`a subtracao entre ${nr1} - ${nr2} é igual ${nr1 - nr2}`)

let multiplicacao = nr1 * nr2;
console.log (`a multiplicacao entre ${nr1} * ${nr2} é igual:${multiplicacao}`)
console.log (`a multiplicacao entre ${nr1} * ${nr2} é igual: ${nr1 * nr2}`)

let divisao = nr1 / nr2
console.log (`a divisao entre ${nr1} / ${nr2} é igual: ${divisao}`)
console.log (`a divisao entre ${nr1} / ${nr2} é igual: ${nr1 / nr2}`)


//calculando novo preço do celularc
let valor = Number(prompt(`digite o preço do celular`))
let desconto = Number(prompt("digite o preço do desconto"))
valor = valor - desconto
console.log (`o valor do celular com desconto é R${valor}`)


//exercicio: cakcular o dobro e a metade de X
let numero = Number(prompt(`qual numero voce deseja?`))
let dobro = numero * 2
let metade = numero / 2
console.log (`o dobro de ${numero} é ${dobro} e a metade é ${metade}`)

//definicao de variaveis
let horasDia = Number(prompt("digite a quantidade de horas por dia"))


let dias_totais = 15
let horas_trabalho = horas_por_dia * dias_totais
let custo_hora = 100
let custo_total = horas_trabalho * custo_hora

//exibir o resultado/
console.log (custo_total)
