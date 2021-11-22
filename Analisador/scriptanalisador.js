let numero = document.querySelector('input#fnum')
let flista = document.querySelector('select#flista')
let resultado = document.querySelector('div#res')
let valores = []

function ehNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function naLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(ehNumero(numero.value) && !naLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Número ${numero.value} adicionado`
        flista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        window.alert('Número inválido ou já encontrado na lista.')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione números antes de finallizar.')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total} números adicionados.</p>`
        resultado.innerHTML += `<p>O maior número informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor número informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>A soma de todos os números é ${soma}.</P>`
        resultado.innerHTML += `<p>A média de todos os números informados é ${media}`
    }
}