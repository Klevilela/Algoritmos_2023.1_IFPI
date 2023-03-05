/*Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.*/
import prompt from 'prompt-sync'
const input = prompt()

const valor_horas = Number(input('Informe o valor em horas: '))
const valor_minutos = Number(input('Informe o valor em minutos: '))

const hora_em_minutos = (60 * valor_horas) + valor_minutos

console.log(`O valor de ${valor_horas} hora(s) e ${valor_minutos} minutos\nEm minutos é ${hora_em_minutos}`)