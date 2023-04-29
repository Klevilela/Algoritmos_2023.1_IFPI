/*
 Uma piscina é algo muito legal de ter (um amigo que
tem uma). Para evitar transbordar ao tomar banho na piscina é
bom deixar o nível da água com no máximo 85% da capacidade.
Assim uma piscina que comporta 20 mil litros de água é bom botar
só 17mil litros. Considere uma piscina estilo quadrada. Para
encher a piscina ele usará água paga (o valor é cobrado por cada
1000 litros de água, em partes inteiras. Ou seja, se usar 1 litro já
paga por 1000, ao usar 1002 já paga 2 mil litros)
a. Calcule a capacidade máxima da piscina pedindo ao usuário as
dimensões de largura, comprimento e profundidade (em cm). 1 litro é
igual a 1000 cm3
. Uma piscina por exemplo de capacidade →
L=100cm x C=100cm x P=100cm → 1000 litros, e deve ser cheia até
850 litros apenas.
b. Informe até quantos litros é recomendado encher a piscina.
c. Peça ao usuário para informar o valor a ser pago por cada 1000 litros
na concessionária de água de sua cidade, e informe quanto ele
gastará para encher sua piscina;
d. Mensalmente é necessário repor 10% da água devido a banho e
evaporação, informe ao usuário também o gasto mensal para manter
a piscina no nível ideal.
 */

import { pedir_numero, print } from "../utils.js";
import { 
    calcular_capacidade,
    calcular_capacidade_ideal,
    converter_cm3_para_l,
    calcular_valor,
    calcular_gasto_mensal
} from './utils/piscina_utils.js'

function main(){
    const largura = pedir_numero('Largura(cm): ')
    const comprimento = pedir_numero('Comprimento(cm): ')
    const profundidade = pedir_numero('Profunidade(cm): ')
    const valor_pago_a_cada_mil_litros = pedir_numero('Valor a pagar a cada 1000l: ')

    const capacidade = calcular_capacidade(largura, comprimento, profundidade)
    const capacidade_ideal = calcular_capacidade_ideal(capacidade)
    const capacidade_em_litros = converter_cm3_para_l(capacidade_ideal)
    const valor_gasto = calcular_valor(capacidade_em_litros, valor_pago_a_cada_mil_litros)
    const valor_mensal = calcular_gasto_mensal(valor_gasto)

    print(`\nA capacidade ideal que se deve encher a piscina é de ${capacidade_em_litros} l`)
    print(`Valor pago para encher a piscina: R$ ${valor_gasto}`)
    print(`Valor mensal para repor a água da piscina: R$ ${valor_mensal}`)
}


main()