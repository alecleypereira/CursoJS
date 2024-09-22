//testando metodo map() de arrays.

/*map server para  aplicar funções em cada valor de um array e pegar todos esses valores mudados e criar uma nova array*/

/*para isso voce cria uma funcao dentro do map e nessa função voce vai criar um parametro onde esse parametro sera considerado o valor do indice do array que voce mudara*/

//o map faz isso para cada indice do array automaticamente

//EX:
let numeros = [1, 2, 3, 4, 5]

// Usando map para criar um novo array com o quadrado de cada número
const quadrados = numeros.map(function(x) {
  return x * x // Calcula o quadrado do número
})

console.log(quadrados); // [1, 4, 9, 16, 25]

// podemos tambem declara a funcao antes e apenas a citar no map para ele ir ate ela 
/*ex function aoQ (x) {
  return x * x // Calcula o quadrado do número
}
  const quadrados = numeros.map(aoQ) */

