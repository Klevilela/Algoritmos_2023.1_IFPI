'''Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números'''

n1 = int(input('Número: '))
n2 = int(input('Número: '))
n3 = int(input('Número: '))

contador_num_iguais = 0

if n1 == n2:
    contador_num_iguais += 1
elif n1 == n3:
    contador_num_iguais += 1
elif n2 == n1:
    contador_num_iguais += 1
elif n2 == n3:
    contador_num_iguais += 1
elif n3 == n1:
    contador_num_iguais += 1
elif n3 == n2:
    contador_num_iguais += 1
elif n1 == n2 and n1 == n3:
    contador_num_iguais += 1
elif n2 == n1 and n2 == n3:
    contador_num_iguais += 1
elif n3 == n2 and n3 == n1:
    contador_num_iguais += 1
else:
    print('Os três números são diferentes')

print(contador_num_iguais)