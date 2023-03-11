/*
Dada a distância da prova (em metros) e a velocidade média do atleta (em km/h), calcule o tempo da prova em minutos.
Para resolver esse exercício, você pode utilizar a fórmula:
tempo = (distância / (velocidade * 1000)) * 60
Aqui, a distância está em metros e a velocidade está em km/h,
então é necessário converter a velocidade para metros por minuto, multiplicando por 1000 e dividindo por 60.
Para obter o resultado final em minutos, é necessário multiplicar o resultado da fórmula por 60.
Lembre-se de utilizar as funções disponíveis (sqrt, pow, floor e %) e os operadores aritméticos (+, -, *, / e %) para realizar os cálculos.
*/

import { pedir_numero } from "../../utils.js";

function main(){
    const distancia = pedir_numero('Distância em metros: ')
    const velocidade = pedir_numero('Velocidade em Km/H: ')

    const tempo = calcula_tempo_em_minutos(distancia, velocidade)

    console.log(`Tempo: ${tempo} minutos`)
}

function calcula_tempo_em_minutos(dis, vel){
    const tempo = (dis / (vel * 1000)) * 60
    return tempo.toFixed(2)
}

main()