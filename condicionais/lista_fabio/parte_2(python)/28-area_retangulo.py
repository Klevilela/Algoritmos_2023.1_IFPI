'''Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de 
um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área 
não pode ser negativo.'''

coord_x = int(input('Valor de X: '))
coord_y = int(input('Valor de Y: '))

area = coord_x * coord_y

if area > 0:
    print(f'Área: {area}')
else:
    print('\nO valor da área não pode ser negativa')