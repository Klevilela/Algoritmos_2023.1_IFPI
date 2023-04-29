export function calcular_score_v1(a,b,c){
    const pontuacaoA = (a * 260) / 100
    const pontuacaoB = (b * 570) / 100
    const pontuacaoC = (c * 170) / 100

    const pontuacao_final = pontuacaoA + pontuacaoB + pontuacaoC

    return pontuacao_final
}


export function calcular_score_v2(a,b,c){
    const pontuacaoA = (a * 620) / 100
    const pontuacaoB = (b * 190) / 100
    const pontuacaoC = (c * 190) / 100

    const pontuacao_final = pontuacaoA + pontuacaoB + pontuacaoC

    return pontuacao_final
}


export function calcular_faixa_de_scorev1(score){
    if (score >= 0 && score <= 400){
        return 'Baixo'
    }
    else if (score <= 600){
        return 'Regular'
    }
    else if (score <= 800){
        return 'Bom'
    }
    else if (score <= 1000){
        return 'Muito bom'
    }
}


export function calcular_faixa_de_scorev2(score){
    if (score >= 0 && score <= 300){
        return 'Baixo'
    }
    else if (score <= 500){
        return 'Regular'
    }
    else if (score <= 700){
        return 'Bom'
    }
    else if (score <= 1000){
        return 'Muito bom'
    }
}