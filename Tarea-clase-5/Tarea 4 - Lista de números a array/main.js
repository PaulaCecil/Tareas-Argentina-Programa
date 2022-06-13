//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

/*===PARA BUSCAR NUMERO M[AS GRANDE]===
// Array de números:
const numeros = [1, 2, 3, 30, 5, 6];

// Nuestra variable auxiliar para almacenar en ella
// el valor más grande del array:
let max = 0;

// Recorres el valor del array «numeros»:
for ( let numero of numeros ) {

  // Evalúa si «max» es menor que «numero» para almacenar
  // en él el número más grande hasta el momento:
  if (max < numero)
    max = numero;
}

// Muestra en la consola el valor numérico más grande del Array:
console.log(max);

*/

document.querySelector("#calcular").onclick = function () {
  let todosLosNumeros = document.querySelectorAll("li");
  let arrayTodosLosNumeros = [];
  let sumaDeTodosLosNumeros = 0;
  let promedioDeTodosLosNumeros = 0;
  let mayorNumero = Number();
  let menorNumero = Number();
  //let ArrayTodosLosNumeros = Array.from(TodosLosNumeros);

  for (let i = 0; i < todosLosNumeros.length; i++)
    arrayTodosLosNumeros.push(Number(todosLosNumeros[i].textContent));

  for (let i = 0; i < arrayTodosLosNumeros.length; i++)
    sumaDeTodosLosNumeros += arrayTodosLosNumeros[i];

  promedioDeTodosLosNumeros =
    sumaDeTodosLosNumeros / arrayTodosLosNumeros.length;

  let respuestaPromedio = document.querySelector(".promedio");

  respuestaPromedio.textContent = `${respuestaPromedio.textContent} ${promedioDeTodosLosNumeros}`;

  for (let i = 0; i < arrayTodosLosNumeros.length; i++) {
    if (arrayTodosLosNumeros[i] > mayorNumero)
      mayorNumero = arrayTodosLosNumeros[i];
  }

  let respuestaMayorNumero = document.querySelector(".mayor");

  respuestaMayorNumero.textContent = `${respuestaMayorNumero.textContent} ${mayorNumero}`;

  for (let i; i < arrayTodosLosNumeros.length; i++) {
    if (arrayTodosLosNumeros[i] < menorNumero)
      menorNumero = arrayTodosLosNumeros[i];
  }

  let respuestaMenorNumero = document.querySelector(".menor");

  respuestaMenorNumero.textContent = `${respuestaMenorNumero.textContent} ${menorNumero}`;

  return false;
};
