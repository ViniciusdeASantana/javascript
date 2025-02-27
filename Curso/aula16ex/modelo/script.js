let number = document.getElementById('txt1')
let tab = document.getElementById('seltab')
let res = document.getElementById('res')
let valores = []

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLis(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function tabela() {
    if(isNum(number.value) && !inLis(number.value, valores)) {
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}


