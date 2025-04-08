const prompt = require('prompt-sync')()

let nota1 = Number(prompt(`digite a primeira nota `))
let nota2 = Number(prompt(`digite a segunda nota `))
let media = (nota1 + nota2) / 2

switch(true){
    case media > 7:
    console.log('aprovado')
    break
    case media > 5 && media <= 7:
    console.log(`recuperação`)
    break
    case media <= 5:
    console.log('aprovado')
    default:
        console.log (`invalido`)
}