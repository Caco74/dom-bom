var estudiante = [
];

window.onload = cargarEventos;

function cargarEventos() {
  document.getElementById('nuevo-estudiante').addEventListener('submit', nuevoEstudiante, false);
}

function mostrarTabla() {
  var cuerpoTabla = document.getElementById('estudiante-tabla');
  var tablaCompleta = "";

  for (var i = 0; i < estudiante.length; i++) {
    tablaCompleta += "<tr><td>"+estudiante[i].codigo+"</td><td>"+estudiante[i].nombre+"</td><td>"+estudiante[i].nota+"</td></tr>";
  }
  cuerpoTabla.innerHTML = tablaCompleta;
}


function nuevoEstudiante() {
  event.preventDefault();
  let codigo = document.getElementById('codigo-estudiante').value;
  let nombre = document.getElementById('nombre-estudiante').value;
  let nota = document.getElementById('nota-estudiante').value;

  let nuevoEstudiante = { codigo: codigo, nombre: nombre, nota: nota };
  estudiante.push(nuevoEstudiante);
  mostrarTabla();
}
