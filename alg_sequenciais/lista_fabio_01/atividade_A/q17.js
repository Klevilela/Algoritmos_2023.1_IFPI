/*17. Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)*/

import prompt from 'prompt-sync'
const input = prompt()

const base = Number(input('Base: '))
const altura = Number(input('Altura: '))

const area_retangulo = (base * altura)

console.log(`Área: ${area_retangulo}`)