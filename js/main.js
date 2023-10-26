// IMPORTS
import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"

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

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if(weightOrHeightIsNotANumber){
    AlertError.open()
    return;
  }

  AlertError.close()
  const result = calculateIMC(weight, height)
  
  Modal.message.innerText = `Seu IMC é de ${result}.`
  Modal.open()
}

/* O evento oninput irá monitorar o campo input para tomar alguma ação após a alteração do campo */
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()