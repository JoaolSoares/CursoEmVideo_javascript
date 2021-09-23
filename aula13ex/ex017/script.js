function tabuada() {
    let n1 = document.querySelector("input#txtn1").value
    let res = document.querySelector("select#seltab")

    if (n1.length == 0) {
        alert("[ERRO] Digite os dados corretamente")
    }
    else {
        n1 = Number(n1)
        res.innerHTML = ''
        
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement("option")
            item.text = `${n1}x${i} = ${n1 * i}`
            res.appendChild(item)
        }
    }
}