export function ordenar_vetor_crescente(vetor){
    const tamanho = vetor.length - 1

    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < tamanho - i; j++) {
            let atual = vetor[j]
            let proximo = vetor[j+1]

            if (atual < proximo){
                vetor[j] = atual
                vetor[j+1] = proximo
            }
            if (atual > proximo){
                vetor[j] = proximo
                vetor[j+1] = atual
            }
        }
    }
    return vetor
}

export function ordenar_vetor_decrescente(vetor){
    const tamanho = vetor.length - 1

    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < tamanho - i; j++) {
            let atual = vetor[j]
            let proximo = vetor[j+1]

            if (atual < proximo){
                vetor[j] = proximo
                vetor[j+1] = atual
            }
            /*if (atual > proximo){
                vetor[j] = atual
                vetor[j+1] = proximo
            }*/
        }
    }

    return vetor
}

export function comparar_vetores(novo_vetor, vetor){
    for (let item = 0; item < novo_vetor.length; item++){
        let valor_novo_vetor = novo_vetor[item]
        let valor_vetor_atual = vetor[item]
        
        const eh_igual = (v1, v2) => v1 === v2
        
        if (eh_igual(valor_novo_vetor, valor_vetor_atual)){
            return `Novo vetor: ${novo_vetor}\nVetor atual: ${vetor}\nO novo vetor está 100% presente nos números do sistema`
        }
        else{
            return `Novo vetor: ${novo_vetor}\nVetor atual: ${vetor}\nO novo vetor não contém valores os valores do vetor ou não está na mesma ordem`
        }
    }

}


//[3,4,2] => [3,5,2]
