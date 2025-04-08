// faça um programa que receba um numero
// e mostre seu fatorial. ex :
const prompt = require('prompt-synv')();

let numero  = parseInt(prompt( 'digite um numero: '))

let fatorial = 1
let i = numero;
let sequencia = numero + '! = ' //concatenando valores

while(i >= 1){
    fatorial = fatorial * contador
    sequencia = sequencia + i
    if(i > 1){
        sequencia = sequencia + ' * '
    }
    i-- // decrementando contador
}

sequencia = sequencia + ' * ' + fatorial
console.log(sequencia)
