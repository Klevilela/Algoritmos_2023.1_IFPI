'''10. Uma palavra é palíndroma se ela não se altera quando lida da direita para esquerda. Por exemplo, raiar
é palíndroma. Escreva um programa que verifique se uma palavra digitada é palíndroma.'''

def main():
    palavra = input()
    palavra_invertida = inverter_palavra(palavra)
    palavra_palindrona = eh_palindrona(palavra_invertida, palavra)

    #print(palavra)
    #print(palavra_invertida)

    print(palavra_palindrona)

def inverter_palavra(frase):
    nova_frase = ''
    
    for i in frase:
        nova_frase = i + nova_frase
    return nova_frase

def eh_palindrona(palavra_invertida, palavra):
    if palavra_invertida == palavra:
        return 'É palíndrona'
    
    return 'Não é palíndrona'


main()