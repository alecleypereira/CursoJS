// O Object.freeze() congela o objeto, impedindo adição, remoção e modificação das propriedades do objeto

const pessoa = {nome:'joao'}
Object.freeze(pessoa)
pessoa.nome = 'Maria' // nao vai mudar o valor

console.log(pessoa.nome)