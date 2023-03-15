/*18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)*/

import {pedir_numero,print} from '../../utils.js'

function main(){
    const raio = pedir_numero('Valor do raio: ')
    const comprimento_circunferencia = calcula_comprimento_circunferencia(raio)

    print(`Comprimento da circunferência: ${comprimento_circunferencia.toFixed(2)}`)
}

function calcula_comprimento_circunferencia(r){
    return 2 * 3.14 * r
}

main()