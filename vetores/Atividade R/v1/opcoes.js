import { print, pedir_numero } from '../../../utils/input_utils.js'
import { exibir_menu } from './menu.js'
import { gerar_vetor_aleatorio, preencher_vetor_manualmente } from '../../../utils/array_utils.js';
import{gerar_vetor_com_valor_padrao, transformar_vetor} from './map_functions.js'
import { ordenar_vetor_crescente, ordenar_vetor_decrescente, comparar_vetores } from './utils_functions.js';

import {
    contar_positivos_negativos_e_zeros,
    obter_somatorio,
    obter_produto_acumulado,
    exibir_media_e_mediana_dos_positivos_e_negativos,
    obter_media_do_vetor,
    obter_media_positivos_do_vetor,
    obter_mediana_do_vetor,
    obter_mediana_positivos_do_vetor,
    obter_media_negativos_do_vetor,
    obter_mediana_negativos_vetor,
    obter_media_multiplos_de_dois
} from "./reduce_functions.js";


import{
    exibir_maior_e_menor,
    sortear_numeros,
    top_maiores_numeros,
    top_menores_numeros,
    obter_valor_medio,
    obter_valor_acima_do_valor_medio,
    eliminar_multiplos_de_m_n
} from './filter_functions.js'


export function obter_funcionalidade(){
    const menu = exibir_menu()
    let opcao
    let vetor = []
    while (opcao !== 0){
        
        print(menu)
        console.clear()    
        if (opcao === 1){
            console.clear()
            print('\n')
            print('--Gerar vetor N posições, pedir valor padrão--')
            const tamanho = pedir_numero('Tamanho do vetor: ')
            const numero = pedir_numero('Valor-padrão: ')
            vetor = gerar_vetor_com_valor_padrao(tamanho, numero)
        }
        if (opcao === 2){
            console.clear()
            print('\n')
            print('---Preencher vetor manualmente item a item---')
            const tamanho = pedir_numero('Tamanho do vetor: ')
            //preencher_vetor_manualmente(tamanho)
            vetor = preencher_vetor_manualmente(tamanho)
        }
        if (opcao === 3){
            console.clear()
            print('\n')
            print('--Preencher vetor automaticamente--')

            const minimo = pedir_numero('Valor mínimo: ')
            const maximo = pedir_numero('Valor mínimo: ')
            const tamanho = pedir_numero('Tamanho do vetor: ')

            vetor = gerar_vetor_aleatorio(tamanho, minimo, maximo)
        }
        if (opcao === 4){
            console.clear()
            print('\n')
            print(vetor)
            //print('\n')
            //print(menu)
            //print('\n')
        }
        if (opcao === 5){
            console.clear()
            print('\n')
            print('---Transformar vetor: elevar a potência N---')
            const valor = pedir_numero('Valor: ')
            vetor = transformar_vetor(vetor, valor)
        }

        if (opcao === 6){
            console.clear()
            print('\n')
            print('---Contar: Positivos, Negativos e Zeros---')
            vetor = contar_positivos_negativos_e_zeros(vetor)
        }
        if (opcao === 7){
            console.clear()
            print('\n')
            print('---Somatório: De todos, Dos Negativos e dos Positivos---')
            vetor = obter_somatorio(vetor)
        }
        if (opcao === 8){
            console.clear()
            print('\n')
            print('--Exibir Média e Mediana: De Todos, Dos Positivos e Dos Negativos--')

            const media = obter_media_do_vetor(vetor)
            const mediana = obter_mediana_do_vetor(vetor)
            const media_positivos = obter_media_positivos_do_vetor(vetor)
            const mediana_positivos = obter_mediana_positivos_do_vetor(vetor)
            const media_negativos = obter_media_negativos_do_vetor(vetor)
            const mediana_negativos = obter_mediana_negativos_vetor(vetor)

            vetor = exibir_media_e_mediana_dos_positivos_e_negativos(
              media,
              mediana,
              media_positivos,
              mediana_positivos,
              media_negativos,
              mediana_negativos
            )
        }
        if (opcao === 9){
            console.clear()
            print('\n')
            print('---Exibir Maior e Menor número---')

            vetor = exibir_maior_e_menor(vetor)
            print(vetor)
        }
        if (opcao === 10){
            console.clear()

            print('\n')
            print('---Sortear dois números: um positivo e um negativo---')
            vetor = sortear_numeros(vetor)
        }
        if (opcao === 11){
            console.clear()
            print('\n')
            print('---Gerar N grupos de T tamanhos. Não repetir valores---')

            const qtd_vetores = pedir_numero('Quantidade de vetores a serem criados: ')
            const minimo = pedir_numero('Valor mínimo: ')
            const maximo = pedir_numero('Valor mínimo: ')
            const tamanho = pedir_numero('Tamanho do vetor: ')
            //let vetores = gerar_vetor_aleatorio(tamanho, minimo, maximo)
            vetor = gerar_grupos_de_vetores(qtd_vetores, tamanho, minimo, maximo)
        }
        if (opcao == 12){
            console.clear()
            print('\n')
            print('---Pedir um novo vetor e verificar se está 100% presente nos números do sistema (e na mesma ordem)---')
            const tamanho = vetor.length
            const vetor2 = preencher_vetor_manualmente(tamanho)
            vetor = comparar_vetores(vetor2, vetor)
        }
        if (opcao === 13){
            console.clear()
            print('\n')
            print('---Top N maiores números---')
            const n = pedir_numero('Quantidade de números: ')
            vetor = top_maiores_numeros(vetor, n)
        }
        if (opcao === 14){
            console.clear()
            print('\n')
            print('---Top N menores números---')

            const n = pedir_numero('Quantidade de números: ')
            vetor = top_menores_numeros(vetor, n)
        }
        if (opcao === 15){
            console.clear()
            print('\n')
            print('---Listar valor médio, e listar números maiores que a Média e Menores que a Média---')
            const valor_medio = obter_valor_medio(vetor)
            const valor_acima_do_valor_medio = obter_valor_acima_do_valor_medio(vetor, valor_medio)
            const valores_abaixo_do_valor_medio = obter_valor_abaixo_do_valor_medio(vetor, valor_medio)
            let valores = `Valor médio: ${valor_medio}\nValores acima do valor médio: ${valor_acima_do_valor_medio}\nValores abaixo do valor médio: ${valores_abaixo_do_valor_medio}`;
            vetor = valores
        }
        if (opcao === 16){
            console.clear()
            print('\n')
            print('---Somatório da Média dos Números Positivos múltiplos dois COM o Produto acumulado dos números negativos pares reduzidos à metade---')
            const media_multiplos_de_dois = obter_media_multiplos_de_dois(vetor)
            const acumulado_negativos_pares = obter_produto_acumulado(vetor)
            const somatorio = (media_multiplos_de_dois + acumulado_negativos_pares)
            //print(media_multiplos_de_dois)
            //print(acumulado_negativos_pares)
            vetor = `Somatório da média dos múltiplos de 2 com o acumulado dos negativos pares reduzidos à metade: \n${somatorio.toFixed(1)}`
        }
        if (opcao === 17){
            console.clear()
            print('\n')
            print('---Ordenar os números em ordem crescente---')
            vetor = ordenar_vetor_crescente(vetor)
        }
        if (opcao === 18){
            console.clear()
            print('\n')
            print('---Ordenar os números em ordem decrescente---')
            vetor = ordenar_vetor_decrescente(vetor)
        }
        if (opcao === 19){
            //console.clear()
            print('\n')
            print('---Eliminar números múltiplos de N e M (simultaneamente)---')

            const m = pedir_numero('Valor: ')
            const n = pedir_numero('Valor: ')

            vetor = eliminar_multiplos_de_m_n(vetor, m, n)
        }

        
        print('\n')
        print(menu)
        print('\n')    
        opcao = pedir_numero('Opção: ')
        //console.clear()
        //console.clear()
    }
    if (opcao == 0){
        print('Tchau, coração !')
    }
    //console.clear()
}   