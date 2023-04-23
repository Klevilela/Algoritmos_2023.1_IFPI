/*5. Leia um número, calcule e escreva seu fatorial. */
import {pedir_numero, print} from '../../utils.js'

function main(){
    const numero = pedir_numero('Fatorial: ')
    const valor_fatorial = calcular_fatorial(numero)
    print(`O valor do fatorial de ${numero} é ${valor_fatorial}`)
}


function calcular_fatorial(valor){
    let produto_antecessores = 1
    for (let i = 2; i <= valor - 1; i++) {
        produto_antecessores *= i
    }
    
    const fatorial = valor * produto_antecessores

    return fatorial
}

main()