'''Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano)
e escreva qual delas é a mais recente.'''

dia_data_atual = 18
mes_data_atual = 3
ano_data_atual = 2023

dia_data_1 = int(input('Dia da data 1: '))
mes_data_1 = int(input('Mês da data 1: '))
ano_data_1 = int(input('Ano da data 1: '))

dia_data_2 = int(input('\nDia da data 2: '))
mes_data_2 = int(input('Mês da data 2: '))
ano_data_2 = int(input('Ano da data 2: '))

if dia_data_1 >= dia_data_2 and mes_data_1 >= mes_data_2 and ano_data_1 >= ano_data_2:
    print('A data 1 é a mais recente')
else:
    print('\nA data 2 é a mais recente')