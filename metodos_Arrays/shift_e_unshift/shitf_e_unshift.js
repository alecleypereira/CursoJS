//Método shift() remove o primeiro elemento de um array e
//Realoca (atribui uma nova localização aos elementos)

let frutas = ['Banana', 'Maça', 'Laranja', 'Caju', 'Acerola']

let frutaN1 = frutas.shift()
console.log(frutaN1)
console.log(frutas)

//Método unshift() vai adicionar um novo elemento no comeco do seu array

let pessoas = ['Bruno', 'Alecley', 'Cleiton', 'ana']

let ultimaP = pessoas.unshift('Jose')
console.log(ultimaP)
console.log(pessoas)