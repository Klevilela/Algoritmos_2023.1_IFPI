'''8. Leia uma string no formato hh:mm:ss e escreva o resultado na seguinte forma: “hh hora(s), mm
minuto(s) e ss segundo(s)”.'''

def main():
    hora, minuto, segundo = input('Tempo: ').split(':')

    print(f'{hora} hora(s), {minuto} segundo(s) e {segundo} segundo(s)')

main()