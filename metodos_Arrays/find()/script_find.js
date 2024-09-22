const pizzas = [
    'mussarela' ,
    'calabresa' ,
    'portuguesa' ,
    'margarita'
]
//startWith igual a primeira letra
const foundPizza = pizzas.find((P => P.startsWith( 'm' )))
console.log(foundPizza)