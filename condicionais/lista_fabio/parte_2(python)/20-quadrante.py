'''Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou 
quarto) em que o ângulo se localiza.'''

medida_angulo = int(input('Medida do ângulo: '))

if medida_angulo >= 0 and medida_angulo <= 90:
    print('\nPrimeiro quadrante')

elif medida_angulo <= 180:
    print('\nSegundo quadrante')

elif medida_angulo <= 270:
    print('\nTerceiro quadrante')

else:
    print('\nQuarto quadrante')