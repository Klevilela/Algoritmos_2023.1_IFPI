/*/*15. Leia o valor da base e altura de um triângulo,
calcule e escreva sua área. (área=(base * altura)/2)*/

import {pedir_numero} from '../../utils.js'

function main(){
    const base = pedir_numero('Medida da base: ')
    const altura = pedir_numero('Medida da altura: ')
    const area = calcula_area_triangulo(base, altura)

    console.log(`Área: ${area}`)
}

function calcula_area_triangulo(base, altura){
    return base * altura
}

main()
