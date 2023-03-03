/*13. Leia um valor em real (R$), calcule e escreva 70% deste valor. */

import prompt from 'prompt-sync'
const input = prompt()

const valor = Number(input('Valor: '))

const parte_do_valor = valor * .7

console.log(`70% de ${valor} é igual a ${parte_do_valor}`)