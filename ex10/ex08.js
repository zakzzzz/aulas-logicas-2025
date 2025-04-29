const prompt = require("prompt-sync")()

let nmr = Number(prompt(`digite um numero`))
if(nmr >= 0){
    console.log('seu numero é positivo')
}else{
    console.log("seu numero é negativo")
}