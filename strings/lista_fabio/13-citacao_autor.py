'''13. As normas para a exibição da bibliografia de um artigo cientifico, de uma monografia, de um livro,
texto etc., exigem que o nome do autor seja escrito no formato último sobrenome, sequência das
primeiras letras do nome e dos demais sobrenomes, seguidas de ponto final. Por exemplo, Antonio
Carlos Jobim seria referido por Jobim, A. C.. Escreva um programa que receba um nome completo e o
escreva no formato de bibliografia.'''

def main():
    nome = input('Nome: ').split()

    pos_ultimo_sobrenome = len(nome) - 1
    ultimo_sobrenome = nome[pos_ultimo_sobrenome]

    citacao = f'{ultimo_sobrenome}, '
    
    primeiro_nome = nome
    letra_primeiro_nome = primeiro_nome[0][0]

    nomes_antes_do_ultimo = len(nome) - 1

    for nome in nomes_antes_do_ultimo:
        

    print(letra_primeiro_nome)
    print(citacao)


main()