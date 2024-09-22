
function tabuada() {
    var n = document.querySelector('input#numero')
    var lista = document.querySelector('select#lista')

    numero = Number(n.value)
    lista.innerHTML = ''
    for(var cont = 0 ; cont <= 10 ; cont++) {
       var vezes = numero * cont

       var option = document.createElement('option')
       option.text = `${numero} x ${cont} = ${vezes}`
       option.value = `tab${cont}`
       lista.appendChild(option)

      
    }
}