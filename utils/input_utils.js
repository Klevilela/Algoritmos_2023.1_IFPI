import prompt from 'prompt-sync'
const input = prompt()

export const pedir_texto = (mensagem) => input(mensagem)
export const pedir_numero = (mensagem) =>  Number(input(mensagem))
export const print = (mensagem) => console.log(mensagem)
//export const mostrar_texto = (mensagem) => console.log(mensagem)
export const mostrar_texto_caixa_baixa = (mensagem) => mensagem.toLowerCase()
export const mostrar_texto_caixa_alta = (mensagem) => mensagem.toUpperCase()

export function obter_texto_tamanho_minimo(mensagem=String, tamaho){
    const tamaho_mensagem = mensagem.length

    while (tamaho_mensagem < tamaho){
        print('Tamanho de texto inferior ao informado. Digite novamente')
        pedir_texto()
    }


    return mensagem
}


export function obter_texto_tamanho_maximo(mensagem=String, tamaho){
    const tamaho_mensagem = mensagem.length

    while (tamaho_mensagem > tamaho){
        print('Tamanho de texto inferior ao informado. Digite novamente')
        pedir_texto()
    }

    return mensagem
}

export function obter_texto_min_max(texto=String, minimo, maximo){
    tamanho_texto = texto.length

    if (tamanho_texto < minimo || tamanho_texto > maximo){
        pedir_texto()
    }

    return texto
}

export function obter_numero_negativo(numero){
    if (numero < 0){
        return numero
    }
    else{
        print('Número maior que 0')
        return obter_numero_negativo(numero)
    }
}

export function obter_numero_positivo(numero){
    pedir_numero()
    if (numero > 0){
        return true
    }
    else{
        print('Número menor que 0')
        return obter_numero_negativo(numero)
    }
}

export function obter_numero_minimo(numero, minimo){
    if (numero >= minimo){
        return true
    }
    else{
        print(`Número inferior a ${minimo}`)

    }
}

//export default pedir_dado(mensagem)


