/*15. Leia um número (entre 0 e 255) na base decimal, calcule e escreva este número na base binária
e na base hexadecimal. */
import { pedir_numero, print} from '../../utils.js'
function main(){
    let numero  = pedir_numero('Digite um número entre 0 e 255 em decimal: ')

    while (numero < 0 && numero > 255){
        pedir_numero('Digite um número entre 0 e 255 em decimal: ')
    }

    const binario = converter_para_binario(numero)
    const hexadecimal = converter_para_hexadecimal(numero)

    print(`${numero} em binário: ${binario}`)
    print(`${numero} em hexadecimal: ${hexadecimal}`)
}

function converter_para_binario(valor){

}

main()


// 15(2) = 1111 =

/**
 15 / 2 = 7 (1)
 7 / 2 = 3 (1)
 3 / 2 = 1 (1)
 2 / 2 = 1 (1)
 1 / 1 = 1 (0)

 */