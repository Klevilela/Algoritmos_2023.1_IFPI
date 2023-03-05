/*24. Leia um valor em m, calcule e escreva o equivalente em cm.*/

import prompt from 'prompt-sync'
const input = prompt()

const valor_em_m = Number(input('Valor em m: '))

const valor_cm = valor_em_m * 100

console.log(`Valor em cm: ${valor_cm}`)