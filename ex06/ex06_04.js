// solicite os parametros de inicio, fim e passo
//para o laço de repetição usando uma função for
// e exibe o valor atual da variavel de controla a cada literação

const prompt = require('prompt-sync')()

let inicio = Number(prompt('digite o valor do inicio '))
let fim = Number(prompt('digite o valor do fim '))
let passo = Number(prompt('digite o valor do passo '))

for(inicio; inicio < fim; inicio += passo){
    console.log(`valor inicial ${inicio}`)
    console.log(`valor final ${fim}`)
    console.log(`valor de passos ${passo}`)
    console.log(`=============================`)
}