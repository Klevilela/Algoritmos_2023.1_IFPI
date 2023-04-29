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

import { 
    converter_meses_para_dias,
    calcular_iof,
    calcular_selic,
    calcular_taxa_juros,
    calcular_valor_total,
    calcular_valor_parcela,
    calcular_comprometimento_renda_mensal,
    aprovar_emprestimo 
} from "./utils/emprestimo_utils.js";

function main(){
    const renda = pedir_numero('Renda: ')
    const valor_emprestimo = pedir_numero('Valor do empréstimo: ')
    const prazo = pedir_numero('Prazo(mínimo 2 máximo 24): ')


    const dias = converter_meses_para_dias(prazo)
    const iof = calcular_iof(valor_emprestimo, prazo)
    const selic = calcular_selic(dias)
    const juros_a_pagar = calcular_taxa_juros(valor_emprestimo, selic, iof)
    const valor_total = calcular_valor_total(valor_emprestimo, juros_a_pagar)
    const valor_parcela = calcular_valor_parcela(valor_total, prazo)
    const porcentagem_comprometimento = calcular_comprometimento_renda_mensal(valor_parcela, renda)
    const resultado = aprovar_emprestimo(valor_parcela, renda)
    //const parcelamento = aprova_parcela(prazo)
    // if (valor_parcela < (0.5 * valor_parcela))
    if (prazo >= 2 && prazo < 25){
        print(`\nValor pedido: R$ ${valor_emprestimo}`)
        print(`Valor IOF: R$ ${iof.toFixed(2)}`)
        print(`Total de juros a pagar: R$ ${juros_a_pagar.toFixed(2)}`)
        print(`Valor total a pagar: R$ ${valor_total.toFixed(2)}`)
        print(`Valor da parcela mensal: ${prazo}x de R$ ${valor_parcela}`)
        print(`Compromentimenro da renda: ${porcentagem_comprometimento.toFixed(2)}% da renda`)
        print(`${resultado}`)
    }
    else{
        print('A parcela deve ser paga em no mínimo 2x ou prazo inferior ou igual a 24x e com valor acima de 40% da renda')
    }
}


main()