function embaralha(vetorCards) {
  let cards = vetorCards;
  let aleatorio1 = Math.random() * Math.pow(cards.length / 2, 2) + cards.length;
  aleatorio1 = aleatorio1.toFixed(0);

  for (let i = 0; i <= aleatorio1; i++) {
    for (let index = 0; index < cards.length - 1; index++) {
      // console.log('i: ',i)
      let temp;
      let troca = (Math.random() * 1).toFixed(0);
      // console.log('index: ',index)
      // console.log('troca: ',troca)
      if (troca == 1) {
        temp = cards[index];
        // console.log('temporaria: ',temp)
        cards[index] = cards[index + 1];
        // console.log('cards[index]: ',cards[index])
        cards[index + 1] = temp;
        // console.log('cards[index+1]: ',cards[index+1])
        // console.log('CARDS: ',cards)
      }
      // console.log('===============================')
    }
  }

  return cards;
}

//console.log(embaralha(paresOrdenados))

let deck = [
  {
    id: 1,
    name: "Sapo",
    color: "#84CFFA",
    imagem: "https://image.flaticon.com/icons/svg/3069/3069170.svg",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 2,
    name: "Vaca",
    color: "#FA8484",
    imagem: "https://image.flaticon.com/icons/svg/3069/3069162.svg",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 3,
    name: "Canguru",
    color: "#E984FA",
    imagem: "https://image.flaticon.com/icons/svg/3069/3069163.svg",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 4,
    name: "Leão",
    color: "#84FAAC",
    imagem: "https://image.flaticon.com/icons/svg/3069/3069169.svg",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 5,
    name: "Pássaro",
    color: "#8684FA",
    imagem: "https://image.flaticon.com/icons/svg/3069/3069186.svg",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 6,
    name: "Elefante",
    color: "#F7FA84",
    imagem: "https://image.flaticon.com/icons/svg/3069/3069224.svg",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
];

deckId = deck;
deck = deck.concat(deck);
embaralha(deck);

/* deck.forEach((card) => {
  console.log(card.id, card.name, card.color);
}); */

deck.forEach((card) => {
  $(document).ready(function () {
    $(
      `<div card class="nao-virado" id="${card.id}"><img src="https://image.flaticon.com/icons/svg/2476/2476231.svg" alt="card" width="100px" height="100px"></div>`
    ).appendTo("#jogo");
  });
});

/*         deck.forEach(card => {
            $(document).ready(function(){
                $(`<div class= "card" class="virado" id="${card.id}" style="background-color:${card.color}"><img src="${card.imagem}" alt="${card.name}" width="100px" height="100px"></div>`).appendTo("#jogo");
            });    
        })
 */
let cardsOpen = [];

//Funções para executar com o clique

$(document).ready(function () {
  $(".nao-virado").click(function () {
    let CardId = $(this).attr("id");
    const cardsNone = [];
    if (cardsOpen.length > 2) {
      cardsOpen.pop();
    }
    if (cardsOpen.length <= 1) {
      cardsOpen.push(CardId);
      $(this).replaceWith(
        `<div card open${
          cardsOpen.length
        } class="virado" id="${CardId}" style="background-color:${
          deckId[CardId - 1].color
        }"><img src="${
          deckId[CardId - 1].imagem
        }" alt="card" width="100px" height="100px"></div>`
      );
    } else if (cardsOpen[1] != undefined) {
      if (cardsOpen[0] == cardsOpen[1]) {
        console.log("entrou");
        $(".virado").replaceWith(
          `<div nada class="no-card" id="0"><img src="src/nada.svg" alt="card" width="100px" height="100px"></div>`
        );
        cardsOpen = cardsNone;
      } else if (cardsOpen.length <= 2) {
        let cardsOpen2 = cardsOpen;
        $("[open1]")
          .delay(1000)
          .replaceWith(
            `<div card class="nao-virado" id="${cardsOpen2[0]}"><img src="https://image.flaticon.com/icons/svg/2476/2476231.svg" alt="card" width="100px" height="100px"></div>`
          );
        $("[open2]")
          .delay(1000)
          .replaceWith(
            `<div card class="nao-virado" id="${cardsOpen2[1]}"><img src="https://image.flaticon.com/icons/svg/2476/2476231.svg" alt="card" width="100px" height="100px"></div>`
          );
        cardsOpen = cardsNone;
        console.log(cardsOpen);
      }
    }
    console.log(
      `CO1 = ${cardsOpen[0]}, CO2 = ${cardsOpen[1]}, length=${cardsOpen.length}`
    );
    //   console.log(cardsOpen[1]);
    console.log(cardsOpen);
  });
});
