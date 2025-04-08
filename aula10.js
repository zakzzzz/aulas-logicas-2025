const prompt = require('prompt-sync')();

//estrutura condicional aplicada

let idade = Number(prompt(`digite sua idade `))

if (idade >= 18 && idade <= 70){
    console.log(`voto obrigatório `)
}
else{
    if (idade < 16){
   console.log(`voce não pode votar `)
}else{
    if(idade >= 16 || idade > 70){
    console.log(`idade facultativa`)
    }else


//switch case

//estrutura de controle de fluxo para tomar decisoes com fase no valor de uma variável


let n1 = Number(prompt('digite o primeiro numero '))
let n2 = Number(prompt('digite o segundo numero '))
let op = prompt('escolha a operação (+, -, *, /, **')

//testa o valor da variavel se é true

switch(op){
    case '+':
        console.log (`resultado: ${n1 + n2}`)
        break
    case '-':
        console.log (`resultado: ${n1 - n2}`)
        break
    case '*':
        console.log(`resultado ${n1 * n2}`)
        break
    case '/':
    console.log(`resultado ${n1 / n2}`)
        break
    case '**':
        console.log(`resultado ${n1 ** n2}`)
        break
    default:
        console.log(`operação invalida`)
    
    }

//verificar qual letra é igual

let letra = prompt('digite uma letra: ').toUpperCase

switch(letra){
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log(`vogal`)
        break;
    default:
        console.log(`consoante`)

    }

//converter a nota em numero para letra

let nota = parseInt(prompt('digite a nota do aluno'))

switch(true){
    case nota >= 90:
        console.log(`nota A`)
        break;
    case nota >= 80:
        console.log(`nota B`)
        break;
    case nota >= 70:
        console.log(`nota C`)
        break;
    case nota >= 60:
        console.log(`nota D`) 
        break
default:
        console.log(`nota E`)
}