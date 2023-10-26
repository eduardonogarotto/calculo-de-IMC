export function calculateIMC (weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

/*isNaN() verifica se um valor não é um número e retorna um boolean
e value == "" é para validar se o input não está vazio. */
export function notANumber (value) {
  return isNaN(value) || value == ""
}