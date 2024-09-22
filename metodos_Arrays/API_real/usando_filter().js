async function getPeople() {
    const response = await fetch ('https://randomuser.me/api/?results=10')
    return response.json()
}

getPeople().then(function(element){
    const results = element.results
    let female = results.filter((objeto) => objeto.gender === 'female')
    //console.log(female)
})