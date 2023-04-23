/*1. Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus
divisores. (flag número = 0).*/

import { pedir_numero, print } from "../../utils";

function main(){
    let numero = pedir_numero('Número: ')

    while (numero !== 0){  
        print(numero)
        mostrar_divisores(numero)
        numero = pedir_numero('Número: ')
    }
}

function mostrar_divisores(numero){
    let cadidato = 1
    while (cadidato >= 1){
        if (eh_divisor(cadidato, numero)){
            print(`\n>${cadidato}`)
        }
        cadidato ++
    }
}

function eh_divisor(candidato, numero){
    return candidato % numero === 0
}

main()