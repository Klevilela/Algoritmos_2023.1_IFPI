export const eh_par = (valor) => valor % 2 === 0
export const eh_impar = (valor) => valor % 2 !== 0
export const raiz_quadrada = (valor) => Math.sqrt(valor)
export const raiz_cubica = (valor) => Math.cbrt(valor)
export const raiz = (numero, indice) => numero ** (1/indice)

export const divisores = (numero) => {
    let candidato = 1

    while (candidato <= numero){
        
        if (eh_divisivel(numero, candidato)){
            console.log(candidato)
        }
        candidato ++        
    }

    function eh_divisivel(valor, candidato){
        if (valor % candidato === 0){
            return candidato
        }
    }

}


export function fatorial(numero){
    if (numero === 0 || numero === 1){
        return 1
    }
    else{
        let produto_anteriores = 1

        for (let i=1; i <= numero-1; i++){
            produto_anteriores *= i
        }

        const fatorial = numero * produto_anteriores
        return fatorial
    }
}

export function mmc(n1, n2){
    let candidato_mmc = n1 * n2

    while (candidato_mmc >= n1 && candidato_mmc >= n2){
        if (eh_mmc(candidato_mmc, n1, n2)){
            return candidato_mmc
        }

        candidato_mmc ++
    }

    function eh_mmc(candidato, v1, v2){
        if ((
            candidato % v1 === 0 && candidato_mmc % v2 === 0)
            || candidato % v2 === 0 && candidato % v1 === 0)
            {return true}
    }
}

export function eh_primo(numero){
    //let divisor = 2

    for (let divisor = 2; divisor < numero -1; divisor++){
        if (tem_divisor(numero, divisor)){
            return false
        }

    }
    
    function tem_divisor(valor, divisor){
        return valor % divisor === 0
    }

    return true
}


export function eh_numero_perfeito(numero){
    let candidato = 1
    let somatorio_divisores = 0

    while (candidato < numero){
        
        if (eh_divisivel(numero, candidato)){
            console.log(candidato)
            somatorio_divisores += candidato
        }
        candidato ++        
    }

    function eh_divisivel(valor, candidato){
        if (valor % candidato === 0){
            return candidato
        }
    }

    if (somatorio_divisores === numero){
        return true
    }

    return false

}


//console.log(divisores(18))
//console.log(mmc(4,8))
//console.log(eh_primo(2))
//console.log(raiz_cubica(27))

console.log(eh_numero_perfeito(6))

