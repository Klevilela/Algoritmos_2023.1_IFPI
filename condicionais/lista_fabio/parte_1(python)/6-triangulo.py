'''Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo),
verifique e escreva
se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180º).
Se formam, verifique se formam um triângulo acutângulo (3 ângulos < 90º),
retângulo (1 ângulo = 90º) ou 
obtusângulo (1 ângulo > 90º). Não existe ângulo com tamanho 0º (zero grau). '''

n1 = int(input('Número 1: '))
n2 = int(input('Número 2: '))
n3 = int(input('Número 3: '))

soma_angulos_internos = n1 + n2 + n3

def eh_acutangulo(v1, v2, v3):
    return v1 < 90 and v2 < 90 and v3 < 90

def eh_retangulo(v1, v2, v3):
    return v1 == 90 or v2 == 90 or v3 == 90

def eh_obtusangulo(v1, v2, v3):
    return v1 > 90 or v2 > 90 or v3 > 90

if soma_angulos_internos == 180:
    if eh_acutangulo(n1, n2, n3):
        print('\nForma um triângulo acutângulo')

    elif eh_retangulo(n1, n2, n3):
        print('\nForma um triângulo retângulo')

    elif eh_obtusangulo(n1, n2, n3):
        print('\nForma um triângulo obtusângulo')

    else:
        print('\nNão existe ângulo com tamanho 0 grau')