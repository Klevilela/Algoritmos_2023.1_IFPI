'''Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
uma mensagem de permissão de acesso ou não'''

senha = int(input('Senha de acesso: '))
senha_de_acesso = 1234

if senha == senha_de_acesso:
    print('Acesso permitido')
else:
    print('Acesso negado')