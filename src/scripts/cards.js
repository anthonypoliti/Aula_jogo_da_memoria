//classe para gerenciaras cartas e suas função
class CardManager {
    //atributos
    flipppedCards = new Set();
    urlFactory;

    //Construtor -> Irá receber uma função dentro dele
    constructor(Factory) {
        //atribuir essa função ao atributo urlfactory
        this.urlFactory = Factory;
    }
    //gen --> Sua função é gerar uma carta
    gen(Heronumber) {
        let templete = document.getElementById("cardTemplate") //Referenciar o template
        let clone = templete.content.cloneNode(true);        //Criar um clone

        // Captura os cliques nas cartas
        clone.children[0].addEventListener("click",
            event => this.onClick(event)
        )
        //retomar o clone
        return clone;
    }
    // Captura eventos de clique
    onClick(event) {
        this.flip(event.target);
    }
    // Vira a carta 
    flip(cardNode) {
        cardNode.children[0].classList.add("selected");
    }
    // Desvira a carta
    unFlip(cardNode) {
        cardNode.children[0].classList.remove("selected");
    }
    // Método que desabilita o movimento da carta que já foi virada
    disable(cardNode) {
        cardNode.children[0].classList.add("matched");
        this.unFlip(cardNode);
    }

}
