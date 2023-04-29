import {pedir_numero, pedir_texto, print} from '../utils.js'
import { calcular_cashback, calcular_percentual_investido, calcular_valor_medio } from './utils/gift_utils.js'
/*

[gift.js] Uma loja presenteia suas clientes com descontos (cashback) progressivos de acordo com suas compras.
Desta forma, para compras mensais de até R$ 250 reais, é feita a conversão (geração) de cashback de 5%;
Para compras acima de R$ 250 até R$ 500, 7% de cashback; De R$ 500 até R$ 750, 8% de cashback;
E para compras acima de R$ 750 é aplicado primeiramente as regras anteriores até R$ 750 do valor em cada faixa,
e 25% sobre o valor acima de R$ 750.
Operações de cashbacks progressivos têm o objetivo de incentivar as suas clientes a comprarem mais e ao mesmo tempo serem compensadas por isso.
Implemente um software para auxiliar no cálculo do cashback mensal de suas clientes (devem ser lidos N compras Nome Cliente e Valor Compras). 
Informe quanto foi o faturamento total (soma das vendas); Quanto foi distribuído em cashback;
Qual o valor em reais e percentual investido em cashback pela loja; Maior, menor e valor médio pago em cashback. 
 */


function main(){
    const qtd_compras = pedir_numero('Quantidade de compras: ') 
    let valor_compra
    let nome
    let compras = 0
    let faturamento = 0
    let valor_acumulado_cashback = 0
    let maior_valor_cashback = 0
    let menor_valor_cashback = Infinity


    while (compras < qtd_compras){
        compras ++
        print('\n')
        valor_compra = pedir_numero('Valor de compra: ')
        nome = pedir_texto('Nome: ')

        let cashback_atual = calcular_cashback(valor_compra)        
        
        if (cashback_atual > maior_valor_cashback){
            maior_valor_cashback = cashback_atual
        }
        if (cashback_atual < menor_valor_cashback){
            menor_valor_cashback = cashback_atual
        }
        
        valor_acumulado_cashback += cashback_atual
        faturamento += valor_compra

    }

    const valor_distribuido_cashback = valor_acumulado_cashback
    const percentual_investido = calcular_percentual_investido(valor_acumulado_cashback, faturamento)
    const valor_medio_pago_cashback = calcular_valor_medio(valor_acumulado_cashback, qtd_compras)

    print(`\nFaturamento: R$ ${faturamento}`)
    print(`Valor distribuido em cashback: R$ ${valor_distribuido_cashback}`)
    print(`Percentual investido em cashback pela loja: ${percentual_investido.toFixed(2)} %`)
    print(`Menor valor pago em cashback: R$ ${menor_valor_cashback}`)
    print(`Maior valor pago em cashback: R$ ${maior_valor_cashback}`)
    print(`Valor médio pago em cashback: R$ ${valor_medio_pago_cashback.toFixed(2)}`)
}


main()