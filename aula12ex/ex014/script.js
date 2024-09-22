function carregar(){
var msg = window.document.querySelector('div#msg')
var img = window.document.querySelector('img#img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    //Bom dia!
    img.src = 'imagens/foto_manha.png'
    document.body.style.backgroundColor = '#e2cd9f'
}   else if (hora >= 12 && hora < 18) {
    //Boa tarde!
    document.body.style.backgroundColor = '#b9846f'
    img.src = 'imagens/foto_tarde.png'
}   else {
    //Boa noite!
    document.body.style.backgroundColor = '#515154'
    img.src = 'imagens/foto_noite.png'
}
}
