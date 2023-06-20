import { print } from "../../../utils/input_utils.js"

export function exibir_menu(){
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