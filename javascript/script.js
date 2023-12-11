// comentarios de una sola línea

/* comentarios 
multilínea */

//alert ("Hola mundo");

//console.log("Este es un mensaje para mi consola")

//mensajes en pantalla
/* var nombre = prompt("Ingresa tu nombre");
alert("Hola, "+ nombre + " Bienvenido a la ch35"); */

/* var numero1 = parseInt (prompt("Ingresa el primer numero:"));
var numero2 = parseInt (prompt("Ingresa el segundo numero:"));

console.log("suma:" + (numero1 + numero2));
console.log("resta:" + (numero1 - numero2));
console.log("multiplicación:" + (numero1 * numero2));
console.log("división:" + (numero1 / numero2));
*/

/* var edad = parseInt (prompt("Ingresa tu edad:"));
 
if (edad < 18) {
    alert("Eres menor de edad.");
}
else if (edad >= 18) {
    alert("Eres mayor de edad!");
}
else {
    alert("Ingresa un numero válido");
}
*/

// TIPOS DE DATOS Y VARIABLES

// scope es el alcance de nuestras variables

/*var, let, const la diferencia es el alcance
var tiene alcance global
let tiene alcance local
const se mantiene sin ningún cambio */

/* string : cadena de texto (lleva comillas)
number : numero 
boolean : true/false
null : nulo
undefinied : no está asignado o definido */

/* Todas nuestras variables deben ser declaradas con nombres específicos y claros, no beben iniciar con números*/

/* let nombre = "Daniel";
let invitadxsExtras = 2;
let esMayorEdad = true;
let edad = 25; 
let invitadxEspecial = null;
let horaDeSalida = undefined; */

//document.write(nombre); 

/* Encasillamiento o tipado: (para programas robustos) 
nos es útil para el mantenimiento del código ya que lo hace más legible y fácil de entender. Nos ayuda a la prevención de errores para reducir la probabilidad de los mismos mejora el rendimiento de nuestro programa */

/* let numero = 15;
let texto = "hola";

// con encasillamiento 
let numeroEncasillado = Number = 5;
let textoEncasilado = String = "hola"; */

// typeof palabra reservada para saber que tipo de datos tenemos
/* console.log(typeof(nombre));


//conversión de string a number
let funcionNumber = console.log (typeof Number (nombre));
metodoParseInt = console.log(typeof parseInt (nombre));
metodoParseFloat = console.log(typeof parseFloat (nombre)); 

parseInt y parseFloat son funciones que se utilizan para convertir cadenas de texto en números, ambas nos ayudan en este cambio 


// conversión de number  a string 
console.log(typeof String(edad));
console.log(typeof edad.toString()); 

conversión de boolean a number
let numero = Number (esMayorEdad); 
console.log(typeof(numero)); 

let texto = String(esMayorEdad);
console.log(typeof(texto));
console.log(typeof esMayorEdad.toString()); 

let negación = !esMayorEdad;

console.log (negación); 

// concatenar Unir strings
let saludo = "Hola humanx ";
let frase = "el futuro es hoy";
texto = saludo + frase;

console.log(texto); */

// Ejercicio Hot cakes

let harina = parseInt("150");
let huevo = toString(1);
let mantequilla = parseInt("5");
let leche = parseInt("500");

let nutella = 50;
let nutellatoSting = nutella.toString();
console.log(typeof(nutellatoSting));
//console.log(typeof(toString(nutella)));

console.log(typeof(harina));
console.log(typeof(huevo));

let pasoUno = "Paso 1: Vierte todos los ingredientes en la licuadora y mezcla hasta lograr una consistencia homogénea. ";
let paasoDos = "<br>Paso 2: Caliente un sartén con un poco de mantequilla. ";
let pasoTres = "<br>Paso 3: Sirve la mezcla de masa para hotcakes al centro del sartén dejadola caer suavemente. ";
let pasoCuatro = "<br>Paso 4: Mantén a flama baja y voltea una vez que aparezcan burbujas de aire. ";
let pasoCinco = "<br>Paso 5: Repite agregando mantequilla al sartén cada vez que sea necesario. ";
let pasoSeis = "<br>Paso 6: Sirve y disfruta. ";


let texto = pasoUno + paasoDos + pasoTres + pasoCuatro + pasoCinco + pasoSeis;
document.write(texto);

textoDos = "esto es " + nutella;
document.write(textoDos)