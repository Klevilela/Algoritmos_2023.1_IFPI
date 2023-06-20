/* adicionar as funções

- gerar vetor padrão
- gerar vetor aleatório
- preencher vetor automaticamente
- transformar vetor


*/

// funções do tipo map
export function gerar_vetor_com_valor_padrao(tamanho, valor){
    let vetor = new Array(tamanho)

    for (let item = 0; item < tamanho; item ++){
        vetor[item] = valor
    }

    return vetor
}

export function transformar_vetor(vetor, valor){
    let vetor_transformado = Array(vetor.length)
    for (let item=0; item < vetor.length; item++){
        //vetor[item] = funcao(vetor[item])
        vetor_transformado[item] = vetor[item] ** valor
    }

    return vetor_transformado
    // function operacao(valor){
    //     return vetor ** valor
    // }
}