/*
A fórmula da soma aritmética é (n + 1) * (n + 2) / 2, onde n é o número de elementos na faixa [1..(N + 1)]. A função reduce() é usada para calcular a soma dos elementos no array A. O resultado da subtração entre a soma esperada e a soma atual será o elemento ausente.
*/

function solution(A) {
    const n = A.length;
    const expectedSum = (n + 1) * (n + 2) / 2;
    const actualSum = A.reduce((sum, value) => sum + value, 0);
    return expectedSum - actualSum;
  }
  