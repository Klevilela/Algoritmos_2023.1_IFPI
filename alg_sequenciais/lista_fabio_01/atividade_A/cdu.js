/*Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).*/

import prompt from 'prompt-sync'
const input = prompt()

const numero = input('Informe um número: ')

const centena = Number(numero[0]) * 100
const dezena = Number(numero[1]) * 10
const unidade = Number(numero[2])

const resultado_numero = centena + dezena + unidade

console.log(`${resultado_numero} = ${centena} + ${dezena} + ${unidade}`)