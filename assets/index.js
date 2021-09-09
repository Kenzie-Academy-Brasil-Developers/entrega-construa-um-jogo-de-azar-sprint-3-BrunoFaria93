const botaoEscolha = document.getElementById('opcoes')
const botaoJogar = document.querySelector('.jogar')
const mesa = document.querySelector('.mesa')
let chave = 0
let cont = 0
botaoEscolha.addEventListener('click', selecionaOpc)
botaoJogar.addEventListener('click', jogar)

function getRandom(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function selecionaOpc(event){
    const botao = event.target

    if(botao.innerText === 'Pedra'){
        chave = 1
    }else if(botao.innerText === 'Papel'){
        chave = 2
    }else if(botao.innerText === 'Tesoura'){
        chave = 3
    }
}
function jogar(event){
    if(cont > 0){
        anuncio.remove()
    }

    const homem = document.createElement('img')
    homem.setAttribute('src', './imagens/homem.png')
    homem.setAttribute('width', '70')
    homem.setAttribute('height', '50')
    mesa.appendChild(homem)
  
    if (chave === 1){
        const resultado = document.createElement('img')
        resultado.setAttribute('src', './imagens/pedra.png')
        resultado.setAttribute('width', '50')
        resultado.setAttribute('height', '50')
        mesa.appendChild(resultado)
    }else  if (chave === 2){
        const resultado = document.createElement('img')
        resultado.setAttribute('src', './imagens/papel.png')
        resultado.setAttribute('width', '50')
        resultado.setAttribute('height', '50')
        mesa.appendChild(resultado)
    }else  if (chave === 3){
        const resultado = document.createElement('img')
        resultado.setAttribute('src', './imagens/tesoura.png')
        resultado.setAttribute('width', '50')
        resultado.setAttribute('height', '50')
        mesa.appendChild(resultado)
    }
    const vs = document.createElement('img')
    vs.setAttribute('src', './imagens/vs.png')
    vs.setAttribute('width', '30')
    vs.setAttribute('height', '30')
    mesa.appendChild(vs)


    let chaveRobo = getRandom(1, 3)

    if (chaveRobo === 1){
        const resultado = document.createElement('img')
        resultado.setAttribute('src', './imagens/pedra.png')
        resultado.setAttribute('width', '50')
        resultado.setAttribute('height', '50')
        mesa.appendChild(resultado)
    }else  if (chaveRobo === 2){
        const resultado = document.createElement('img')
        resultado.setAttribute('src', './imagens/papel.png')
        resultado.setAttribute('width', '50')
        resultado.setAttribute('height', '50')
        mesa.appendChild(resultado)
    }else  if (chaveRobo === 3){
        const resultado = document.createElement('img')
        resultado.setAttribute('src', './imagens/tesoura.png')
        resultado.setAttribute('width', '50')
        resultado.setAttribute('height', '50')
        mesa.appendChild(resultado)
    }
    const robo = document.createElement('img')
    robo.setAttribute('src', './imagens/robo.png')
    robo.setAttribute('width', '50')
    robo.setAttribute('height', '50')
    mesa.appendChild(robo)



    if (chave === 1 && chaveRobo === 1){
        const anuncio = document.createElement('h1')
        anuncio.innerHTML = 'Você empatou!'
        mesa.appendChild(anuncio)
    }else if (chave === 1 && chaveRobo === 2){
        const anuncio = document.createElement('h1')
        anuncio.innerHTML = 'Você perdeu!'
        mesa.appendChild(anuncio)
    }else if (chave === 1 && chaveRobo === 3){
        const anuncio = document.createElement('h1')
        anuncio.innerHTML = 'Você ganhou!'
        mesa.appendChild(anuncio)
    }

    if (chave === 2 && chaveRobo === 1){
        const anuncio = document.createElement('h1')
        anuncio.innerHTML = 'Você ganhou!'
        mesa.appendChild(anuncio)
    }else if (chave === 2 && chaveRobo === 2){
        const anuncio = document.createElement('h1')
        anuncio.innerHTML = 'Você empatou!'
        mesa.appendChild(anuncio)
    }else if (chave === 2 && chaveRobo === 3){
        const anuncio = document.createElement('h1')
        anuncio.innerHTML = 'Você perdeu!'
        mesa.appendChild(anuncio)
    }

    if (chave === 3 && chaveRobo === 1){
        const anuncio = document.createElement('h1')
        anuncio.innerHTML = 'Você perdeu!'
        mesa.appendChild(anuncio)
    }else if (chave === 3 && chaveRobo === 2){
        const anuncio = document.createElement('h1')
        anuncio.innerHTML = 'Você ganhou!'
        mesa.appendChild(anuncio)
    }else if (chave === 3 && chaveRobo === 3){
        const anuncio = document.createElement('h1')
        anuncio.innerHTML = 'Você empatou!'
        mesa.appendChild(anuncio)
    }
    cont ++
}