// Cria o vetor
let num = [5, 2, 8, 9, 3]

/* Cria novo indici e adiciona o novo valor
    num.push(1)

//Ordena crecentemente o vetor
    num.sort()

//Escreve os valores do vetor visualmente com colchetes`[]`
    console.log(num)

//Ver o tamanho do vetor
    console.log(`Nosso vetor tem ${num.length} posicoes`)

//Especifica o indice que voce quer mostra
    console.log(`O primeiro valor do vetor é ${num[0]}`)


// cria estrutura para exibir os valores do vetor sem visualmente sem conchetes`[]`
    for(let pos = 0 ; pos <  num.length ; pos++){
        console.log(`No indice ${pos} temos o valor ${num[pos]}`)
}*/
// forma mais simplificada
for(let pos in num) {
    console.log(num[pos])
}
console.log(`o valor 5 esta no indeci ${num.indexOf(5)}`)