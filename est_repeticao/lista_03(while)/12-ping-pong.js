/*
12. Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e
responda quem ganha a partida. A partida chega ao final se:
· Um dos jogadores chega a 21 pontos e a diferença de pontos entre os jogadores é maior ou igual a 2.
· Se a primeira não for atendida, ganha aquele que, com mais de 21 pontos, consiga colocar uma
diferença de 2 pontos sobre o adversário.
 */

import { pedir_numero, print } from "../../utils.js";

function main(){
    let codigo = pedir_numero('Código')
    let pontuacao_jogador1, pontuacao_jogador2 = 0
    const pontuacao_partida = 21
    while (codigo === 1 || codigo === 2){
        codigo = pedir_numero('Código: ')
        if (codigo === 1){
            pontuacao_jogador1 ++
        }
        if (codigo === 2){
            pontuacao_jogador2 ++
        }
    }
    const diferenca = Math.abs(pontuacao_jogador1 - pontuacao_jogador2)
    if (pontuacao_jogador1 > pontuacao_jogador2 && pontuacao_jogador1 == pontuacao_partida){
        if (diferenca >= 2){
            print('O vencedor da partida é o jogador 1')
        }
    }    
    if (pontuacao_jogador2 > pontuacao_jogador1 && pontuacao_jogador2 == pontuacao_partida){
        if (diferenca >= 2){
            print('O vencedor da partida é o jogador 1')
        }
    }
    else{
        while (diferenca < 2){
            codigo = pedir_numero('Número: ')
            if (codigo === 1){
                pontuacao_jogador1 ++
            }
            if (codigo === 2){
                pontuacao_jogador2 ++
            }
        }

        //if (pontuacao_jogador1 )
    }
}

main()