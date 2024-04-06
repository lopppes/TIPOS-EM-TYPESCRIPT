// definindo uma função genérica chamada makeArray
function makeArray<T>(item: T): T[] {
    // retorna um array contendo o item passado como argumento
    return [item];
}

// usando a função makeArray com um número
const numbers = makeArray(10);

// Você pode usar métodos de array com o array numbers
numbers.filter(); // exemplo de uso de um método de array

console.log(numbers); // Exibe o array [10]

// Usando a função makeArray com uma string
const names = makeArray("Samuel");

// “sendo capaz de criar um componente que pode funcionar em vários tipos, em vez de em um único”.
