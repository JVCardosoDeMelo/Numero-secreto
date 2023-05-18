function verificaseochuteevalido(chute){
     const numero =+ chute

     if(numeroforinvalido(numero)){
        elementochute.innerHTML  += '<div>Valor inválido</div>'
     }
     if(numeroformaioroumenor(numero)){
        elementochute.innerHTML += `<div>O numero secreto tem que estar entre ${menorvalor} e 
        ${maiorvalor}
        </div>`
     }

     if (numero === numerosecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O numero secreto era ${numerosecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
     } else if (numero > numerosecreto){
        elementochute.innerHTML += `
        <div>O numero secreto é  menor <i class="fa-solid fa-arrow-down"></i></div>
        `
     } else{
        elementochute.innerHTML += `
        <div>O numero secreto é  maior <i class="fa-solid fa-arrow-up"></i></div>
        `
        
     }
    function numeroforinvalido() {
        return Number.isNaN(numero)
    }

    function numeroformaioroumenor(numero){
        return numero > maiorvalor || numero < menorvalor
    }
}

document.body.addEventListener('click' , e=>{
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})