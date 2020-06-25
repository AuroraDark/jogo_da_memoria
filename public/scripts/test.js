let cardsOpen = [];

//Funções para executar com o clique

$(document).ready(function () {
  $(".card").click(function () {
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
          `<div nada class="no-card"  ><img src="src/nada.svg" alt="card" width="100px" height="100px"></div>`
        );
        cardsOpen = cardsNone;
      } else if (cardsOpen.length <= 2) {
        let cardsOpen2 = cardsOpen;
        $("[open1]")
          .delay(1000)
          .replaceWith(
            `<div card class="card" id="${cardsOpen2[0]}"><img src="https://image.flaticon.com/icons/svg/2476/2476231.svg" alt="card" width="100px" height="100px"></div>`
          );
        $("[open2]")
          .delay(1000)
          .replaceWith(
            `<div card class="card" id="${cardsOpen2[1]}"><img src="https://image.flaticon.com/icons/svg/2476/2476231.svg" alt="card" width="100px" height="100px"></div>`
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