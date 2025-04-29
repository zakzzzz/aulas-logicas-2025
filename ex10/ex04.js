const prompt = require("prompt-sync")()

let salarioHora = Number(prompt(`digite um numero`))
let dia = Number(prompt(`digite um numero`))
let salario = salarioHora * dia
console.log(`voce ganha ${salarioHora} * ${dia} ${salario} por mes`)

