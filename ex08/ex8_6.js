//receba uma palavra do usuario e calcule quantas vogais ha nessa palavra

const prompt = require('prompt-sync')()
let vogais = ["a", "e", "i", "o", "U"]
let palavra = prompt("digite uma palavra ")
let qtdVogais = 0
for(let letra of palavra){
    if(vogais.includes(letra)){
        qtdVogais++
    }
}
console.log(`${palavra} tem ${qtdVogais} vogais`)