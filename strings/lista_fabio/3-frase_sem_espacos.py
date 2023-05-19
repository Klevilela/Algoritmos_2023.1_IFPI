'''3. Leia uma frase e gere uma nova frase, retirando os espaços entre as palavras.'''

def main():
    frase = input('Frase: ')
    frase_sem_espaco = ''

    for caracter in frase:
        if caracter != ' ':
            frase_sem_espaco += caracter
    
    print(frase_sem_espaco)

main()