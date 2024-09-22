async function getPeople() {
    const response = await fetch ('https://randomuser.me/api/?results=10')
    return response.json()
}
getPeople().then(data => console.log(data))
// voce tem um array de objetos com perfis aleatorios para testar metodos de arrays neles.




//Somente mulheres :
getPeople().then(data => {
    const results = data.results
    
    //console.log(results.filter((sex) => sex.gender === 'female'))
    
    

})

//verificar idade
getPeople().then(function(idd){
    const results = idd.results
    let maiorIdd = results.filter((element) => element.dob.age >= 18)
    //console.log(maiorIdd)
})





getPeople().then(data => {
    const results = data.results
    const people = []
    
    for (let p of results) {
        people.push({
            'nome': `${p.name.first} ${ p.name.last}`,
            'sexo': p.gender,
            'idade': p.dob.age
        })
    }
//console.log(people)

})

