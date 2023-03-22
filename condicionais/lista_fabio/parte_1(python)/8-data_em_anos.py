'''Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa,
calcule e escreva  sua idade exata (em anos).'''

print('Data atual')
dia_atual = int(input('Dia: '))
mes_atual = int(input('Mês: '))
ano_atual = int(input('Ano: '))

print('\nData de nascimento')
dia_nascimento = int(input('Dia: '))
mes_nascimento = int(input('Mês: '))
ano_nascimento = int(input('Ano: '))

idade_anos = ano_atual - ano_nascimento

if dia_atual >= dia_nascimento:
    if mes_atual >= mes_nascimento:
        print(f'\nIdade: {idade_anos}')

elif dia_atual < dia_nascimento:
    if mes_atual <= mes_nascimento:
        idade_anos -= 1
        print(f'\nIdade: {idade_anos}')

elif dia_atual >= dia_nascimento:
    if mes_atual >= mes_nascimento:
        if ano_nascimento > ano_atual:
            print(
                '\nImpossível calcular. A data do ano de nascimento deve ser maior que a do ano atual'
                )

else:
    print('\nValor inválido')