'''4. Leia uma frase e gere uma nova frase, duplicando cada caractere da frase digitada.'''

def main():
    frase = input('Frase: ')
    nova_frase = ''

    for caracter in frase:
        nova_frase += caracter * 2
    
    print(nova_frase)

main()