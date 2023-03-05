/*Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos. */
import prompt from 'prompt-sync'
const input = prompt()

const valor_minutos = Number(input('Informe o valor em minutos: '))

const horas = Math.trunc(valor_minutos / 60)
const minutos = valor_minutos - (horas * 60)

console.log(`O valor de ${valor_minutos} minutos\nEm horas é ${horas} e em minutos é ${minutos}`)