
// Adivinare el numero busqueda binaria
//Llamando botones del HTML
const botonMenor = document.getElementById("menor");
const botonMayor = document.getElementById("mayor");
const botonElemento = document.getElementById("mitad"); 
const botonAdivinaste = document.getElementById("correcto");
const botonReset = document.getElementById("reset");
const botonNumero = document.getElementById("number");
//Variables
let inicio = 1; //Defino el inicio de mi arreglo de numeros del 1 al 100
let final = 100; //Defino el final
let mitad = 50; // Defino la mitad de mi arreglo es importante 

botonMayor.onclick = function () { //Definir el boton que nos dira si es mayor que la mitad
    inicio = mitad + 1; //comienza a contar los numeros mayores al 50 es decir aqui abarca del 51 al 100
    mitad = Math.floor((inicio + final) / 2); //con esto nuestra funcion cambia el inicio a 51 y el final al 100 lo que nos da la mitad en 75
    botonNumero.textContent =  mitad ; //75 y aqui comienza a iterar entre los intentos dependiendo de la respuesta mayor o menor 
};

botonMenor.onclick = function () { //Definir el boton que nos dira si es menor que la mitad
  final = mitad - 1; //comienza a contar los numeros menores al 50 es decir aqui abarca del 49 al 1
  mitad = Math.floor((inicio + final) / 2); //con esto nuestra funcion cambia el inicio a 1 y el final al 49 lo que nos da la mitad en 25
  botonNumero.textContent =  mitad; //25 y aqui comienza a iterar entre los intentos dependiendo de la respuesta mayor o menor 
};

botonAdivinaste.onclick = function () {
  botonNumero.textContent = "Hice magia";
  botonMayor.disabled = true;
  botonMenor.disabled = true;
  botonAdivinaste.disabled = true;
};

botonReset.onclick = function () {
  inicio = 1;
  final = 100;
  mitad = 50;
  botonNumero.textContent =  mitad;
  botonMayor.disabled = false;
  botonMenor.disabled = false;
  botonAdivinaste.disabled = false;
};