'''Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida'''

dia = int(input('Dia: '))
mes = int(input('Mês: '))
ano = int(input('Ano: '))

if dia >= 1 and dia <= 31:
    if mes >= 1 and mes <= 12:
        if ano >= 0:
            print('\nData válida')

else:
    print('\nData inválida')
