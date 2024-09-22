async function getPeople() {
    const response = await fetch ('https://randomuser.me/api/?results=10')
    return response.json()
}

getPeople().then(element => {
    const results = element.results
    let apenas_M = results.filter(sexo => sexo.gender == 'female').map(nome => nome.name.first + ' ' + nome.name.last)
    //console.table(apenas_M)
})