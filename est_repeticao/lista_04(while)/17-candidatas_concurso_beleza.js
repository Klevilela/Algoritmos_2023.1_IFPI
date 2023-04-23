/*
17. Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. Escreva um
algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais
baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM').
*/

import { pedir_numero, pedir_texto, print} from '../../utils.js'

function main(){
    let nome = pedir_texto('Nome: ')
    let altura, peso
    let nome_mais_alta
    let nome_mais_baixa
    let nome_mais_gorda, nome_mais_magra
    let peso_mais_magra = - Infinity
    let peso_mais_gorda = Infinity

    while (nome != 'fim'){
        nome =  pedir_texto('Nome: ')
        altura =  pedir_numero('Altura: ')
        peso =  pedir_numero('Peso: ')

        if (peso_mais_gorda < peso){
            peso_mais_gorda = peso
        }
        if (peso_mais_magra > peso){
            peso_mais_magra = peso
        }
        if (altura)
    }

}

main()