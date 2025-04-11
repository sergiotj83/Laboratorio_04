// 1. Variable del turno
let turno = 0;

// 2. Selección de elementos del DOM
const numeroTurno = document.querySelector(".numero_turno");
const btnSiguiente = document.getElementById("siguiente");
const btnAnterior = document.getElementById("anterior");
const btnReset = document.getElementById("reset");

// 3. Función para actualizar el número en pantalla
function actualizarDisplay() {
  if (numeroTurno) {
    numeroTurno.textContent = turno.toString().padStart(2, "0");
  }
}

// 4. Funciones separadas para cada botón
function siguienteTurno() {
  turno++;
  actualizarDisplay();
}

function anteriorTurno() {
  if (turno > 0) {
    turno--;
    actualizarDisplay();
  }
}

function resetTurno() {
  turno = 0;
  actualizarDisplay();
}

// 5. Asignación de eventos
btnSiguiente?.addEventListener("click", siguienteTurno);
btnAnterior?.addEventListener("click", anteriorTurno);
btnReset?.addEventListener("click", resetTurno);

// 6. Mostrar el valor inicial en pantalla
actualizarDisplay();
