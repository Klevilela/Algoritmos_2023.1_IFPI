/*A taxa metabólica basal (TMB)
é nada mais do que a quantidade de energia mínima que seu corpo precisa gastar diariamente para manter seu organismo funcionando plenamente.
Ou seja, é a energia necessária para a manutenção de suas funções vitais,
como os batimentos cardíacos, pressão arterial, respiração, imunidade e o nível correto da temperatura corporal.

Dado o peso (em kg), a altura (em cm), a idade (em anos) e o gênero (M ou F) de uma pessoa, calcule a TMB dessa pessoa.
Fórmula da TMB para homens: TMB = 88,36 + (13,4 x peso) + (4,8 x altura) - (5,7 x idade)

Arredonde o valor da TMB para o inteiro mais próximo utilizando a função floor.
Exemplo de entrada: peso = 70, altura = 170, idade = 30, genero = "M"
Saída esperada: 1608
 */

import {pedir_numero} from '../../utils.js'

function main(){
    const peso = pedir_numero('Peso: ')
    const altura = pedir_numero('Altura: ')
    const idade = pedir_numero('Idade: ')

    const tmb = calcula_tmb(peso, altura, idade)
    console.log(`TMB: ${tmb}`)
}

function calcula_tmb(p, a, i){
    const tmb = Math.floor(88.36 + (13.4 * p) + (4.8 * a) - (5.7 * i))
    return tmb
}

main()