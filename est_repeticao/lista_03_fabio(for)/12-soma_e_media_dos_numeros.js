/*12. Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.*/
import {pedir_numero, print} from '../../utils.js'

function main(){
    const numero = pedir_numero('Número: ')
    const soma = calulcar_somatorio(numero)
    const media = calcular_media(numero, soma)

    print(`Soma: ${soma}\nMedia: ${media}`)
}


function calulcar_somatorio(valor){
    let somatorio = 0
    for (i = 0; i < valor; i ++){
        somatorio += i
    }
    return somatorio
}


function calcular_media(valor, somatorio){
    let qtd
    for (i = 0; i < valor; i++){
        qtd = i
    }
    const media = somatorio / qtd
    return media
}

main()