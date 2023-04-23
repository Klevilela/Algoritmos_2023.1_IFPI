/*
Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais. O
entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então
responder: indeciso=99, outros=98, nulo/branco=0. O algoritmo deve ler a opinião de voto de cada
entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1. Ao final, devem ser mostrados:
· a porcentagem de cada candidato;
· a porcentagem dos outros candidatos;
· a porcentagem de eleitores indecisos;
· a porcentagem de votos nulos/brancos;
· o total de entrevistados;
· uma mensagem indicando a possibilidade ou não de haver 2o turno.
*/
import { pedir_numero, print } from "../../utils.js";

function main(){
    const flag = -1
    let opiniao = pedir_numero('Opção de voto: ')

    let total_entrevistados = 0
    let total_nulos = 0
    let total_indecisos = 0
    let total_outros = 0
    let total_opcao_dilma = 0
    let total_opcao_ciro = 0
    let total_opcao_serra = 0

    while (opiniao !== flag){
        opiniao = pedir_numero('Opção de voto: ')
        total_entrevistados ++

        if (opiniao === 45){
            total_opcao_serra ++
        }
        if (opiniao === 23){
            total_opcao_ciro ++
        }
        if (opiniao === 13){
            total_opcao_serra ++
        }
        if (opiniao === 99){
            total_indecisos ++
        }
        if (opiniao === 98){
            total_outros ++
        }
        if (opiniao === 0){
            total_nulos ++
        }
        else{
            opiniao = pedir_numero('Valor inválido. Digite um valor válido: ')
        }
    }

    const porcentagem_dilma = (total_opcao_dilma / total_entrevistados) * 100
    const porcentagem_ciro = (total_opcao_ciro / total_entrevistados) * 100
    const porcentagem_serra = (total_opcao_serra / total_entrevistados) * 100
    const porcentagem_outros = (total_outros / total_entrevistados) * 100
    const porcentagem_indecisos = (total_indecisos / total_entrevistados) * 100
    const porcentagem_nulos = (total_nulos / total_entrevistados) * 100

    print(`Porcentagem de votos da Dilma: ${porcentagem_dilma} %`)
    print(`Porcentagem de votos do Ciro: ${porcentagem_ciro} %`)
    print(`Porcentagem de votos da Serra: ${porcentagem_serra} %`)
    print(`Porcentagem de votos para outros candidatos: ${porcentagem_outros} %`)
    print(`Porcentagem de votos de Indecisos: ${porcentagem_indecisos} %`)
    print(`Porcentagem de votos nulos/brancos: ${porcentagem_nulos}`)
    print(`Total de entrevistados: ${total_entrevistados}`)
}

main()