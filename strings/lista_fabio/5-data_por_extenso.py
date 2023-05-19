'''5. Leia uma data no formato DD/MM/AAAA e escreva o mês por extenso (DD de mês de AAAA).'''

def main():
    dia,mes,ano = input('Data: ').split('/')

    mes_por_extenso = obter_nome_mes(mes)
    
    data_por_extenso = f'\n{dia} de {mes_por_extenso} de {ano}'

    print(data_por_extenso)

def obter_nome_mes(num_mes):
    if num_mes == '01':
        return 'janeiro'
    if num_mes == '02':
        return 'fevereiro'
    if num_mes == '03':
        return 'março'
    if num_mes == '04':
        return 'abril'
    if num_mes == '05':
        return 'maio'
    if num_mes == '06':
        return 'junho'
    if num_mes == '07':
        return 'julho'
    if num_mes == '08':
        return 'agosto'
    if num_mes == '09':
        return 'setembro'
    if num_mes == '10':
        return 'outubro'
    if num_mes == '11':
        return 'novembro'
    if num_mes == '12':
        return 'dezembro'


main()
