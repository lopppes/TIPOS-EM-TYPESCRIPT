// tipo primitivo: string
let str: string = "Hello";

// tipo primitivo: number
let num: number = 42;

// tipo primitivo: boolean
let bool: boolean = true;

// tipo primitivo: null
let nullValue: null = null;

// tipo primitivo: undefined
let undefinedValue: undefined = undefined;

// tipo de objeto
let obj: { name: string, age: number } = { name: "Alice", age: 30 };

// array de números
let numArray: number[] = [1, 2, 3, 4, 5];

// array de strings
let strArray: string[] = ["apple", "banana", "orange"];

// tupla: array com tipos específicos em posições específicas
let tuple: [string, number] = ["hello", 42];

// tipo de função
let func: (x: number, y: number) => number = function(x, y) {
  return x + y;
};

// tipo any: pode ser qualquer tipo 
let anyValue: any = "hello";

// tipo void: indica que a função não retorna nenhum valor
function sayHello(): void {
  console.log("Hello");
}

// tipo enum: conjunto de constantes nomeadas
enum Color {
  Red,
  Green,
  Blue
}

let color: Color = Color.Red;

// tipo never: representa um valor que nunca ocorre
function throwError(message: string): never {
  throw new Error(message);
}

// tipo union: permite que uma variável seja de diferentes tipos
let unionType: string | number = "hello";
unionType = 42;

// tipo alias: definir um nome personalizado para um tipo
type Point = { x: number, y: number };
let point: Point = { x: 10, y: 20 };
