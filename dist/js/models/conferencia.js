//modelo - definição da classe principal
export class Conferencia {
    constructor(nome, nascimento, valor) {
        this._nome = nome;
        this._nascimento = nascimento;
        this._valor = valor;
    }
    //getter de entrada
    get nome() {
        return this._nome;
    }
    get nascimento() {
        return this._nascimento;
    }
    get valor() {
        return this._valor;
    }
    get dados() {
        return `Seu nome é: <strong>${this._nome}</strong> <br>
        Você nasceu em: <strong>${this._nascimento}</strong> <br>
        Você pagou: <strong>${this._valor}</strong>`;
    }
}
