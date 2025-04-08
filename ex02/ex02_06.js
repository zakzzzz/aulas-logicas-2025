const prompt = require('prompt-sync')()

let numero1 = Number(prompt("digite o numero "))
let numero2 = Number(prompt("digite o numero "))

if(numero1 == numero2){
    console.log ("os numeros são iguais")
}else{
    console.log("os numeros sao diferentes ")
}