//METODO SORT() serve para ordenar arrays
//tem 2 parametros na sua funcao callback e os compara se der negativo ele mantem a ordem se der positivo ele troca os valores se der zero mantem a ordem. ex:
let numbers = [5,8,2,4,3,9,10,7]
//ordem crecente
let orden = numbers.sort((a,b) => a - b) 
console.log(orden)

//ORDENACAO EM STRINGS
//voce pode usar a funcao 'localeCompare' para compara strings essa funcao compara duas strings de acordo com as regras do idioma, retornando um valor +, - ou nulo. ex:

let names = ['Ana', 'Álex', 'Max', 'Victor', 'Luana']
orden = names.sort((a,b) => a.localeCompare(b))
console.log(names)