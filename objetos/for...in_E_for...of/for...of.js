//for of serve para se usados em objetos iteraveis(objetos que nao necessita passar por uma propriedade para acessar seus valores).
//Sendo assim ele nao itera sobre a propriedade, e sim sobre o valor e o objeto como o array ou uma string(que pode virar um objeto).

//Sintaxe:

let nomes = ['Alecley', 'Marcos', 'vitor', 'Joao']

for (let valor of nomes){
    console.log(valor)
}

//Ex com string:

const letras = 'Mouse sem fio X'

for(let valor of letras){
    console.log(valor)
    // o for of passa por cada localizacao de largura da string e considera cada uma um valor, e com console.log escreve de um por um.
}

 

