'''Faça a criptografia de uma frase digitada pelo usuário. Na criptografia, a frase deverá ser invertida e as
consoantes deverão ser substituídas pelo caractere #.'''

def main():
    frase = input('Frase: ')
    nova_frase = ''
    frase_invertida = inverter_frase(frase)
    frase_criptografada = criptografar_frase(frase_invertida)

    print(frase_invertida)
    print(frase_criptografada)

def inverter_frase(frase):
    nova_frase = ''
    
    for i in frase:
        nova_frase = i + nova_frase
    return nova_frase


def criptografar_frase(frase):
    nova_frase = ''

    for caracter in frase:
        if not eh_vogal(caracter):
            caracter = '#'
            nova_frase = '' + caracter + nova_frase
        
        nova_frase = caracter + nova_frase
            
        #print(caracter)
            
        
    return nova_frase
'''
def main():
    frase = input('Frase: ')
    nova_frase = ''

    for i in frase:
        if not eh_vogal(i):
            i = '#'
            nova_frase = nova_frase + i
    print(frase)
    print(nova_frase)'''



def eh_vogal(letra):
    return letra == 'a' or letra == 'e' or letra == 'i' or letra == 'o' or letra == 'u'

#def eh_consoante(letra):
    #return not eh_vogal(letra)

main()

# ola => 'o' 'alo'