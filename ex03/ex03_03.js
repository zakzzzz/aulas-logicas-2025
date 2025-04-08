const prompt = require('prompt-sync')()

let mes = prompt("digite um mes")
if(mes == "fevereiro"){
    console.log(`esse mes tem 28 dias`)
}
if(mes == "março"){
    console.log(`esse mes tem 31 dias`)
}