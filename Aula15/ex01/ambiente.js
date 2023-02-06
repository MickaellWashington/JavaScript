let num = [5, 8, 2, 9, 3]

num.push(1)

num.sort()

console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)


if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}


console.log(num)





//num.length (Mostra quantos vetores há)
//num[] (Mostra o valor da "vaga")
//num.push() (Adiciona um número)
//num.sort() (Pôe os números em ordem)
//num.indexOf() Procura o valor da caixa, e retorna onde está