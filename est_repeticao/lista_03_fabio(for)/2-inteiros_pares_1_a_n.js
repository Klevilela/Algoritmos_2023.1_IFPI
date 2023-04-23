/*2. Leia N e escreva todos os números inteiros pares de 1 a N. */
import {pedir_numero, print} from '../../utils.js'

function main(){
    const numero = pedir_numero('Limite final: ')

    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0){
            print(i)
        } 
    }
}

main()