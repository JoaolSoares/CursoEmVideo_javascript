function contar() {
    let ini = document.querySelector("input#txtn1").value
    let fim = document.querySelector("input#txtn2").value
    let pas = document.getElementById("txtn3").value
    let res = document.getElementById("res")

    if (ini.length == 0 || fim.length == 0 ) {
        alert("ERRO! Algum campo não foi preenchido corretamente...")
        
    }
    else {
        res.innerHTML = "Contando... </br>"
        if (pas == 0 || pas.length == 0) {
            alert("Passo 0 não existe! considerando passo 1.")
            pas = 1
        }

        let i = Number(ini)
        let f = Number(fim)
        let p = Number(pas)
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} -> `
            }
        }
        else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} -> `
            }
        }
        res.innerHTML += " Fim"
    }
}