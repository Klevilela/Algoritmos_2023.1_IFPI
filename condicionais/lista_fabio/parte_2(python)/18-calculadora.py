'''Leia dois valores e uma das seguintes operações a serem executadas
(codificadas da seguinte forma: 1 –Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão).
Calcule e escreva o resultado dessa operação 
sobre os dois valores lidos.
'''

n1 = int(input('Valor 1: '))
n2 = int(input('Valor 2: '))

print(f'\nOperação: \n1-adição\n2-subtração\n3-multiplicação\n4-divisão')
operacao = int(input('\nInforme o valor da operação: '))

if operacao == 1:
    soma = n1 + n2
    print(f'\nResultado: {soma}')
elif operacao == 2:
    subtracao = n1 - n2
    print(f'\nResultado: {subtracao}')
elif operacao == 3:
    multiplicacao = n1 * n2
    print(f'\nResultado: {multiplicacao}')
else:
    divisao = n1 / n2
    print(f'\nResultado: {divisao}')