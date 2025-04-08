const prompt = require('prompt-sync')()

//ano de nascimento
let anoNasc = perseInt(prompt(`digite o ano do nascimento `))
//veja se e maior ou menor de idade
if((anoNasc - 2025) >= 18){
    console.log('voce é maior de idqade ')
}else{
    console.log('voce é menor de idade')
}