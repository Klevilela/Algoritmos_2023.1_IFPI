/*Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior ou igual a
cada uma das duas prestações; estas devem ser iguais, inteiras e as maiores possíveis. Por exemplo, se o
valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00; se o valor da
mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00.
Escreva um algoritmo que receba o valor da mercadoria e forneça o valor da entrada e das duas
prestações, de acordo com as regras acima.*/

import {pedir_numero, print} from '../../utils.js'

function main(){
    const valor_da_mercadoria = pedir_numero('Valor da mercadoria: ')
    const valor_da_entrada = obter_valor_da_entrada(valor_da_mercadoria)
    const valor_das_prestacoes = obter_valor_das_prestacoes(valor_da_mercadoria)

    print(`\nEntrada de ${valor_da_entrada.toFixed(2)} e 2x de R$ ${valor_das_prestacoes.toFixed(2)}`)
}

function obter_valor_da_entrada(valor){
    const valor_da_mercadoria_distribuido = Math.trunc(valor / 3)
    const resto_do_valor_distribuido = Math.trunc(valor % 3)

    const entrada = valor_da_mercadoria_distribuido + resto_do_valor_distribuido

    return entrada
}

function obter_valor_das_prestacoes(valor){
    const valor_de_entrada = obter_valor_da_entrada(valor)
    const valor_prestacoes = Math.trunc((valor - valor_de_entrada) / 2)

    return valor_prestacoes
}

main()