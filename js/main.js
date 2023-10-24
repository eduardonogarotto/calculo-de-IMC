// IMPORTS
import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"


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

  const showAlertError = notANumber(weight) || notANumber(height)

  if(showAlertError){
    AlertError.open()
    return;
  }

  AlertError.close()
  const result = calcIMC(weight, height)
  
  Modal.message.innerText = `Seu IMC é de ${result}.`
  Modal.open()
}

//FUNCTIONS
function calcIMC (weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

/*isNaN() verifica se um valor não é um número e retorna um boolean
e value == "" é para validar se o input não está vazio. */
function notANumber (value) {
  return isNaN(value) || value == ""
}