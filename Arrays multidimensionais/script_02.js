// Array tridimencional: É um array de arrays que contem arrays bidimencionais. nomalmente chamamos isso de cubo.

let cubo = [ // Array pai
    [ // profundidade 0 (Z = 0)
        [31, 32, 33], // linha 0
        [31, 32, 33], // linha 1
        [31, 32, 33] //  linha 2
    ],
    [ // profundidade 1 (Z = 1)
        [11, 12, 13], // linha 0
        [11, 12, 13], // linha 1
        [11, 12, 13] //  linha 2
    ],
    [ // profundidade 2 (Z = 2)
        [21, 22, 23], // linha 0
        [21, 22, 23], // linha 1
        [21, 22, 23] //  linha 2
    ]
]
//console.log(cubo)
// podemos continuar criando mais dimencoes repetindo o precesso de aninhar mais os arrays mais isso comeca a ficar menos utilizavel

// Usar metodos em matrizes e cubos pode ser mais complicado que em vetores.
//para acessar todos os elementos de uma matris ou cubo tera que usar estruturas de repeticao como for e while. EX:

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let novaMatriz = []

for(let i = 0; i < matriz.length ; i++) {
    let linhaNova = []

    for(let j = 0 ; j < matriz[i].length ; j++) {
        linhaNova.push(matriz[i][j] * 2)
    }
    novaMatriz.push(linhaNova)
}
console.log(novaMatriz)