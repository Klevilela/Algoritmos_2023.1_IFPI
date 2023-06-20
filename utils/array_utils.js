import { pedir_numero } from "./input_utils.js"
import { gerar_numero_aleatorio } from "./math_utils.js"

export function pedir_vetor_vazio(tamanho = Number){
    return Array(tamanho)
}

export function preencher_vetor(tamanho_vetor){
    const vetor = Array(tamanho_vetor)
    
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = pedir_numero('Valor: ')
    }
    
    return vetor
    
}

export function preencher_vetor_manualmente(tamanho=3){
    let vetor = new Array(tamanho)

    for (let item = 0; item < tamanho; item++) {
        vetor[item] = pedir_numero('Valor: ')
    }

    return vetor
}

export function gerar_vetor_aleatorio(tamanho, minimo, maximo){
    let vetor = new Array(tamanho)

    for (let item=0; item < tamanho; item ++){
        let valor = gerar_numero_aleatorio(minimo, maximo)
        vetor[item] = valor
    }

    return vetor
}
