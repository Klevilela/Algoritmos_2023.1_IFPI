/*Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o. */
import prompt from 'prompt-sync'
const input = prompt()

const numero__1 = Number(input('Número: '))
const numero__2 = Number(input('Número: '))

const quociente = Math.trunc(numero__1 / numero__2)
const resto = numero__1 % numero__2

console.log(`Quociente: ${quociente}\nResto: ${resto}`)