/* adicionar as funções

- exibir maior e menor número
- sortear dois números
- top n maiores números
- top n menores números
- eliminar múltiplos de m e n simultaneamente
- listar valor médio, e listar números maiores que a Média e Menores que a Média
*/
import { ordenar_vetor_crescente, ordenar_vetor_decrescente } from "./utils_functions.js"
import { eh_multiplo, eh_positivo } from "../../../utils/math_utils.js"

export function exibir_maior_e_menor(vetor){
    let maior = 0
    let menor = Infinity

    for (let item = 0; item < vetor.length; item++) {
        if (vetor[item] > maior){
            maior = vetor[item]
        }
        if (vetor[item] < menor){
            menor = vetor[item]
        }
    }

    return `Vetor: ${vetor}\nMaior valor: ${maior}\nMenor valor: ${menor}`
}

export function sortear_numeros(vetor){
    let numeros_sorteados = []
    let valores_positivos_vetor = []
    let valores_negativos_vetor = []

    for (let index = 0; index < vetor.length; index++) {
        if (eh_positivo(vetor[index])){
            valores_positivos_vetor.push(vetor[index])
        }
        else{
            valores_negativos_vetor.push(vetor[index])
        }
    }

    let numero_positivo_sorteado = Math.trunc(Math.random()*valores_positivos_vetor.length)
    let numero_negativo_sorteado = Math.trunc(Math.random()*valores_negativos_vetor.length)

    let positivo_sorteado = vetor[numero_positivo_sorteado]
    let negativo_sorteado = vetor[numero_negativo_sorteado]

    numeros_sorteados.push(positivo_sorteado)
    numeros_sorteados.push(negativo_sorteado)


    return numeros_sorteados
}

export function top_maiores_numeros(vetor, qtd){
    const vetor_ordenado = ordenar_vetor_decrescente(vetor)
    let top_numeros = []

    for (let index = 0; index < qtd; index++) {
        let valor = vetor_ordenado[index]
        top_numeros[index] = valor
    }

    return top_numeros
}

export function top_menores_numeros(vetor, qtd){
    const vetor_ordenado = ordenar_vetor_crescente(vetor)
    let top_numeros = []

    for (let index = 0; index < qtd; index++) {
        let valor = vetor_ordenado[index]
        top_numeros[index] = valor 
    }

    return top_numeros
}

export function eliminar_multiplos_de_m_n(vetor, m, n){
    let novo_vetor = []
    for (let index = 0; index < vetor.length; index++) {
        let valor = vetor[index]
        if (!eh_multiplo(valor, m) && !eh_multiplo(valor, n)){
            novo_vetor = valor
        }
    }

    return novo_vetor
}

export function obter_valor_medio(vetor){
    const qtd_elementos = vetor.length
    let somatorio = 0

    for (let index = 0; index < vetor.length; index++) {
        if (eh_positivo(vetor[index])){
            somatorio += vetor[index]
        }
    }

    const media = somatorio / qtd_elementos

    return media
}

export function obter_valor_acima_do_valor_medio(vetor, valor_medio){
    let valores_acima_do_valor_medio = []
    
    for (let index = 0; index < vetor.length; index++) {
        if (vetor[index] > valor_medio){
            valores_acima_do_valor_medio.push(vetor[index])
        }
    }

    return valores_acima_do_valor_medio
}