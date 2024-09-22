var n_adicionado = []
var cont_indici = 0
function adicionar(){
    var txtn = document.getElementById('txtn')
    var n_validador = Number(txtn.value)
    var n2_validador = n_adicionado.indexOf(n_validador)
    if (n_validador < 0 || n_validador > 100 || n2_validador != -1 || txtn.value.length == 0){
        alert(`Valor invalido ou ja encontrado na lista`)
        n2_validador = 1
    } else {
    n_adicionado.push(Number(txtn.value))
    
   
    var select = document.getElementById('tabela')
    var option = document.createElement('option')
    option.text = `Valor ${n_adicionado[cont_indici]} adicinado`
    option.value = `tab`
    select.appendChild(option)
    cont_indici++
    n2_validador = 0
    }
    var paragrafo = document.getElementsByTagName('p')
    for(var i = 0 ; i < paragrafo.length ; i++){
        paragrafo[i].innerHTML = ''
    }
    txtn.value = ''
    txtn.focus()

} 

function finalizar(){
    if(n_adicionado.length == 0){
        alert(`Nenhum valor informado na lista `)
    }else {
    // valores informados
   var tamanho = n_adicionado.length

   //maior valor informado
   var maior = n_adicionado.sort()
   var valor_maior = 0
   for(var c = 0 ; c < n_adicionado.length ; c++){
        if (maior[c] > valor_maior) {
             valor_maior = maior[c]
        }  
    }
   
   //menor valor informado
   var valor_menor = maior[0]

   //soma dos valores
   var soma = 0
   for(var contador = 0 ; contador < n_adicionado.length ; contador++) {
        soma += n_adicionado[contador]
   }
   
   // media dos valores
   var media = soma / n_adicionado.length


    window.document.querySelector('p#valores').innerHTML = `Ao todo, temos ${tamanho} valores cadastrados`

    window.document.querySelector('p#maior').innerHTML = `O maior valor foi ${valor_maior}`

    window.document.querySelector('p#menor').innerHTML = `O menor valor foi ${valor_menor}`

    window.document.querySelector('p#soma').innerHTML = `A soma dos valores foi ${soma}`

    window.document.querySelector('p#media').innerHTML = `A media dos valores foi ${media}`}
}