/*Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.

d = (x2 - x1)² + (y2-y1)²
*/

import prompt from 'prompt-sync'
const input = prompt()

const x1 = Number(input('Valor de X1: '))
const x2 = Number(input('Valor de X2: '))
const y1 = Number(input('Valor de Y1: '))
const y2 = Number(input('Valor de Y2: '))

const valor_ponto_1 = (x2 - x1) ** 2
const valor_ponto_2 = (y2 - y1) ** 2

const d = Math.sqrt(valor_ponto_1 + valor_ponto_2)

console.log(`${d}`)

