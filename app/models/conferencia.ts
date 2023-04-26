 //modelo - definição da classe principal
 export class Conferencia{
    private _nome: String
    private _nascimento: Date
    private _valor: number
    
    constructor(nome: String, nascimento: Date, valor: number){
        this._nome = nome
        this._nascimento = nascimento
        this._valor = valor

    }

     //getter de entrada
     get nome(): String {
        return this._nome
     }

     get nascimento(): Date {
        return this._nascimento
     }

     get valor(): number {
        return this._valor
     }

     get dados(){
        return `Seu nome é: <strong>${this._nome}</strong> <br>
        Você nasceu em: <strong>${this._nascimento}</strong> <br>
        Você pagou: <strong>${this._valor}</strong>` 
     }
 }


 
