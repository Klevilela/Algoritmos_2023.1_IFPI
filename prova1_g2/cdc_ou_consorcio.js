import {pedir_numero, print} from '../utils.js'

function main(){
    const fipeArgo = 89000
    const valorCorollaCros = 185000

    const percentualFipe = pedir_numero('Percentual da FIPE do valor de venda do Argo: ')
    const tempo_meses = pedir_numero('Em quantos meses deseja parcelar: ')
    const taxa_juros = pedir_numero('Valor da taxa de juros(entre 1.2 a 2.5): ')
    const taxa_adm_consorcio = pedir_numero('Taxa de administração do consórcio(de 10 a 20): ')

    const valor_com_entrada = calcular_valor_base(valorCorollaCros, percentualFipe, fipeArgo)

    const valor_juros_cdc = calcular_juros_cdc(valor_com_entrada, taxa_juros, tempo_meses)
    const valor_do_consorcio = calcular_valor_consorcio(valorCorollaCros, taxa_adm_consorcio)

    const valor_a_financiar_cdc = calcular_valor_financiamento_cdc(valor_com_entrada, valor_juros_cdc)
    const valor_a_financiar_consorcio = calcular_valor_fianciamento_consorcio(valorCorollaCros, valor_com_entrada, valor_do_consorcio)

    const valor_parcelas_cdc = calcular_valor_parcela_cdc(valor_a_financiar_cdc, tempo_meses)
    const valor_parcelas_consorcio = calcular_valor_parcela_consorcio(valor_a_financiar_consorcio, tempo_meses)

    const total_a_pagar_cdc = calcular_valor_total_cdc(valor_com_entrada, valor_parcelas_cdc, tempo_meses)

    const total_a_pagar_consorcio = calcular_valor_total_consorcio
    (
        valor_com_entrada,
        valor_do_consorcio,
        tempo_meses,
        valor_parcelas_consorcio
    )

    const valores_cdc = exibir_valores_cdc
    (
        valor_com_entrada,
        valor_a_financiar_cdc,
        valor_juros_cdc,
        tempo_meses,
        valor_parcelas_cdc,
        total_a_pagar_cdc
    )

    const valores_consorcio = exibir_valores_consorcio
    (
        valor_com_entrada,
        valor_a_financiar_consorcio,
        tempo_meses,
        valor_parcelas_consorcio,
        total_a_pagar_consorcio
    )
    
    const modalidade_vantajosa = descobrir_modalidade_vantajosa
    (
        total_a_pagar_cdc,
        valor_parcelas_cdc,
        total_a_pagar_consorcio,
        valor_parcelas_consorcio
    )
    
    print(valores_cdc)
    print(valores_consorcio)
    print(modalidade_vantajosa)
}

function calcular_valor_base(valorCarroAlvo, percentualFipe,valorFipeCarro_a_Vender){
    return valorCarroAlvo - ((percentualFipe/100) * valorFipeCarro_a_Vender)
}
const calcular_juros_cdc= (valorDesontado, juros, tempo) => (valorDesontado * (juros/100)) * tempo
const calcular_valor_financiamento_cdc = (valorDesontado, juros) => valorDesontado + juros
const calcular_valor_parcela_cdc = (valor_a_financiar, tempo) => valor_a_financiar / tempo
const calcular_valor_total_cdc = (entrada, valorParcela, tempo) => entrada + (valorParcela * tempo)


const calcular_valor_consorcio = (valorCarroAlvo, taxa_adm_consorcio) => valorCarroAlvo * (taxa_adm_consorcio / 100)
function calcular_valor_fianciamento_consorcio(valorCarroAlvo, entrada, valorConsorcio){return (valorCarroAlvo - entrada) - valorConsorcio}
const calcular_valor_parcela_consorcio = (valorFinaciamentoConsorcio, tempo) => valorFinaciamentoConsorcio / tempo
const calcular_valor_total_consorcio = (entrada, consorcio, parcelas, tempo) => entrada + consorcio + (parcelas * tempo)

function exibir_valores_cdc(entrada, valorFinanciamento, juros, tempo, parcela, total){
    let valores_cdc
    valores_cdc = `\nValores com cdc`
    valores_cdc += `\n>Valor do bem(com entrada): ${entrada}`
    valores_cdc += `\n>Valor a ser Parcelado: R$ ${valorFinanciamento.toFixed(2)}`
    valores_cdc += `\n>Juros Totais: R$ ${juros.toFixed(2)}`
    valores_cdc += `\n>Parcelamento: ${tempo}x de R$ ${parcela.toFixed(2)}`
    valores_cdc += `\n>Valor do bem(com entrada): ${total.toFixed(2)}`

    return valores_cdc
}

function exibir_valores_consorcio(entrada, valorFinanciamento, tempo, parcela, total){
    let valores_consorcio
    valores_consorcio = `\n`
    valores_consorcio += `\nValores com consórcio`
    valores_consorcio += `\n>Valor do bem(com entrada): ${entrada.toFixed(2)}`
    valores_consorcio += `\n>Valor a ser Parcelado: R$ ${valorFinanciamento.toFixed(2)}`
    valores_consorcio += `\n>Parcelamento: ${tempo}x de R$ ${parcela.toFixed(2)}`
    valores_consorcio += `\n>Valor total: ${total.toFixed(2)}`

    return valores_consorcio
}

function descobrir_modalidade_vantajosa(valorFinal_cdc, prestacao_cdc, valorFinalConsorcio, prestcaoConsorcio){
    let modalidade_vantajosa

    if (valorFinal_cdc < valorFinalConsorcio && prestacao_cdc <= prestcaoConsorcio){
        modalidade_vantajosa = '\nA modalidade do cdc é mais vantajosa'}
    else{modalidade_vantajosa = '\nA modalidade do consórcio é mais vantajosa'}

    return modalidade_vantajosa
}

main()