'''Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos 
o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo 
milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste 
terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
2025 -> dividindo: 20 e 25 -> somando temos 45 -> 45² = 2025'''

numero = int(input('Número: '))

parte1 = numero // 100
parte2 = numero % 100

quadrado_da_soma_das_partes = (parte1 + parte2) ** 2

if numero == quadrado_da_soma_das_partes:
    print(f'A soma das partes do número que é {parte1 + parte2} ao quadrado é igual ao número informado')
else:
    print(f'{numero} não é igual ao quadrado da soma das partes do número')