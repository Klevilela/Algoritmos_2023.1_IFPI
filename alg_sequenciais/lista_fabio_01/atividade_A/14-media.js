/*14. Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada. */

import prompt from 'prompt-sync'
const input = prompt()

const nota1 = Number(input('Nota 1: '))
const nota2 = Number(input('Nota 2: '))
const nota3 = Number(input('Nota 3: '))

console.log()

const peso1 = Number(input('Peso 1: '))
const peso2 = Number(input('Peso 2: '))
const peso3 = Number(input('Peso 3: '))

const soma_dos_pesos = peso1 + peso2 + peso3
const somatorio = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)

const media_ponderada = somatorio / soma_dos_pesos 

console.log(`\nSomatório: ${somatorio}\nSoma dos pesos ${soma_dos_pesos}\nValor da média ponderada: ${media_ponderada.toFixed(2)}`)
