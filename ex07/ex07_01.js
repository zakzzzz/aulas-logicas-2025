
let filmes = ['Clube da Luta', 'Premonição', 'Vingadores Ultimato', 'Planeta dos Macacos', 'Homem Aranha', 'Transformers 4', 'Sem dor, Sem ganho']
console.log(filmes[0])
console.log(filmes[3])

filmes[6] = "Exterminador do Futuro"
console.log(filmes)

filmes.splice(4,0, 'Homem Aranha')
console.log(filmes)

filmes[filmes.lenght - 1] = "Homem Aranha"
console.log(filmes)

filmes.push("Homem de Ferro")
console.log(filmes)
filmes = [...filmes, "Homem de Ferro"]
console.log(filmes)

filmes.shift()
filmes.pop()

console.log(filmes.splice(0, 3))
console.log(filmes)
