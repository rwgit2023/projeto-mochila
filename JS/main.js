const form = document.querySelector('#novoItem')
const itens =[]

form.addEventListener("submit", function(elemento){

    elemento.preventDefault()   // Todo formulário por padrão tem que enviar os dados pra algum lugar, porém estou enviando pra minha prórpia página... entao tenho que tratar o erro que vai dar.

    // console.log(elemento)
    // console.log(elemento.target[0].value)   

    const nome = elemento.target.elements['nome']
    const quantidade= elemento.target.elements['quantidade']
    
    criaElemento(nome.value, quantidade.value) // pegando pela nomenclatura do elemento fica mais confiável

    nome.value = ""
    quantidade.value = ""
})


function criaElemento(nome, quantidade){

    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade  

    novoItem.appendChild(numeroItem)    // para colocar um objeto dentro do outro... no caso a classe strong dentro do novo item
    novoItem.innerHTML += nome

    const lista = document.querySelector('#lista')
    lista.appendChild(novoItem)

    localStorage.setItem("nome",nome)
    localStorage.setItem("quantidade",quantidade)  // joga os dados dentro do localStorage no navegador

    const itemAtual = {           // No JS toda vez que vai se usar um par de dados (nome, quantidade) temos que usar um ojeto
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual)  // jogar os itens dentro do array (lista)

    localStorage.setItem("item",JSON.stringify(itens))  // O LOCALSTORAGE só aceita string e como era um objeto--- devemos transormar para que funcione

    // ****************ARRAY DE STRINGS****************

    // <ul class="lista" id="lista">
    // <li class="item"><strong>7</strong>Camisas</li>
    // Se for seguir passo a passo primeiro foi criado um novo item dentro da lista (li)
    // Após foi criado uma class Strong que é no caso onde e engloba o numero (innerHMTL para jogar no html)
    // Após com foi utilizado o append para jogar a classe strong dentro da li que no caso é o novo item
    // Após isso com criou-se uma nova classe que no caso é o item como um todo (lista)---Utilizou-se o 
    // append para jogar a li e o strong com o nome e quantidade dentro dela e foi isso.
    
}


