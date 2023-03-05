/*Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.*/

import prompt from 'prompt-sync'
const input = prompt()

const idade_em_anos = Number(input('Idade em anos: '))
const idade_em_meses = Number(input('Idade em meses: '))
const idade_em_dias = Number(input('Idade em dias: '))


const anos_e_meses_para_dias = Math.trunc((365.25 * idade_em_anos)) + (idade_em_meses * 30)
const idade_final_em_dias = anos_e_meses_para_dias + idade_em_dias


console.log(`Ìdade em dias: ${idade_final_em_dias}`)
