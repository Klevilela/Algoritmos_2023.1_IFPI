'''19. Converta um numero do sistema binário, dado como uma cadeia de zeros e uns, para o sistema decimal
de numeração.'''

def main():
    valor_binario = input().split('\n')
    #valor_decimal = converter_para_decimal(valor_binario)
    
    valor = 0
    pos = 0
    for i in valor_binario:
        i[pos] * 2
        pos += 1
    valor += int(i)
    print(int(i))
    
    print(valor_binario)
    #print(valor_decimal)
    

'''def converter_para_decimal(valor):
    valor = 0
    pos = 0
    for i in valor:
        i[pos] * 2
        pos += 1
        valor += i
        print(i)
'''
main()