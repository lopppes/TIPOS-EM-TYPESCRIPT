type MathOperation = (x: number, y: number) => number;

// adição
function add(x: number, y: number): number {
  return x + y;
}

// subtração
function subtract(x: number, y: number): number {
  return x - y;
}

// multiplicação
function multiply(x: number, y: number): number {
  return x * y;
}

// divisão
function divide(x: number, y: number): number {
  if (y !== 0) {
    return x / y;
  } else {
    throw new Error("Divisão por zero não é permitida.");
  }
}

// função para realizar operações matemáticas
function calculate(x: number, y: number, operation: MathOperation): number {
  return operation(x, y);
}

// usando a função para realizar diferentes operações
let result1 = calculate(10, 5, add);        // Resultado: 15
let result2 = calculate(10, 5, subtract);   // Resultado: 5
let result3 = calculate(10, 5, multiply);   // Resultado: 50
let result4 = calculate(10, 5, divide);     // Resultado: 2

console.log("Resultado da adição:", result1);
console.log("Resultado da subtração:", result2);
console.log("Resultado da multiplicação:", result3);
console.log("Resultado da divisão:", result4);
