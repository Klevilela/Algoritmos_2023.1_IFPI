'''11. Um dos recursos disponibilizados pelos editores de texto mais modernos é a contagem da quantidade de
palavras de um texto. Escreva um programa que determine o numero de palavras de um texto digitado.'''

def main():
    palavra = input('Palavra: ').split(' ')
    qtd_caracteres = contar_caracteres(palavra)

    print(f'Quantidade de palavras: {qtd_caracteres}')
    print(palavra)

def contar_caracteres(palavras):
    contador_palavras = 0
    
    for palavra in palavras:
        contador_palavras += 1

    return contador_palavras
    
main()