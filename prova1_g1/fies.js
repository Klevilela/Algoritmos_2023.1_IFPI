import {pedir_numero, print} from '../utils.js'

function main(){
    const duracaoCurso = pedir_numero('Duração do curso em anos: ')
    const valorMensalidade = pedir_numero('Valor da mensalidade do curso: ')
    
    const taxaSelicAtual = pedir_numero('Taxa selic atual: ')
    const salarioMinVigente = pedir_numero('Salário mínimo vigente: ')

    const rendaFamiliar = pedir_numero('Renda familiar R$: ')
    const qtdPessoasFamilia = pedir_numero('Quantidade de pessoas na família: ')
    
    const anoIngresso = pedir_numero('Ano de ingresso no curso: ')
    const semestreIngresso  = pedir_numero('Semestre do ingresso: 1 ou 2: ')

    const aprova_financiamento = aprovar_contrato(rendaFamiliar, salarioMinVigente)
    const parecer_emprestimo = mostrar_situacao_contrato(aprova_financiamento)
    
    const tempoEmMeses = converter_ano_para_meses(duracaoCurso)
    const rendaPerCapita = calcular_renda_per_capita(rendaFamiliar, qtdPessoasFamilia)
    
    const valor_fincancimento = calcular_valor_financiamento(valorMensalidade, tempoEmMeses)
    const total_juros = calcular_total_juros(rendaPerCapita, valor_fincancimento, taxaSelicAtual, duracaoCurso)
    
    const valor_pago_durante_o_curso = caluclar_valor_pago_durante_o_curso(tempoEmMeses)    
    const valor_pago_na_carencia = calcular_valor_pago_apos_o_curso()
    
    const valorPago_antes_e_pos_curso = calcular_valor_antes_pos_curso(valor_pago_durante_o_curso, valor_pago_na_carencia)
    const valor_total = calcular_valor_total(parecer_emprestimo, valor_fincancimento, total_juros, valorPago_antes_e_pos_curso)
    
    const valor_parcela_financiamento = calcular_valor_parcela_financiamento(parecer_emprestimo ,valor_total, duracaoCurso, tempoEmMeses)
    const renda_minima = calcular_renda_minima(rendaFamiliar)
    
    const inicio_e_fim_do_pagamento = calcular_inicio_e_fim_do_pagamento(parecer_emprestimo, anoIngresso, tempoEmMeses)
    
    /*const informacao_fies =  imprimir_situacao(
        parecer_emprestimo, valor_fincancimento, total_juros, valor_total,
        valor_pago_durante_o_curso, renda_minima, inicio_e_fim_do_pagamento
        )*/
    if (parecer_emprestimo === 'CONTRATO APROVADO !'){
        let informacao_fies
        informacao_fies = `\nSITUAÇÃO: ${parecer_emprestimo}`
        informacao_fies += `\nVALOR A SER FINANCIADO: R$ ${valor_fincancimento}`
        informacao_fies += `\nVALOR TOTAL DE JUROS: R$ ${total_juros}`
        informacao_fies += `\nVALOR PAGO DURANTE O CURSO: R$ ${valor_pago_durante_o_curso}`
        informacao_fies += `\nVALOR PAGO DURANTE A CARÊNCIA: R$ ${valor_pago_na_carencia}`
        informacao_fies += `\nVALOR PAGO PÓS CARÊNCIA(TOTAL): R$ ${valor_total}`
        informacao_fies += `\nRENDA MÍNIMA: R$${renda_minima}`
        informacao_fies += `\n${inicio_e_fim_do_pagamento}`
            
        print(informacao_fies)
    }
    else{
        print(`\n${parecer_emprestimo}`)
    }
}

function aprovar_contrato(renda, salario){
    const qtdMaxSalario = 3
    const qtdSalarioRendaCandidato = Math.trunc(renda / salario)
    return qtdSalarioRendaCandidato >= qtdMaxSalario
}
const mostrar_situacao_contrato = (situacao) => situacao === true ? 'CONTRATO APROVADO !':'CONTRATO NEGADO !'
const converter_ano_para_meses = ano => ano * 12
const calcular_renda_per_capita = (renda, qtd_pessoas) => (renda / qtd_pessoas) / 1000
const calcular_valor_financiamento = (parcela, tempo_em_meses) => parcela * tempo_em_meses
    
