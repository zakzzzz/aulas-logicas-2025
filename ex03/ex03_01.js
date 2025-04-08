const prompt = require('prompt-sync')()

let numero = Number(prompt(`digite 7 numeros`))

if(numero == "1"){
    console.log(`esse numero equivale a domingo`)
}
else if(numero == "2"){
    console.log(`esse numero equivale a segunda`)
}
else if(numero == "3"){
    console.log(`esse numero equivale a terça`)
}
else if(numero == "4"){
    console.log(`esse numero equivale a quarta`)
}
else if(numero == "5"){
    console.log(`esse numero equivale a quinta`)
}
else if(numero == "6"){
    console.log(`esse numero equivale a sexta`)
}
else if(numero == "7"){
    console.log(`esse numero equivale a sábado`)
}