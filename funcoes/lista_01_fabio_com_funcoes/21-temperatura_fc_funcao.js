/*21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C.
(t°C = (5 * t°F - 160) / 9).*/

import {pedir_numero} from '../../utils.js'

function main(){
    const temperatura_fahreinheit = pedir_numero('Temperatura em ºF: ')
    const temperatura_em_celcius = converter_para_graus_celcius(temperatura_fahreinheit)

    console.log(`Temperatura em ºC: ${temperatura_em_celcius}`)
}

function converter_para_graus_celcius(temperatura){
    const celcius = (5 * temperatura - 160) / 9
    return celcius.toFixed(1)
}

main()