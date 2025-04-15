//crie uma lista com os meses e imprima somente os que começam com a letra j
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let letra = "J"
for(let mes of meses){
    if(mes.includes(letra)){
        console.log(mes)
    }
}