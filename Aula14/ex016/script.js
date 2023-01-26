function contar() {
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let pss = document.querySelector('#txtp')
    let res = document.querySelector('#res')
    if (ini.value.length == 0 || fim.value.length == 0 || pss.value.length == 0) {
        alert('[ERRO404] Preencha os dados e tente novamente!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pss.value)

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }
    }
}