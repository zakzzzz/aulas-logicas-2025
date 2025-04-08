
//receber a velocidade do carro e a mukta
const prompt = require('prompt-sync')()

let velocidade = Number(prompt("digite a velocidade "))
 if(velocidade > 80){
    console.log("voce foi multado")
    let multa = (velocidade - 80) * 7;
    console.log(`o valor da multa é ${multa}`)

}



 // somente condiçao de if
 