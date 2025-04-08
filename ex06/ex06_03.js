// receba 5 numeros e veja a soma
// qtd de todos os impares e pares digitados

const prompt = require('prompt-sync')()


somaPar = 0;
somaImpar = 0;
qtdPar = 0;
qtdImpar = 0;

for(let i = 0; i <= 5; i++){
    entrada = console.log(Number(prompt('digite um numero: ')))
    if(entrada % 2 == 0){
        somaPar += entrada 
        qtdPar++
    }
    else{
        somaImpar += entrada
        qtdImpar++
    }
}

console.log(`a soma de ${qtdPar} é ${somaPar}`)
console.log(`a soma de ${qtdImpar} é ${somaImpar}`) 