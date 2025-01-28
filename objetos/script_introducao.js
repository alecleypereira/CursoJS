// Introdução ao objeto
// Podemos pensar em um objeto como um array porem voce tem que nomear os indices agora chamados de propriedades.

// Um objeto e declarado entre chaves e seus elementos sao chamados de propriedades


let carro = {
    marca:'VW' ,
    preco:1000,
    andar: function(){
        return console.log('andou'.toUpperCase)
    }
}

// Para acessar a propriedade usamos o ponto '.' para chegar na propriedade

//console.log(carro)

console.log(carro.andar())
