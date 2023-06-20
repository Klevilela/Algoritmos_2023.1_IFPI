import {pedir_texto} from '../../../utils/input_utils.js'
import {obter_funcionalidade} from './opcoes.js'

function main(){
    const entrar = pedir_texto('Aperte enter')
    
    console.clear()
    obter_funcionalidade()
}
    //obter_funcionalidade()

    /*while (opcao !== 0){
        
        console.clear()    
        print(menu)
        if (opcao === 1){
            console.clear()
            print('\n')
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
            print('--Preencher vetor automaticamente--')

            const minimo = pedir_numero('Valor mínimo: ')
            const maximo = pedir_numero('Valor mínimo: ')
            const tamanho = pedir_numero('Tamanho do vetor: ')

            vetor = gerar_vetor_aleatorio(tamanho, minimo, maximo)
        }
        if (opcao === 4){
            print('\n')
            print(vetor)
        }
        if (opcao === 5){
            console.clear()
            const valor = pedir_numero('Valor: ')
            vetor = transformar_vetor(vetor, valor)
        }

        if (opcao === 6){
            console.clear()
            vetor = contar_positivos_negativos_e_zeros(vetor)
        }
        if (opcao === 7){
            console.clear()
            vetor = obter_somatorio(vetor)
        }
        if (opcao === 9){
            console.clear()
            vetor = exibir_maior_e_menor(vetor)
            print(vetor)
        }
        if (opcao === 10){
            console.clear()
            vetor = sortear_numeros(vetor)
        }
        if (opcao === 11){
            console.clear()
            const qtd_vetores = pedir_numero('Quantidade de vetores a serem criados: ')
            const minimo = pedir_numero('Valor mínimo: ')
            const maximo = pedir_numero('Valor mínimo: ')
            const tamanho = pedir_numero('Tamanho do vetor: ')
            //let vetores = gerar_vetor_aleatorio(tamanho, minimo, maximo)
            vetor = gerar_grupos_de_vetores(qtd_vetores, tamanho, minimo, maximo)
        }
        if (opcao == 12){
            const tamanho = vetor.length
            const vetor2 = preencher_vetor_manualmente(tamanho)
            vetor = comparar_vetores(vetor, vetor2)
        }
        if (opcao === 13){
            console.clear()
            const n = pedir_numero('Quantidade de números: ')
            vetor = top_maiores_numeros(vetor, n)
        }
        if (opcao === 14){
            console.clear()
            const n = pedir_numero('Quantidade de números: ')
            vetor = top_menores_numeros(vetor, n)
        }
        if (opcao === 15){
            console.clear()
            const valor_medio = obter_valor_medio(vetor)
            const valor_acima_do_valor_medio = obter_valor_acima_do_valor_medio(vetor, valor_medio)
            const valores_abaixo_do_valor_medio = obter_valor_abaixo_do_valor_medio(vetor, valor_medio)
            let valores = `Valor médio: ${valor_medio}\nValores acima do valor médio: ${valor_acima_do_valor_medio}\nValores abaixo do valor médio: ${valores_abaixo_do_valor_medio}`
            vetor = valores
        }
        if (opcao === 16){
            const media_multiplos_de_dois = obter_media_multiplos_de_dois(vetor)
            const acumulado_negativos_pares = obter_produto_acumulado(vetor)
            const somatorio = (media_multiplos_de_dois + acumulado_negativos_pares)
            //print(media_multiplos_de_dois)
            //print(acumulado_negativos_pares)
            vetor = `Somatório da média dos múltiplos de 2 com o acumulado dos negativos pares reduzidos à metade: \n${somatorio.toFixed(1)}`
        }
        if (opcao === 17){
            vetor = ordenar_vetor_crescente(vetor)
        }
        if (opcao === 18){
            vetor = ordenar_vetor_decrescente(vetor)
        }
        if (opcao === 19){
            const m = pedir_numero('Valor: ')
            const n = pedir_numero('Valor: ')

            vetor = eliminar_multiplos_de_m_n(vetor, m, n)
        }

        
        print('\n')
        opcao = pedir_numero('Opção: ')    
        console.clear()
        print(menu)
        console.clear()
    }
    print('tchau coração')
    //console.clear()*/
//}



/*function exibir_menu(){
    // concatenar as opções e retornar as strings para a main()
    let menu = ``
    menu += `1- Gerar vetor N posições, pedir valor padrão\n`
    menu += `2- Preencher vetor manualmente item a item\n`
    menu += `3- Preencher vetor automaticamente\n`
    menu += `4- Mostrar vetor\n`
    menu += `5- Transformar vetor: elevar a potência N\n`
    menu += `6- Contar: Positivos, Negativos e Zeros\n`
    menu += `7- Somatório: De todos, Dos Negativos e dos Positivos\n`
    menu += `8- Exibir Média e Mediana: De Todos, Dos Positivos e Dos Negativos\n`
    menu += `9- Exibir Maior e Menor número\n`
    menu += `10- Sortear dois números: um positivo e um negativo\n`
    menu += `11- Gerar N grupos de T tamanhos. Não repetir valores\n`
    menu += `12- Pedir um novo vetor e verificar se está 100% presente nos números do sistema (e na mesma ordem)\n`
    menu += `13- Top N maiores números\n`
    menu += `14- Top N menores números\n`
    menu += `15- Listar valor médio, e listar números maiores que a Média e Menores que a Média\n`
    menu += `16- Somatório da Média dos Números Positivos múltiplos dois COM o Produto acumulado dos números negativos pares reduzidos à metade\n`
    menu += `17- Ordenar os números em ordem crescente: \n`
    menu += `18- Ordenar os números em ordem decrescente: \n`
    menu += `19- Eliminar números múltiplos de N e M (simultaneamente)\n`
    menu += `\n`
    
    menu += `0- Sair`
    menu += `\n`
    menu += `\n`

    return menu
}


const elevar_a_potencia = (vetor,valor) => vetor ** valor 
*/
main()