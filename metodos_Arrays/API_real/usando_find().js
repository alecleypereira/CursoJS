async function getPeople() {
    const response = await fetch ('https://randomuser.me/api/?results=10')
    return response.json()
}
getPeople().then(element => {
    const results = element.results
    //console.log(results)
    let Maior_d_30 = results.find(idade => idade.dob.age >= 30)
    //console.log(Maior_d_30)
})