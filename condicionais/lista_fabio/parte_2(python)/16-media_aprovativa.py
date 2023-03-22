'''Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior 
ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média 
final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve 
escreva “Reprovado”.'''

nota1 = int(input('Nota 1: '))
nota2 = int(input('Nota 2: '))

media = (nota1 + nota2) / 2


if media >= 7:
    print('\nAprovado')
elif media >= 5 and media < 7:
    nota_exame_final = int(input('Nota do exame final: '))
    if nota1 < nota2:
        media_final = (nota2 + nota_exame_final) / 2
    else:
        media_final = (nota1 + nota_exame_final) / 2
    if media_final >= 5:
        print('\nAprovado')
else:
    print('\nReprovado')

