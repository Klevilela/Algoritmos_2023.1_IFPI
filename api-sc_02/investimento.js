/*Mariana resolveu investir de parte de seu salário
(um pedaço(R$) inferior a 30%) de forma fixa mensal; O investimento
escolhido rende mensalmente a uma taxa de juros de 0,01% até 1,00
% sobre o saldo do mês. Mariana tem um dado objetivo com este
investimento. Pergunte a ela qual o objetivo e de quanto ela precisa
para realizá-lo. Além disso, peça o salário, quanto(%) ela pretende
investir mensalmente e qual a taxa de juros do investimento
escolhido. Em seguida mostre em quantos meses ela atingirá o
objetivo. Se for acima de 12 meses mostre-o em anos e meses. A
cada mês você deve atualizar o saldo primeiro com o aporte
(depósito de valor do salário) e depois aplicar os créditos dos juros */

import { pedir_numero, pedir_texto, print } from "../utils.js";

function main(){
    const objetivo = pedir_texto('Qual é o seu objetivo: ')
    const valor_objetivo = pedir_numero('Valor do objetivo: ')
    const salario = pedir_numero('Salário: ')
    const investimento_mensal = pedir_numero('Quanto deseja investir(um valor inferior a 30 %): ')  
    const taxa_juros = pedir_numero('Taxa de juros: ')

    const valor_mensal_investido = salario * (investimento_mensal / 100)
    const juros = valor_mensal_investido * (taxa_juros / 100)
    const valor_investido = valor_mensal_investido + juros
    let valor_necessario = 0
    let qtd_meses_necessario = 0

    while(valor_necessario < valor_objetivo){
        qtd_meses_necessario ++
        valor_necessario += valor_investido
    }
    const tempo = qtd_meses_necessario


    if (tempo === 12){
        print(`Você vai precisar de 1 ano para ${objetivo} `)
    }
    if (tempo > 12){
        const anos = calcular_meses_em_anos(tempo)
        print(`Você vai precisar de ${anos} ano(s) e ${tempo - 12} mês/meses ${objetivo} `)
    }
    else{
        print(`Você vai precisar de ${tempo} meses para ${objetivo} `)
    }
}

function calcular_meses_em_anos(meses){
    return Math.trunc(meses / 12)
}

main()