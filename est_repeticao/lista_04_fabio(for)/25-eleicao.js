/*
Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos.
Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:
· 1, 2, 3 = voto para os respectivos candidatos;
· 9 = voto nulo;
· 0 = voto em branco;
Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva:
a) total de votos para cada candidato;
b) total de votos nulos;
c) total de votos em branco;
d) quem venceu a eleição.
 */

import { pedir_numero, print } from "../../utils";

function main(){
    const qtd_eleitores = pedir_numero('Quantidade de eleitores para votar: ')
    let opcao_voto
    let qtd_nulos, qtd_votos_em_branco = 0
    let qtd_votos_candidato1 = 0
    let qtd_votos_candidato2 = 0
    let qtd_votos_candidato3 = 0
    let vencedor

    for (let i = 0 ;i < qtd_eleitores; i++){
        print('1- candidato A\n2-Candidato B\n3- Candidato C\n9- nulo\n 0- voto em branco')
        voto = pedir_numero('> ')

        if (opcao_voto === 1){
            qtd_votos_candidato1 ++
        }
        if (opcao_voto === 2){
            qtd_votos_candidato2 ++
        }
        if (opcao_voto === 3){
            qtd_votos_candidato3 ++
        }
        if (opcao_voto === 9){
            qtd_nulos ++
        }
        if (opcao_voto === 0){
            qtd_votos_em_branco ++
        }
        else{
            opcao_voto = pedir_numero('Valor inválido. Digite um valor válido: ')
        }
    }

    if (qtd_votos_candidato1 > qtd_votos_candidato2 && qtd_votos_candidato1 > qtd_votos_candidato3){
        vencedor = 'O candidato 1 venceu a eleição !'
    }
    if (qtd_votos_candidato2 > qtd_votos_candidato1 && qtd_votos_candidato2 > qtd_votos_candidato3){
        vencedor = 'O candidato 2 venceu a eleição !'
    }
    if (qtd_votos_candidato3 > qtd_votos_candidato2 && qtd_votos_candidato3 > qtd_votos_candidato1){
        vencedor = 'O candidato 3 venceu a eleição !'
    }

    print(`Total de votos candidato 1: ${qtd_votos_candidato1}`)
    print(`Total de votos candidato 2: ${qtd_votos_candidato2}`)
    print(`Total de votos candidato 3: ${qtd_votos_candidato3}`)
    print(`Totoal de votos nulos: ${qtd_nulos}`)
    print(`Total de votos em branco: ${qtd_votos_em_branco}`)
    print(`${vencedor}`)

}

main()