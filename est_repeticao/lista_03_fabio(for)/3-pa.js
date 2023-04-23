/*3. Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
Aritmética que tem por valor inicial A0 e razão R. */

import {pedir_numero, print} from '../../utils.js'

function main(){
    const inicial = pedir_numero('Limite inicial: ')
    const final = pedir_numero('Limite final: ')
    const razao = pedir_numero('Razão: ')

    for (let i = inicial; i <= final; i+= razao) {
        print(i) 
    }
}

main()