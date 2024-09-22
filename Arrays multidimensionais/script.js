// Array multidimensional

// Declarando 01

const dados =[[1,2,3], [1,2,3], [1,2,3]]

// 02

let estudante = [['Leo',28], ['Rebeca',25], ['Renata',25]]

//03

/* let estudante01 = [['Leo',28]]
let estudante02 = [['Rebeca',25]]
let estudante03 = [['Renata',25]]

let estudantes = [estudante01, estudantes02, estudantes03]
console.log(estudantes) */

// Mais organizado:

let x = [
    ['Leo',28], 
    ['Rebeca',25], 
    ['Renata',25]
] // Aqui temos um array de 3x2 (3 linhas e 2 colunas)

// Como acessar os valores:
//console.log(estudantes[indice da linha][indice do array da linha])

//console.log(x[0][0]) //vai na linha 1 depois no indice 0 do array dessa linha.

/*
                Coluna01                Coluna02                     
linha1      'leo'    ==> [0][0]         28  ==> [0][1]
linha2      'Rebeca' ==> [1][0]         25  ==> [1][1]
linha3      'Renata' ==> [2][0]         25  ==> [2][1]
*/


