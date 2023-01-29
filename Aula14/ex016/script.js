function contar() {

    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let pss = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || pss.value.length == 0) {

        res.innerHTML = 'Impossível contar!'

    } else {

        res.innerHTML = 'Contando: '

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pss.value)

        if (p <= 0) {

            alert('Passo inválido, considerando Passo 1')
            p = 1

        }

        if (i < f) {

//contagem crescente:

            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
                }

     } else {

//contagem decrescente

        for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} `
        } 
      
     }

     res.innerHTML += `\u{1f3c1}`
     
  }
}