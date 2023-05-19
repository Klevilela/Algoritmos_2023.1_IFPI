'''18. Os editores de texto possuem um recurso que permite que o usuário substitua uma sub-cadeia de um
texto por outra cadeia de caracteres. Escreva um programa que realize esta ação numa frase dada.'''

def main():
    frase = input('Frase: ')
    string_a_substituir = input('string a substituir: ')
    string_substituta = input('Informe a nova string: ')

    nova_string = substituir_string(frase, string_a_substituir, string_substituta)
    print(nova_string)
    
def substituir_string(frase, termo_a_trocar, termo_substituto):
    nova_frase = ''

    for caracter in frase:
        if caracter not in termo_a_trocar:
            nova_frase += callable
    
    nova_frase += termo_substituto

    return termo_substituto

main()