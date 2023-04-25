import { conferenciaController } from "./controllers/conferencia.controller.js";
 
 const controller = new conferenciaController()
 const form = document.querySelector('.form')

 form.addEventListener('submit', event =>{
    event.preventDefault()
    controller.verifica()
 })