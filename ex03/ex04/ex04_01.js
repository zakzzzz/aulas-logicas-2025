const prompt = require('prompt-sync')()

let dia = Number(prompt('digite um numero '))

switch(dia){
    case dia = 1:
        console.log(`esse numero equivale a domingo`)
        break
    case dia = 2:
        console.log(`esse numero equivale a segunda`)
        break
    case dia = 3:
        console.log(`esse numero equivale a terça`)
        break
    case dia = 4:
        console.log(`esse numero equivale a domingo`)
        break
    case '4':
        console.log(`esse numero equivale a quarta`)
        break
    case '5':
        console.log(`esse numero equivale a quinta`)
        break
    case '6':
        console.log(`esse numero equivale a sexta`)
        break
    case '7':
        console.log(`esse numero equivale a sábado`)
        break
    default:
        console.log(`invalido`)
}