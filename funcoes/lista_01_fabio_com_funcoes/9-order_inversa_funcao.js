/*Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).*/

import {pedir_numero} from '../../utils.js'

function main(){
    const a = pedir_numero('A: ')
    const b = pedir_numero('B: ')
    
    const ordem_inversa = inverte_ordem(a, b)
    
    console.log(ordem_inversa)
}

function inverte_ordem(v1, v2){
    return `\nA: ${v2}\nB: ${v1}`
}

main()