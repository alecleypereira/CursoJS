
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'imagens/menino_bebe.png')
        } else if(idade < 21){
            //jovem
            img.setAttribute('src', 'imagens/menino_adolecente.png')
        } else if(idade < 50) {
            //adulto
            img.setAttribute('src', 'imagens/homem_adulto.png')
        } else {
            //idoso
            img.setAttribute('src', 'imagens/homem_idoso.png')
        }

      } else if (fsex[1].checked) { 
            genero = 'Mulher'
            if (idade > 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/menina_bebe.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/menina_adolecente.png')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher_adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/mulher_idosa.png')
            }
      }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)

    }
    
}