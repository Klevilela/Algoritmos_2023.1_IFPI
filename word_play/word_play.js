import {pedir_numero,pedir_texto,print} from '../utils.js'
import { mostrar_palavras_e_total } from './word_play_features.js'

function main(){
    
    const menu = show_menu()
    print(menu)
    
    let opcao = pedir_texto('Opção: ')
    const funcionalidade = executar_opcao(opcao)
    
    //print(funcionalidade)
}

function show_menu(){
    
    let menu = ``
    menu += `a) Todas as Palavras (mostrar total no final\n`
    menu += `b) Palavras mínimo N letras\n`
    menu += `c) Palavras que não contém letras\n`
    menu += `d) Palavras que contém todas letras\n`
    menu += `e) Palavras que só contém letras\n`
    menu += `f) Quantas palavras tem mais vogais que consoantes \n`
    menu += `g) Palavras "Palíndromas"\n`
    menu += `h) Palavras "Abecedárias"\n`
    menu += `i) Palavra(s) com maior soma valor ASCII\n`
    menu += `j) Somatório ASCII das Palavras de Tamanho Múltiplo de N \n`
    menu += `k) Contar/Listar palavras que Começam e Terminam com a mesma letra\n`

    //console.clear()

    return menu
}

function executar_opcao(opcao){
    let execucao
    if (opcao === 'a'){
        //execucao = mostrar_palavras_e_total()
        print(mostrar_palavras_e_total())
    }
    /*if (opcao === 'b'){
        execucao = mostrar_palavras_e_total()
    }
    if (opcao === 'c'){
        execucao = mostrar_palavras_e_total()
    }
    if (opcao === 'd'){
        execucao = mostrar_palavras_e_total()
    }
    if (opcao === 'e'){
        execucao = mostrar_palavras_e_total()
    }
    if (opcao === 'f'){
        execucao = mostrar_palavras_e_total()
    }
    if (opcao === 'g'){
        execucao = mostrar_palavras_e_total()
    }
    if (opcao === 'g'){
        execucao = mostrar_palavras_e_total()
    }
    if (opcao === 'h'){
        execucao = mostrar_palavras_e_total()
    }
    if (opcao === 'i'){
        execucao = mostrar_palavras_e_total()
    }
    if (opcao === 'j'){
        execucao = mostrar_palavras_e_total()
    }
    if (opcao === 'k'){
        execucao = mostrar_palavras_e_total()
    }*/
    else{
        print(`\n${show_menu()}`)
        opcao = pedir_texto('Informe um valor válido: ')
    }
    
    return execucao
}


main()