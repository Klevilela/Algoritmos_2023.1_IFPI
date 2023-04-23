/*Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci
(0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2.*/

import { pedir_numero, print } from "../../utils.js";

function main(){
    const n_termos = pedir_numero('Mostrar quantos termos da sequência de Fibonacci: ')
    let termo_anterior = 0
    let termo_seguinte = 1
    
    for (let i = 0; i < n_termos; i ++){
        print(termo_anterior)
        print(termo_seguinte)
    }
}

main()
