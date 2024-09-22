
//forEach array simples

//let pessoas = ['Joao', 'Maria', 'Jose']
//pessoas.forEach((pessoa,indice,arrayCompleto) => {
   // console.log(pessoa, indice, arrayCompleto)
//})

let produtos = [
    {produto:'Televisão', preco: 2500, porcentagemComDesc:0.15},
    {produto:'Notebook', preco:2700, porcentagemComDesc:0.30},
    {produto:'Maquina de Lavar', preco:1800, porcentagemComDesc:0.20}
]
produtos.forEach((mercadoria, indice, array) => {
    let Desconto = mercadoria.preco * mercadoria.porcentagemComDesc
    let valorFinal = mercadoria.preco - Desconto
    mercadoria.precoComDesconto = valorFinal
    console.log(mercadoria)
    
})


