'''Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas 
formadas pelos seus dois primeiros e dois últimos dígitos.
Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito.
Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.'''
import math

numero = int(input('Número: '))

dezena1 = numero // 100
dezena2 = numero % 100

raiz_numero = math.sqrt(numero)

if dezena1 + dezena2 == raiz_numero:
    print('É um trinômio quadrado perfeito')

else:
    print('Não é um trinômio quadrado perfeito')