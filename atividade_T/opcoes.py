from funcionalidades import *
from menu import *


def executar_opcao(opcao):
    exibir_menu = menu()
    while opcao != 0:
        if opcao == 1:
            nomes = listar_pessoas()
            print(nomes)
            #print(obter_lista_pessoas())
        if opcao == 2:
            valor_rifa = float(input('\nInforme o valor do ponto da rifa: '))
        if opcao == 3:
            taxa_administracao = float(input('\nInforme o valor da taxa de admnistração: ')) / 100
        if opcao == 4:
            valor = calcular_valor_arrecadado(valor_rifa, taxa_administracao)
            print(valor)
        if opcao == 5:
            qtd_premios_rifados = int(input('\nInforme a quantidade de prêmios rifados: '))
        if opcao == 6:
            sorteados = realizar_sorteio(qtd_premios_rifados)
            print(sorteados)
            #print(obter_quantidade_pontos())
        if opcao == 7:
            mostrar_dados_da_rifa()
        if opcao == 8:
            valor_rifa = 0
            taxa_administracao = 0
            qtd_premios_rifados = 0
            valor = 0
        
        print('\n')
        print(exibir_menu)
        opcao = int(input('\nopcao: '))
    #if opcao == 4:
        #calcular_total_arrecadado(valor_rifa, taxa_administracao)
    #if opcao == 5:
