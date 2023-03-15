/*12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.*/

import {pedir_numero} from '../../utils.js'

function main(){
    const salario = pedir_numero('Salário: ')
    const salario_aumentado = aumenta_salario(salario)

    console.log(`Salário com aumento de 25%: R$ ${salario_aumentado}`)
}

function aumenta_salario(salario){
    return salario + (salario * (25/100))
}

main()