/*Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)*/

import prompt from 'prompt-sync'
const input = prompt()

const vel_km = Number(input('Velocidade em km/h: '))

const vel_ms = vel_km / 3.6

console.log(`A velocidade em m/s é: ${vel_ms} m/s`)