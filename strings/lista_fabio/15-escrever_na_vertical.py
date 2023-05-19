'''15. Escreva uma sub-rotina de nome vertical, que escreva um texto de até 20 caracteres na vertical. Ex.:
vertical (10,'Algoritmos'); escreverá 'Algoritmos' na coluna 10.'''

def main():
    palavra = input()
    print(escrever_na_vertical(10, palavra))


def escrever_na_vertical(tamanho, palavra):
    tamanho_max = 20
    tamanho_palavra = len(palavra)
    nova_frase = ' '
    
    
    if tamanho == tamanho_palavra:
        if tamanho <= tamanho_max:
            for caracter in palavra:
                nova_frase += caracter
                #print(nova_frase)
        
    return nova_frase


main()