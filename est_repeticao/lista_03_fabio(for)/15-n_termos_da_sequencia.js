/*15. Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).*/
import { pedir_numero, print } from "../../utils.js";

function main(){
    const n_termos = pedir_numero('Quantos primeiros termos para mostrar: ')
    let valor
    
    for (let i = 0; i < n_termos; i++){
        valor = pedir_numero('Número: ')
        print(valor)
    }
}

main()