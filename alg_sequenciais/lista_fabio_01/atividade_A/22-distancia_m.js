/*22. Leia um valor em km, calcule e escreva o equivalente em m.*/

import prompt from 'prompt-sync'
const input = prompt()

const valor_km = Number(input('Valor em Km:'))

const valor_em_m = valor_km * 1000

console.log(`Valor em metros: ${valor_em_m}`)
