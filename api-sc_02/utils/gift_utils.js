export function calcular_cashback(valor){
    let cashback

    if (valor > 0 && valor <= 250){
        cashback = (5/100) * valor
    }

    else if (valor > 250 && valor <= 500){
        cashback = valor * (7/100)
    }
    else if (valor <= 750){
        cashback = valor * (8/100)
    }
    else{
        //E para compras acima de R$ 750 é aplicado primeiramente as regras anteriores até R$ 750 do valor em cada faixa,
        //e 25% sobre o valor acima de R$ 750.
        cashback = (valor * (7/100)) + (valor * (8/100)) + (.25 * (valor - 750)) 
    }

    return cashback
}

export function calcular_percentual_investido(total_cashback, valor_total){
    return (total_cashback / valor_total) * 100
}

export const calcular_valor_medio = (total_cashback, qtd_compras) => total_cashback / qtd_compras