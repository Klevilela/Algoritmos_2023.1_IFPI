/*Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
segundos ele corresponde.*/

import prompt from 'prompt-sync'
const input = prompt()

const valor_em_segundos = Number(input('Segundos: '))

const horas = Math.trunc(valor_em_segundos / 3600)
const minutos = valor_em_segundos % 60
const segundos = minutos % 60

console.log(`${valor_em_segundos} segundos corresponde a ${horas} hora(s) ${minutos} minuto(s) e ${segundos} segundo(s)`)
