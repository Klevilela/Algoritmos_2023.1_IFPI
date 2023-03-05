/*Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.*/

import prompt from 'prompt-sync'
const input = prompt()

const nibble = input('Digite a sequência binária de 4 dígitos: ')

const v1 = Number(nibble[0])
const v2 = Number(nibble[1])
const v3 = Number(nibble[2])
const v4 = Number(nibble[3])

const valor_em_decimal = (v1 * 8) + (v2 * 4) + (v3 * 2) + (v4 * 1)

console.log(`Valor em decimal: ${valor_em_decimal}`)
