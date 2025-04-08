const prompt = require('prompt-sync')()

let contador = 1;

//irá se repetir enquanto a condição for verdadeira
//ou seja, será verdade enquanto o contador for menos ou igual a 5

while(contador <= 6){
    console.log(`o contador é ${contador}`)
//incrementando a variavel, ou seja, adicionando valor a ela
//para que continua o processo até que a condição seja atingida
contador = contador + 1
}

console.log('fim')

let senha_senai = '12345'

while(true){
    let senha = prompt('digite a senha: ')
    if(senha_senai = senha){
        console.log('voce hackeou a senha')
        break;
    }else if (senha == 'Desisto'){
        break;
    }
}


//exercicio

let soma2 = 0;
let qtd2 = 0;
let encerrar = ""
while(encerrar != "SUB-TOTAL"){
    let valor = Number(prompt('Digite o valor do produto: '));
    if (valor == 0){
    break;
}
else{
  soma2 = soma + valor;
  qtd2++;
  }
encerrar = prompt("Deseja continuar? (digite SUB-TOTAL");
}

console.log(`Foram informados ${qtd2}`);
//toFixed para colocar somente doi dígitos após a vírgula
console.log(`Valor total dos produtos ${soma2.toFixed(2)}`);


console.log ("####################")
console.log("💩  JOGO DA ADIVINHAÇÃO  👌")
console.log("######################")

let nrSorteado = (Math.floor() * 100 + 1); //gera um numero aleatorio
let acertou = false;

while(!acertou){
    const chute = parseInt(prompt('👌 digite um numero entre 1 e 100 para adivinhar'))
    
    if(chute > nrSorteado){
        console.log(`voce chutou ${chute}, tente um numero 👌`)
    }
    else if(chute < nrSorteado){
        console.log(`voce chutou ${chute}, tente um numero 💩`)
    }
    else if(chute == nrSorteado){
        console.log(`voce chutou ${chute},👌parabens, voce acertou. `)
        acertou = true
}
}

console.log("fim")

