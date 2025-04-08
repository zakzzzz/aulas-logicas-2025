const prompt = require('prompt-sync')()

//ler duas notas

let nota = Number(prompt('Qual sua nota? '))
let nota2 = Number(prompt('Qual sua nota? '))

let media = (nota + nota2) / 2;

if(media >= 7){
 console.log("Você foi aprovado")
}else{
    console.log ("voce foi reprovado")
}