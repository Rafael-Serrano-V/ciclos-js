// Sumar los primeros 5 numeros (while)
let numero = 1, maximo = 5, acumuladorSuma = 0;
// while (numero <= maximo) {
//     acumuladorSuma += numero;
//     console.log(acumuladorSuma);
//     numero++;
// }
// console.log(acumuladorSuma);

// Sumar los primeros 5 numeros (do while)
do {
    acumuladorSuma += numero;
    numero++;
    console.log(acumuladorSuma);
} while (numero <= maximo);
console.log(acumuladorSuma);