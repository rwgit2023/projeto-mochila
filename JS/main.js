const form = document.querySelector('#novoItem')

form.addEventListener("submit", function(elemento){

    elemento.preventDefault()  // Todo formulário por padrão tem que enviar os dados pra algum lugar, porém estou enviando pra minha prórpia página... entao tenho que tratar o erro que vai dar.
    // console.log(elemento)
    // console.log(elemento.target[0].value)    //pego o elemento no input 0 (Nome)
    criaElemento(elemento.target.elements['nome'].value, elemento.target.elements['quantidade'].value) // pegando pela nomenclatura do elemento fica mais confiável
    
})

function criaElemento (nome, quantidade){

    console.log(nome)
    console.log(quantidade)

    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('Strong')
    numeroItem.innerHTML=quantidade

    novoItem.innerHTML = numeroItem + nome

    console.log(numeroItem)
} 