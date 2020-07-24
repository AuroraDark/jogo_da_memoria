# Alterações

### index.html

 * Deixei os links _"DECKS"_ e _"SOBRE"_ comentados pois eles não redirecionam para nenhuma página.
 * Criei uma `div` com `id="vitoria"`, que vai ser exibida apenas quando o jogador vencer a partida.
 * Coloquei mais um link de estilo para o arquivo _css_ que eu criei (para estilizar a div que eu criei).

### index.js

 * Criei uma condição que verifica se o jogador já descobriu todas as cartas, caso a resposta seja positiva, ela vai aguardar _1s_ e exibir a `div` de vitória criada no _index.html_. Além disso, também via preencher o `span#movimentosvitoria` (que fica dentro da `div#vitoria` que eu criei) com a quantidade de movimentos que o jogador fez.

### card.css

 * Adicionei `user-select: none;` em todos os elementos `.jogo div`, porque eu percebi que se o jogador selecionasse as imagens de interrogações e arrastassem para qualquer das direções, as imagens que estavam "atráz" da carta aparecem sem contar movimentos e sem nenhum tipo de punição para o jogador. Veja a imagem: 
 
 ![Erro](https://cdn.discordapp.com/attachments/672933215836569614/735986073552814211/unknown.png)

 Com essa alteração o jogador fica impedido de selecionar as imagens, logo, o impede também de usar isso ao seu favor.

### responsive.css

 * Aqui eu apenas adicionei alguns elementos da `div#vitoria` que eu criei, para torna-los responsivos em telas com menores dimensões (abaixo de 550px de largura).

### README.md

 * Alterei uma "linha" que havia logo abaixo da imagem do Gif do jogo no celular, ela estava assim: _"======="_, e eu mudei para: _"---"_ (que é a sintaxe do markdown para criar um linha horizontal).
 * Marquei a alternativa _"Exibir mensagem de vitória"_, já que eu concluí esta tarefa (tentei ser o mais fiel possível do que eu vi no Figma).