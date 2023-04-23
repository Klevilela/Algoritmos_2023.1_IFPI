/*
Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios
descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2
somas. (Flag: salário=0)

De Até Acréscimo
R$ 0,00 R$ 2.999,99 25 %
R$ 3.000,00 R$ 5.999,99 20 %
R$ 6.000,00 R$ 9.999,99 15 %
Acima de R$ 10.000,00 10 %
 */
import { pedir_numero, print} from '../../utils.js'

function main(){
    let salario = pedir_numero('Salário: ')
    let novo_salario
    let soma_salarios_atuais = 0
    let soma_dos_salarios_reajustaos = 0
    

    while (salario > 0){
        salario = pedir_numero('Salário: ')

        novo_salario = reajusta_salario(salario)
        print(`Novo salário: R$ ${novo_salario}`)
        soma_dos_salarios_reajustaos += novo_salario
        soma_salarios_atuais += salario
    }
    
    const diferenca_entre_as_duas_somas = soma_dos_salarios_reajustaos - soma_salarios_atuais
    
    print(`Soma dos salários atuais: R$ ${soma_salarios_atuais}`)
    print(`Diferença entre as duas somas: R$ ${diferenca_entre_as_duas_somas}`)
}

function reajusta_salario(valor){
    let salario

    valor > 0 && valor < 3000 ? salario = valor + (.25 * valor):
    valor < 6000 ? salario = valor + (.2 * valor):
    valor < 10000 ? salario = valor + (.15 * valor):
    salario = valor + (.1 * valor)

    return salario
}

main()