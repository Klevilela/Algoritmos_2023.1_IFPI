/*Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias. */

import prompt from 'prompt-sync'
const input = prompt()

const idade_em_dias = Number(input('Idade em dias: '))

const idade_em_anos = Math.trunc(idade_em_dias / 365)
const resto_idade_em_anos = Math.trunc(idade_em_dias % 365)
const idade_em_meses = Math.trunc((resto_idade_em_anos / 30))
const dias = Math.trunc((resto_idade_em_anos % 30))

console.log(`${idade_em_dias} dias correspondem a ${idade_em_anos} ano(s) ${idade_em_meses} meses e ${dias} dias`)