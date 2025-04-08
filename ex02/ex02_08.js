const prompt = require('prompt-sync')()

// quanto o vendedor fez no mes

let venda = Number(prompt(' digite o total de vendas no mes'))

if(vendas > 5000){
    let comissao = vendas * 0.05
    console.log(`a comissao para o mes é de ${comissao}`)
}else{
    let comissao = vendas * 0.03
    console.log(`a comissao para o mes é de ${comissao}`)
}