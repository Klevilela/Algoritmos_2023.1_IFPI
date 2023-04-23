/*Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos. */

import {pedir_numero, print} from '../../utils.js'

function main(){
    const numero = pedir_numero('Número: ')
    //const multiplos = calcular_multiplos(numero)

    let multiplos = 1
    for (let i = 1; i <= numero; i ++){
        if (numero % i === 0){
            multiplos = i
            print(multiplos)
        }
    }
}


main()