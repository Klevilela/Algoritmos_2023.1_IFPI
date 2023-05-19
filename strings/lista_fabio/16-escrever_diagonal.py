'''16. Escreva uma sub-rotina de nome diagonal, que escreva um texto de até 20 caracteres na diagonal. Ex.:
diagonal ('Algoritmos '); escreverá 'Algoritmos' na diagonal.'''


def main():
    frase = input()

    for indice in range(len(frase)):
       print(' ' * indice + frase[indice])


main()