function calcular_total_juros(renda_per_capita, capital, selic, tempo){
    //let taxaJuros
    //let totalJuros
    if (renda_per_capita >= 1.0 && renda_per_capita < 1.6){
        //taxaJuros = selic * 0.1
        return capital * (selic * 0.1) * tempo
    }
    else if(renda_per_capita < 2.1){
        //taxaJuros = selic * 0.15
        return capital * (selic * 0.1) * tempo
    }
    else if(renda_per_capita < 2.6){
        //axaJuros = selic * 0.2
        return capital * (selic * 0.2) * tempo
    }
    else{
        //taxaJuros = selic * 0.25
        return capital * (selic * 0.25) * tempo
    }
    
}

const caluclar_valor_pago_durante_o_curso = tempo => 150 * (tempo / 3) 
const calcular_valor_pago_apos_o_curso = () =>  150 * (18/3)
const calcular_valor_antes_pos_curso = (valorNoCurso, valorPosCarencia) => valorNoCurso + valorPosCarencia
const calcular_renda_minima = renda => renda / 3
const eh_multiplo_de_6 = tempo_em_meses => tempo_em_meses % 6 === 0




function calcular_inicio_e_fim_do_pagamento(parecer, ano, duracao_meses){
    
    let anoInicio
    let semestreInicio
    let anoFinal
    let semestreFinal
    let inicio_e_fim_do_pagamento = ``

    anoInicio = ano + Math.trunc((((duracao_meses + 18) / 12) - 1))
    anoFinal = anoInicio + ((duracao_meses / 12) - 1)

    if (parecer === 'CONTRATO APROVADO !'){
        if (eh_multiplo_de_6(duracao_meses)){
            if ((duracao_meses + 18) % 12 === 0){
                semestreInicio = 1
                semestreFinal = 2
            }
            if ((duracao_meses + 18) % 12 === 6){
                semestreInicio = 2
                semestreFinal = 1
                anoFinal ++
            }
        }
    }
    inicio_e_fim_do_pagamento += `INÍCIO DO PAGAMENTO: ${anoInicio}.${semestreInicio}`
    inicio_e_fim_do_pagamento += `\nFIM DO PAGAMENTO: ${anoFinal}.${semestreFinal}`
    

    return inicio_e_fim_do_pagamento
}

/*
function imprimir_situacao(
    parecer, valorFincanciamento, juros,
    valorDuranteCurso, valorDuranteCarencia,
    total, rendaMinima, prazoPagamento
){
    let situacao
    if (aprovar_contrato(parecer)){
        situacao = `SITUAÇÃO: ${parecer}`
        situacao += `\nVALOR A SER FINANCIADO: R$ ${valorFincanciamento}`
        situacao += `\nVALOR TOTAL DE JUROS: R$ ${juros}`
        situacao += `\nVALOR PAGO DURANTE O CURSO: R$ ${valorDuranteCurso}`
        situacao += `\nVALOR PAGO DURANTE A CARÊNCIA: R$ ${valorDuranteCarencia}`
        situacao += `\nVALOR PAGO PÓS CARÊNCIA(TOTAL): R$ ${total}`
        situacao += `\nRENDA MÍNIMA: R$${rendaMinima}`
        situacao += `\n${prazoPagamento}`
    }
    return situacao
}
*/

function calcular_valor_total(parecer, financiamento, juros, valorPosCurso_e_Carencia)
{   
    let valor_total = (financiamento + juros) - valorPosCurso_e_Carencia
    if (parecer === 'CONTRATO APROVADO !'){
        return  valor_total
    }
}

const calcular_valor_parcela_financiamento = (parecer, valorTotal, anos, meses) => {
    if (parecer === 'CONTRATO APROVADO !'){
        return ((valorTotal / anos) / meses).toFixed(2)
    } 
}

main()