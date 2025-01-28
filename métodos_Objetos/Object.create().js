//Em JavaScript, cada objeto tem um prótotipo (prototype), que é outro objeto do qual ele 'herda' propriedades e métodos. Quando você tenta acessar um propriedade ou método em um objeto, o JavaScript primeiro verificar se essa propriedade existe no proprio objeto. Se não encontrar , ele então procura no prototipo do objeto, e assim por diante até chegar no topo que é (Object.prototype).
// se usa Obejct.create() para fazer um objeto ser prototipo de outro.

const animal = {
    tipo: 'mamifero' ,
    som: function() {console.log('Fazer algum som)')}
}

const cachoro = Object.create(animal)
cachoro.nome = 'Rex'
cachoro.latir = function(){console.log('Au..Au, Au..Au')}

console.log(cachoro.nome) // Rex // propriedad propria do objeto.
console.log(cachoro.tipo) // mamifero // propriedade do prototipo (herdada do objeto animal).
cachoro.latir() // 'Au..Au, Au..Au''Au..Au, Au..Au' // método do proprio objeto.
cachoro.som() // 'Fazer alguma som' // método herdado do prototipo animal.