const prompt = require('prompt-sync')()

//criando nossa primeira função
function Cabecalho(texto){
    console.log("--------------------------")
    console.log(texto)
    console.log("--------------------------")
}

function Saudacao(){
    let nome = prompt('digite seu nome: ')
    console.log(`${nome} tenha um bom dia `)
}

//chamando a função
Cabecalho('SESI/SENAI')
let escola = "SESI 025"
Cabecalho(escola)
Saudacao()


//criei a função soma que ira receber dois valores, como parametro a partir desses valores, realizara o calculo e mostrara o resultado
function Soma(n1, n2){
    let resultado = n1 + n2 
    console.log(resultado)
}
Soma(5,6)
Soma(8,9)
Soma(8,10)

//exercicio, crie uma função com o nome ParImpar que receba por parametro
//  um numero e verifique se esse numero é par ou impar
//chame essa função por 2 vezes com numeros diferentes

function ParImpar(nmr){
    if(nmr % 2 == 0)
        console.log("é par")
    else{
        console.log("é impar")
    }
}
ParImpar(4)
ParImpar(5)

//exercicio, descobrir valor de uma media
function Media(n1,n2){
    let resultado = (n1 + n2) / 2
    return(resultado)
}

console.log(Media(6,8))
let valor = Media(9,7)
console.log(valor)
ParImpar(valor)