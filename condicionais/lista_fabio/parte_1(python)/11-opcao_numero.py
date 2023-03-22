'''Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o 
valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores 
possíveis para a variável opção são 1, 2 e 3.'''

num1 = int(input('Número 1: '))
num2 = int(input('Número 2: '))
num3 = int(input('Número 3: '))
opcao = int(input('Opção(1,2,3): '))

if opcao == 1:
    print(num1)
if opcao == 2:
    print(num2)
if opcao == 3:
    print(num3)
