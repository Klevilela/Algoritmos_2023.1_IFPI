/*
27. Escreva um algoritmo que leia um conjunto de dados de um grupo de 100 pessoas, sexo (1=Masculino,
2=Feminino), idade e estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) e escreva:
· Média de idade das mulheres;
· Média de idade dos homens;
· O percentual de homens solteiros;
· O percentual de mulheres solteiras;
· A quantidade de mulheres divorciadas acima de 30 anos.
*/
import { pedir_numero, print} from '../../utils.js'

function main(){
    const qtd_alvo = 10
    let atual = 0
    let sexo, idade, estado_civil
    
    let qtd_homens, qtd_mulheres = 0
    let somatorio_idade_homens = 0
    let somatorio_idade_mulheres = 0


    let qtd_solteiros, qtd_solteiras = 0
    let qtd_divorciadas = 0

    while (atual < qtd_alvo){
        sexo = pedir_numero('Sexo: 1-masculino; 2- feminino: ')
        idade = pedir_numero('Idade: ')
        estado_civil = pedir_numero('1-casado; 2-solteiro; 3-divorciado; 4-viuvo: ')

        if (sexo === 1){
            if ()
        }
    }

}

main()