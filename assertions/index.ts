const button = document.getElementById("button") as HTMLButtonElement;

button.addEventListener("click", event =>{
    const mouseEvent = event as MouseEvent;
})

// dizer pro TypeScript qual o tipo que é esperado pra um valor
// Algumas vezes o TypeScript não sabe qual tipo esperar, então podemos informar isso.

