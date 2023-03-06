/*21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).*/

import prompt from 'prompt-sync'
const input = prompt()

const temperatura_em_fahrenheit = Number(input('Temperatura em ºC: '))

const temperatura_celcius = (5 * temperatura_em_fahrenheit - 160) / 9

console.log(`Temperatura em ºC: ${temperatura_celcius.toFixed(2)}`)