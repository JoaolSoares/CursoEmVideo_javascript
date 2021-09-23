function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.querySelector("div#res")

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("ERRO! Verifique os dados e tente novamente")
    }
    else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""

        // cria uma img no html só que por js
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            genero = "homem"
            if (idade >= 0 && idade < 50) {
                img.setAttribute("src", "foto_jovemo.jpg")
            }
            else {
                img.setAttribute("src", "foto_idoso.jpg")
            }
        }
        else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 50) {
                img.setAttribute("src", "foto_jovema.jpg")
            }
            else {
                img.setAttribute("src", "foto_idosa.jpg")
            }
        }
        res.innerHTML = `Voce é um/a ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
