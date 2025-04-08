// declarando valores novos
// reconheço que é um vetor pelo uso dos colchetes

let listaVazia = []
console.log(listaVazia)
// Declarar uma lista de números
let numeros = [1,2,3,4,5,6]
console.log(numeros)
console.log(numeros[2])
// Declaração de uma lista de strings
let nomes = ["Ana", "João", "Maria"]
console.log(nomes)

// Declaração de uma lista mista
let listaMista = [1, "dois", true, 2.5]
console.log(listaMista)

let listaComLista = [
    ["coca-cola", "Cachorro-Quente"],
    [5.0, 10.0]
]
console.log(listaComLista)
// Alterando valores da lista
let frutas = ['Maça', 'Pera', 'Uva', 'Abacaxi']
console.log(frutas)
frutas.push('Laranja')
console.log(frutas)
// O spread adciona um novo elemento no vetor
frutas = [...frutas, 'Banana']
console.log(frutas)

frutas.splice(2, 0, 'Morango')
console.log(frutas)

//excluindo itens da lista

frutas.splice(3,1) //excluindo item pelo indice
console.log(frutas)
frutas.shift() ///excluindo primeiro item da lista
frutas.pop() //excluir ultimo item da lista
console.log(frutas)

//acessar os itens da lista
console.log(frutas(3)); // acesso a partir uma posição
console.log(frutas.slice(0,4)) /// posição 0 ate 4
console.log(frutas.slice(1)) // a partir da posi 1
console.log(frutas.slice(-1)) // mostra os itens do
console.log(frutas.length); // total de itens da lista

//ordenar itens da lista
console.log(frutas)
frutas.sort()// ordenar a lista em ordem crescente
console.log(frutas)
frutas.reverse()//ordenando de forma decrescente
console.log(frutas);
