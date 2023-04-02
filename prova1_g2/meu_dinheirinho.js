import { pedir_numero, pedir_texto, print } from '../utils.js'

function main(){
    //entradas
    const valor_base_aula = pedir_numero('Valor da aula: ')
    const nome_professor = pedir_texto('Nome do professor: ')    
    const horas_semanais = pedir_numero('Quantidade de horas semanais: ')
    const qualificacao = pedir_texto('Qualificação: e(especialista) m(mestre) - d(doutor): ')
    const tempo_experiencia = pedir_numero('Tempo de experiência(meses): ')
    const qtd_filhos = pedir_numero('Informe a quantidade de filhos: ')
    const valor_plano_saude = pedir_numero('Valor do plano de saúde: ')
    print('\n')
    
    //valores-base
    const valor_base_final = calcula_valor_base_final(tempo_experiencia, qualificacao, valor_base_aula)
    const salario_semanal = calcular_salario_semanal(valor_base_final)
    const salario_base_mensal = calcular_salario_base_mensal(salario_semanal)

    //valores dos ganhos/direitos
    const auxilio_creche = calcular_auxilio_creche(qtd_filhos)
    const ressarcimentoSaude = calcular_plano_saude(valor_plano_saude)
    const auxilio_combustivel = calcular_auxilio_combustivel(horas_semanais)
    const salario_bruto = calcular_salario_bruto(salario_base_mensal, auxilio_creche, auxilio_combustivel,ressarcimentoSaude)

    //valores dos descontros
    const valor_previdencia = calcular_valor_previdencia(salario_bruto)
    const imposto_renda = calcular_imposto_renda(salario_base_mensal)
    const total_descontos = calcular_descontos(valor_previdencia, imposto_renda)
    const salario_liquido = calcular_salario_liquido(salario_bruto, total_descontos) 
    
    //obter os valores de base, ganho e desonto
    const base_calculo = imprimir_valores_base(valor_base_final, salario_semanal)
    const ganhos = imprimir_contracheque_ganhos(salario_base_mensal, auxilio_creche, valor_plano_saude, auxilio_combustivel, salario_bruto)
    const descontos = imprimir_contracheque_descontos(valor_previdencia, imposto_renda, salario_bruto, total_descontos, salario_liquido)

    function imprimir_valores_base(valorBaseFinal, valor_semanal){
        let valores_base
        valores_base = `\n`
        valores_base = `--Contracheque mensal detalhado--`
        valores_base += `\n>Valor da hora/professor: R${valorBaseFinal}`
        valores_base += `\n>Salário semanal: R$ ${valor_semanal}`
        valores_base += '\n'
    
        return valores_base
    }
    
    function imprimir_contracheque_ganhos(salarioBase, creche, planoSaude, combustivel, bruto){
        let contracheque_ganhos
        contracheque_ganhos = '\n'
        contracheque_ganhos += `\n--Ganhos--`
        contracheque_ganhos += `\n>Salário Base Mensal: R$ ${salarioBase}`
        contracheque_ganhos += `\n>Auxílio creche: R$ ${creche}`
        contracheque_ganhos += `\n>Ressarcimento Saúde: R$ ${planoSaude}`
        contracheque_ganhos += `\n>Auxílio Combustível: R$ ${combustivel}`
        contracheque_ganhos += `\n>Salário Bruto: R$ ${bruto}`
    
        return contracheque_ganhos
    }
    
    function imprimir_contracheque_descontos(previdencia, ir, salarioBruto, descontos, liquido){
        let valores_descontos
        valores_descontos = '\n'
        valores_descontos += `\n--Descontos--`
        valores_descontos += `\n>Previdência: R$ ${previdencia}`
        valores_descontos += `\n>Imposto de Renda: R$ ${ir}`
        valores_descontos += `\n>Salário Bruto: R$ ${salarioBruto}`
        valores_descontos += `\n>Total de descontos: R$ ${descontos}`
        valores_descontos += `\n--Salário Líquido(Ganhos - descontos)--`
        valores_descontos += `\nR$ ${liquido}`
    
        return valores_descontos
    }

    //exibir valores
    print(base_calculo)
    print(ganhos)
    print(descontos)
}

function calcula_valor_base_final(tempo, titulacao, valor_base_aula){
    let percentualTitulo
    let valor_final_hora
    if (tempo > 6){
        if (titulacao === 'e' || titulacao === 'E'){
            percentualTitulo = (20/100)
            valor_final_hora = (valor_base_aula + (percentualTitulo * valor_base_aula)) + (valor_base_aula * 0.05) 
        }
        if (titulacao === 'm' || titulacao === 'M'){
            percentualTitulo = (30/100)
            valor_final_hora = (valor_base_aula + (percentualTitulo * valor_base_aula)) + (valor_base_aula * 0.05)
        }
        if (titulacao === 'd' || titulacao === 'D'){
            percentualTitulo = (50/100)
            valor_final_hora = (valor_base_aula + (percentualTitulo * valor_base_aula)) + (valor_base_aula * 0.05)
        }
    }
    return valor_final_hora
}

const calcular_salario_semanal = (valor_final_horas) => valor_final_horas * 7
const calcular_salario_base_mensal = (valorSemanal) => 4.5 * valorSemanal

const calcular_auxilio_creche = (filhos) => 700 * filhos
const calcular_plano_saude = (valor_plano) => valor_plano / 2
const calcular_auxilio_combustivel = (horas_aula) => Math.trunc(horas_aula/ 8) * 30
const calcular_salario_bruto = (salarioBase, creche, planoSaude, combustivel) => salarioBase + creche + combustivel + planoSaude

function calcular_valor_previdencia(salarioBruto){
    let valor_previdencia
    if (salarioBruto > 0 && salarioBruto <= 1302){
        valor_previdencia = salarioBruto * (7.5/100)
    }
    else if (salarioBruto < 2501){
        valor_previdencia = salarioBruto * (9/100)
    }
    else if (salarioBruto <= 3901){
        valor_previdencia = salarioBruto * (12/100)
    }
    else if (salarioBruto <= 7501){
        valor_previdencia = salarioBruto * (14/100)
    }
    else{valor_previdencia = salarioBruto * (16/100)}

    return valor_previdencia
}

function calcular_imposto_renda(salarioBase){
    let valor_ir
    salarioBase <= 5000 ? valor_ir = 'isento' : valor_ir = 0.27 * salarioBase
    return valor_ir
}

const calcular_descontos = (previdencia, ir) => ir === 'isento' ? previdencia : previdencia + ir 
const calcular_salario_liquido = (salario_bruto, descontos) => salario_bruto - descontos

main()