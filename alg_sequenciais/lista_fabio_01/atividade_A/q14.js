/*14. Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada. */

import prompt from 'prompt-sync'
const input = prompt()

const nota1 = Number(input('Nota 1: '))
const nota2 = Number(input('Nota 2: '))
const nota3 = Number(input('Nota 3: '))

const peso1 = Number(input('\nPeso 1: '))
const peso2 = Number(input('Peso 2: '))
const peso3 = Number(input('Peso 3: '))

const media_ponderada = (nota1 * peso1) + (nota2 * peso2) + (nota3 * 3) / 3

console.log(`\nValor da média ponderada: ${media_ponderada}`)