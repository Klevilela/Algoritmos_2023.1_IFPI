/*23. Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).*/

import prompt from 'prompt-sync'
const input = prompt()

const valor_kg = Number(input('Valor em Kg:'))

const valor_em_g = valor_kg * 1000

console.log(`Valor em metros: ${valor_em_g}`)