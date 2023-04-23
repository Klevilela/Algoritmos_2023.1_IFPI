/*7. Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.*/

import { pedir_numero, print } from "../../utils.js";

function main(){
    const numero = pedir_numero('Número: ')
    let outro_numero = pedir_numero('Número: ')
    const primeiro = numero
    
    while (outro_numero != primeiro){
        outro_numero = pedir_numero('Pedir numero: ')
    }
}

main()