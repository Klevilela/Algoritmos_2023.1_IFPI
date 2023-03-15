/*Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
segundos ele corresponde.*/

import {pedir_numero, print} from '../../utils.js'

function main(){
    const segundos = pedir_numero('Valor em segundos: ')
    const valor_em_horas = converter_para_hora(segundos)
    const valor_em_minutos = converter_para_minutos(segundos)
    const valor_em_segundos = converter_para_segundos(segundos)

    print(`${valor_em_horas} hora(s) ${valor_em_minutos} minuto(s) e ${valor_em_segundos} segundo(s)`)
}

function converter_para_hora(tempo){
    return Math.trunc(tempo / 3600)
}

function converter_para_minutos(tempo){
    const restante_das_horas = tempo % 3600
    const minuto_obtido = Math.trunc(restante_das_horas / 60)

    return minuto_obtido
}

function converter_para_segundos(tempo){
    const minutos_restantes =  tempo % 3600
    const segundo_obtido = minutos_restantes % 60

    return segundo_obtido
}

main()