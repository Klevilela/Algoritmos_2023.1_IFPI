/*10. Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos. */

import { pedir_numero, print } from "../../utils.js";

function main(){
    const limiteSuperior = pedir_numero('Limite superior: ')
    const limiteInferior = pedir_numero('Limite superior: ')

    for (let i = limiteInferior; i <= limiteSuperior; i ++) {
        if (i % 2 !== 0){
            print(i)
        }
    }
}

main()