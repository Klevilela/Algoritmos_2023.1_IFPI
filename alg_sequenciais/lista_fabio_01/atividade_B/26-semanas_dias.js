/*26. Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.*/

import prompt from 'prompt-sync'
const input = prompt()

const num_dias = Number(input('Número de dias: '))

const semanas = Math.trunc(num_dias / 7)
const dias = num_dias % 7

console.log(`${num_dias} dias corresponde a ${semanas} semanas e ${dias} dias`)