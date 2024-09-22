async function getPeople() {
    const response = await fetch ('https://randomuser.me/api/?results=10')
    return response.json()
}
//some é tipo o 'e' '&&' no JS só que como método kkkkk
getPeople().then(element => {
    const results = element.results
    //console.log(results)
    let idoso = results.some(idade => idade.dob.age >= 50)
    //console.log(idoso)
})