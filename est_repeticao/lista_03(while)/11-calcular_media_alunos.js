/*
11. Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por
matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:

Média Final = (2 * nota1) + (3 * nota2) + (5 * nota3)/10

Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7, o
aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total
de alunos da turma.
 */

import { pedir_numero, print } from "../../utils.js";

function main(){
    let matricula = pedir_numero('Matrícula: ')
    let qtd_aprovados, qtd_reprovados = 0
    let nota1, nota2, nota3
    let media

    while (matricula !== 0){
        matricula = pedir_numero('Matrícula: ')
        nota1 = pedir_numero('Nota 1: ')
        nota2 = pedir_numero('Nota 2: ')
        nota3 = pedir_numero('Nota 3: ')

        media = calcular_media(nota1, nota2, nota3)

        if (media >= 7){
            qtd_aprovados ++
        }
        else{
            qtd_reprovados ++
        }
    }

    print(`Quantidade de aprovados: ${qtd_aprovados}`)
    print(`Quantidade de reprovados: ${qtd_reprovados}`)
}

function calcular_media(n1, n2, n3){
    return ((n1 * 2) + (n2 * 3) + (n3 * 5) / 10)
}

main()