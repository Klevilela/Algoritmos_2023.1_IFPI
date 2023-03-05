/*Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o
resultado em forma de fração.*/

import prompt from 'prompt-sync'
const input = prompt()

const fracao_1 = input('Fração 1: ').split('/')
const fracao_2 = input('Fração 2: ').split('/')

const numerador1 = Number(fracao_1[0])
const denominador1 = Number(fracao_1[1])

const numerador2 = Number(fracao_2[0])
const denominador2 = Number(fracao_2[1])

const mmc = denominador1 * denominador2

const novo_numerador_1 = (mmc / denominador1) * numerador1
const novo_numerador_2 = (mmc / denominador2) * numerador2

const soma_dos_numeradores = novo_numerador_1 + novo_numerador_2

const resultado_nova_fracao = soma_dos_numeradores / mmc


console.log()
console.log(`  ${soma_dos_numeradores}` + '\n ____')
console.log(`\n  ${mmc}  `)
console.log()

