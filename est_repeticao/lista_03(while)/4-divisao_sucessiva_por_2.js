/*4. Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. Escreva o
resultado da última divisão efetuada. */

import { pedir_numero, print } from "../../utils";

function main(){
    const numero = pedir_numero('Número: ')
    let divisao
    let resultado 

    while (numero > 0){
        divisao = numero / 2
        resultado = divisao

        if (resultado >= 1){
            resultado / 2
        }
    }

    print(resultado)
}

main()