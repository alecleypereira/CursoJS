const frutas = [
    {nome:'jaca' , quantidade:2},
    {nome:'banana' , quantidade:0},
    {nome:'cereja' , quantidade:5}
]
//

const buscarF = frutas.find(function(f){
    return f.nome === 'cereja'
})
console.log(buscarF)