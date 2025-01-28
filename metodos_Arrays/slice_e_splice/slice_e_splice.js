//Slice serve para pegar copias de certas partes do array sem modificar o original.
let nome = ['alecley0', 'antonio1', 'josefina2', 'arnaldo3', 'bia']

let nome2 = nome.splice(1,2)
                //slice(1,2)
//console.log(nome2)

//Splice serve para remover, adicionar ou modificar elementos do array.
let frutas = ["maçã", "banana", "laranja", "uva"];

// Removendo 2 elementos a partir do índice 1
let removidos = frutas.splice(1, 2)

console.log(frutas);   // ["maçã", "uva"] (modificado)
console.log(removidos); // ["banana", "laranja"] (removidos)
console.log('-------------------------------------------------')

let adicionados = frutas
adicionados.splice( 1,0, 'Tangerina', 'Maracuja') // se voce atribuir um splice ele so vai retorna o que ele removeu então nesse caso ele não retorna nada.
console.log(adicionados)