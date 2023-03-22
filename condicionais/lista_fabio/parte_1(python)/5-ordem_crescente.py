'''Leia 3 (três) números e escreva-os em ordem crescente'''

n1 = int(input('Número 1: '))
n2 = int(input('Número 2: '))
n3 = int(input('Número 3: '))

maior = 0
meio = 0
menor = 0

if n1 > n2 and n1 > n3:
    if n2 > n3:
        maior = n1
        meio = n2
        menor = n3
        print(f'\n{menor} {meio} {maior}')

elif n2 > n1 and n2 > n3:
    if n3 > n1:
        maior = n2
        meio = n3
        menor = n1
        print(f'\n{menor} {meio} {maior}')

elif n3 > n2 and n3 > n1:
    if n2 > n1:
        maior = n3
        meio = n2
        menor = n1
        print(f'\n{menor} {meio} {maior}')

else:
    print('\nNúmeros iguais')