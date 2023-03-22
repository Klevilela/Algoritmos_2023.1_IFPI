'''Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3 
(três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se 
formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou 
escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).'''

n1 = int(input('Lado 1: '))
n2 = int(input('Lado 2: '))
n3 = int(input('Lado 3: '))

def eh_triangulo(l1, l2, l3):
    return l1 + l2 > l3

def eh_equilatero(l1, l2, l3):
    return l1 == l2 and l1 == l3

def eh_isosceles(l1, l2, l3):
    return l1 == l2 or l1 == l3 or l2 == l3 or l2 == l1 or l3 == l2 or l2 == l1

def eh_escaleno(l1, l2, l3):
    return not eh_equilatero(l1, l2, l3) and not eh_isosceles(l1, l2, l3)

if eh_triangulo(n1, n2, n3):
    if eh_equilatero(n1, n2, n3):
        print('\nÉ um triângulo equilátero')
    
    elif eh_isosceles(n1, n2, n3):
        print('\nÉ um triângulo isósceles')
    
    elif eh_escaleno(n1, n2, n3):
        print('\nÉ um triângulo escaleno')
    
    else:
        print('\nNão existe lado de tamanho 0')

else:
    print('\nNão é um triângulo')
