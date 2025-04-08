const prompt = require('prompt-sync')()

let mes = (prompt('digite o nome do mes '))

switch(mes){
    case "Janeiro":
    case "Março":
    case "Aaio":
    case "Julho":
    case "Agosto":
    case "Outubro":
    case "Dezembro":
    console.log (`${mes} tem 31 dias`)
    break
    case "Abril":
    case "Junho":
    case "Setembro":
    case "Novembro":
    console.log (`${mes} tem 30 dias`)
    break
    case "Fevereiro":
    console.log (`${mes} tem 29 dias`)
    break
    default:
    console.log("mes inválido")
}
