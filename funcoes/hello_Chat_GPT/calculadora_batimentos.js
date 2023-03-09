/*"Calculadora de Batimentos Cardíacos" 
Crie um programa que receba a idade de uma pessoa e calcule a sua frequência cardíaca máxima,
que é dada pela fórmula 220 menos a idade.
O programa deve então calcular a faixa de batimentos cardíacos ideais para atividades físicas moderadas e intensas,
que correspondem a 50-70% e 70-85% da frequência cardíaca máxima, respectivamente. Os resultados devem ser exibidos na tela. 
Nome do arquivo: calculadora_batimentos.js */

import { pedir_numero } from '../../utils.js'

function main(){
    const idade = pedir_numero('Idade: ')
    const freq_cardiaca_max = 220 - idade

    console.log(batimentos_cardiacos_ideais_moderado(freq_cardiaca_max))
    console.log(batimentos_cardiacos_ideais_intenso(freq_cardiaca_max))
}

function batimentos_cardiacos_ideais_moderado(frequencia_maxima){
    const batimento_moderado_minimo = Math.trunc((50/100) * frequencia_maxima)
    const batimento_moderado_maximo = Math.trunc((70/100) * frequencia_maxima)

    return `Faixa de batimentos ideais para atividade moderada: ${batimento_moderado_minimo} - ${batimento_moderado_maximo} Bpm`
}

function batimentos_cardiacos_ideais_intenso(frequencia_maxima){
    const batimento_intenso_minimo = Math.trunc((70/100) * frequencia_maxima)
    const batimento_intenso_maximo = Math.trunc((85/100) * frequencia_maxima)

    return `Faixa de batimentos ideais para atividade intensa: ${batimento_intenso_minimo} - ${batimento_intenso_maximo} Bpm`
}

main()