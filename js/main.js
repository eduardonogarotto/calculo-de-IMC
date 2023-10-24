// IMPORTS
import { Modal } from "./modal.js"


// VARIABLES
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

/* 3 maneiras de criar e atribuir função a um evento
- Função Anônima
form.onsubmit =  function () => { código }

- Arrow Function
form.onsubmit = () => { código }

- Função Nomeada (criada em um outro momento do código)
form.onsubmit = handleSubmit
...
function handleSubmit () { código }
 */


//EVENTS
form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = calcIMC(weight, height)
  
  Modal.message.innerText = `Seu IMC é de ${result}.`
  Modal.open()
}

//FUNCTIONS
function calcIMC (weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}