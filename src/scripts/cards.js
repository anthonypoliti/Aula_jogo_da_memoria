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
        //retomar o clone
        return clone;
    }

}
