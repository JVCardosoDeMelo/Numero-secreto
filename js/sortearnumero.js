const menorvalor = 1
const maiorvalor = 1000

const numerosecreto = gerarnumeroaleatorio ()

function gerarnumeroaleatorio(){
    return parseInt(Math.random() * maiorvalor + 1)
}

console.log('Numero secreto:',numerosecreto)

const elementomenorvalo = document.getElementById('menor_valor')
elementomenorvalo.innerHTML = menorvalor

const elementomaiorvalor = document.getElementById('maior_valor')
elementomaiorvalor.innerHTML = maiorvalor