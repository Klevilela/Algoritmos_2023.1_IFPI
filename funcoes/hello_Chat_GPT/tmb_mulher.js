/*A taxa metabólica basal (TMB)
é nada mais do que a quantidade de energia mínima que seu corpo precisa gastar diariamente para manter seu organismo funcionando plenamente.
Ou seja, é a energia necessária para a manutenção de suas funções vitais,
como os batimentos cardíacos, pressão arterial, respiração, imunidade e o nível correto da temperatura corporal.

Dado o peso (em kg), a altura (em cm), a idade (em anos) e o gênero (M ou F) de uma pessoa, calcule a TMB dessa pessoa.
Fórmula da TMB para mulheres: TMB = 447,6 + (9,2 x peso) + (3,1 x altura) - (4,3 x idade)

Arredonde o valor da TMB para o inteiro mais próximo utilizando a função floor.*/

import {pedir_numero} from '../../utils.js'

function main(){
    const peso = pedir_numero('Peso: ')
    const altura = pedir_numero('Altura: ')
    const idade = pedir_numero('Idade: ')

    const tmb = calcula_tmb(peso, altura, idade)
    console.log(`TMB: ${tmb}`)
}

function calcula_tmb(p, a, i){
    const tmb = Math.floor(447.6 + (9.2 * p) + (3.1 * a) - (4.3 * i))
    return tmb
}

main()