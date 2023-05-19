'''9. Leia um senha de um usuário, colocando asteriscos nos caracteres digitados e verifique se a senha é
correta ou não.'''

def main():
    senha = input('Senha: ')
    senha_verificada = verificar_senha(senha)
    print(senha_verificada)

def verificar_senha(senha):
    #parecer = None

    for caracter in senha:
        if caracter in '*':
            return 'Senha correta'
        else:
            return 'Senha incorreta'

main()
