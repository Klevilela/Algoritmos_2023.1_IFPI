/*25. Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.*/

import prompt from 'prompt-sync'
const input = prompt()

const valor_em_m = Number(input('Valor em m: '))

const valor_km = valor_em_m * 1000

console.log(`Valor em cm: ${valor_km}`)