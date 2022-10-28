const card1 ={
    titulo: "\"A Guerra dos Tronos: Crônicas de Gelo e Fogo\" - Georg R. R. Martin " ,
    paginas: "Páginas: 600" ,
    ebook: "E-book: Sim", 
    genero: "Gênero: Romance, Alta Fantasia, Ficção Política."
}

const card2 ={
    titulo: "\"E Não Sobrou Nenhum\" - Agatha Christie  " ,
    paginas: "Páginas: 400" ,
    ebook: "E-book: Sim" , 
    genero: "Gênero: Romance, Ficção Histórica."
}

const card3 = {
    titulo: "\"Daisy Jones and The Six: Uma História de Amor e Música\" - Taylor Jenkins Reid " ,
    paginas: "Páginas: 360" ,
    ebook: "E-book: Sim", 
    genero: "Gênero: Romance, Ficção Histórica."
}

const card4 ={
    titulo: "\"1984\" - George Orwell " ,
    paginas: "Páginas: 336",
    ebook: "E-book: Não", 
    genero: "Gênero: Ficção científica, Ficção distópica, Ficção política."
}

const card5 ={
    titulo: "\"Entrevista com o Vampiro\" - Anne Rice " ,
    paginas: "Páginas: 320" ,
    ebook: "E-book: Sim" , 
    genero: "Gênero: Romance, Terror, Ficção gótica."
}

const card6 ={
    titulo: "\"A Cidade de Bronze\" - S. A. Chakraborty" ,
    paginas: "Páginas: 608" ,
    ebook: "E-book: Sim" , 
    genero: "Gênero: Romance, Alta fantasia, Ficção política."
}


// let cardss = []
// for (i = 0; i < 6; i++){
//     cardss.push(eval("card" + i));
// }


arrayDeLivros = [card1, card2, card3, card4, card5, card6]

function inserirLivros(objetos , id){
    for (elemento in objetos){
        const armazenarId = document.getElementById(id)
        const criarLista = document.createElement("li")
        criarLista.innerHTML = objetos[elemento]
        armazenarId.appendChild(criarLista)
    }
}
console.log(inserirLivros)
inserirLivros(card1, "lista1")
inserirLivros(card2, "lista2")
inserirLivros(card3, "lista3")
inserirLivros(card4, "lista4")
inserirLivros(card5, "lista5")
inserirLivros(card6, "lista6")

function pesquisarLivros(event){
    event.preventDeFault()
    const pesquisarClasse = document.getElementsByClassName("card")
    let valorInput = document.getElementById("search").value
    valorInput = valorInput.toLowerCase()
    for(let i = 0; i < pesquisarClasse.length; i++) {
        if(!pesquisarClasse[i].innerHTML.toLowerCase().includes(valorInput)){
            pesquisarClasse[i].style.display="none"
        }else{
            pesquisarClasse[i].style.display="grid"
        }
    }
} 
console.log(pesquisarLivros)

window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        pesquisarLivros(event)
    }
})

const busca = document.querySelector("#button")

busca.addEventListener("click", function (e) {
    const receberInput = document.querySelector("#search")
    const valorInput = receberInput.value
    pesquisarLivros(event)
}) 