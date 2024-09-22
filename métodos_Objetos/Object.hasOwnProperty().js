// O Object.hasownProperty() verifica se alguma propriedade com o nome que voce da.
// Porém só retorna true se para propriedades nao herdadas se vc quiser ver se tem alguma mesmo que seja herdade use in.

let pessoa = {nome:'joao'}
console.log(pessoa.hasOwnProperty("nome")) //true
console.log(pessoa.hasOwnProperty("idade")) //false