/*O Índice de Adiposidade Corporal, mais conhecido como IAC, é um método utilizado para medir a gordura corporal.
Para o cálculo desse índice são utilizadas medidas antropométricas,
como circunferência do quadril e altura.

Dado o quadril (em cm) e a altura (em cm) de uma pessoa, calcule o IAC dessa pessoa.
Fórmula do IAC: IAC = (quadril / (altura * sqrt(altura))) - 18
IAC estiver entre 0 e 8,9 a pessoa tá "Magra". Se o IAC estiver entre 9 e 20,9 tá "Normal".
Se o IAC estiver entre 21 e 25,9, tá com "Sobrepeso", e por fim se o IAC estiver entre 26 e 29,9, está em "Obesidade grau 1". 
Considerando a informação acima, além de mostrar o IAC da pessoa,
calcule para ela qual o quadril mínino e máximo que ela deveria ter para ficar na faixa Normal.
*/

import {pedir_numero} from '../../utils.js'


function main(){
    const quadril = pedir_numero('Quadril: ')
    const altura = pedir_numero('Altura: ')

    const iac = calcula_iac(quadril, altura)
    const situacao = verifica_situacao_iac(iac)

    // sem condicionais
    console.log(`\nIAC entre 0 e 25,9: Magra\nIAC entre 9 e 20,9: Normal\nIAC entre 21 e 25,9: Sobrepeso\nIAC entre 26 e 29,9: Obesidade grau 1`)
    console.log(`\nIAC: ${iac}`)
    
    //com condicional
    //console.log(situacao)
}

function calcula_iac(medida_quadril, medida_altura){
    const valor_iac = (medida_quadril / ((medida_altura/100) * Math.sqrt(medida_altura/100))) - 18
    return valor_iac.toFixed(1)
}

//com condicional
function verifica_situacao_iac(iac){
    if (iac >= 0 && iac <= 8.9){return '\nMagro(a)'}
    else if (iac <= 20.9){return '\nNormal'}
    else if (iac <= 25.9){return '\nSobrepeso'}
    else {return '\nObesidade grau 1'}
}

main()