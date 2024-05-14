let puntajeJugador = 0;
let puntajeIa = 0;
let rondasJugadas = 0;
const opciones = ["piedra", "papel", "tijera"];

console.log("¡Hola!  bienvenido al kachipún contra la IA Master");
console.log(`¡Hola ${prompt("ingresa tu nombre")}!`);

let jugadas = parseInt(prompt("¿Cuántas veces quieres jugar? 1, 2 ó 3"));
if (isNaN(jugadas) || jugadas < 1 || jugadas > 3) {
  console.log("No elegiste rondas, se jugará solo 1");
  jugadas = 1;
}

console.log("¿listo para jugar?");
console.log("¡Entonces vamos! que empieze el kachipún.");
console.log("---------------------------------------------------------");

for (let jugada = 1; rondasJugadas < jugadas; ) {
  let miJugada = prompt("¿Qué eliges?: piedra, papel o tijera");

  let jugadaIa = opciones[Math.floor(Math.random() * 3)];
  console.log(`Ronda ${jugada}:`);
  console.log(`Tú elegiste: ${miJugada}`);
  console.log(`La IA eligió: ${jugadaIa}`);

  if (miJugada === jugadaIa) {
    console.log("Resultado: Empate. La ronda no suma puntos.");
    console.log("---------------------------------------------------------");
  } else if (
    (miJugada === "piedra" && jugadaIa === "tijera") ||
    (miJugada === "papel" && jugadaIa === "piedra") ||
    (miJugada === "tijera" && jugadaIa === "papel")
  ) {
    console.log("Resultado: Ganaste esta ronda");
    puntajeJugador++;
  } else {
    console.log("Resultado: Perdiste esta ronda");
    puntajeIa++;
  }

  rondasJugadas++;
  console.log(`Puntos: Jugador ${puntajeJugador} - Computadora ${puntajeIa}`);
  console.log("---------------------------------------------------------");
  jugada++;
}

let mensajeFinal = "";
if (puntajeJugador > puntajeIa) {
  mensajeFinal = "¡Ganaste el kachipún!";
} else if (puntajeJugador < puntajeIa) {
  mensajeFinal = "Perdiste el kachipún.";
} else {
  mensajeFinal = "Fue empate, intentalo otra vez.";
}

console.log(mensajeFinal);
