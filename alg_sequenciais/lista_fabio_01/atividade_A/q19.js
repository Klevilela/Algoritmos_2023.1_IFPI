/*19. Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)*/

import prompt from 'prompt-sync'
const input = prompt()

const raio = Number(input('Raio: '))
const pi = 3.14

const volume_esfera = 4 * pi * (raio ** 3) / 3

console.log(`Comprimento: ${volume_esfera}`)