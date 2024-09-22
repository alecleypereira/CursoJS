async function getPeople() {
    const response = await fetch ('https://randomuser.me/api/?results=10')
    return response.json()
}

getPeople().then(element => {
    const results = element.results
    //console.log(results)
    let V_email = results.some((objeto) =>{ 
            //console.log(objeto.email) // verifica se os emails sao todos diferentes.
            objeto.email.includes('catherine.myers@example.com')}
    
) 
    //console.log(V_email)

    // o codigo funciona mais quase nunca cai o mesmo email que voce colocou entao sempre retorna 'false' ~_~.
})