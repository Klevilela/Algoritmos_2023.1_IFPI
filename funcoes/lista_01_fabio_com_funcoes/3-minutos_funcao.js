/*Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos. */
import {pedir_numero} from '../../utils.js'

function main(){
    const valor_em_minutos = pedir_numero('Valor em minutos: ')
    const valor_em_horas_e_minutos = converte_para_horas_e_minutos(valor_em_minutos)

    console.log(`${valor_em_minutos} minuto(s) corresponde a ${valor_em_horas_e_minutos}`)
}

function converte_para_horas_e_minutos(valor_minutos){
    const horas = Math.trunc(valor_minutos / 60)
    const minutos = Math.trunc(valor_minutos % 60)
    
    return `${horas} hora(s) e ${minutos} minuto(s)`
}

main()