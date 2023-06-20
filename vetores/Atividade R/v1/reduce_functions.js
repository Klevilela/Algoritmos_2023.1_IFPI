/*adicionar as funções do tipo reduce

- contar positivos, negativos e zeros
- somatório: positivos, negativos e zeros
- exibir média e mediana de todos, dos positivos e dos negativos
- Somatório da Média dos Números Positivos múltiplos dois COM o Produto acumulado dos números negativos pares reduzidos à metade

*/

import {
  eh_impar,
  eh_negativo,
  eh_par,
  eh_positivo,
  eh_multiplo
} from "../../../utils/math_utils.js";
import { ordenar_vetor_crescente } from "./utils_functions.js";

export function contar_positivos_negativos_e_zeros(vetor) {
  let contador_positivos = 0;
  let contador_negativos = 0;
  let zeros = 0;

  for (let item in vetor) {
    if (vetor[item] > 0) {
      contador_positivos++;
    }
    if (vetor[item] < 0) {
      contador_negativos++;
    }
    if (vetor[item] === 0) {
      zeros++;
    }
  }

  return `\nContador de números positivos: ${contador_positivos}\nContador de negativos ${contador_negativos}\nContador de zeros: ${zeros}`;
}

// funcoes do tipo reduce
export function obter_somatorio(vetor) {
  let somatorio_total = 0;
  let somatorio_positivos = 0;
  let somatorio_negativos = 0;

  for (let item in vetor) {
    somatorio_total += vetor[item];
    if (vetor[item] >= 0) {
      somatorio_positivos += vetor[item];
    } else {
      somatorio_negativos += Math.abs(vetor[item]);
    }
  }

  return `\nSomatório do total de items do vetor: ${somatorio_total}\nSomatório dos items positivos: ${somatorio_positivos}\nSomatório dos items negativos: ${somatorio_negativos}`;
}

export function obter_produto_acumulado(vetor) {
  let acumulado = 1;
  for (let index = 0; index < vetor.length; index++) {
    if (eh_negativo(vetor[index]) && eh_par(vetor[index])) {
      acumulado *= vetor[index];
    }
  }

  return Math.abs(acumulado / 2);
}

export function obter_media_do_vetor(vetor) {
  let somatorio = 0;

  for (let index = 0; index < vetor.length; index++) {
    let valor = vetor[index];
    somatorio += valor;
  }

  return somatorio / vetor.length;
}

export function obter_mediana_do_vetor(vetor) {
  const vetor_ordenado = ordenar_vetor_crescente(vetor);
  const tamanho_vetor = vetor.length;
  let mediana = Math.trunc(vetor_ordenado.length / 2);
  //posicao_central = Math.trunc(vetor_ordenado.length / 2)
  //let mediana
  if (eh_impar(tamanho_vetor)) {
    mediana = vetor_ordenado[mediana + 1];
    return mediana;
  } else {
    mediana = vetor_ordenado[mediana] + vetor_ordenado[mediana + 1];
    return mediana;
  }
}

export function obter_media_positivos_do_vetor(vetor) {
  let somatorio = 0;

  for (let index = 0; index < vetor.length; index++) {
    let valor = vetor[index];
    somatorio += valor;
  }

  return somatorio / vetor.length;
}

export function obter_mediana_positivos_do_vetor(vetor) {
  const tamanho_vetor = vetor.length;
  const vetor_ordenado = ordenar_vetor_crescente(vetor);
  let mediana = Math.trunc(vetor_ordenado.length / 2);
  let vetor_positivos = [];

  for (let index = 0; index < vetor.length; index++) {
    let valor = vetor_ordenado[index];
    if (eh_positivo(valor)) {
      vetor_positivos[index] = valor;
    }
  }

  if (eh_impar(tamanho_vetor)) {
    mediana = vetor_positivos[mediana + 1];
    return mediana;
  } else {
    mediana = vetor_positivos[mediana] + vetor_positivos[mediana + 1];
    return mediana;
  }
}

export function obter_media_negativos_do_vetor(vetor) {
  let somatorio = 0;

  for (let index = 0; index < vetor.length; index++) {
    let valor = vetor[index];
    if (eh_negativo(valor)) {
      somatorio += valor;
    }
  }

  return Math.abs(somatorio / vetor.length);
}

export function obter_mediana_negativos_vetor(vetor) {
  const tamanho_vetor = vetor.length;
  const vetor_ordenado = ordenar_vetor_crescente(vetor);
  let mediana = Math.trunc(vetor_ordenado.length / 2);
  let vetor_negativos = [];

  for (let index = 0; index < vetor.length; index++) {
    let valor = vetor_ordenado[index];
    if (eh_negativo(valor)) {
      vetor_negativos[index] = valor;
    }
  }

  if (eh_impar(tamanho_vetor)) {
    mediana = vetor_negativos[mediana + 1];
    return mediana;
  } else {
    mediana = vetor_negativos[mediana] + vetor_negativos[mediana + 1];
    return mediana;
  }
}

export function exibir_media_e_mediana_dos_positivos_e_negativos(
  media,
  mediana,
  media_positivos,
  mediana_positivos,
  media_negativos,
  mediana_negativos
) {
  let exibir_valores = ``;
  exibir_valores += `Média: ${media}`;
  exibir_valores += `\nMediana: ${mediana}`;
  exibir_valores += `\nMédia dos positvos: ${media_positivos}`;
  exibir_valores += `\nMediana dos positivos: ${mediana_positivos}`;
  exibir_valores += `\nMédia dos negativos: ${media_negativos}`;
  exibir_valores += `\nMediana dos negativos : ${mediana_negativos}`;

  return exibir_valores
}

export function obter_media_multiplos_de_dois(vetor){
  let somatorio = 0
  let qtd_elementos_multiplos = 0


  for (let index = 0; index < vetor.length; index++) {
    if (eh_multiplo(vetor[index], 2)) {
      somatorio += vetor[index];
      qtd_elementos_multiplos++;
    }
  }

  return somatorio / qtd_elementos_multiplos
}