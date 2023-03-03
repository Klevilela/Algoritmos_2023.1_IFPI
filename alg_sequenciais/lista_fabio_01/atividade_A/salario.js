/*12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.*/

import prompt from 'prompt-sync'
const input = prompt()

const salario = Number(input('Informe seu salário: '))

const novo_salario = salario + (salario * .25)

console.log(`Novo salário: R$ ${novo_salario}`)