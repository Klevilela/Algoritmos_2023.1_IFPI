/* A SERASA começou a implantar o Serasa Score 2.0 em 2021. O Score é uma forma de avaliar o perfil do consumidor no momento da
aquisição de crédito, seja cartão de crédito ou financiamento de um veículo, apartamento ou empréstimo pessoal.
Desta forma são avaliadas algumas entradas de dados históricos consumidor e,
caso não esteja negativado, apresentando um valor entre 0 e 1000.
Baseado nisso, faça um programa que receba valores de 0 a 100 em cada um dos 3 critérios de cálculo,
ou seja, como se fosse uma Escala, no item
a. você pode ter de 0 a 100, se for 100, por exemplo, significa 100% dos pontos previstos,
assim Score 1.0 (260) e Score 2.0 (620), se fosse 50%
então esse item a. seria 130 e 310, respectivamente em cada Score 1.0 e 2.0.
Aplique essa formula de cada uma e apresente o valor do Score tanto
versão Score 1.0 quanto na versão Score 2.0.
*/

import { pedir_numero, print } from "../utils.js";

import { calcular_score_v1,
    calcular_score_v2,
    calcular_faixa_de_scorev1,
    calcular_faixa_de_scorev2
} from './utils/serasa_utils.js'

function main(){
    print(`
Dados positivos (cartão de crédito, consórcio, consignado,empréstimos
e financiamentos)comportamentos de pagamento,tempo dos contratos e tipos de contratos`)
    const criterio_a = pedir_numero('> ')

    print('\nInformações de dívidas, histórico de regularização e em aberto')
    const criterio_b = pedir_numero('> ')
    
    print('\nConsultas para novos contratos de serviço ou crédito')
    const criterio_c = pedir_numero('> ')
    
    const pontuacao_score_v1 = calcular_score_v1(criterio_a, criterio_b, criterio_c)
    const pontuacao_score_v2 = calcular_score_v2(criterio_a, criterio_b, criterio_c)

    const faixa_v1 = calcular_faixa_de_scorev1(pontuacao_score_v1)
    const faixa_v2 = calcular_faixa_de_scorev2(pontuacao_score_v2)

    print(`\nScore 1.0: ${pontuacao_score_v1} - ${faixa_v1}`)
    print(`Score 2.0: ${pontuacao_score_v2} - ${faixa_v2}`)
}


main()