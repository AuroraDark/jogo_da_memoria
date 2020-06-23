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
        name: "Vermelho",
        color: "#FA8484",
        virado: true
    },
    {   
        id: 2,
        name: "Azul",
        color: "#84ACFA",
        virado: true
    },
    {   
        id: 3,
        name: "Verde",
        color: "#43C476",
        virado: true
    },
    {   
        id: 4,
        name: "Laranja",
        color: "orange",
        virado: true
    },
    {   
        id: 5,
        name: "Amarelo",
        color: "black",
        virado: true
    },
    {
        id: 6,
        name: "Roxo",
        color: "#7929c2",
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
                $(`<div id="${card.id}" style="background-color:${card.color}"><p>${card.name}</p></div>`).appendTo("#jogo");
            });                
        })


