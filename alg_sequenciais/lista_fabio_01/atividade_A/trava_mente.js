/*Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.*/
import prompt from 'prompt-sync'
const input = prompt()

const n1 = Number(input('Número: '))
const n2 = Number(input('Número: '))
const n3 = Number(input('Número: '))

const soma_dois_primeiros = n1 + n2
const diferenca_dois_ultimos = n2 - n3

console.log(`Resultado da soma dos dois primeiros: ${soma_dois_primeiros}`)
console.log(`Resultado da diferença entre os dois últimos: ${diferenca_dois_ultimos}`)