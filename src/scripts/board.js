class BoardManager {
   //Dependencias -> Objeto pra manipular as cartas dentro do tabuleiro
   cardManager;

   //Elementos DOM -> Receberá a referência dos elementos 
   node;

   ////Numero Contagem
   numImgs;  // -> Numeros de diferentes imagens dentro da pasta img 
   curNumCards; // -> Proximos numeros de cartas no tabuleiro 



   //construtor 
   constructor(id, numImgs, cardManager) {
      // Trazer o elemento que for enviado pelo id 
      this.node = document.getElementById(id);

      // Setado propriedades restantes
      this.numImgs = numImgs;
      this.cardManager = cardManager;
   }

   // Esse método apaga todo tabulerio
   clear() {
      this.node.innerHTML = ""
   }

   fill(numberCards) {
      //Checar se o numero enviado de cartas for maior que o numero de imagens .
      if (numberCards > 2 * this.numImgs) {

         //mostrar mensagem de erro
         console.error(`Error: não há imagens suficientes para ${numberCards} cartas.`);
         //ajustar o numero de cartas, e continuar o jogo
         numberCards = 2 * this.numImgs;
      }

      this.clear();  //limpar o tabuleiro
      this.addCard(this.cardManager.gen(1)) // Adicionar uma nova carta ao tabuleiro. 
   }

   // AddCard -> Adiciona UMA carta no tabuleiro
   addCard(card) {
      this.node.appendChild(card);
    }
}

