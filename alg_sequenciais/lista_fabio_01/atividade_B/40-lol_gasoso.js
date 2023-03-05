/*Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros). */

import prompt from 'prompt-sync'
const input = prompt()

const anos_fumando = Number(input('Quantos anos fumando ?: '))
const cigarros_por_dia = Number(input('Nº de cigarros fumados por dia: '))
const valor_carteira_de_cigarro = Number(input('Valor da carteira de cigarro: '))

const gasto_diario = (cigarros_por_dia / 20) * valor_carteira_de_cigarro
const gasto_anual = anos_fumando * 365 * valor_carteira_de_cigarro

console.log(`Gasto total com cigaros: ${gasto_anual}`)