function carregar() {
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('div#foto')
    let data = new Date()
    let min = data.getMinutes()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.innerHTML = '<img src="manha.png">'
        document.body.style.background = '#ff9673'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.innerHTML = '<img src="tarde.png">'
        document.body.style.background = '#e69853'
    } else {
        //boa tarde
        img.innerHTML = '<img src="noite.png">'
        document.body.style.background = '#1f1c21'
    }

}