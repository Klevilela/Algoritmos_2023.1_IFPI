'''Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente 
do algarismo da unidade'''

numero = int(input('Número: '))

algarismo_dezena = numero // 10
algarismo_unidade = numero % 10

if algarismo_dezena == algarismo_unidade:
    print('\nO algarismo da dezena é igual ao da unidade')

else:
    print('\nO algarismo da dezena é diferente do da unidade')