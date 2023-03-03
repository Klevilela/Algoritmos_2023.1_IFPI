/*Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).*/
import prompt from 'prompt-sync'
const input = prompt()

const a = Number(input('Número A: '))
const b = Number(input('Número B: '))

console.log(`\nNúmero B: ${b}\nNúmero A: ${a}`)