/*
19. Em um frigorífico, cada boi traz em seu pescoço um cartão contendo o seu n.o de identificação e seu
peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o n.o de identificação e o peso do
boi mais magro e do boi mais gordo. (Flag: n.o identificação=0)
*/

import { pedir_numero, print } from "../../utils.js";

function main(){
    let id_boi = pedir_numero('Nº de indetificação do boi: ')
    let peso
    let id_boi_gordo, id_boi_magro
    let peso_mais_magro = Infinity
    let peso_mais_gordo = - Infinity

    while (id_boi !== 0){
        id_boi = pedir_numero('Nº de indetificação do boi: ')

        if (peso >= 0){
            peso = pedir_numero('Peso: ')
        }

        if (peso > peso_mais_magro){
            peso_mais_gordo = peso
            id_boi_gordo = id_boi
        }
        if (peso < peso_mais_magro){
            peso_mais_magro = peso
            id_boi_magro = id
        }
    }

    print(`Id do boi mais magro: ${id_boi_magro}`)
    print(`Id do boi mais gordo: ${id_boi_gordo}`)
    print(`Peso do boi mais magro: ${peso_mais_magro}`)
    print(`Id do boi mais gordo: ${peso_mais_gordo}`)
}

main()