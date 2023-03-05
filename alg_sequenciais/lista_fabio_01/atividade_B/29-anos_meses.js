/*Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde. */

import prompt from 'prompt-sync'
const input = prompt()

const numero_de_meses = Number(input('Valor em meses: '))

const anos = Math.trunc(numero_de_meses / 12)
const meses = numero_de_meses % 12


console.log(`${numero_de_meses} meses corresponde a ${anos} ano(s) e ${meses} meses`)