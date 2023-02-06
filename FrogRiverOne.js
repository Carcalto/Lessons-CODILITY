/*
Nesta função, a variável "leafPositions" é inicializada como um novo objeto "Set". O "Set" é uma estrutura de dados do JavaScript que permite armazenar valores únicos.

Em seguida, há um loop "for" que itera sobre o array "A". Dentro do loop, o método "add" é chamado na variável "leafPositions" passando o valor corrente do array "A" como parâmetro. O método "add" adiciona o valor passado como parâmetro ao conjunto "leafPositions", garantindo que não haja duplicidade de valores.

Depois, há uma verificação se o tamanho do conjunto "leafPositions" é igual a X. Se for, a função retorna o índice corrente "i" do loop.

Se o loop terminar sem encontrar todas as posições, a função retorna -1, indicando que o sapo não pôde atravessar o rio.
*/


function solution(X, A) {
    let leafPositions = new Set();
    for (let i = 0; i < A.length; i++) {
      leafPositions.add(A[i]);
      console.log(leafPositions);
      if (leafPositions.size === X) {
        return i;
      }
    }
    return -1;
  }

X = 5;
A = [1,3,1,4,2,3,5,4]

console.log(solution(X, A));