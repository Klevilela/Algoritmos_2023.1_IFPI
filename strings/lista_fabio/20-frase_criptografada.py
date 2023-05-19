'''20. Leia uma frase e faça a criptografia, retirando as vogais das palavras. O programa deverá armazenar
estas vogais e suas posições originais, mostrar a frase criptografada, em seguida, descriptografar a frase
e mostrá-la na tela.'''

def main():
    frase = input('Frase: ')
    frase_criptografada = criptografar_frase(frase)

    print(f'\nFrase criptografada: {frase_criptografada}')
    print(f'Frase descriptografada: {frase}')

def criptografar_frase(frase):
    nova_frase = ''

    for letra in frase:
        if not eh_vogal(letra):
            nova_frase += letra
    
    return nova_frase


def eh_vogal(caracter):
    return caracter in 'aeiouAEIOU'

main()