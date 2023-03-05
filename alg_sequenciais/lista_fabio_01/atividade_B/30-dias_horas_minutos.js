/*Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
corresponde.*/

// how to convert minutes in days ?

import prompt from 'prompt-sync'
const input = prompt()

const valor_em_minutos = Number(input('Valor em minutos: '))

const dias = Math.trunc(valor_em_minutos / 1440) 
const horas = dias * 730.5
const minutos = horas % 60


console.log(`${valor_em_minutos} minutos corresponde a ${dias} mes/meses, ${horas} hora(s) e ${minutos} minutos`)

// how to install prompt-sync ?

