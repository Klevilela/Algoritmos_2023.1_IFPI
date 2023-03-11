/*
Uma pessoa estabeleceu como meta perder X % do Peso Corporal em Y semanas.
Sabendo que 1 kg de gordura corresponde a cerca de 7700 kcal, calcule o déficit calórico médio diário necessário para alcançar essa meta. 
Pergunte ao usuário qual seu Peso atual, qual sua meta % de redução de Peso e em quantas semanas.
Pergunte ainda quanto ele tá disposto a consumir de kcal diariamente. 

Seu objetivo é informar ao usuário qual deve ser seu deficit calórico diário médio
e também quanto de exercícios diários ele deve fazer para alcançar esse deficit alvo considerando sua ingestão calórica informada.

Faça simulações manuais para Elaborar o algoritmo. E então, após ter a solução, automatizar via software.
*/

import { pedir_numero } from '../../utils.js'

function main(){
    const peso = pedir_numero('Peso: ')
    const meta_reducao = pedir_numero('Meta de redução (%): ')
    const semanas = pedir_numero('Em quantas semanas ? ')

    const deficit_calorico_medio = calcula_deficit_calorico(peso, meta_reducao, semanas)
    
    console.log(`Déficit calórico médio diário: ${deficit_calorico_medio} Kcal`)
}

function calcula_deficit_calorico(p, meta, tempo){
    const valor_a_ser_perdido = p * (meta / 100)
    const semanas_em_dias = tempo * 7
    const deficit_diario_medio = (valor_a_ser_perdido * 7700) / semanas_em_dias

    return deficit_diario_medio
}

main()