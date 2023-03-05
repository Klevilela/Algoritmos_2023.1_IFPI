/*20. Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)*/

import prompt from 'prompt-sync'
const input = prompt()

const temperatura_em_celcius = Number(input('Temperatura em ºC: '))

const temperatura_fahrenheit = (9 * temperatura_em_celcius + 160) / 5

console.log(`Temperatura em ºF: ${temperatura_fahrenheit}`)