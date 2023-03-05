/*Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
número = 9534 ; soma = 9+5+3+4 = 21.*/

import prompt from 'prompt-sync'
const input = prompt()

const numero = input('Número: ')

const v1 = Number(numero[0])
const v2 = Number(numero[1])
const v3 = Number(numero[2])
const v4 = Number(numero[3])

const soma = v1 + v2 + v3 + v4

console.log(`Soma dos elementos: ${soma}`)