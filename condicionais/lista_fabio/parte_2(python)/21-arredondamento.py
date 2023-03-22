'''Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for 
maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso 
contrario, é arredondado para o inteiro imediatamente inferior'''

numero_decimal = float(input('Número: '))
numero_inteiro = int(numero_decimal)

parte_fracionaria = numero_decimal - numero_inteiro

valor_arredondado = 0 

if parte_fracionaria >= 0.5:
    valor_arredondado = numero_inteiro + 1
    print(f'Valor arredondado: {valor_arredondado}')
else:
    valor_arredondado = int(numero_decimal - parte_fracionaria)
    print(f'Valor arredondado: {valor_arredondado}')
