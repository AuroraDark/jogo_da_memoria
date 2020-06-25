//Deck

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

//Função para embaralhar
function embaralha(vetorCards) {
  let cards = vetorCards;
  let aleatorio1 = Math.random() * Math.pow(cards.length / 2, 2) + cards.length;
  aleatorio1 = aleatorio1.toFixed(0);

  for (let i = 0; i <= aleatorio1; i++) {
    for (let index = 0; index < cards.length - 1; index++) {
      let temp;
      let troca = (Math.random() * 1).toFixed(0);

      if (troca == 1) {
        temp = cards[index];

        cards[index] = cards[index + 1];

        cards[index + 1] = temp;
      }
    }
  }
  return cards;
}

deckId = deck;
deck = deck.concat(deck);
embaralha(deck);


// deck.forEach((card) => {
//   $(document).ready(function () {
//     $(
//       `<div class="card" id="${card.id}"><img src="https://image.flaticon.com/icons/svg/2476/2476231.svg" alt="card" width="100px" height="100px"></div>`
//     ).appendTo("#jogo");
//   });
// });

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  //this.classList.toggle('flip');
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

   if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
     return;
    }
 
    secondCard = this;
 
    checkForMatch();
}
 
  //Conferindo se é igual

  function checkForMatch() {
    if (firstCard.dataset.nome === secondCard.dataset.nome) {
      disableCards();
      return;
    }
 
    unflipCards();
  }
 
  //Desabilitando o clique nas cartas viradas

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }
 
  //Virando as cartas erradas de volta

  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();

    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  //Embaralhando cartas (IIFE) Vai ser executada assim que for lida

  (function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 12);
      card.style.order = ramdomPos;
    });
  })();

cards.forEach(card => card.addEventListener('click', flipCard));


