//recebe as entradas do modelo e dispara o método
import { Conferencia } from "../models/conferencia.js"

 export class conferenciaController{
    private inputNome
    private inputNascimento
    private inputValor
    private imprime

    constructor(){
        this.inputNome = document.querySelector('#nome')
        this.inputNascimento = document.querySelector('#nascimento')
        this.inputValor = document.querySelector('#valor')
        this.imprime = document.querySelector('.text-info')
       
    }

    verifica(){
        const conferencia = new Conferencia(
            this.inputNome.value,
            this.inputNascimento.value,
            this.inputValor.value,

        )

        console.log(conferencia)
        this.imprime.innerHTML = conferencia.dados
    }
 }