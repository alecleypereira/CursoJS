let vocabulario = [
    'gangue',
    'Preto',
    'historia',
    'dormitorio',
    'Lixao',
    'Diamante',
    'suga',
    'Orangotango', 
    'Alagoas' 
]

const min_6 = vocabulario.filter(function(palavra,indice,array){
        return palavra.length >= 6
})
console.log(min_6)