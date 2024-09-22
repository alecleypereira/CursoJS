//Arquivo para testar for in ,for of e demais metodos simples de js:

const userProfile = {
    id: 101,
    firstName: "João",
    lastName: "Silva",
    age: 28,
    email: "joao.silva@example.com",
    phone: "+55 11 91234-5678",
    address: {
        street: "Rua das Flores",
        number: 123,
        city: "São Paulo",
        state: "SP",
        country: "Brasil"
    },
    hobbies: ["leitura", "futebol", "cozinhar", "programação"],
    isEmployed: true,
    jobTitle: "Desenvolvedor Front-end",
    company: "Tech Solutions",
    salary: 6000,
    hasDriverLicense: true,
    vehicles: ["carro", "moto"],
    socialMedia: {
        twitter: "@joaosilva",
        linkedin: "linkedin.com/in/joaosilva",
        github: "github.com/joaosilva"
    },
    languages: ["português", "inglês", "espanhol"],
    maritalStatus: "solteiro",
    children: 0,
    favoriteColor: "azul"
};


//Crie um objeto com 3 propriedades (ex: nome, idade, cidade) e use for...in para exibir todas as chaves e seus respectivos valores:
    let caracteristicas = {
        nome:'Ana',
        idade:'45',
        cidade:'Maceio'
    }
    for(chave in caracteristicas){
        //console.log(chave + ': ' + caracteristicas[chave])
    }

// Crie um array de strings (ex: nomes de frutas) e use for...of para exibir cada valor do array.
    let frutas = [
        'Abacaxi',
        'tomate',
        'maça',
        'melancia'
    ]
    for(valor of frutas){
        //console.log(valor)
    }
//Dado um objeto com várias propriedades, use Object.keys() para listar todas as chaves do objeto.
    const prop = Object.keys(userProfile)
    const propEmOrdem = prop.sort((a,b) => a.localeCompare(b))
    //console.log(propEmOrdem)

//Crie um objeto com propriedades de valores numéricos e use Object.values() para somar todos os valores do objeto.
    let idades = {
        Maria:13,
        Joao:19,
        Victor:77,
        Ana:65
    }
    let idade = 0

    let age = Object.values(idades)
    for(valor of age){
         idade += valor
    }
    //console.log(idade)

//Crie um objeto com 4 propriedades e use Object.entries() para exibir um array contendo pares [chave, valor].
    let niveis = {
        andre:360,
        felipe:321,
        alecley:231,
        ruan:204
    }
    //console.log(Object.entries(niveis))

//Crie dois objetos com propriedades diferentes. Use Object.assign() para mesclar os dois objetos em um novo objeto, sem modificar os objetos originais.
    const persona = {
        name:'Alecley',
        age:18
    }
    let statistic = {
        life:'Normal',
        denger:'Safe'
    }
    let personagem = Object.assign({}, persona, statistic )
    //console.log(personagem)

//Crie um objeto com 3 propriedades e aplique Object.freeze(). Em seguida, tente modificar ou adicionar uma nova propriedade e veja o comportamento do objeto.
    const pato = {
        age:2,
        name:'Princes'
    }
    Object.freeze(pato)
    pato.age = 3 // nao funciona esta congelado

//Crie um objeto com algumas propriedades. Use Object.hasOwnProperty() para verificar se o objeto tem uma propriedade específica, retornando true ou false.
    //console.log(userProfile.hasOwnProperty('age' && 'country'))
    
    //country esta dentro de um sub-objeto.

//Crie um objeto base e, usando Object.create(), crie um novo objeto que herde do primeiro. Modifique uma propriedade no objeto base e veja se o objeto herdado reflete a mudança.
    let brasileiro = {
        cidade:'maceio',
        bebe:'Agua',
        come:'Pao com barro'
    }
    let alecley = {
        pais:'Brasil'
    }
    alecley = Object.create(brasileiro)
    brasileiro.come  = 'pao'
    //console.log(alecley.cidade)
    //console.log(alecley.come)
    //console.log(alecley.bebe)
    //console.log so mostra prpriedades naativas para mostra as do prototipo tera que acessalas usando o caminho com '.'

//Crie um objeto aninhado (um objeto com outros objetos dentro). Use for...in e Object.keys() para iterar sobre as chaves e exibir o nome de todas as propriedades, incluindo as propriedades dos objetos aninhados.
    for (chave in userProfile){
        if (typeof userProfile[chave]  === 'object' && userProfile[chave] !== null && !Array.isArray(userProfile[chave])){
            //Vejo se é objeto, não é null e não é array
            //console.log(chave)
            //console.log(Object.keys(userProfile[chave]))
        } else if(Array.isArray(userProfile[chave])){
            //Se for array escrevo os valores dos indices
            //console.log(chave)
            for(valor of userProfile[chave]){
                //console.log(valor)
            }
        } else {
            //Se não for array nem objeto escrevo apenas o nome da propriedade
            //console.log(chave)
        }
    }
    //typeof pode retorna 'object' para objetos, array e valores null.

//Crie dois objetos e use Object.assign() para mesclar ambos. Depois, aplique Object.freeze() no objeto mesclado e tente modificar ou adicionar propriedades. Veja o que acontece e explique o comportamento.
    let casa = {
        preco:300000,
        area:'50M^2',
        moradores:4
    }
    let condominio = {
        condominio:500,
        iptu:1500,
    }
    let moradia = Object.assign({}, casa, condominio)
    Object.assign(moradia)
    moradia.iptu = 3000 // nao funciona
    moradia.dono = 'Alice' // nao funciona
    //console.log(moradia)

//Crie um objeto "animal" com algumas propriedades e métodos, e use Object.create() para criar um objeto "cachorro" que herda de "animal". Implemente um método no "animal" e veja como ele se comporta ao ser chamado a partir do "cachorro". Tente modificar o método herdado no "cachorro" e veja o que acontece.
    let animal = {
        tipo: 'mamifero',
        habitat: 'terrestre',
        som: function(canto){
           console.log(canto + canto )
        }
    }
    cachorro = Object.create(animal) //Object.create apaga todas propriedades que um objeto tem antes de colocar as herdadas entao se for colocar um prototipo em algum objeto tenha isso em mente
    // voce pode defiinir propriedades proprias depois de adicionar o prototipo
    cachorro.latir = "au au "
    cachorro.som(cachorro.latir)
    


