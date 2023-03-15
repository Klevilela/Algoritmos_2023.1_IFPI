/*Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.

d = (x2 - x1)² + (y2-y1)²
*/

import {pedir_numero, print} from '../../utils.js'

function main(){
    const x1 = pedir_numero('Valor de x1: ')
    const y1 = pedir_numero('Valor de y1: ')
    
    const x2 = pedir_numero('Valor de x2: ')
    const y2 = pedir_numero('Valor de y1: ')

    const distancia = obter_distancia_entre_pontos(x1, y1, x2, y2)
    print(`Distância entre pontos: ${distancia}`)

}

function obter_distancia_entre_pontos(x1, y1, x2, y2){
    const ponto1 = (x2 - x1) ** 2
    const ponto2 = (y2 - y1) ** 2

    const distancia = ponto1 - ponto2
    return distancia
}


main()