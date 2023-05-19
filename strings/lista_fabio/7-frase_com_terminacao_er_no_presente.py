'''7. Leia um verbo regular terminado em ER e mostre sua conjugação no presente.'''

def main():
    verbo = input('Digite o verbo: ')
    frase_presente =  ''

    conjucagacao_presente_1a_pessoa = obter_conjugacao_1a_pessoa(verbo)
    print(conjucagacao_presente_1a_pessoa)
    '''conjucagacao_presente_2a_pessoa = obter_conjugacao_2a_pessoa(verbo)
    conjucagacao_presente_3a_pessoa = obter_conjugacao_3a_pessoa(verbo)
    conjucagacao_presente_4a_pessoa = obter_conjugacao_4a_pessoa(verbo)'''


def obter_conjugacao_1a_pessoa(verbo):
    #conjugacao = 'er'
    nova_conjugacao = ''

    for caracter in verbo:
        if caracter == 'er':
            nova_conjugacao = caracter + 'o' + nova_conjugacao
            print(nova_conjugacao)
    
    return nova_conjugacao


main()