/*Leia 3 números, calcule e escreva a média dos números.*/

import prompt from 'prompt-sync'
const input = prompt()

const n1 = Number(input(`Número 1: `))
const n2 = Number(input(`Número 2: `))
const n3 = Number(input(`Número 3: `))

const media = (n1 + n2 + n3) / 3

console.log(`Média: ${media}`)