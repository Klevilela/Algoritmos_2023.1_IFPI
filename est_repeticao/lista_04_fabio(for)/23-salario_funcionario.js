/*23. Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de
horas trabalhadas e o seu no de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$
40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR.
Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N
funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário
líquido do funcionário.*/

import { pedir_numero, print} from '../../utils.js'

function main(){
    const qtd_fichas = pedir_numero('Quantidade de fichas a serem lidas: ')
    let codigo, horas_trabalhadas, dependentes
    let salario
    let inss, ir
    let salario_liquido
    
    if (qtd_fichas > 0){
        for (let i = 0; i < qtd_fichas; i++){
            codigo = pedir_numero('Código: ')
            horas_trabalhadas = pedir_numero('Horas trabalhadas: ')
            dependentes = pedir_numero('Número de dependentes: ')

            salario_bruto = (12 * horas_trabalhadas) + (40 * dependentes)
            inss = salario * (8.5/100)
            ir = salario * (5/100)
            descontos = inss + ir
            salario_liquido = salario_bruto - descontos
            
            print(`\nINSS: R$ ${inss}`)
            print(`IR: R$ ${ir}`)
            print(`\nIR: R$ ${salario_liquido}`)
        }
    }
}

main()