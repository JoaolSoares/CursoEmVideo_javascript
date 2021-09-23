var array = []
let result = document.getElementById("result")

function adicionar() {
    let GETn1 = document.getElementById("txtn1")
    let res = document.getElementById("selnum")
    let n1 = Number(GETn1.value)

    if (n1 > 100 || n1 < 1) {
        window.alert("[Valor invalido]")
    }
    else {
        if (array.indexOf(n1) != -1) {
            window.alert("[Valor já inserido na lista]")
        }
        else {
            result.innerHTML = ''
            array.push(n1)
            let item = document.createElement("option")
            item.text = `valor ${n1} adicionado`
            res.appendChild(item)
        }
    }
    GETn1.value = ''
    GETn1.focus()
}

function analisar() {
    if (array.length == 0) {
        window.alert("[nenhum numero informado]")
    }
    else {
        array.sort()
        let maiorvalor = array[array.length - 1] 

        let soma = 0
        for (let i = 0; i < array.length; i++) {
            soma += array[i]
        }
        result.innerHTML = `<p>Ao todo, temos ${array.length} números cadastrados. </p>
                            <p>O maior valor informado foi ${maiorvalor} </p>
                            <p>O menor valor informado foi ${array[0]} </p>
                            <p>Somando todos os valores, temos ${soma} </p>
                            <p>A média dos valores é ${(soma / array.length).toFixed(2)}`
    }
}
