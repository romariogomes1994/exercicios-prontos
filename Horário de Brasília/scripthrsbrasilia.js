function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var greet = window.document.getElementById("saudação")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getUTCMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas`
    if (hora >= 0 && hora < 12) {
        img.src = "fotomanha.png"
        document.body.style.background = "#C7CF63"
        greet.innerText = "Bom dia!"
    } else if (hora >= 12 && hora < 18) {
        img.src = "fototarde.png"
        document.body.style.background = "#C96240"
        greet.innerText = "Boa tarde!"
    } else {
        img.src = "fotonoite.png"
        document.body.style.background = "#192C5E"
        greet.innerText = "Boa noite!"
    }
}