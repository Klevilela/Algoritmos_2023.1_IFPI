/*Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.*/

import {pedir_numero, print} from '../../utils.js'

function main(){
    const idade_anos = pedir_numero('Idade em anos: ')
    const idade_meses = pedir_numero('Idade em meses: ')
    const idade_dias = pedir_numero('Idade em dias: ')
    
    const idade_em_dias = converter_idade_para_dias(idade_anos, idade_meses, idade_dias)

    print(`\nIdade em dias: ${idade_em_dias}`)
}

function converter_idade_para_dias(ano, mes, dia){
    const idade_anos_para_dias = Math.trunc(ano * 365.25)
    const idade_meses_para_dias = mes * 30

    const somatorio_idade_em_dias = idade_anos_para_dias + idade_meses_para_dias + dia

    return somatorio_idade_em_dias
}

main()