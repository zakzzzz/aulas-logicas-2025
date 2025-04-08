const prompt = require('prompt-sync')()

let idade = 0
let sexo
let mediaH
let qtdH
let mediaF
let qtdF

for(let i = 0; 1 < 10; i++){
    idade = Number(prompt(`digite sua idade: `))
    sexo = prompt(`digite o sexo: (m ou f) `).toUpperCase()

    if(sexo == 'M'){
        mediaH += idade
        qtdr++
    }else{
    mediaF += idade
    qtdr++
    }
    
} console.log(`a media de idade dos homens ${mediaH / qtdH}`)
console.log(`a media de idade dos homens ${mediaF / qtdF}`)