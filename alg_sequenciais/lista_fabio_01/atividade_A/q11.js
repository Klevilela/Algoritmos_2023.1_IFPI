/*11. Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235) */

import prompt from 'prompt-sync'
const input = prompt()

const numero = input('Número: ')

const primeiro_numero = numero[0]
const numero_intermediario = numero[1]
const ultimo_numero = numero[2]

console.log(`Número: ${numero}\nNúmero inverso: ${ultimo_numero + numero_intermediario + primeiro_numero}`)