var n = ["ola", "mundo", "!"]

console.log(n)

n[3] = "hello"      // Adiciona em um lugar do array.
n.push("world")     // Adiciona no ultimo lugar do array.
n.length            // Tamanho do array.
//n.sort()          // Da um sort no array.

for (let pos in n) {
    console.log(n[pos])  // Bem parecido com o for do python.
}
var n1 = 2
var array = []
console.log(array.indexOf(n1))  // Procura esse valor dentro do array. (retorna -1 caso não ache)
