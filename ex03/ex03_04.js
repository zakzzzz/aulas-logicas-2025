const prompt = require('prompt-sync')()

let nota1 = Number(prompt("digite uma nota"))
let nota2 = Number(prompt("digite uma nota"))

let media = (nota1 + nota2) / 2
if(media <= 7){
    console.log(`voce foi aprovado`)
}
if(media >= 5){
    console.log(`voce foi reprovado`)
}
if (media <= 7){
    console.log (`voce foi arpovado`)
}