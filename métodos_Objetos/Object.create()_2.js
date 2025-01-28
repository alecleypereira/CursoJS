const alunos = { 
    turma: "4 ano",
    media: function() {
        let x = (this.nota_1 + this.nota_2) / 2 // com o this ele procura a variavel ou propriedade no objeto em que ela esta sendo executada. entao nao precisa passar parametro pra funcao e depois colocar o caminho das variavei quando for chamar.
        return console.log(x)
    }
}
let ruan = Object.create(alunos)
ruan.idade = 9      //  criando propriedades do objeto.
ruan.nota_1 = 6     //  criando propriedades do objeto.
ruan.nota_2 = 9     //  criando propriedades do objeto.

console.log(ruan.turma) // propriedade do prototipo.
console.log(ruan.idade) // propriedade do objeto.
            // fazendo o caminho.
//ruan.media(ruan.nota_1, ruan.nota_2) se nao usar this no metodo e quiser lidar com escopo.

ruan.media() // método do prototipo.
