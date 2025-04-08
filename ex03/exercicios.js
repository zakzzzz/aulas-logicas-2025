const prompt = require('prompt-sync')();



console.log("bem vindo ao curso de JavaScript")
console.log("estou aprendendo a usar JavaScript")
console.log(15 + 25)
console.log(100 - 45)
console.log(12 * 7)
console.log(144 / 12)
console.log(20 % 3)
console.log(2 ** 5)
//crie 3 variáveis já atribuindo valores a ela e exiba no console as variáveis para vermos os conteúdos delas
//nomeAluno
//altura
//escola
//ano
let nomeAluno = "isac"
let altura = 1.72
let escola = "sesi andradina"
let ano = "2a"
console.log(nomeAluno, altura, escola, ano)
console.log("nomeAluno, altura, escola, ano")


//crie as seguintes variáveis
//nomeProfessor armazena o nome de um professor
//matéria que o professor leciona
//anoIngresso armazena o ano em que o professor ingressou na escola
let nomeProfessor = "Ricardo"
let matéria = "curso senai"
let anoIngresso = 2022
console.log(`o professor ${nome do professor}que leciona a materia ${materia}no ano de ${anoIngresso
}`)


//usando os ex anteriores de base, agora precisamos que o usuario digite
//  pelo prompt a informaçao, converta para inteiro o ano e a altura para float

nomeAluno = prompt ("qual seu nome?")
altura = prompt ("qual sua altura?")
escola = prompt ("qual escola voce estuda?")
ano = prompt ("que ano voce está?") 

//reatribuindo valores as nossas variaveis
nomeAluno = prompt(`digite o nome do aluno`)
altura = parseFloat(prompt("digite a altura"))
escola = prompt("digite o nome da escola")
ano = perseInt(prompt("digite o ano da turma"))
console.log(`a aluna ${nomeAluno}tem altu`)


