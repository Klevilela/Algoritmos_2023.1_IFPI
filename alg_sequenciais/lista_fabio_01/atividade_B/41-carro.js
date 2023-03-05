/*O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
escreva o custo ao consumidor.*/

import prompt from 'prompt-sync'
const input = prompt()

const custo_de_fabrica = Number(input('Valor de fábrica do carro: '))
const custo_ao_consumidor = custo_de_fabrica + (custo_de_fabrica * .28) + (custo_de_fabrica * .45)

console.log(`Preço ao consumidor: R$ ${custo_ao_consumidor}`)