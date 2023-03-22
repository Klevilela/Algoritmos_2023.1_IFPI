'''Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea 
(IMC = peso / altura2). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso 
(IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30)'''

altura = float(input('Altura(m): '))
peso = float(input('Peso(kg): '))

imc = peso // (altura ** 2)

if imc < 25:
    print('\nPeso normal')
elif imc <= 30:
    print('\nObeso')
else:
    print('\nObesidade mórbida')