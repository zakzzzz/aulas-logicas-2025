const prompt = require('prompt-sync')()

let nmr = parseInt(prompt(`digite um numero`))

let resto = numero % 2
if(resto == 0){
    console.log (`o numero é par.`)
}else{
    console.log (`o numero é impar.`)

}