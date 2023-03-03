/*16. Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2) */

import prompt from 'prompt-sync'
const input = prompt()

const lado = Number(input('Lado do quadrado: '))
const area_quadrado = lado ** 2

console.log(`Área do quadrado: ${area_quadrado}`)