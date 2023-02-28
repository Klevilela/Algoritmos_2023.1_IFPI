import prompt from 'prompt-sync'
const input = prompt()

const medida = Number(input('Valor da medida: '))

const area_quadrado = medida ** 2

console.log(`A medida da área do quadrado é ${area_quadrado}`)