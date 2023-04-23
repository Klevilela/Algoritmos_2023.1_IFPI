/*
18. Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de
crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes,
crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão
necessários, para que a população da cidade A ultrapasse a população da cidade B.
*/

import { print } from "../../utils.js";

function main(){
    const população_inicial_cidade_A = 200000
    const população_inicial_cidade_B = 800000
    const taxa_anual_crescimento_A = 3.5/100
    const taxa_anual_crescimento_B = 1.35/100

    let valor_crescimento_a = população_inicial_cidade_A * taxa_anual_crescimento_A
    let valor_crescimento_b = população_inicial_cidade_B * taxa_anual_crescimento_B
    let anos

    while(populacao_inicial_cidade_A < população_inicial_B){
        valor_crescimento_a = população_inicial_cidade_A * valor_crescimento_a
        valor_crescimento_b = população_inicial_cidade_B * valor_crescimento_b
        anos ++
    }

    print(`São necessários ${anos} para que a cidade A ultrapasse a população da cidade B`)
}

main()