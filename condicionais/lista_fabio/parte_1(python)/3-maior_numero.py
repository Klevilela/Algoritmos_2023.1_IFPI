'''Leia 3 (três) números, verifique e escreva o maior entre os números lidos'''

n1 = int(input('Número 1: '))
n2 = int(input('Número 2: '))
n3 = int(input('Número 3: '))

maior = 0

if n1 > n2 and n1 > n3:
    maior = n1
    print(f'\nMaior:{maior}')

elif n2 > n1 and n2 > n3:
    maior = n2
    print(f'\nMaior:{maior}')

elif n3 > n1 and n3 > n1:
    maior = n3
    print(f'\nMaior:{maior}')

else:
    print('\nOs três números são iguais')
