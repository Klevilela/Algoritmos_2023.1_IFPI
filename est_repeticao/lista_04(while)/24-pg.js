/*
23. Escreva um algoritmo que leia a razão de uma PG (Progressão Geométrica) e o seu primeiro termo e
escreva os N termos da PG. Ler o valor de N.
*/

import { pedir_numero, print } from "../../utils";

function main(){
    const razao = pedir_numero('Pedir número: ')
    const termo_inicial = pedir_numero('Pedir número: ')
    const termos_a_mostrar = pedir_numero('Pedir número: ')

    let valor_termo = termo_inicial

    while (termo_inicial < termos_a_mostrar){
        valor_termo *= razao
        print(valor_termo)
    }
}

main()