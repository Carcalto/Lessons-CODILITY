let a = parseFloat(prompt("Digite o número A:"));
let b = parseFloat(prompt("Digite o número B:"));

// Soma
console.log("1. Soma: " + (a + b));

// Subtração A - B
console.log("2. Subtração A - B: " + (a - b));

// Subtração B - A
console.log("3. Subtração B - A: " + (b - a));

// Multiplicação
console.log("4. Multiplicação: " + (a * b));

// Divisão A / B
console.log("5. Divisão A / B: " + (a / b));

// Divisão B / A
console.log("6. Divisão B / A: " + (b / a));

// Potência de A na base B
console.log("7. Potência de A na base B: " + Math.pow(a, b));

// Potência de B na base A
console.log("8. Potência de B na base A: " + Math.pow(b, a));

// Raiz quadrada de A
console.log("9. Raiz quadrada de A: " + Math.sqrt(a));

// Raiz quadrada de B
console.log("10. Raiz quadrada de B: " + Math.sqrt(b));

// Fatorial de A
let fatorialA = 1;
for (let i = 1; i <= a; i++) {
  fatorialA *= i;
}
console.log("11. Fatorial de A: " + fatorialA);

// Fatorial de B
let fatorialB = 1;
for (let i = 1; i <= b; i++) {
  fatorialB *= i;
}
console.log("12. Fatorial de B: " + fatorialB);

// Porcentagem de A em relação a B
console.log("13. Porcentagem de A em relação a B: " + (a / b) * 100 + "%");

// Porcentagem de B em relação a A
console.log("14. Porcentagem de B em relação a A: " + (b / a) * 100 + "%");

// Média
console.log("15. Média: " + (a + b) / 2);
