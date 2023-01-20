function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/Dia.png'
        document.body.style.background = 'rgb(197, 185, 8)'
    } else if (hora <= 18 && hora >=12) {
        img.src = 'img/Tarde.png'
        document.body.style.background = 'rgb(197, 122, 8)'
    } else {
        img.src = 'img/Noite.png'
        document.body.style.background = 'rgb(0, 0, 0)'
    }
}