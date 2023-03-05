/*Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
pelo usuário.*/

import prompt from 'prompt-sync'
const input = prompt()

const qtd_de_latao_em_kg = Number(input('Quantidade de latão em kg: '))

const qtd_cobre = (qtd_de_latao_em_kg * 1000) * 0.7
const qtd_zinco = (qtd_de_latao_em_kg * 1000) - qtd_cobre

console.log(`${qtd_de_latao_em_kg} kg de latão é constituído de ${qtd_cobre} g de zinco e ${qtd_zinco} g de cobre`)

