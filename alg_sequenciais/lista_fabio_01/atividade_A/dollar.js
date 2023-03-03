/*Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).*/
import prompt from 'prompt-sync'
const input = prompt()

const valor_do_dolar = Number(input('Valor do Dólar: '))
const valor_em_dolar = Number(input('Valor em dólar($):'))

const valor_em_reais = valor_em_dolar * valor_do_dolar

console.log(`O valor em reais é: ${valor_em_reais} R$`)
