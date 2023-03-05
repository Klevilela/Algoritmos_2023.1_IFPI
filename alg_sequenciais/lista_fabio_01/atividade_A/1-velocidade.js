/*Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)*/
import prompt from 'prompt-sync'
const input = prompt()

const vel_ms = Number(input('Velocidade em m/s: '))

const vel_km = vel_ms * 3.6

console.log(`A velocidade em Km/H é: ${vel_km} Km/H`)