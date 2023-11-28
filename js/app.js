const btnIniciarDetener = document.getElementById('iniciarDetener');
const tiempoIniciado = document.getElementById('tiempo');

let corriendo = false;
let interval;
let tiempo = 0;

function iniciarDetener() {
  if (corriendo) {
    clearInterval(interval);
    btnIniciarDetener.innerHTML = 'Iniciar';
  } else {
    interval = setInterval(actualizarTiempo, 1000);
    btnIniciarDetener.innerHTML = 'Pausar';
  }
  corriendo = !corriendo;
}

function actualizarTiempo() {
  tiempo++;
  const horas = Math.floor(tiempo / 3600);
  const minutos = Math.floor((tiempo % 3600) / 60);
  const segundos = tiempo % 60;

  tiempoIniciado.innerHTML =
  formatoTiempo(horas) + ':' + formatoTiempo(minutos) + ':' + formatoTiempo(segundos);
}

function reiniciar() {
  clearInterval(interval);
  corriendo = false;
  tiempo = -1;
  btnIniciarDetener.innerHTML = 'Iniciar';
  actualizarTiempo();
}
function formatoTiempo(time) {
  return time < 10 ? '0' + time : time;
}

