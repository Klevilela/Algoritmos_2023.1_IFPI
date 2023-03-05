/*Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
D = R + S

R = (A + B)²
S = (B + C)²
*/

import prompt from 'prompt-sync'
const input = prompt()

const a = Number(input('Valor A: '))
const b = Number(input('Valor B: '))
const c = Number(input('Valor C: '))

const r =  (a + b) ** 2
const s =  (b + c) ** 2
const d = r + s

console.log(`${d}`)