const form = document.querySelector('#novoItem')
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []  // Transforma oque antes tinha sido transformado em objeto para enviar para o storage devolta 


itens.forEach(function(elemento){
    criaElemento(elemento)
})


form.addEventListener("submit", function(elemento){

    elemento.preventDefault()   // Todo formulário por padrão tem que enviar os dados pra algum lugar, porém estou enviando pra minha prórpia página... entao tenho que tratar o erro que vai dar.

    // console.log(elemento)
    // console.log(elemento.target[0].value)   

    const nome = elemento.target.elements['nome']
    const quantidade= elemento.target.elements['quantidade']

    
    const existe = itens.find(elemento => elemento.nome === nome.value)   // Busca dentro do array se o item buscado ja existe

    const itemAtual = {           // No JS toda vez que vai se usar um par de dados (nome, quantidade) temos que usar um ojeto
        "nome": nome.value,
        "quantidade": quantidade.value
    }
    
    
     if (existe){                           // Estou colocando um ID para o existe (para ele ir para cada item)
        itemAtual.id = existe.id
        
        atualizaElemento(itemAtual)

        
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    
        
    }else {
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0;   // operador ternário
        
               //Recebe a quantidade pelo numero de itens que tem na lista

        criaElemento(itemAtual)
        itens.push(itemAtual)
    }
    
    
    localStorage.setItem("itens", JSON.stringify(itens))  // O LOCALSTORAGE só aceita string e como era um objeto--- devemos transormar para que funcione

    nome.value = ""
    quantidade.value = ""
})



function criaElemento(item){

    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = item.quantidade  
    numeroItem.dataset.id = item.id   //Pega o item vindo do criar (Seta o id vindo do item)
    novoItem.appendChild(numeroItem)    // para colocar um objeto dentro do outro... no caso a classe strong dentro do novo item
    
    novoItem.innerHTML += item.nome

    novoItem.appendChild(botaoDeleta(item.id))

    

    lista.appendChild(novoItem)
    

    // ****************ARRAY DE STRINGS****************

    // <ul class="lista" id="lista">
    // <li class="item"><strong>7</strong>Camisas</li>
    // Se for seguir passo a passo primeiro foi criado um novo item dentro da lista (li)
    // Após foi criado uma class Strong que é no caso onde e engloba o numero (innerHMTL para jogar no html)
    // Após com foi utilizado o append para jogar a classe strong dentro da li que no caso é o novo item
    // Após isso com criou-se uma nova classe que no caso é o item como um todo (lista)---Utilizou-se o 
    // append para jogar a li e o strong com o nome e quantidade dentro dela e foi isso.
    
}


function atualizaElemento (item){
    // console.log(document.querySelector("[data-id='"+item.id+"']"))
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
} 


function botaoDeleta(id) {
    const elementoBotao = document.createElement("button")             // Função para criar um x de exit acima dos itens 
    elementoBotao.innerText = "X"

    elementoBotao.addEventListener("click", function(){
        // console.log(this)
        deletaElemento(this.parentNode,id)     //this.parentNode é para pegar o pai do elemento (li)
        

    })
    return elementoBotao
}

form.addEventListener("reset", function(elemento){
    elemento.preventDefault()


    deletaTudo(elemento) 

})




function deletaElemento(tag, id){
    tag.remove()

    //1 passo - remover um item do array
    //2 escrever isso no localStorage
    // itens.splice(itens.findIndex(function(elemento){
        // elemento.id === id

    // },1))
    itens.splice(itens.findIndex(elemento=> elemento.id === id),1)

    localStorage.setItem("itens", JSON.stringify(itens))
}




function deletaTudo(){

    tag.remove()

    itens.splice(itens)

    localStorage.setItem("itens", JSON.stringify(itens))
}

