const pessoas = [2,57,7,5,276,3567,343,8,9,10]

let pares = pessoas.filter(function(valor, endereco, lista){
    return valor % 2 === 0
})

console.log(pares)