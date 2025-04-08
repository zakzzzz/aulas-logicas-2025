const prompt = require('prompt-sync')()

let altura = Number(prompt("digite sua altura"))
let peso = Number(prompt("digite sua peso"))
let imc = peso / (altura * 2)
if(imc < 18.5){
    console.log(`abaixo do peso ideal`)
}if (imc >= 18.5 && imc < 25){
    console.log(`peso ideal`)
}if (imc >= 25 && imc < 30){
    console.log(`sobrepeso`)
}else{
    console.log(`obesidade`)
}

//verificar se o triangulo é equilatero ou escaleno (&&)
// receber o lado 1
let lado1 = Number (prompt(`digite o valor do lado 1`))
let lado2 = Number (prompt(`digite o valor do lado 2`))
let lado3 = Number (prompt(`digite o valor do lado 3`))

//verificar se o triangulo é equilatero caso tenha os lados iguais 
let eq = (lado1 == lado2) && (lado2 == lado3)
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)

if((lado1 == lado2) && (lado2 = lado3)){
    console.log (`o triangulo é equilatero`)
}
if((lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)){
    console.log (`o triangulo é escaleno`)
}else{
    console.log (`triangulo isóceles`)
}

//descobrir a quantidade de horas trabalhadas


let horas = Number (prompt(`total de horas trabalhadas: `))
let vendas = Number (prompt(`total de vendas: `))

//validar se uma das condições foi atendida (+ de 5000 em vendas ou + de 40 horas trabalhadas)

if(vendas > 5000 || horas > 40){
    console.log(`tem direito ao bonus`)
}
else{
    console.log(`nao tem o direito ao bonus`)
}
// crie um algoritmo que recebe um caractere e verifique se ele é uma vogal ou uma consoante

let letra1 = prompt(`digite uma letra`)

if((letra1 == "a") ||(letra1 == "e") || (letra1 == "i") || (letra1 == "o") || (letra1 == "u")){
    console.log (`essa letra é uma vogal`)
}
else{
    console.log (`essa letra é uma consoante`)
}


// "e" significa &&
// "ou" significa ||