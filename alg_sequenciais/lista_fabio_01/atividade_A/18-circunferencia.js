/*18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)*/

import prompt from 'prompt-sync'
const input = prompt()

const raio = Number(input('Raio: '))
const pi = 3.14

const comprimento = 2 * pi * raio

console.log(`Comprimento: ${comprimento}`)