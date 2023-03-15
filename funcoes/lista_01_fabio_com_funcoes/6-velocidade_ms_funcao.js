/*Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)*/

import {pedir_numero} from '../../utils.js'

function main(){
    const velocidade_kmH = pedir_numero('Velocidade em Km/H: ')
    const velocidade_ms = converte_velocidade_para_ms(velocidade_kmH)
    console.log(`Velocidade em m/s: ${velocidade_ms}`)
}

function converte_velocidade_para_ms(velocidade){
    return Math.trunc(velocidade / 3.6)
}

main()