let tareas = [];

  function agregarTarea() {
    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("fecha").value;
    let prioridad = document.getElementById("prioridad").value;
    let descripcion = document.getElementById("descripcion").value;

    let tarea = {
      nombre: nombre,
      fecha: fecha,
      prioridad: prioridad,
      descripcion: descripcion
    };

    tareas.push(tarea);

    actualizarTabla();
    document.getElementById("formulario").reset();
  }

  function actualizarTabla() {
    let cuerpoTabla = document.getElementById("cuerpo-tabla");
    cuerpoTabla.innerHTML = "";

    for (let i = 0; i < tareas.length; i++) {
      let fila = cuerpoTabla.insertRow(i);

      let celdaNombre = fila.insertCell(0);
      celdaNombre.innerHTML = tareas[i].nombre;

      let celdaFecha = fila.insertCell(1);
      celdaFecha.innerHTML = tareas[i].fecha;

      let celdaPrioridad = fila.insertCell(2);
      celdaPrioridad.innerHTML = tareas[i].prioridad;

      let celdaDescripcion = fila.insertCell(3);
      celdaDescripcion.innerHTML = tareas[i].descripcion;

      let celdaAcciones = fila.insertCell(4);
      celdaAcciones.innerHTML = "<button onclick='editarTarea(" + i + ")'>Editar</button>" +
                                 "<button onclick='eliminarTarea(" + i + ")'>Eliminar</button>";
    }
  }

  function eliminarTarea(indice) {
    tareas.splice(indice, 1);
    actualizarTabla();
  }

  function editarTarea(indice) {
    document.getElementById("editar-tarea").style.display = "block";

    let tarea = tareas[indice];

    document.getElementById("nombre-editar").value = tarea.nombre;
    document.getElementById("fecha-editar").value = tarea.fecha;
    document.getElementById("prioridad-editar").value = tarea.prioridad;
    document.getElementById("descripcion-editar").value = tarea.descripcion;
    document.getElementById("indice").value = indice;
  }

  function actualizarTarea() {
    let indice = document.getElementById("indice").value;

    tareas[indice].nombre = document.getElementById("nombre-editar").value;
    tareas[indice].fecha = document.getElementById("fecha-editar").value;
    tareas[indice].prioridad = document.getElementById("prioridad-editar").value;
    tareas[indice].descripcion = document.getElementById("descripcion-editar").value;

    actualizarTabla();
    document.getElementById("editar-tarea").style.display = "none";
  }

  function buscarTarea() {
    let busqueda = document.getElementById("busqueda").value.toLowerCase();
    let cuerpoTabla = document.getElementById("cuerpo-busqueda");
    cuerpoTabla.innerHTML = "";

    for (let i = 0; i < tareas.length; i++) {
      if (tareas[i].nombre.toLowerCase().includes(busqueda)) {
        let fila = cuerpoTabla.insertRow(cuerpoTabla.rows.length);

        let celdaNombre = fila.insertCell(0);
        celdaNombre.innerHTML = tareas[i].nombre;

        let celdaFecha = fila.insertCell(1);
        celdaFecha.innerHTML = tareas[i].fecha;

        let celdaPrioridad = fila.insertCell(2);
        celdaPrioridad.innerHTML = tareas[i].prioridad;
        let celdaDescripcion = fila.insertCell(3);
        celdaDescripcion.innerHTML = tareas[i].descripcion;
        let celdaAcciones = fila.insertCell(4);
        celdaAcciones.innerHTML = "<button onclick='editarTarea(" + i + ")'>Editar</button>" +
                                   "<button onclick='eliminarTarea(" + i + ")'>Eliminar</button>";
      }
    }
  }