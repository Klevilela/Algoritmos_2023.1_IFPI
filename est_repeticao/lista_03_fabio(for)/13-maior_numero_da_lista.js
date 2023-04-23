/*13. Leia N e uma lista de N números e escreva o maior número da lista. */

import { pedir_numero, print } from "../../utils.js";

function main(){
    const qtd_numeros = pedir_numero('Quantidade de números a pedir: ')
    let numero
    let maior = 0
    for (let i = 0; i < qtd_numeros; i++) {
        numero = pedir_numero('Número: ')
        if (numero > maior){
            maior = numero
        }
    }
    print(`Maior número: ${maior}`)
}

main()