async function getPeople() {
    const response = await fetch ('https://randomuser.me/api/?results=10')
    return response.json()
}
 getPeople().then(element => {
    const results = element.results
    //console.log(results)
    let idade = results.reduce((V_anterior,V_atual) => V_anterior + V_atual.dob.age , 0)
    //console.log(idade)
 })