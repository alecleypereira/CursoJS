//O for in funciona em objetos nao iteraveis (objetos normais e arrys) e ele serve para iterar com as chaves, valores e seu objeto.

//sintaxe: 

let pessoa = {nome:'Rosangela', idade:33}

for (chave in pessoa){
    console.log(chave + ': ' + pessoa[chave]) // Para acessar a propriedade n se usa ponto nesse caso se usa colchetes.
}
// a palavra chave é configuravel, apenas a o nome do objeto não.
