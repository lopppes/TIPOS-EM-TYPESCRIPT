type Customer = {
   firstName: string;
   lastName?: string;
   age: number;
}

const newCustomer: Customer = {
   firstName: "joão",
   age: 32
}
console.log(newCustomer)

// "?" opcional para o usuário

function printName(firstName: string, lastName?: string){
   console.log(`O primeiro nome é: ${firstName}`);
   console.log(`O segundo nome é: ${lastName}`);
}
printName("Samuel");

printName("Araújo");