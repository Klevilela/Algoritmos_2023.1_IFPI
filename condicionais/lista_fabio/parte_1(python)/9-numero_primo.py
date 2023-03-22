'''Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.'''

numero = int(input('Número de 0 a 100: '))

def eh_par(n):
    return n % 2 == 0

def eh_impar(n):
    return not eh_par(n)

''' recebe como argumento um número entre 0 e 100.
Esse número será dividido pelo 2,4,6,8 e 10.
Ao obter como resto da divisão o valor 0, signfica que esse número tem divisor
A função retorna a quantidade de divisores que esse número possui.
Se a quantidade for 1, significa que o número só tem um divisor par.
Podendo ser este número considerado como primo.
'''            
def obter_qtd_divisores_pares_do_numero(n):
    qtd_divide_por_2 = 0
    qtd_divide_por_4 = 0
    qtd_divide_por_6 = 0
    qtd_divide_por_8 = 0
    qtd_divide_por_10 = 0
    qtd_final_divisores_pares = 0

    
    if n % 2 == 0:
        qtd_divide_por_2 += 1
    if n % 4 == 0:
        qtd_divide_por_4 += 1
    if n % 6 == 0:
        qtd_divide_por_6 += 1
    if n % 8 == 0:
        qtd_divide_por_8 += 1
    if n % 10 == 0:
        qtd_divide_por_10 += 1
    else:
        return qtd_final_divisores_pares
    
    qtd_final_divisores_pares = qtd_divide_por_2 + qtd_divide_por_4 + qtd_divide_por_6 + qtd_divide_por_8 + qtd_divide_por_10
    return qtd_final_divisores_pares
    
'''Essa função faz o mesmo trabalho que a função acima, porém, os divisores são ímpares: 3,5,7 e 9'''
def obter_qtd_divisores_impares_do_numero(n):
    qtd_divide_por_3 = 0
    qtd_divide_por_5 = 0
    qtd_divide_por_7 = 0
    qtd_divide_por_9 = 0
    qtd_final_divisores_impares = 0

    if n % 3 == 0:
        qtd_divide_por_3 += 1
    if n % 5 == 0:
        qtd_divide_por_5 += 1
    if n % 7 == 0:
        qtd_divide_por_7 += 1
    if n % 9 == 0:
        qtd_divide_por_9 += 1
    else:
        return qtd_final_divisores_impares
            
    
    qtd_final_divisores_impares = qtd_divide_por_3 + qtd_divide_por_5 + qtd_divide_por_7 + qtd_divide_por_9

    return qtd_final_divisores_impares


def eh_primo(n):
    #otal_divisores_pares_numero = obter_qtd_divisores_pares_do_numero(numero)
    #total_divisores_impares_numero = obter_qtd_divisores_impares_do_numero(numero)
    total_divisores_numero = obter_qtd_divisores_pares_do_numero(numero) + obter_qtd_divisores_impares_do_numero(numero)
    #total_divisores_numero = total_divisores_pares_numero + total_divisores_impares_numero
    qtd_divisores_numero_primo = 2

    '''Essa condicional verifica se o número é primo ou não.
    A definição de número primo é que um número tenha por divisores: o 1 e o próprio número.
    Para que seja considerado um número primo, a quantidade de divisores pares e ímpares deve ser 1 ou 0.
    Se a quantidade total de divisores for >= 2, significa que este número não é primo, portanto, tem mais
    de um divisor além do próprio número e do 1.
    '''
    if total_divisores_numero > qtd_divisores_numero_primo or total_divisores_numero > 1:
        print('\nNão é um número primo')
    else:
        print('\nÉ um número primo')


eh_primo(numero)
#print(obter_qtd_divisores_pares_do_numero(numero))
#print(obter_qtd_divisores_impares_do_numero(numero))

'''Para esta questão foi escolhido como divisores os números de 2 a 10.
Foram utilizados para verificar se um número é divisível pelos números acima.
Se for divisível por mais de um deles, comprova que não é primo.
Se for divisível por 1 ou nenhum deles, comprova que é primo.
Aqui se considera números no seguinte intervalo: [0] - [100]
'''