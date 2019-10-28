const estudiante = [
];

window.onload = cargarEventos;

function cargarEventos() {
  mostrarTabla()
  document.getElementById('nuevo-estudiante').addEventListener('submit', nuevoEstudiante, false);
}

function mostrarTabla() {
  let cuerpoTabla = document.getElementById('estudiante-tabla');
  let tablaCompleta = "";
  for (let i = 0; i < estudiante.length; i++) {
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
  let busqueda = codigo;
  let indice = estudiante.findIndex(registro => registro.codigo === busqueda);
  if (indice != -1) {
    alert("El estudiante ya EXISTE! Verifique el código.");
  } else {
    //alert("No Existe");
    estudiante.push(nuevoEstudiante);
    mostrarTabla();
  }
}

//console.log("El elemento buscado está en el índice ", indice);
//activar los errores de span
//span.style.display = "";
//span.style.display = "none";
//*********************************************************
//  {codigo: "001", nombre: "Franco", nota: "8"},
// {codigo: "002", nombre: "FRRW", nota: "8"},{codigo: "003", nombre: "Daniel", nota: "8"}
