/*
A função solution recebe uma matriz A como argumento. O objetivo é verificar se a matriz A é uma permutação, ou seja, se contém todos os elementos de 1 a N (onde N é o número de elementos na matriz A) e se não há elementos repetidos. Se a matriz A é uma permutação, a função deve retornar 1; caso contrário, deve retornar 0.

A primeira linha da função define a variável N como o número de elementos na matriz A. Em seguida, é criado um vetor exists com N elementos, todos inicializados como false.

O loop for é usado para percorrer cada elemento da matriz A. Para cada elemento A[i], verificamos se ele está no intervalo válido (1 <= A[i] <= N). Se não estiver, retornamos 0 imediatamente, pois isso significa que a matriz A não é uma permutação.

Se o elemento estiver no intervalo válido, verificamos se ele já existe no vetor exists. Se já existir, retornamos 0 imediatemente, pois isso significa que há elementos repetidos na matriz A, e portanto, ela não é uma permutação.

Se o elemento não existe no vetor exists, definimos o elemento correspondente como true.

Finalmente, após o loop for, retornamos 1, pois isso significa que todos os elementos da matriz A estão no intervalo válido e não há elementos repetidos, e portanto, a matriz A é uma permutação.

Este algoritmo tem complexidade O(N), o que é eficiente para o intervalo de valores de N fornecido.
*/


function solution(A) {
    let N = A.length;
    let exists = Array(N).fill(false);
    for (let i = 0; i < N; i++) {
      if (A[i] < 1 || A[i] > N) return 0;
      if (exists[A[i] - 1]) return 0;
      exists[A[i] - 1] = true;
    }
    return 1;
  }
  