/*Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele
corresponde.*/

import prompt from 'prompt-sync'
const input = prompt()

const numero_de_horas = Number(input('Valor em horas: '))

const semanas = Math.trunc(numero_de_horas / 168)
const dias = numero_de_horas - (168 * semanas)
const horas = 24 % dias

console.log(`${numero_de_horas} horas corresponde a ${semanas} semana(s) ${dias} dia(s) e ${horas} horas`)