const prompt = require('prompt-sync')()
//exibir numero para digitar

let nmr1 = Number (prompt(`digite um numero `))
let nmr2 = Number (prompt(`digite um numero `))

//digite qual é maior e menor.

if(nmr1 > nmr2){
    console.log (`${nmr1} é maior que ${nmr2}`)
}else{
    console.log (`${nmr1} é menor que ${nmr2}`)
}