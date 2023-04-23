/*2. Leia 2 (dois) números, calcule e escreva o mmc (mínimo múltiplo comum) entre os números lidos. */

import { pedir_numero, print } from "../../utils.js";

function main(){
    const n1 = pedir_numero('Número: ')
    const n2 = pedir_numero('Número: ')
    let mmc = 1
    while (n1 > 0 && n2> 0){
        if (n1 < n2){
            if (mmc % n1 !== 0 && mmc % 2 !== 0){
                mmc *= n1
            }
        }
        else{
            if (mmc % n1 !== 0 && mmc % 2 !== 0){
                mmc *= n2
            }
        }
    }

    if (mmc % n1 == 0 && mmc % n2 === 0){
        print(`O mmc de ${n1} e ${n2} é ${mmc}`)
    }
}

main()