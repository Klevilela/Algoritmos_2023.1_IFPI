'''Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um. 
Escreva na tela qual dos professores tem salário total maior.'''

hora_prof_1 = int(input('Quantidade de horas-aula dada: '))
valor_hora_prof_1 = int(input('Valor da hora-aula: '))

hora_prof_2 = int(input('\nQuantidade de horas-aula dada: '))
valor_hora_prof_2 = int(input('Valor da hora-aula: '))

salario_prof_1 = hora_prof_1 * valor_hora_prof_1
salario_prof_2 = hora_prof_2 * valor_hora_prof_2

if salario_prof_1 > salario_prof_2:
    print('\nO salário total do professor 1 é maior que o do professor 2')
else:
    print('\nO salário total do professor 2 é maior que o do professor 1')
