'''Leia valores inteiros em duas variáveis distintas e
se o resto da divisão da primeira pela segunda for 1 
escreva a soma dessas variáveis mais o resto da divisão;
se for 2 escreva se o primeiro e o segundo valor são pares ou ímpares;
se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4 
divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação 
escreva o quadrado dos números lido'''

n1  = int(input('Número 1: '))
n2  = int(input('Número 2: '))

resto = n1 % n2

if resto != 0:
    quadrado_n1 = n1 ** 2
    quadrado_n2 = n2 ** 2
    print(f'\nQuadrado do número 1: {quadrado_n1}\nQuadrado do número 2: {quadrado_n2}')

if resto == 1:
    somatorio = n1 + n2 + resto
    print(f'\nSomatório: {somatorio}')

elif resto == 2:
    if n1 % 2 == 0:
        print('\nO número 1 é par')
    if n2 % 2 == 0:
        print('\nO número 2 é par')
    if n1 % 2 != 0:
        print('\nO número 1 é ímpar')
    if n2 % 2 != 0:
        print('\nO número 2 é ímpar')
    if n1 % 2 == 0 and n2 % 2 == 0:
        print('\nOs dois números são pares')
    if n1 % 2 != 0 and n2 % 2 != 0:
        print('\nOs dois números são ímpares')

elif resto == 3:
    soma = (n1 + n2) * 3
    print(f'\nValor da soma dos números lidos multiplicados por 3: {soma}')

elif resto == 4:
    divisao = (n1 + n2) / n2