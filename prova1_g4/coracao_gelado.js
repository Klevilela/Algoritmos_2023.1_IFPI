import {pedir_numero, pedir_texto, print} from '../utils.js'

function main(){
    const nome = pedir_texto('Nome: ')
    const idade = pedir_numero('Idade: ')

    const fcm = calcular_fcm(idade)
    const tabela_at_fisica = exibir_tabela_at_fisica(fcm)
    
    print(tabela_at_fisica)
    
    const tempo_atividade = pedir_numero('Tempo(minutos) de atividade física: ')
    const disposicao_tempo_atividade = exbibir_distribuicao_tempo(tempo_atividade)

    print(disposicao_tempo_atividade)
}

const calcular_fcm = idade => 220 - idade

function exibir_tabela_at_fisica(frequencia){
    const limMaxMaxima = frequencia
    const limMinMaxima = .9 * frequencia
    const limMaxDificil = 9. * frequencia
    const limMinDificil = 8. * frequencia
    const limMaxModerada = 8. * frequencia
    const limMinModerada = 7. * frequencia
    const limMaxLeve = .7 * frequencia
    const limMinLeve = .6 * frequencia
    const limMaxMuitoLeve = .6 * frequencia
    const limMinMuitoLeve = .5 * frequencia

    let valores
    valores = `\n`
    valores += `\nMÁXIMA: ${limMinMaxima} a ${limMaxMaxima} Bpm`
    valores += `\nDesenvolve o máximo de desempenho e velocidade`
    valores += '\n'

    valores += `\nDIFÍCIL: ${limMinDificil} a ${limMaxDificil} Bpm`
    valores += `\nMelhora a capacidade máxima de desempenho para treinos curtos`
    valores += '\n'

    valores += `\nMÁXIMA: ${limMinModerada} a ${limMaxModerada} Bpm`
    valores += `\nMelhora a capacidade aeróbica`
    valores += '\n'

    valores += `\nMÁXIMA: ${limMinLeve} a ${limMaxLeve} Bpm`
    valores += `\nMelhora a resistência e promove a queima de gordura`
    valores += '\n'

    valores += `\nMÁXIMA: ${limMinMuitoLeve} a ${limMaxMuitoLeve} Bpm`
    valores += `\nAjuda na recuperação física`
    valores += '\n'

    return valores
}

function exbibir_distribuicao_tempo(tempo){
    const tempoModerada = .6 * tempo
    const tempoLeve = .2 * tempo
    const tempoDificil = .1 * tempo
    const tempoMuitoLeve = .2 * tempo

    let distribuicao_tempo
    distribuicao_tempo = `\nTempo que deve ficar em atividade moderada: ${tempoModerada} minutos`
    distribuicao_tempo += `\nTempo que deve ficar em atividade leve: ${tempoLeve} minutos`
    distribuicao_tempo += `\nTempo que deve ficar em atividade difícil: ${tempoDificil} minutos`
    distribuicao_tempo += `\nTempo que deve ficar em atividade muito leve: ${tempoMuitoLeve} minutos`

    return distribuicao_tempo
}

main()