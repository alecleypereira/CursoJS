async function getPeople() {
    const response = await fetch ('https://randomuser.me/api/?results=20')
    return response.json()
    
}

function AD_perfis(perfil){
//FUNCAO QUE VAI RETORNA RELATORIO.
    
//MEDIA IDADE POR GENERO.

    const homen = perfil.filter(element => element.gender == 'male')
    const mulher = perfil.filter(element => element.gender == 'female')
    let media_male = (homen.reduce((v1,v2) => v1 + v2.dob.age , 0)) / homen.length
    let media_female = (mulher.reduce((v1,v2) => v1 + v2.dob.age , 0)) / mulher.length
//console.log(perfil)
    if (isNaN(media_female)){
        media_female = 0
    } else if(isNaN(media_male)){
        media_male = 0
    }
    
    console.log( `Media das idades de homens: ${media_male}` )
    console.log('-----------------------------------------------------------')
    console.log( `Media das idades de mulheres: ${media_female}` ) 
    console.log('-----------------------------------------------------------')

//PERFIL MAIS NOVO.
    let mNovo = perfil.reduce((v1,v2) => {
        
        if(v1 > v2.dob.age){
            v1 = v2.dob.age
        }
        return v1
    } , Infinity)
    mNovo = perfil.find(element => element.dob.age == mNovo)
    console.log(`pessoa mais nova:`)
    console.log(mNovo)
    
    

//PERFIL MAIS VELHO.
    let mVelho = perfil.reduce((v1,v2) => {
        if(v1 < v2.dob.age){
        v1 = v2.dob.age
        
        } 
        return v1
    } , 0)
    mVelho = perfil.find(elemento => elemento.dob.age == mVelho)
    console.log('-----------------------------------------------------------')
    console.log(`Pessoa mais velha:`)
    console.log(mVelho)
    console.log('-----------------------------------------------------------')

//DISTRIBUICAO POR PAISES.
   
    let distribuicao = perfil.reduce((acumulador,pessoa) => {
        let pais = pessoa.nat
        if(!acumulador[pais]){
            acumulador[pais] = 1
        } else{
            acumulador[pais] += 1
        }
        return acumulador
    } , {})

            //SEM O '!' E COM OS BLOCOS DE IF INVERTIDOS//
    /*let distribuicao = perfil.reduce( (acumulador,pessoa) => {
        let pais = pessoa.nat
        if(acumulador[pais]){
            acumulador[pais] += 1
        } else{
            acumulador[pais] = 1
        }
        return acumulador
    } , {} )*/

    console.log(`Distribuição por países:`)
    console.log(distribuicao)
    console.log('-----------------------------------------------------------')

// NOMES DE TODAS AS PESSOAS.
    let nomes = perfil.map(element => element.name.first + ' ' + element.name.last)
    let conjuntoNomes = perfil.reduce((acumulador,nome,index) => {
        acumulador += nome.name.first + ' ' + nome.name.last
        if(index < perfil.length - 1){
            acumulador += ', '
        }
        return acumulador
    } , '')
    console.log(`Nomes: ${conjuntoNomes}`)
    console.log('-----------------------------------------------------------')

//VERIFICACAO DE NOMES.
// contar nomes que tem mais de 3 letras.
   let verifDEnun = perfil.reduce((acumulador,elemento) => {
        if (!(elemento.name.first.length <= 3)){
            acumulador += 1
        }
        return acumulador
    } , 0)
    console.log(`Nomes com mais de 3 letras: ${verifDEnun}`)
// se tem algum que comece com a letra A.
    let comecaA = perfil.reduce((acumulador,nome) => {
        if(nome.name.first[0] == 'A'){
            acumulador += 1
        }
        return acumulador
    }, 0)
    console.log(`Nome que começam com a letra 'A': ${comecaA}`)
    console.log('-----------------------------------------------------------')
//NOMES EM ORDEM
    let nomesFirst = perfil.map(element => element.name.first)
    let nomesOrde = nomesFirst.sort((a,b) => a.localeCompare(b))
    console.log('Primeiros Nomes em ordem:')
    console.log(nomesOrde)
    console.log('------------------------------------------------------------')

//ORDEM DE REGISTRO DECRECENTE
    let ordemRegistro = perfil.sort((a,b) => new Date(a.registered.date) - new Date(b.registered.date))
    let pessoasOrdemRegistro = ordemRegistro.map(element => element.name.first + ' ' + element.name.last + ' ---- ' + element.registered.date)
    console.log(pessoasOrdemRegistro)
    
}


//passar perfis para o array 'perfis'.
getPeople().then(element => {
    let perfis = element.results
    AD_perfis(perfis)
})

