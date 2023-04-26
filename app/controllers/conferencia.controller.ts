//recebe as entradas do modelo e dispara o método
import { Conferencia } from "../models/conferencia.js"

 export class conferenciaController{
    private inputNome: HTMLInputElement
    private inputNascimento: HTMLInputElement
    private inputValor: HTMLInputElement
    private imprime: HTMLDivElement

    constructor(){
        this.inputNome = document.querySelector('#nome')
        this.inputNascimento = document.querySelector('#nascimento')
        this.inputValor = document.querySelector('#valor')
        this.imprime = document.querySelector('.text-info')
       
    }

    verifica(): void {
        const conferencia = this.criaVerificacao()
        console.log(conferencia)
        this.imprime.innerHTML = conferencia.dados
        this.limpaFormulario()
        
    }
  
  criaVerificacao(): Conferencia{
        const nome = String(this.inputNome.value)
        const exp = /-/g
        const nascimento = new Date(this.inputNascimento.value.replace(exp, ','))
        const valor = parseFloat(this.inputValor.value)
        return new Conferencia(nome, nascimento, valor)
    }
  
  limpaFormulario(): void {
        this.inputNome.value = ''
        this.inputNascimento.value = ''
        this.inputValor.value = ''
        this.inputNome.focus()
    }
 }
