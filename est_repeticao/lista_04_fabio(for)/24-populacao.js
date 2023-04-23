/*
A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e
número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e
escreva:
a) média de salário da população;
b) média de número de filhos;
c) percentual de pessoas com salário de até R$ 1.000,00.
 */

import { pedir_numero, print} from '../../utils.js'

function main(){
    const numero_habitantes = pedir_numero('Quantos habitantes deseja saber informações: ')
    let salario, filhos, percentual_habitantes_salario_ate_mil
    let somatorio_salario, somatorio_filhos = 0
    let media_salarial, media_filhos
    let populacao
    let qtd_pessoas_com_salario_ate_mil = 0

    if (numero_habitantes > 0){
        for (let i = 1; i < numero_habitantes + 1; i++){
            salario = pedir_numero('Salário: ')
            filhos = pedir_numero('Quantidade de filhos: ')
            
            somatorio_salario += salario
            somatorio_filhos += filhos
            //populacao = i + filhos

            if (salario > 0 && salario <= 1000){
                qtd_pessoas_com_salario_ate_mil ++
            }
        }

        media_salarial = somatorio_salario / numero_habitantes
        media_filhos = somatorio_filhos / numero_habitantes
        percentual_habitantes_salario_ate_mil = (qtd_pessoas_com_salario_ate_mil / numero_habitantes) * 100 
        
        print(`Média do salário da população: R$ ${media_salarial}`)
        print(`Média do número de filhos: ${media_filhos}`)
        print(`Percentual de pessoas com salário até R$ 1000.00: ${percentual_habitantes_salario_ate_mil}%`)
    }
}

main()