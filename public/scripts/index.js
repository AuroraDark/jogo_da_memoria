 function embaralha(vetorCards) {
    let cards = vetorCards
    let aleatorio1 = Math.random()*(Math.pow((cards.length)/2,2)) + cards.length
    aleatorio1 = aleatorio1.toFixed(0)

    for(let i=0; i <= aleatorio1; i++){

        for(let index=0 ; index<cards.length-1; index++){
            // console.log('i: ',i)
            let temp
            let troca = (Math.random()*1).toFixed(0)
            // console.log('index: ',index)
            // console.log('troca: ',troca)
            if(troca == 1){
                temp = cards[index]
                // console.log('temporaria: ',temp)
                cards[index] = cards[index+1]
                // console.log('cards[index]: ',cards[index])
                cards[index+1] = temp
                // console.log('cards[index+1]: ',cards[index+1])
                // console.log('CARDS: ',cards)
            }
            // console.log('===============================')
        }    
    }
    
    return cards
}

//console.log(embaralha(paresOrdenados)) 

let deck = [
    {   
        id: 1,
        name: "Sapo",
        color: "#84CFFA",
        imagem: "https://image.flaticon.com/icons/svg/3069/3069170.svg",
        descricao: [
            "descricao 1",
            "descricao 2",
            "descricao 3"
            ],
        virado: true
    },
    {   
        id: 2,
        name: "Vaca",
        color: "#FA8484",
        imagem: "https://image.flaticon.com/icons/svg/3069/3069162.svg",
        descricao: [
        "descricao 1",
        "descricao 2",
        "descricao 3"
        ],
        virado: true
    },
    {   
        id: 3,
        name: "Canguru",
        color: "#E984FA",
        imagem: "https://image.flaticon.com/icons/svg/3069/3069163.svg",
        descricao: [
            "descricao 1",
            "descricao 2",
            "descricao 3"
            ],
        virado: true
    },
    {   
        id: 4,
        name: "Leão",
        color: "#84FAAC",
        imagem: "https://image.flaticon.com/icons/svg/3069/3069169.svg",
        descricao: [
            "descricao 1",
            "descricao 2",
            "descricao 3"
            ],
        virado: true
    },
    {   
        id: 5,
        name: "Pássaro",
        color: "#8684FA",
        imagem: "https://image.flaticon.com/icons/svg/3069/3069186.svg",
        descricao: [
            "descricao 1",
            "descricao 2",
            "descricao 3"
            ],
        virado: true
    },
    {
        id: 6,
        name: "Elefante",
        color: "#F7FA84",
        imagem: "https://image.flaticon.com/icons/svg/3069/3069224.svg",
        descricao: [
            "descricao 1",
            "descricao 2",
            "descricao 3"
            ],
        virado: true
    }

]

deck = deck.concat(deck)
console.log(embaralha(deck))

deck.forEach(card => {
    console.log(card.id, card.name, card.color)
})

const jogo = document.getElementById("jogo")

        deck.forEach(card => {
            $(document).ready(function(){
                $(`<div id="${card.id}" style="background-color:${card.color}"><img src="${card.imagem}" alt="${card.name}" width="100px" height="100px"></div>`).appendTo("#jogo");
            });                
        })


