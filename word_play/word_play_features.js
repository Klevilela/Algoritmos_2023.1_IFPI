import {print} from '../utils.js'
import {readFileSync} from 'fs'

const arquivo = readFileSync('br-sem-acentos.txt', 'utf-8')

//export const total_de_palavras = mostrar_palavras_e_total()


//print(palavra[2])
export function mostrar_palavras_e_total(){
    let total = 0
    
    //print(arquivo)
    
    for (let palavra = 0; palavra < arquivo.length; palavra ++){
        total ++
        //print(palavra)
    }
    print(arquivo)
    return `\nTotal de palavras: ${total}`
}

//print(mostrar_palavras_e_total())