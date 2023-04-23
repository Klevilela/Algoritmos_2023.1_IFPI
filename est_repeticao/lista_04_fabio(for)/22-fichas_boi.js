/*
Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,
nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o
numero de identificação e o peso do boi mais magro e do boi mais gordo.
*/

import { pedir_numero, pedir_texto, print } from "../../utils";

function main(){
    const qtd_fichas = pedir_numero('Quantidade de fichas a serem lidas: ')
    let id, nome, peso
    let mais_pesado = Infinity * -1
    let mais_magro = Infinity
    let id_magro, id_pesado

    for (let i = 0; i < qtd_fichas; i ++){
        id = pedir_numero('Id do boi: ')
        nome = pedir_texto('Nome do boi: ')
        peso = pedir_numero('Peso do boi: ')

        if (peso > mais_pesado){
            mais_pesado = peso
            id_pesado = id
        }
        else{
            mais_magro = peso
            id_magro = id
        }
    }

    print(`Id do boi mais magro: ${id_magro}`)
    print(`Id do boi mais gordo: ${id_magro}`)

}

main()