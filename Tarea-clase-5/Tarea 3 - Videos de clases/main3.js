document.querySelector("#calcular-tiempo-total").onclick = function () {
  let horas = 0;
  let minutos = 0;
  let segundos = 0;
  let segundosTotales = 0;

  const $horas = document.querySelectorAll("#horas");

  for (let i = 0; i < $horas.length; i++) {
    horas += Number($horas[i].value);
  }

  const $minutos = document.querySelectorAll("#minutos");

  for (let i = 0; i < $minutos.length; i++) {
    minutos += Number($minutos[i].value);
  }

  const $segundos = document.querySelectorAll("#segundos");

  for (let i = 0; i < $segundos.length; i++) {
    segundos += Number($segundos[i].value);
  }

  function calcularSegundosTotales(horas, minutos, segundos) {
    return (segundosTotales = horas * 3600 + minutos * 60 + segundos);
  }

  function calcularHorasDesdeSegundos(segundosTotales) {
    return Math.trunc((horasDesdeSegundos = segundosTotales / 3600));
  }

  function calcularMinutosDesdeSegundos(segundosTotales) {
    return Math.trunc((segundosTotales / 60) % 60);
  }

  function calcularSegundosFinales(segundosTotales) {
    return Math.trunc(segundosTotales % 120);
  }

  const $textoDuracionClases = document.querySelector(".textoDuracionClases");

  $textoDuracionClases.innerText = `La duracion es: ${calcularHorasDesdeSegundos(
    calcularSegundosTotales(horas, minutos, segundos)
  )}:${calcularMinutosDesdeSegundos(segundosTotales)}:${calcularSegundosFinales(
    segundosTotales
  )}`;

  return false;
};
