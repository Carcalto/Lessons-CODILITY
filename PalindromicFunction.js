/*

Esta função em JavaScript tem como objetivo encontrar o maior subtexto palíndromo de uma determinada string, ou seja, o maior subtexto que é lido da mesma forma tanto para a frente quanto para trás. Por exemplo, se a string for "abracecars", então o programa deve retornar a string "racecar" por ser o maior palíndromo dentro da string.

O código começa com a declaração da função PalindromicSubstring que recebe uma string como parâmetro. Em seguida, a variável longestSubstring é declarada como uma string vazia. O laço for itera sobre a string para cada caractere, iniciando na primeira posição e indo até o final da string. Para cada posição, outro laço for é executado para aquela substring compreendida entre os índices i e j. A variável substring é declarada para armazenar a substring enquanto a condição do if verifica se o tamanho da substring é maior que o da variável longestSubstring e se a substring é igual a ela mesma quando invertida. Caso a condição seja satisfeita, então a variável longestSubstring recebe o valor da substring.

Por fim, o código retorna o valor da variável longestSubstring, desde que seu tamanho seja maior que 2, caso contrário, a string "none" é retornada.

*/



const PalindromicSubstring = (str) => {
    let longestSubstring = '';
  
  for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length + 1; j++) {
        const substring = str.slice(i, j);
        if (substring.length > longestSubstring.length && 
            substring === substring.split('').reverse().join('')) {
          longestSubstring = substring;
        }
      }
    }
  
  return longestSubstring.length > 2 ? longestSubstring : 'none';
  }