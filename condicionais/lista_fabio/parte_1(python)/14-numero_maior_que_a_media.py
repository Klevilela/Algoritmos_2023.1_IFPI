'''Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.'''

n1 = int(input('Número 1: '))
n2 = int(input('Número 2: '))
n3 = int(input('Número 3: '))
n4 = int(input('Número 4: '))
n5 = int(input('Número 5: '))

media = (n1 + n2 + n3 + n4 + n5) / 5
#numero_maior_que_a_media = 0

if n1 > media:
    numero_maior_que_a_media = n1
    print(f'\nNúmero maior que a média: {numero_maior_que_a_media}')
if n2 > media:
    numero_maior_que_a_media = n2
    print(f'\nNúmero maior que a média: {numero_maior_que_a_media}')
if n3 > media:
    numero_maior_que_a_media = n3
    print(f'\nNúmero maior que a média: {numero_maior_que_a_media}')
if n4 > media:
    numero_maior_que_a_media = n4
    print(f'\nNúmero maior que a média: {numero_maior_que_a_media}')
if n5 > media:
    numero_maior_que_a_media = n5
    print(f'\nNúmero maior que a média: {numero_maior_que_a_media}')
else:
    print('Não há nenhum número maior que a média')

print(f'\nMédia: {media}')