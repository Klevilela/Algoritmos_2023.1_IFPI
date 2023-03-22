'''Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.'''

lado_1 = int(input('Lado 1: '))
lado_2 = int(input('Lado 2: '))
lado_3 = int(input('Lado 3: '))

if lado_1 > lado_2 and lado_1 > lado_3:
    print(f'\nCateto 1: {lado_2}\nCateto 2: {lado_3}\nHipotenusa: {lado_1}')
elif lado_2 > lado_1 and lado_2 > lado_3:
    print(f'\nCateto 1: {lado_1}\nCateto 2: {lado_2}\nHipotenusa: {lado_2}')
else:
    print(f'\nCateto 1: {lado_1}\nCateto 2: {lado_2}\nHipotenusa: {lado_3}')