/*"Calculadora de Água" 
Crie um programa que receba o peso e a atividade física diária de uma pessoa e calcule a quantidade de água que ela deve beber por dia.
A quantidade de água recomendada é de 35 ml por quilo de peso para pessoas com atividade física moderada,
e 45 ml por quilo de peso para pessoas com atividade física intensa. O resultado do cálculo deve ser exibido na tela. 
Nome do arquivo: calculadora_agua.js */
import {pedir_texto, pedir_numero} from '../../utils.js'

function main(){
    const peso = pedir_numero('Peso: ')
    const atividade = pedir_texto('Atividade física diária: ')

    const qtd_recomendada_ativ_moderada = calcula_quantidade_ideal_atividade_moderada(peso)
    const qtd_recomendada_ativ_intensa = calcula_quantidade_ideal_atividade_intensa(peso)
    
    console.log(`Quantidade ideal de água para quem pratica atividade física moderada: ${qtd_recomendada_ativ_moderada} ml`)  
    console.log(`Quantidade ideal de água para quem pratica atividade física intensa: ${qtd_recomendada_ativ_intensa} ml`)  
}

function calcula_quantidade_ideal_atividade_moderada(peso){
    const qtd_agua = peso * 35
    return qtd_agua
}

function calcula_quantidade_ideal_atividade_intensa(peso){
    const qtd_agua = peso * 45
    return qtd_agua
}

main()