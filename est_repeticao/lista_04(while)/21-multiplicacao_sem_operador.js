// 21. Leia 2 números inteiros e escreva a multiplicação dos mesmos, sem que o operador de multiplicação (*)
// seja utilizado.

import { pedir_numero, print } from "../../utils.js";

function main(){
    const n1 = pedir_numero('Número: ')
    const n2 = pedir_numero('Número: ')

    let somatorio = 0
    let atual = 0
    const vezes_necessaria = n2
    
    while (atual < vezes_necessaria){
        somatorio += n1
        atual ++
    }

    print(`Resultado: ${somatorio}`)
}

main()