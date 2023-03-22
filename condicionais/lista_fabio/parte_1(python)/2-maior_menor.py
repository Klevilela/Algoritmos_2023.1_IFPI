'''Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos'''

n1 = int(input('Número 1: '))
n2 = int(input('Número 2: '))

maior = 0
menor = 0

if n1 > n2:
    maior = n1
    menor = n2
    print(f'\nMaior: {maior}\nmenor: {menor}')

elif n2 > n1:
    maior = n2
    menor = n1
    print(f'\nMaior: {maior}\nmenor: {menor}')

else:
    print('\nOs números são iguais')