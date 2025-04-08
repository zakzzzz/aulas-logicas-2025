const prompt = require('prompt-sync')()

let anoAtual = Number(prompt(`digite o ano atual `))
let anoNasc = Number(prompt(`digite o ano de nascimento `))
let idade = anoAtual - anoNasc

if(idade <= 10){
    console.log(`voce é criança`)
}
else if(idade >= 11 && idade <= 17)[
    console.log(`voce é adolescente`)
]
else if(idade >= 18 && idade <= 50){
    console.log(`voce é adulto`)
}
else if(anoNasc >= 60){
    console.log(`voce é idoso`)
}

