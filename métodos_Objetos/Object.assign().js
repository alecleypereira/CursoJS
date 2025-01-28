// O Object.assign() adiciona as pripriedades de um objeto a outro objeto

const obj1 = {a:1}
const obj2 = {b:2}
const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3) // {a:1, b:2}

//vai funcionar com ou sem o objeto vazio no comeco.
// A forma que o Object.assign() funciona faz o ultimo objeto escrito nele passar suas propriedades para o anterior, isso acontece ate chegar no primeiro que passar todas as propriedades acumuladas pra onde voce quer.
// Porem o primeiro objeto tambem fica com as propriedas entao se voce nao colocar um objeto vazio primeiro, o objeto com certas propriedades ficara com todas e voce pode nao querer isso. EX:


let pessoa = {nome:'joao'}
let velho = {idade:80}
//let joao = {} // nao e relevante declarar ela antes 
let joao = Object.assign( pessoa, velho)
//console.log(joao)
//console.log(pessoa.idade)

//Nesse caso pessoa e o primeiro objeto a ser colocado, isso faz com que ele tenha todos as propriedades dos anteriores a ele, nesse caso o 'velho'.

// se mais de um objeto tiver uma propriedade com o mesmo nome, a prioridade  do valor que vai ser sobre escrito sera do ultimo com essa propriedade. EX:

let  carro = {velocidade_max:290.00, fabricacao:1990}
let  carro2 = {velocidade_max:290.00, fabricacao:2000}
let  carro_novo = Object.assign({}, carro, carro2)
 //carro2.fabricacao vai sobre escrever carro.fabricacao
 //console.log(Object.entries(carro_novo))
 console.log(carro_novo)
 
