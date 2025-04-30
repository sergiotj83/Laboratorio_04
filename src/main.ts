let turno = 0;

// 3. Función para actualizar el número en pantalla
function actualizarDisplay() {
  const numeroTurno = document.querySelector(".numero_turno");
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

function cambiarTurno() {
  const inputTurno = document.getElementById("input-turno") as HTMLInputElement;

  if (inputTurno && inputTurno instanceof HTMLInputElement) {
    const nuevoValor = parseInt(inputTurno.value, 10);

    if (!isNaN(nuevoValor) && nuevoValor >= 0) {
      turno = nuevoValor;
      actualizarDisplay();
    } else {
      console.warn("Introduce un valor numérico válido (mayor o igual a 0)");
    }
  } else {
    console.error("El input no se ha encontrado o no es válido");
  }
}

// 5. Asignación de eventos
const eventos = () => {
  const btnSiguiente = document.getElementById("siguiente");
  if (btnSiguiente !== null && btnSiguiente instanceof HTMLButtonElement) {
    btnSiguiente.addEventListener("click", siguienteTurno);
  } else {
    console.error("El elemento btnSiguiente no es un botón válido");
  }

  const btnAnterior = document.getElementById("anterior");
  if (btnAnterior !== null && btnAnterior instanceof HTMLButtonElement) {
    btnAnterior.addEventListener("click", anteriorTurno);
  } else {
    console.error("El elemento btnAnterior no es un botón válido");
  }

  const btnReset = document.getElementById("reset");
  if (btnReset !== null && btnReset instanceof HTMLButtonElement) {
    btnReset.addEventListener("click", resetTurno);
  } else {
    console.error("El elemento btnReset no es un botón válido");
  }

  const btnCambiar = document.getElementById("cambiar");
  if (btnCambiar && btnCambiar instanceof HTMLButtonElement) {
    btnCambiar.addEventListener("click", cambiarTurno);
  } else {
    console.error("El botón 'cambiar' no es válido");
  }
};

// 6. Mostrar el valor inicial en pantalla
document.addEventListener("DOMContentLoaded", () => {
  actualizarDisplay();
  eventos();
});
