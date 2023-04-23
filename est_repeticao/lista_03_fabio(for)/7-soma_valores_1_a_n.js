/*7. Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido. */

import {pedir_numero, print} from '../../utils.js'

function main(){
    const numero = pedir_numero('Número: ')
    const somatorio = calcular_somatorio(numero)
    print(`Somatório: ${somatorio}`)
}


function calcular_somatorio(valor){
    let somatorio = 0
    for (let i = 1; i <= valor; i++) {
        somatorio += i
    }

    return somatorio
}

main()

//1 + 2 + 3 + 4 + 5 = 15