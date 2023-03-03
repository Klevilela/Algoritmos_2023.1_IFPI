/*Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos. */
import prompt from 'prompt-sync'
const input = prompt()

const n1 = Number(input('Número: '))
const n2 = Number(input('Número: '))

const resultado = (n1 + n2) / (n1 - n2)

console.log(`Resultado: ${resultado}`)