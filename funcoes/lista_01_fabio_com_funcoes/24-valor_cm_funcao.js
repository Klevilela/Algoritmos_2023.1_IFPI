/*24. Leia um valor em m, calcule e escreva o equivalente em cm.*/

import {pedir_numero, print} from '../../utils.js'

function main(){
    const valor_em_metros = pedir_numero('Valor em metros: ')
    const valor_em_cm = converter_para_cm(valor_em_metros)

    print(`Valor em cm: ${valor_em_cm}`)
}

function converter_para_cm(valor){
    return valor * 100
}

main()