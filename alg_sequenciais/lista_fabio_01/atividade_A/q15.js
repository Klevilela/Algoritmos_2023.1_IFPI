/*15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2) */
import prompt from 'prompt-sync'
const input = prompt()

const base = Number(input('Base: '))
const altura = Number(input('Altura: '))

const area_triangulo = (base * altura) / 2

console.log(`Área: ${area_triangulo}`)