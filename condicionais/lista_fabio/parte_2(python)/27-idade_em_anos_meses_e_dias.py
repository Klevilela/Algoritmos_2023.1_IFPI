'''Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu 
nascimento e a data (dia, mês e ano) atual.'''

data_em_dias = int(input('Idade em dias: '))
data_em_meses = int(input('Idade em dias: '))
data_em_anos = int(input('Idade em dias: '))

dia_atual = 20
mes_atual = 3
ano_atual = 2023

idade_dias = 0
idade_meses = 0
idade_anos = 0

if ano_atual > 0 and ano_atual > data_em_anos: 
    idade_anos = (data_em_anos - ano_atual) * (-1)

if mes_atual> 0 and mes_atual <= 12:
    if data_em_meses > 0 and data_em_meses <= 12:
        idade_meses = idade_anos * 12

#if dia_atual > 0 and dia_atual <= 31:
    #if

print(f'Idade em anos: {idade_anos}\nIdade em meses: {idade_meses}') 