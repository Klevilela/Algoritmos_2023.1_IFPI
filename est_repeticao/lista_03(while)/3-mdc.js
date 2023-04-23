/*3. Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum) entre os números lidos. */
import { pedir_numero, print } from "../../utils.js";

function main(){
    const n1 = pedir_numero('Número: ')
    const n2 = pedir_numero('Número: ')

    let mdc

    while (n1 > 0 && n2 > 0){
        if (n1 > n2){
            mdc = n1
            if (mdc % n1 !== 0 && mdc % n2 !== 0){
                mdc += n1  
            }
        }
        if (n2 > n1){
            mdc = n2
            if (mdc % n1 !== 0 && mdc % n2 !== 0){
                mdc += n2  
            }
        }
    }

    if (mdc % n1 === 0 && mdc % n2 === 0){
        print(`mdc de ${n1} e ${n2}`)
    }

}