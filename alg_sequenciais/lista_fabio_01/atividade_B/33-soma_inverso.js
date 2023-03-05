/*Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.*/
import prompt from 'prompt-sync'
const input = prompt()

const numero = input('Número: ')
const valor_numero = Number(numero)

//variáveis para inverter o número
const primeiro = numero[0]
const num_intermediario = numero[1]
const ultimo = numero[2]

const inverso = ultimo + num_intermediario + primeiro
const valor_inverso = Number(inverso)

const diferenca = valor_numero + valor_inverso

console.log(`${diferenca}`)