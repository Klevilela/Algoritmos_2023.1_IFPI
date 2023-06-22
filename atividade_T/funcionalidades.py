import random


def listar_pessoas():
    arquivo = open('nomes.txt', 'r')
    linhas = arquivo.readlines()
    linhas_truncadas = map(str.strip, linhas)
    
    nomes = f'\nPessoas que colocaram ponto na rifa\n'

    for nome in linhas_truncadas:
        if nome != '-':
            nomes += f'\n{nome}'
    
    return nomes


def obter_quantidade_pontos_dispoinibilizados():
    arquivo = open('nomes.txt', 'r')
    linhas = arquivo.readlines()
    linhas_truncadas = map(str.strip, linhas)
    qtd = 0
    
    for linha in linhas_truncadas:
        qtd += 1
    return qtd


def obter_quantidade_pontos_vendidos():
    arquivo = open('nomes.txt', 'r')
    linhas = arquivo.readlines()
    linhas_truncadas = map(str.strip, linhas)

    qdt_pontos_vendidos = 0

    for ponto in linhas_truncadas:
        if ponto != '-':
            qdt_pontos_vendidos += 1
    
    return qdt_pontos_vendidos


def obter_quantidade_pontos_nao_vendidos():
    arquivo = open('nomes.txt', 'r')
    linhas = arquivo.readlines()
    linhas_truncadas = map(str.strip, linhas)
    
    qtd_pontos_nao_vendidos = 0

    for item in linhas_truncadas:
        if item == '-':
            qtd_pontos_nao_vendidos +=1
    
    return qtd_pontos_nao_vendidos


def calcular_valor_arrecadado(valor, taxa):
    qtd_pontos = obter_quantidade_pontos_vendidos()
    total = valor * qtd_pontos
    valor_taxa = total * taxa
    valor_liquido = total - valor_taxa 

    valores =  f'Valor total: R$ {total}\nValor da taxa: R${valor_taxa}\nValor líquido: R$ {valor_liquido}'
    return valores


def realizar_sorteio(qtd_premios):
    nomes = obter_lista_pessoas()
    
    if qtd_premios > len(nomes):
        print("Quantidade maior que o número de nomes disponíveis.")
        return
    
    nomes_sorteados = random.sample(nomes, qtd_premios)
        #return nomes_sorteados
    sorteio = f''
    for numero_sorteado, nome in enumerate(nomes_sorteados):
        sorteio += f'\nNúmero sorteado: {numero_sorteado} - Nome: {nome}'
    
    return sorteio
        

def obter_numeros_sorteados(qtd_premios):
    numeros_sorteados = []
    qtd_pontos_vendidos = obter_quantidade_pontos_vendidos()

    while len(numeros_sorteados) < qtd_premios:
        numero_sorteado = random.randint(1, qtd_pontos_vendidos+1)

        if numero_sorteado not in numeros_sorteados:
            numeros_sorteados.append(numero_sorteado)
    
    return numeros_sorteados


def mostrar_dados_da_rifa():
    pontos_disponibilizados = obter_quantidade_pontos_dispoinibilizados()
    pontos_vendidos = obter_quantidade_pontos_vendidos()
    pontos_disponiveis = obter_quantidade_pontos_nao_vendidos()
    pontos_nao_vendidos = obter_quantidade_pontos_nao_vendidos()

    mostrar_dados = f'\n'
    mostrar_dados += f'\nQuantidade de pontos disponibilizados: {pontos_disponibilizados}'
    mostrar_dados += f'\nQuantidade de pontos disponíveis: {pontos_disponiveis}'
    mostrar_dados += f'\nQuantidade de pontos vendidos: {pontos_vendidos}'
    mostrar_dados += f'\nQuantidade de pontos não vendidos: {pontos_nao_vendidos}'

    print(mostrar_dados)

def obter_lista_pessoas():
    arquivo = open('nomes.txt', 'r')
    linhas = arquivo.readlines()
    linhas_truncadas = map(str.strip, linhas)
    
    lista_nomes = []

    for nome in linhas_truncadas:
        if nome != '-':
            lista_nomes.append(nome)
    
    return lista_nomes