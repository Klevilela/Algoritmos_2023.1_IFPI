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
    const valor_total_financiamento = calcular_valor_total(valor_final, total_juros)
    const valor_final = calcular_valor_final(valor_total_financiamento, valorPago_antes_e_pos_curso)
    
    const valor_parcela_financiamento = calcular_valor_parcela_financiamento(valor_final, duracaoCurso, tempoEmMeses)
    const renda_minima = calcular_renda_minima(rendaFamiliar)
    
    const inicio_e_fim_do_pagamento = calcular_inicio_e_fim_do_pagamento(anoIngresso, tempoEmMeses, semestreIngresso)
    
    if (parecer_emprestimo === 'CONTRATO APROVADO !'){
        let informacao_fies
        informacao_fies = `\nSITUAÇÃO: ${parecer_emprestimo}`
        informacao_fies += `\nVALOR A SER FINANCIADO: R$ ${valor_fincancimento}`
        informacao_fies += `\nVALOR TOTAL DE JUROS: R$ ${total_juros.toFixed(2)}`
        informacao_fies += `\nVALOR TOTAL: R$ ${valor_total_financiamento}`
        informacao_fies += `\nVALOR PAGO DURANTE O CURSO: R$ ${valor_pago_durante_o_curso}`
        informacao_fies += `\nVALOR PAGO DURANTE A CARÊNCIA: R$ ${valor_pago_na_carencia}`
        informacao_fies += `\nVALOR PARCELA DO FINANCIAMENTO: R$ ${valor_parcela_financiamento}`
        informacao_fies += `\nRENDA MÍNIMA: R$${renda_minima}`
        informacao_fies += `\n${inicio_e_fim_do_pagamento}`
            
        print(informacao_fies)
    }
    else{
        print(`\n${parecer_emprestimo}`)
    }
}

function aprovar_contrato(renda, salario){
    const qtdMaxSalario = 3 * salario
    const qtdRendaCandidato = Math.trunc(renda / salario)
    return qtdRendaCandidato <= qtdMaxSalario
}

const mostrar_situacao_contrato = (situacao) => situacao === true ? 'CONTRATO APROVADO !':'CONTRATO NEGADO !'
const converter_ano_para_meses = ano => ano * 12
const calcular_renda_per_capita = (renda, qtd_pessoas) => (renda / qtd_pessoas) / 1000
const calcular_valor_financiamento = (parcela, tempo_em_meses) => parcela * tempo_em_meses
    
function calcular_total_juros(renda_per_capita, capital, selic, tempo){
    
    if (renda_per_capita >= 0 && renda_per_capita < 1.6){
        return capital * ((selic * 0.1)/100) * tempo
    }
    else if(renda_per_capita < 2.1){
        return capital * ((selic/100) * 0.15) * tempo
    }
    else if(renda_per_capita < 2.6){
        return capital * ((selic/100) * 0.2) * tempo
    }
    else{
        return capital * ((selic/100) * 0.25) * tempo
    }
}

const caluclar_valor_pago_durante_o_curso = tempo => 150 * (tempo / 3) 
const calcular_valor_pago_apos_o_curso = () =>  150 * (18/3)
const calcular_valor_antes_pos_curso = (valorNoCurso, valorPosCarencia) => valorNoCurso + valorPosCarencia
const calcular_renda_minima = renda => renda / 3
const eh_multiplo_de_6 = tempo_em_meses => tempo_em_meses % 6 === 0

function calcular_inicio_e_fim_do_pagamento(ano, duracao_meses, semestreIngresso){
    
    let anoInicioPagamento
    let semestreInicio
    let anoFinalPagamento
    let semestreFinal
    let inicio_e_fim_do_pagamento = ``

    anoInicioPagamento = ano + Math.trunc((((duracao_meses + 18) / 12) - 1))
    anoFinalPagamento = anoInicioPagamento + Math.trunc(((duracao_meses / 12) * 4) - 1)
   
    if (eh_multiplo_de_6(duracao_meses)){
        if (semestreIngresso === 1){
            semestreInicio = 1
            semestreFinal = 2
        }
        if (semestreIngresso === 2){
            semestreInicio = 2
            semestreFinal = 1
            anoFinal ++
        }
    }
    inicio_e_fim_do_pagamento += `INÍCIO DO PAGAMENTO: ${anoInicioPagamento}.${semestreInicio}`
    inicio_e_fim_do_pagamento += `\nFIM DO PAGAMENTO: ${anoFinalPagamento}.${semestreFinal}`
    
    return inicio_e_fim_do_pagamento
}

const calcular_valor_total = (financiamento, juros) => financiamento + juros
const calcular_valor_final = (valorCurso, valorPosCarencia) => valorCurso - valorPosCarencia
const calcular_valor_parcela_financiamento = (valorFinal, meses) => valorFinal / (meses * 4)   

main()