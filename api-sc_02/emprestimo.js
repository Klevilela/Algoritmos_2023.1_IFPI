/*
João precisa de um dinheiro emprestado para
comprar um Notebook para estudar programação. Para isso, foi ao
RSBank fazer uma simulação. As taxas de empréstimo do banco
obedecem à regra dos Juros Compostos Mensais, ou seja, o valor é
calculado cumulativamente mês a mês, ou seja, aplica-se os juros
sobre o valor total no primeiro mês e esse passa a ser a base para o
segundo mês.
Porém a taxa de juros aplicada é calculada de acordo com o prazo
de parcelamento (vide tabela) e à SELIC, atualmente em 13,75%
(abril/2023). O usuário só pode parcelar o empréstimo em até 24x
(min. 2 parcelas). Valor mínimo de empréstimo é de um salário
mínimo. Valor máximo de parcela é 40% da Renda Mensal do
Cliente.
Antes de calcular os juros é necessário calcular o IOF (Imposto sobre
Operações Financeiras) pago ao Governo Federal antes de aplicar
os Juros. O IOF é calculado da seguinte forma: 0,38% sobre valor
total (independente do prazo) + 0,0082% por cada dia do prazo do
empréstimo. Considere todos os meses com 30 dias. Os juros são
aplicados sobre o valor a ser recebido pelo Cliente + IOF
Prazo Taxa
Até 6x 50% da SELIC
de 7x a 12x 75% da SELIC
de 12x a 18x 100% da SELIC
Acima de 18x 130% da SELIC
● Peça ao usuário Renda Mensal, Valor Empréstimo e Prazo
desejados, valide os dados a serem recebidos.
● Calcule e escreva na tela:
a. Valor Pedido
b. Valor do IOF
c. Valor dos Juros a pagar
d. Valor Total a pagar (ex.: "R$ 5148,00")
e. Valor da Parcela Mensal (ex.: "16x de R$ 321,75")
f. Comprometimento da Renda Mensal (%)
g. Se Empréstimo APROVADO ou NEGADO (se a
renda mensal suporta a parcela)
 */

import { pedir_numero, print } from "../utils.js";

function main(){
    const renda = pedir_numero('Renda: ')
    const valor_emprestimo = pedir_numero('Valor do empréstimo: ')
    const prazo = pedir_numero('Prazo(mínimo 2 máximo 24): ')


    const dias = converter_meses_para_dias(prazo)
    const iof = calcular_iof(valor_emprestimo, prazo)
    const selic = calcular_selic(dias)
    const juros_a_pagar = calcular_taxa_juros(valor_emprestimo, iof, selic)
    const valor_total = calcular_valor_total(valor_emprestimo, juros_a_pagar)
    const valor_parcela = calcular_valor_parcela(valor_total, prazo)
    const porcentagem_comprometimento = calcular_comprometimento_renda_mensal(valor_parcela, renda)
    const resultado = aprovar_emprestimo(valor_parcela, renda)

    print(`Valor pedido: R$ ${valor_emprestimo}`)
    print(`Valor IOF: R$ ${iof}`)
    print(`Total de juros a pagar: R$ ${juros_a_pagar}`)
    print(`Valor total a pagar: R$ ${valor_total}`)
    print(`Valor da parcela mensal: ${prazo}x de R$ ${valor_parcela}`)
    print(`Compromentimenro da renda: ${porcentagem_comprometimento.toFixed(2)}% da renda`)
    print(`${resultado}`)

}


// função para calcular valor da parcela
function calcular_valor_parcela(total, tempo, renda){
    const valor_parcela = valor / tempo

    if (valor_parcela >= 0 && valor_parcela <= (.4 * renda)){
        return valor_parcela
    }
    else{
        return 'Parcela acima de 40% da renda'
    }
}


// função para aprovar empréstimo
function aprovar_emprestimo(parcela, renda){
    parcela < renda ? 'APROVADO' : 'NEGADO'
}

// função para calcular IOF
function calcular_iof(valor, dias){
    const iof = ((0.38/100) * valor) + ((0.0082/100) * dias)
    
    return iof
}


//função para calcular juros usando a o prazo em função da selic
function calcular_selic(prazo){
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
function calcular_taxa_juros(valor, iof, selic){
    return selic * (valor + iof) 
}

// função para calcular o valor total do financiamento
function calcular_valor_total(valor, juros){
    return valor + juros
}

//função para converter o prazo em dias
function converter_meses_para_dias(meses){
    return meses * 30
}

// função para saber quanto % o valor da parcela compromete a renda mensal
function calcular_comprometimento_renda_mensal(parcela, renda){
    return (parcela * 100) / renda 
}

main()