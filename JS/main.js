const form = document.querySelector('#novoItem')

form.addEventListener("submit", function(elemento){
    elemento.preventDefault()  // Todo formulário por padrão tem que enviar os dados pra algum lugar, porém estou enviando pra minha prórpia página... entao tenho que tratar o erro que vai dar.
    console.log(elemento)
    // console.log(elemento.target[0].value)    //pego o elemento no input 0 (Nome)
    console.log(elemento.target.elements['nome'].value) 
    console.log(elemento.target.elements['quantidade'].value)  // pegando pela nomenclatura do elemento fica mais confiável
})