/*16. Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.
Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo.*/

import { print } from "../../utils.js";

function main(){
    const emprestimo = 3000
    let dias_uteis = 0
    let total_pago = 0

    while (total_pago < emprestimo){
        total_pago += 200
        dias_uteis ++
    }

    print(`São necessários ${dias_uteis} dias para concluir o pagamento do empréstimo`)
}

main()