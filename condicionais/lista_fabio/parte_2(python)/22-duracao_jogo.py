'''Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras: 
hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo 
máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia 
seguinte.'''

hora_inicio_jogo = int(input('Hora do início da partida: '))
minuto_inicio_jogo = int(input('Minuto do início da partida: '))

hora_fim_jogo = int(input('Hora do fim do jogo: '))
minuto_fim_jogo = int(input('Minuto do fim do jogo: '))

duracao_horas_jogo = hora_fim_jogo - hora_inicio_jogo
duracao_minutos_jogo = abs(minuto_fim_jogo - minuto_inicio_jogo)

qtd_horas_dia = 24
hora_limite = 0

if hora_fim_jogo >= hora_limite and hora_fim_jogo <= hora_inicio_jogo:
    duracao_horas_jogo = qtd_horas_dia - abs(minuto_fim_jogo - minuto_inicio_jogo)
    print(f'A partida durou {duracao_horas_jogo} hora(s) e {duracao_minutos_jogo} minuto(s)')

if minuto_inicio_jogo == 5 and minuto_fim_jogo == 00:
    duracao_horas_jogo -= 1
    duracao_minutos_jogo = 55

if minuto_inicio_jogo == 10 and minuto_fim_jogo == 00:
    duracao_horas_jogo -= 1
    duracao_minutos_jogo = 50

if minuto_inicio_jogo == 15 and minuto_fim_jogo == 00:
    duracao_horas_jogo -= 1
    duracao_minutos_jogo = 45

if minuto_inicio_jogo == 20 and minuto_fim_jogo == 00:
    duracao_horas_jogo -= 1
    duracao_minutos_jogo = 40

if minuto_inicio_jogo == 25 and minuto_fim_jogo == 00:
    duracao_horas_jogo -= 1
    duracao_minutos_jogo = 35

if minuto_inicio_jogo == 30 and minuto_fim_jogo == 00:
    duracao_horas_jogo -= 1
    duracao_minutos_jogo = 30

if minuto_inicio_jogo == 35 and minuto_fim_jogo == 00:
    duracao_horas_jogo -= 1
    duracao_minutos_jogo = 25
    
if minuto_inicio_jogo == 40 and minuto_fim_jogo == 00:
    duracao_horas_jogo -= 1
    duracao_minutos_jogo = 20

if minuto_inicio_jogo == 45 and minuto_fim_jogo == 00:
    duracao_horas_jogo -= 1
    duracao_minutos_jogo = 15

if minuto_inicio_jogo == 50 and minuto_fim_jogo == 00:
    duracao_horas_jogo -= 1
    duracao_minutos_jogo *= 10

if minuto_inicio_jogo == 55 and minuto_fim_jogo == 00:
    duracao_horas_jogo -= 1
    duracao_minutos_jogo *= 5

print(f'A partida durou {duracao_horas_jogo} hora(s) e {duracao_minutos_jogo} minuto(s)')