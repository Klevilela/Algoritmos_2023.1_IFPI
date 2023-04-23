/*
25. Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para
cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que
estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando
quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora,
mostrando ao final, o número de cada canal e sua respectiva audiência.
*/

import { pedir_numero, print } from "../../utils.js";

function main(){
    let canal = pedir_numero('Canal: ')
    let qtd_espectadores = pedir_numero('Quantidade de expectadores: ')
    
    let percentual_canal_2 
    let percentual_canal_4
    let percentual_canal_5
    let percentual_canal_7
    let percentual_canal_10

    let espectadores_canal_2 = 0
    let espectadores_canal_4 = 0
    let espectadores_canal_5 = 0
    let espectadores_canal_7 = 0
    let espectadores_canal_10 = 0


    while (canal != 0){
        canal = pedir_numero('Canal: ')
        qtd_espectadores = pedir_numero('Quantidade de expectadores: ')

        if (canal === 2){
            espectadores_canal_2 += qtd_espectadores
        }
        if (canal === 4){
            espectadores_canal_4 += qtd_espectadores
        }
        if (canal === 5){
            espectadores_canal_5 += qtd_espectadores
        }
        if (canal === 7){
            espectadores_canal_7 += qtd_espectadores
        }
        if (canal === 10){
            espectadores_canal_10 += qtd_espectadores
        }
        else{
            canal = pedir_numero('Canal inválido. Digite um canal válido: ')
        }
    }

    const total_entrevistados = espectadores_canal_2 + espectadores_canal_4 + espectadores_canal_5 + espectadores_canal_7 + espectadores_canal_10
    percentual_canal_2 = (espectadores_canal_2 / total_entrevistados) * 100
    percentual_canal_4 = (espectadores_canal_4 / total_entrevistados) * 100
    percentual_canal_5 = (espectadores_canal_5 / total_entrevistados) * 100
    percentual_canal_7 = (espectadores_canal_7 / total_entrevistados) * 100
    percentual_canal_10 = (espectadores_canal_10 / total_entrevistados) * 100

    print(`Percentual de audiência - Canal 2: ${percentual_canal_2} %`)
    print(`Percentual de audiência - Canal 4: ${percentual_canal_4} %`)
    print(`Percentual de audiência - Canal 5: ${percentual_canal_5} %`)
    print(`Percentual de audiência - Canal 7: ${percentual_canal_7} %`)
    print(`Percentual de audiência - Canal 10: ${percentual_canal_10} %`)
}

main()