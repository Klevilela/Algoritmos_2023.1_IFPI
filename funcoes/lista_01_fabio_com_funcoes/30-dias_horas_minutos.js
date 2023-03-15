/*Leia um número inteiro de minutos, calcule e escreva quantos dias,
quantas horas e quantos minutos ele
corresponde.*/

import { pedir_numero, print } from "../../utils.js";

function main(){
    const valor_em_minutos = pedir_numero('Valor em minutos: ')
    const dias = converter_minuto_para_dias(valor_em_minutos)
    const horas = converter_minuto_para_hora(valor_em_minutos)
    const minutos = obter_minutos_restantes_da_hora(valor_em_minutos)

    print(`${dias} dia(s) ${horas} hora(s) e ${minutos} minuto(s)`)
}

function converter_minuto_para_dias(valor){
    return Math.trunc(valor / 1440)   
}

function converter_minuto_para_hora(valor){
    const horas_restantes_em_minutos = valor % 1440
    const hora_obtida = Math.trunc(horas_restantes_em_minutos / 60)

    return hora_obtida
}

function obter_minutos_restantes_da_hora(valor){
    const minutos_restantes = valor % 1440
    const minuto_obtido = Math.trunc(minutos_restantes % 60)

    return minuto_obtido
}

main()

