
function contagem() {
    var n_inicio = document.getElementById('n_inicio')
    var n_final = document.getElementById('n_final')
    var n_passo = document.getElementById('n_passo')
    if (n_passo.value == '' || Number(n_passo.value) <= 0 ) {
        n_passo.value = '1'
        window.alert('[ERRO] passo não poder ser nulo ou menor ou igual a 0 consideraremos igual a 1')
        
    } 
    if (Number(n_final.value) <= 0) {
        window.alert('[ERRO] Fim <= 0')
    } else {
        escrever(n_inicio, n_final, n_passo)
    }
                
   
}
function escrever(){
        //passar pra tipyof Number
    var inicio = Number(n_inicio.value)
    var final = Number(n_final.value)
    var passo = Number(n_passo.value)
            //criar estrutura de reptição 
    var resultado = window.document.querySelector('div#res')
   resultado.innerHTML = 'Contando:'
    for(var cmc = inicio ; cmc <= final ; cmc += passo) {
            resultado.innerHTML += `${cmc}... `
    }
   }