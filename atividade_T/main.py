from menu import *
from opcoes import *
#from funcionalidades import *

def main():
    exibir_menu = menu()
    print(exibir_menu)

    opcao = int(input('\nInforme a opção: '))

    
    executar_opcao(opcao)

main()