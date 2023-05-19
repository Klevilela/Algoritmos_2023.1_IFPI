'''12. As companhias de transportes aéreos costumam representar os nomes dos passageiros no formato último
sobrenome/nome. Por exemplo, o passageiro Carlos Drummond de Andrade seria indicado por
Andrade/Carlos. Escreva um programa que leia um nome completo e o escreva no formato acima.'''

def main():
    nome = input('Nome: ').split()
    
    pos_ultimo_sobrenome = len(nome) - 1

    ultimo_sobrenome = nome[pos_ultimo_sobrenome]
    nome = nome[0]

    citacao = f'{ultimo_sobrenome}'
    for letra in nome:
        citacao += nome[pos_ultimo_sobrenome[0]] 

main()