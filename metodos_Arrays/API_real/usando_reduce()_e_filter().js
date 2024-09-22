async function getPeople() {
    const response = await fetch ('https://randomuser.me/api/?results=10')
    return response.json()
}

getPeople().then(element => {
    const results = element.results
    console.log(results)
    //filtra homens 'male'
    let homens = results.filter(sexo => sexo.gender == 'male')
    //soma idades
    let soma_idades = homens.reduce((v1,v2) => v1 + v2.dob.age , 0 )
    //tira media das idades
    let media_age = soma_idades / homens.length
    //console.log(media_age)
})