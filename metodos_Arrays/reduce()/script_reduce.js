/**/

const rockets = [
    { Country:"Russia" , Launches:32} ,
    { Country:"US" , Launches:23} ,
    { Country:"China" , Launches:16} , 
    { Country:"Europe" , Launches:7} ,
    { Country:"India" , Launches:4} ,
    { Country:"Japan" , Launches:3}
]

let totalLaunches = rockets.reduce( function(valorAnterior, valorAtual) {
    return valorAnterior + valorAtual.Launches
},0 )
console.log( totalLaunches )