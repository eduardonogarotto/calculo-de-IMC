// VARIABLES
const form = document.querySelector('form')
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")


const Modal = {

  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal h2"),
  btnClose: document.querySelector("#closeModal"),

  open() { Modal.wrapper.classList.add("open") },
  close() { Modal.wrapper.classList.remove("open") }
}

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

Modal.btnClose.onclick = () => {
  Modal.close()
}

//FUNCTIONS
function calcIMC (weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}