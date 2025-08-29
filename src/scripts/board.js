class BoardManager{
    //Dependencias -> Objeto pra manipular as cartas dentro do tabuleiro
   cardManager;

   //Elementos DOM -> Receberá a referência dos elementos 
   node;

   ////Numero Contagem
   numImgs;  // -> Numeros de diferentes imagens dentro da pasta img 
   curNumCards; // -> Proximos numeros de cartas no tabuleiro 



   //construtor 
   constructor(id, numImgs, cardManager){
    // Trazer o elemento que for enviado pelo id 
    this.node = document.getElementById(id);

    // Setado propriedades restantes
     this.numImgs = numImgs;
     this.cardManager = cardManager;

     // Esse método apaga todo tabulerio
     clear() {
        this.node.innerHTML = ""        
     }
     
     fill(numberCards) {}
     addCard(card) {}

   }
}
