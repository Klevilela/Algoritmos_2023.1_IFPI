'''17. Escreva uma sub-rotina de nome substr, que extraia uma sub-cadeia de uma string. Ex.: substr(texto,
10, 20), extrairá 20 caracteres de texto a partir do caractere na posição 10.'''

def main():
    frase = input('Frase: ')
    posicao = int(input('A partir de qual posição: '))
    qtd_caracteres = int(input('Quantidade de caracteres a ser extraída a partir da posição informada: '))

    substring = obter_substr(frase, posicao, qtd_caracteres)    
    print(substring)

def obter_substr(frase, posicao__alvo, quantidade):
    substring = ''

    for caracter in range(len(frase)):
        if caracter == posicao__alvo:
            substring += frase[posicao__alvo:caracter+quantidade+1]
            
    return substring

main()