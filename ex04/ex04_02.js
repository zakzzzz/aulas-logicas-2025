const prompt = require('prompt-sync')()

let anoAtual = Number(prompt(`digite o ano atual `))
let anoNasc = Number(prompt(`digite o ano de nascimento `))
let idade = anoAtual - anoNasc

switch(true){
    case idade < 10:
    console.log(`voce é criança`)
    break;
    case idade < 10:
    console.log(`voce é criança`)
    break;
    case idade >= 11 && idade <= 17:
    console.log(`voce é adolescente`)
    break;
    case idade >= 18 && idade <= 50:
    console.log(`voce é adulto`)
    break;
    case idade >= 60:
    console.log(`voce é idoso`)
    default:
        console.log('numero invalido')
}