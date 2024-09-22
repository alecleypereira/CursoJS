async function getPeople() {
    const response = await fetch ('https://randomuser.me/api/?results=10')
    return response.json()
}
//every é tipo o 'ou' no JS '||' só que em método kkkkk
getPeople().then(element => {
    const results = element.results
    //console.log(results)
    let Nacionalidade = results.some(nacao => nacao.nat == 'BR')
    //console.log(Nacionalidade)
})