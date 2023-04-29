// função para aprovar empréstimo
export function aprovar_emprestimo(parcela, renda){
    parcela < renda ? 'APROVADO' : 'NEGADO'
}

// função para calcular IOF
export function calcular_iof(valor, dias){
    const iof = ((0.38/100) * valor) + ((0.0082/100) * dias)
    
    return iof
}


//função para calcular juros usando a o prazo em função da selic
export function calcular_selic(prazo){
    const selic = (13.75/100)
    let valor

    if (prazo > 2 && prazo <= 6){
        valor = 0.5 * selic
    }
    else if(prazo <= 12){
        valor = 0.75 * selic
    }
    else if(prazo <= 18){
        valor = selic
    }
    else{
        valor = selic * 1.3
    }

    return valor
}

//função para calcular a taxa de  juros
export function calcular_taxa_juros(valor, selic, iof){
    return ((valor  * selic) + iof) 
}

// função para calcular o valor total do financiamento
export function calcular_valor_total(valor, juros){
    return valor + juros
}

// função para calcular valor da parcela
export function calcular_valor_parcela(total, tempo){
    const valor_parcela = total / tempo
    return valor_parcela

    // else{
    //     return 'Parcela acima de 40% da renda'
    // }
}

//função para converter o prazo em dias
export function converter_meses_para_dias(meses){
    return meses * 30
}

// função para saber quanto % o valor da parcela compromete a renda mensal
export function calcular_comprometimento_renda_mensal(parcela, renda){
    const valor = parcela / renda
    if (valor <= 0.4 * renda){
        return valor
    } 
}