/*1. Leia N e escreva todos os números inteiros de 1 a N. */
import {pedir_numero, print} from '../../utils.js'

function main(){
    const numero = pedir_numero('Limite final: ')

    for (let i = 0; i <= numero; i++) {
       print(i)
    }
}

main()