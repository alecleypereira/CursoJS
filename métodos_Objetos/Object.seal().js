// O Object.seal() sela o objeto impedindo remoção, adição porem deixando modificações.

const pessoa = {nome:'joao'}
Object.seal(pessoa)
pessoa.nome = 'Maria' // funciona

delete pessoa.nome // nao funciona
console.log(pessoa.nome)