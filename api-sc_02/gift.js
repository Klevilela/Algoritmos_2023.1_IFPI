import {pedir_numero, pedir_texto, print} from '../utils.js'

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

    while (compras < qtd_compras){
        compras ++
        valor_compra = pedir_numero('Valor de compra: ')
        nome = pedir_texto('Nome: ')

        if (valor_compra > 250 && valor_compra <= 500){
            calcular_cashback(valor_compra)
            valor_acumulado_cashback += calcular_cashback(valor_compra)

        }
        else if (valor_compra > 250 && valor_compra <= 500){
            calcular_cashback(valor_compra)
            valor_acumulado_cashback += calcular_cashback(valor_compra)
        }
        else if (valor_compra > 250 && valor_compra <= 500){
            calcular_cashback(valor_compra)
            valor_acumulado_cashback += calcular_cashback(valor_compra)
        }

        valor_acumulado_cashback += calcular_cashback(valor_compra)
        faturamento += valor_compra
    }

    const valor_distribuido_cashback = valor_compra - valor_acumulado_cashback) * 100

    print(`Faturamento: R$ ${faturamento}`)
    print(`Valor distribuido em cashback: R$ ${valor_distribuido_cashback}`)
    print(`Valor `)

}

function calcular_cashback(valor){
    let cashback

    if (valor > 250 && valor <= 500){
        cashback = valor * .7
    }
    else if (valor <= 750){
        cashback = valor * .8
    }
    else{
        //E para compras acima de R$ 750 é aplicado primeiramente as regras anteriores até R$ 750 do valor em cada faixa,
        //e 25% sobre o valor acima de R$ 750.
        cashback = (valor * .7) + (valor * .8) + .25 * (valor - 750) 
    }

    return cashback
}

main()