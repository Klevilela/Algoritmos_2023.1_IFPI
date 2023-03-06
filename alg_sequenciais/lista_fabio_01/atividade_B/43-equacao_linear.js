/*43. Um sistema de equações lineares do tipo , pode ser resolvido segundo mostrado abaixo 

c = ax + by
f = dx + ey

x = (c*e) - (b*f) / (a*e) - (b*d)
y = (a*f) - (c*d) / (a*e) - (b*d)

*/

import prompt from 'prompt-sync'
const input = prompt()

const val_a  = Number(input('A: '))
const val_b  = Number(input('B: '))
const val_c  = Number(input('C: '))
const val_d  = Number(input('D: '))
const val_e  = Number(input('E: '))
const val_f  = Number(input('F: '))


const x = ((val_c * val_e) - (val_b * val_f)) / ((val_a * val_e) - (val_b * val_d))
const y = ((val_a * val_f) - (val_c * val_d)) / ((val_a * val_e) - (val_b * val_d))

const c = (val_a * x) + (val_b * y)
const f = (val_b * x) + (val_b * y)

console.log(`Valor de X: ${x}\nValor de Y: ${y}\nValor de C: ${c}\nValor de F: ${f}`)
