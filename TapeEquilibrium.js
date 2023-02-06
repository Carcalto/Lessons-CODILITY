/*
calcula a soma total da fita usando a função reduce(). A função reduce() é usada para combinar todos os elementos de um array em um único valor. Neste caso, estamos combinando todos os elementos de A em uma única soma. A função reduce() tem dois argumentos: uma função de retorno de chamada (total, num) => total + num e um valor inicial (0). A função de retorno de chamada define como os elementos são combinados. Neste caso, estamos adicionando cada elemento de A ao total. O valor inicial de 0 é usado como o primeiro argumento para a função de retorno de chamada.

 linhas criam duas variáveis, leftSum e minDiff. leftSum representa a soma da primeira parte da fita. minDiff representa a diferença mínima entre as duas somas. Inicialmente, leftSum é definido como 0 e minDiff é definido como Number.MAX_SAFE_INTEGER, que é o maior valor possível de um inteiro seguro em JavaScript.

 oop for que divide a fita em duas partes e calcula a diferença absoluta entre as duas somas. O loop for itera A.length - 1 vezes, porque a última iteração não é necessária. Em cada iteração, leftSum é atualizado adicionando o elemento atual de A. Em seguida, rightSum é calculado subtraindo leftSum de sum, que é a soma total da fita. diff é a diferença absoluta entre leftSum e rightSum, que é calculada usando Math.abs(). Por fim, minDiff é atualizado com a menor diferença entre minDiff e diff.
*/



function solution(A) {
    let sum = A.reduce((total, num) => total + num, 0);
    let leftSum = 0;
    let minDiff = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < A.length - 1; i++) {
      leftSum += A[i];
      let rightSum = sum - leftSum;
      let diff = Math.abs(leftSum - rightSum);
      minDiff = Math.min(minDiff, diff);
    }
    return minDiff;
  }
  