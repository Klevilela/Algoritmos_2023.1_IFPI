import { pedir_numero, pedir_texto, print } from "../utils.js";

function main(){
    const valorIphone = pedir_numero('Valor do Iphone: ')
    const formaPagamento = pedir_texto('Forma de pagamento: ')

    const valor_pix_especie = calcular_valor_pix_especie(valorIphone)
    const valor_cartao_debito = calcular_valor_debito(valorIphone)

    let valor_economia

    if (formaPagamento === 'credito'){
        const entrada = pedir_numero('Valor de entrada: ')
        const qtd_parcelas = pedir_numero('Quantidade de parcelas(até 12x): ')
        const valor_cartao_credito = calcular_valor_credito(valorIphone, entrada, qtd_parcelas)
        const valor_juros = calcular_juros(entrada, valorIphone, qtd_parcelas, valor_cartao_credito)
        
        print(`Valor: R$ ${valor_cartao_credito}\nVocê pagará R$ ${valor_juros.toFixed(2)} de juros`)
    }
    if (formaPagamento === 'debito'){
        valor_economia = calcular_economia(valorIphone, valor_cartao_debito)
        print(`Valor: R$ ${valor_cartao_debito}\nVocê economizará R$ ${valor_economia}`)
    }
    if (formaPagamento === 'pix' || formaPagamento === 'especie'){
        valor_economia = calcular_economia(valorIphone, valor_pix_especie)
        print(`Valor: R$ ${valor_pix_especie}\nVocê economizará R$ ${valor_economia}`)
    }
}

function calcular_valor_pix_especie(valor){
    return valor - (valor * .15)
}

function calcular_valor_debito(valor){
    return valor - (valor * .1)
}

function calcular_valor_credito(valor, entrada, parcelas){
    let valor_credito
    if (entrada > 0){
        valor_credito = valor + (valor * 3.99/100) + (1.5 * parcelas / 100) - entrada 
    }
    else{valor_credito = valor + (valor * 3.99/100) + (1.5 * parcelas / 100)}
    return valor_credito
}

function calcular_economia(valor, valor_descontado){
    return valor - valor_descontado
}

function calcular_juros(entrada, valor, parcelas, valor_com_juros){
    if (entrada > 0){
        return (valor_com_juros + entrada) - valor
    }
    else{
        return valor_com_juros - valor
    }
}

main()