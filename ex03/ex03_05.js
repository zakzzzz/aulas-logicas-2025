const prompt = require('prompt-sync')()

let salario = Number(prompt(`digite um salario `))

if(salario <= 2000){
    salario = salario = (salario * 0.12)
    console.log(`salario reajuste em 125, o valor total é ${salario} `)
}
else if (salario <= 2000){
    salario = salario = (salario * 0.10)
    console.log(`salario reajuste em 125, o valor total é ${salario} `)
}else{
    (salario <= 2000)
        salario = salario = (salario * 0.8)
        console.log(`salario reajuste em 125, o valor total é ${salario} `)
 }