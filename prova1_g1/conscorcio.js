import { pedir_numero, pedir_texto, print } from "../utils.js"

function main(){
    const valordoBem = pedir_numero('Valor do bem: ')
    const prazo = pedir_numero('Prazo em meses: ')
    const taxaAdministracao = pedir_numero('Valor da taxa de administração: ')
    const valorLance = pedir_numero('Valor do lance(entrada): ')
    const formaReducao = pedir_texto('Reduzir (prazo) ou manter(parcela) ? ')
    const rendaMensal = pedir_numero('Valor da renda mensal: ')

    let situacaoFormaPagamento

    if (formaReducao === 'prazo'){
        const novo_prazo = pedir_numero('Novo prazo em meses: ')
        situacaoFormaPagamento = exibir_simulacao_com_prazo_reduzido(
            valordoBem, taxaAdministracao, valorLance, prazo, novo_prazo, rendaMensal
        )
    }

    if (formaReducao === 'parcela'){
        situacaoFormaPagamento = exibir_simulacao(valordoBem, taxaAdministracao, valorLance, prazo, rendaMensal)
    }

    print(situacaoFormaPagamento)
}

function exibir_simulacao(valor, taxaConsorcio, entrada, prazo, renda){
    let resultadoSimulacao

    const valorTaxaConsorcio = valor * (taxaConsorcio / 100)
    const valorTotal = valor + valorTaxaConsorcio

    const valor_a_parcelar = valorTotal - entrada
    const valorParcelas = valor_a_parcelar / prazo
    
    const rendaMinima = 0.3 * renda

    if (valorParcelas > rendaMinima){
        resultadoSimulacao = `\nNão é possível fazer o resgate. A renda mínima para fazê-lo é de R$ ${rendaMinima}`
    }
    else
    {
        resultadoSimulacao = `\nValor das parcelas: R$ ${valorParcelas.toFixed(2)}`
        resultadoSimulacao += `\nTotal a pagar: R$ ${valorTotal.toFixed(2)}`
        resultadoSimulacao += `\nValor total da taxa de administração: R$ ${valorTaxaConsorcio.toFixed(2)}`
        resultadoSimulacao += `\nA renda de R$ ${renda.toFixed(2)} permite o resgate.`
    }

    return resultadoSimulacao
}

function exibir_simulacao_com_prazo_reduzido(valor, taxaConsorcio, entrada, prazoInicial, novoPrazo, renda){
    let resultadoSimulacao
    
    const valorTaxaConsorcio = valor * (taxaConsorcio / 100) 
    const valorTotal = valor + valorTaxaConsorcio
    
    const valor_a_parcelar = valorTotal - entrada
    const valorParcelas = valor_a_parcelar / novoPrazo
    
    const rendaMinima = 0.3 * renda
    const valor_inicial_parcela = valor_a_parcelar / prazoInicial

    if (valorParcelas > rendaMinima){
        resultadoSimulacao = `\nNão é possível fazer o resgate. A renda mínima para fazê-lo é de R$ ${rendaMinima.toFixed(2)}`
    }
    else
    {
        resultadoSimulacao = `\nValor inicial das parcelas: R$ ${valor_inicial_parcela.toFixed(2)}`
        resultadoSimulacao += `\nNovo prazo: ${novoPrazo} meses`

        resultadoSimulacao += `\n`
        
        resultadoSimulacao += `\nNovo valor das parcelas: R$ ${valorParcelas.toFixed(2)}`
        resultadoSimulacao += `\nTotal a pagar: R$ ${valorTotal.toFixed(2)}`
        resultadoSimulacao += `\nValor total da taxa de administração: R$ ${valorTaxaConsorcio.toFixed(2)}`
        resultadoSimulacao += `\nA renda de R$ ${renda.toFixed(2)} permite o resgate.`
    }

    return resultadoSimulacao
}

/*function exibir_simulacao_com_parecela_mantida(valor, taxaConsorcio, entrada, prazo, renda){
    let resultadoSimulacao
    const valorTotal = valor + (valor * (taxaConsorcio / 100))
    const valorTaxaConsorcio = valor * (taxaConsorcio / 100) 
    const valor_a_parcelar = valorTotal - entrada
    const valorParcelas = valor_a_parcelar / prazo
    const rendaMinima = valorParcelas * (0.3 * renda)

    if (valorParcelas > (renda * 0.3)){
        resultadoSimulacao = `Não é possível fazer o resgate. A renda mínima para fazê-lo é de R${rendaMinima}`
    }
    else
    {
        resultadoSimulacao = `Valor das parcelas: R$ ${valorParcelas}`
        resultadoSimulacao += `\nTotal a pagar: R$ ${valorTotal}`
        resultadoSimulacao += `\nValor total da taxa de administração: R$ ${valorTaxaConsorcio}`
    }

    return resultadoSimulacao
}
*/
main()