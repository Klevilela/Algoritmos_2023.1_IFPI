import {pedir_numero, pedir_texto, print} from '../utils.js'

function main(){
    const valor_veiculo = pedir_numero('Valor do veículo: ')
    const renda_comprador = pedir_numero('Renda do comprador: ')
    const regime_servidor = pedir_texto('Servidor público, privado ou autônomo: ')
    const entrada = pedir_numero('Valor da entrada: ')
    const percentual_valor_saida = pedir_numero('Valor do percentual de saída: ')
    const tempo_pagamento = pedir_numero('Em quantos meses deseja pagar o saldo devedor: ')
    const taxa_juros = pedir_numero('Valor da taxa de juros do financiamento: ')
    const inflacao_mes = pedir_numero('Valor da inflação do mês: ')

    let resultado

    const tempo_em_dias = converter_meses_para_dias(tempo_pagamento)
    const valor_entrada = verificar_valor_entrada(entrada, valor_veiculo)
    const valor_saida = verificar_valor_saida(valor_veiculo, inflacao_mes,percentual_valor_saida)

    const descontos = calcular_somatorio_entrada_e_saida(valor_entrada, valor_saida)
    const saldo_devedor = calcular_saldo_devedor(valor_veiculo, descontos)
    const iof = calcular_iof(saldo_devedor)
    const juros = calcular_valor_com_juros(saldo_devedor, iof, taxa_juros, tempo_pagamento, tempo_em_dias)
    const saldo_devedor_final = calcular_saldo_devedor_final(saldo_devedor, juros)

    const valor_parcelas = calcular_valor_parcelas(saldo_devedor_final, tempo_pagamento)
    const total_a_pagar = calcular_total_a_pagar(descontos, valor_parcelas, tempo_pagamento)
    const situacao_parcela = verifica_parcela_adequada(regime_servidor, valor_parcelas, renda_comprador)

    const exibicao_valores = exibir_valores_compra(
        valor_entrada,
        saldo_devedor,
        iof,
        saldo_devedor_final,
        valor_saida,
        tempo_pagamento,
        valor_parcelas,
        descontos,
        total_a_pagar,
        situacao_parcela
    )

    if (!valor_entrada || !valor_saida || !situacao_parcela){
        resultado =  'Valor de entrada ou saída acima ou inferiores que o limite ordenado'
    }
    else{
        resultado = exibicao_valores
    }

    print(resultado)


}

function verificar_valor_entrada(entrada, valor){
    let valorEntrada = entrada
    valorEntrada <= .3 * valor ? valorEntrada  : valorEntrada = 'Valor de entrada inferior que 30% do valor do veículo'
}    

function verificar_valor_saida(valor, inflacao, percentualSaida){
    const correcao_inflcacao = valor * (inflacao / 100)
    let valorSaida = (percentualSaida/100) * valor
    valorSaida > 0 && valorSaida <= .3 * valor ? valorSaida += correcao_inflcacao
    : valorSaida = 'Valor de saída superior a 30% do valor do veículo'
}

function calcular_somatorio_entrada_e_saida(entrada, saida){
    const somatorio = entrada + saida
    return somatorio
}

const calcular_saldo_devedor = (valor, descontos) => valor - descontos

function calcular_iof(valorRestante, tempoDias){
    return ((0.38/100) * valorRestante) + (((0.01118/100) * tempoDias) * valorRestante)
}

function calcular_valor_com_juros(valorRestante, iof, taxa, tempoMeses, tempoDias){
    const capital = valorRestante
    const taxa_juros =  (taxa/100)
    const tempo = tempoMeses
    
    const juros = (capital * iof) * (taxa_juros * tempo)   
    const valor_com_juros = capital + juros

    if (taxa > 1.87){
        return valor_com_juros 
    }
}

function calcular_saldo_devedor_final(valorRestante, juros){
    return valorRestante + juros
}

function calcular_valor_parcelas(valorFinal, tempo){
    return valorFinal /  tempo
}

function verifica_parcela_adequada(tipoServidor, valorParcela, renda){
    if (tipoServidor === 'privado' || tipoServidor === 'autonomo'){
        if (parcela > 0 && parcela <= 0.3 * renda){
            return `A parcela de R$ ${valorParcela} cabe na renda do comprador`
        }else{
            return 'Valor de parcela acima de 30% da renda do cliente'
        }
    }
    if (tipoServidor === 'publico'){
        if (parcela > 0 && parcela <= 0.35 * renda){
            return `A parcela de R$ ${valorParcela} cabe na renda do comprador`
        }else{
            return 'Valor de parcela acima de 35% da renda do cliente'
        }
    }
}

function calcular_total_a_pagar(entradaSaida, parcelas, tempo){
    return entradaSaida + (parcelas * tempo)
}

const converter_meses_para_dias = (meses) => meses * 30

function exibicao_valores_compra(entrada, saldoDevedor, iof, saldoFinal, saida, tempo, Valorparcela, descontos, total, situacao_parcela){
    let valores
    valores = `\n`
    valores += `\nValor de entrada: R$ ${entrada.toFixed(2)}`
    valores += `\nValor a ser financiado sem o IOF: R$ ${saldoDevedor.toFixed(2)}`
    valores += `\nValor do IOF: R$ ${iof.toFixed(2)}`
    valores += `\nValor a ser financiado com IOF: R$ ${saldoFinal.toFixed(2)}`
    valores += `\nValor da saída: R$ ${saida.toFixed(2)}`
    valores += `\n${tempo}x de R$ ${Valorparcela.toFixed(2)}`
    valores += `\nSoma das parcelas: R$ ${descontos.toFixed(2)}`
    valores += `\nTotal a ser pago: R${total.toFixed(2)}`
    valores += `\n${situacao_parcela}`

    return valores
}

main()