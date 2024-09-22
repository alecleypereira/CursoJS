async function getPeople() {
    const response = await fetch ('https://randomuser.me/api/?results=10')
    return response.json()
}
//novo array so com os names first e last.
getPeople().then(function(element){
    const results = element.results
    let nomes = results.map(objetos => objetos.name.first + ' ' + objetos.name.last)
    console.table(nomes)
})