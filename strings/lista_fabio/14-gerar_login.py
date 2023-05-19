'''14. Escreva uma sub-rotina que gere logins para usuários de um sistema de computação baseado na seguinte
regra: o login é composto pelas letras iniciais do nome do usuário.'''

def main():
    nome = input().split()
    #print(nome)
    login = ''

    for caracter in nome:
        login += caracter[0]

    print(login + '@mail.com')


main()