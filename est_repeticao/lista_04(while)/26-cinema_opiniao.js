/*
26. Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião
em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e
a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1).
· a média das idades das pessoas que responderam ótimo;
· a quantidade de pessoas que respondeu regular;
· o percentual de pessoas que respondeu bom entre os entrevistados.
*/

import { pedir_numero, print} from '../../utils.js'

function main(){
    let idade = pedir_numero('Idade: ')
    let opiniao = pedir_numero('1-ótimo; 2-bom; 3-regular; 4-péssimo: ')

    let total_entrevistados = 0
    let somatorio_idade_otimo = 0
    let quantidade_opiniao_otimo = 0
    let quantidade_opiniao_bom = 0
    let quantidade_opiniao_regular = 0

    while (idade > -1){
        idade = pedir_numero('Idade: ')
        opiniao = pedir_numero('1-ótimo; 2-bom; 3-regular; 4-péssimo: ')

        total_entrevistados ++
        
        if (opiniao === 1){
            somatorio_idade_otimo += idade
            quantidade_opiniao_otimo ++
        }
        if (opiniao === 2){
            quantidade_opiniao_bom ++
        }
        if (opiniao === 3){
            quantidade_opiniao_regular ++
        }
    }

    const media_idade_otimo = somatorio_idade_otimo / total_entrevistados
    const percentual_bom = (total_entrevistados / quantidade_opiniao_bom) * 100
      
    print(`Média das idades das pessoas que responderam ótimos: ${Math.trunc(media_idade_otimo)} anos`)
    print(`Quantidade de pessoas que respondeu regular: ${quantidade_opiniao_regular} anos`)
    print(`Percentual das pessas que responderam bom entre os entrevistados: ${percentual_bom} anos`)
}

main()