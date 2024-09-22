let grupo = [
    {id:12, name:"Frederico", age:8},
    {id:47, name:"Francisca", age:7},
    {id:77, name:"Ramon", age:48},
    {id:85, name:"Zenom", age:52}
]
//Verifica se todos do grupo sao maiores de idade
let requisito = grupo.every(function(elemento){
    return elemento.age >= 18 
})
console.log(requisito)