// Organizador de tareas
const organizadorDeTareas = {
  tareas: [],

  // Método para agregar una nueva tarea al arreglo
  agregarTarea: function (nuevaTarea) {
    if (nuevaTarea.trim() === "") {
      // Verifica si la tarea está vacía
      alert("No se puede agregar una tarea vacía.");
    } else {
      // Crea un objeto de tarea y lo agrega al arreglo
      this.tareas.push({
        id: this.tareas.length + 1, // Genera un ID único basado en la longitud del arreglo
        nombre: nuevaTarea,
        estado: "pendiente",
      });
      alert("Tarea agregada exitosamente.");
    }
  },

  // Método para mostrar las tareas pendientes en un cuadro de diálogo de alerta
  mostrarTareasPendientes: function () {
    let mensaje = "Lista de tareas pendientes:\n";
    const tareasPendientes = this.tareas.filter(
      (tarea) => tarea.estado === "pendiente"
    ); // Filtra las tareas por estado "pendiente"

    if (tareasPendientes.length === 0) {
      mensaje += "No hay tareas pendientes.";
    } else {
      tareasPendientes.forEach(function (tarea) {
        mensaje += `${tarea.id}. ${tarea.nombre}\n`;
      });
    }
    alert(mensaje);
  },

  // Método para marcar una tarea como completada
  marcarComoCompletada: function (id) {
    const tarea = this.tareas.find((tarea) => tarea.id === id); // Busca la tarea por su ID
    if (tarea) {
      if (tarea.estado === "completada") {
        alert("Esta tarea ya ha sido completada.");
      } else {
        tarea.estado = "completada";
        alert("Tarea marcada como completada.");
      }
    } else {
      alert("No se encontró ninguna tarea con ese ID.");
    }
  },

  // Método para eliminar una tarea
  eliminarTarea: function (id) {
    const indice = this.tareas.findIndex((tarea) => tarea.id === id); // Busca el índice de la tarea por su ID
    if (indice !== -1) {
      this.tareas.splice(indice, 1); // Elimina la tarea del arreglo
      alert("Tarea eliminada.");
    } else {
      alert("No se encontró ninguna tarea con ese ID.");
    }
  },

  // Método para mostrar las tareas completadas
  mostrarTareasCompletadas: function () {
    const tareasCompletadas = this.tareas.filter(
      (tarea) => tarea.estado === "completada"
    ); // Filtra las tareas por estado "completada"

    let mensaje = "Tareas completadas:\n";
    if (tareasCompletadas.length === 0) {
      mensaje += "No hay tareas completadas.";
    } else {
      tareasCompletadas.forEach(function (tarea) {
        mensaje += `${tarea.id}. ${tarea.nombre}\n`;
      });
    }
    alert(mensaje);
  },
  
  // Método para contar la cantidad total de tareas pendientes
  contarTareasPendientes: function () {
    const tareasPendientes = this.tareas.filter(
      (tarea) => tarea.estado === "pendiente"
    ); // Filtra las tareas por estado "pendiente"
    
    return tareasPendientes.length;
  },
  
  // Método para contar la cantidad total de tareas completadas
  contarTareasCompletadas: function () {
    const tareasCompletadas = this.tareas.filter(
      (tarea) => tarea.estado === "completada"
    ); // Filtra las tareas por estado "completada"
    
    return tareasCompletadas.length;
  },
};

// Función para mostrar el mensaje de bienvenida
function mostrarMensajeDeBienvenida() {
  alert("¡Bienvenido al Organizador de Tareas!");
}

// Función para mostrar las opciones al usuario
function mostrarOpciones() {
  let opcion;
  do {
    const totalPendientes = organizadorDeTareas.contarTareasPendientes();
    const totalCompletadas = organizadorDeTareas.contarTareasCompletadas();
    
    opcion = prompt(
      `Opciones:\n\n` +
        `Tareas pendientes: ${totalPendientes}\n` +
        `Tareas completadas: ${totalCompletadas}\n\n` +
        "1. Agregar tarea\n" +
        "2. Ver lista de tareas pendientes\n" +
        "3. Marcar tarea como completada\n" +
        "4. Mostrar tareas completadas\n" +
        "5. Eliminar tarea\n" +
        "6. Salir"
    );

    if (opcion === "1") {
      const nuevaTarea = prompt("Ingrese la nueva tarea:");
      organizadorDeTareas.agregarTarea(nuevaTarea);
    } else if (opcion === "2") {
      organizadorDeTareas.mostrarTareasPendientes();
    } else if (opcion === "3") {
      organizadorDeTareas.mostrarTareasPendientes();
      const idCompletada = parseInt(
        prompt("Ingrese el ID de la tarea completada:")
      );
      organizadorDeTareas.marcarComoCompletada(idCompletada);
    } else if (opcion === "4") {
      organizadorDeTareas.mostrarTareasCompletadas();
    } else if (opcion === "5") {
      organizadorDeTareas.mostrarTareasPendientes();
      const idEliminar = parseInt(
        prompt("Ingrese el ID de la tarea a eliminar:")
      );
      organizadorDeTareas.eliminarTarea(idEliminar);
    } else if (opcion === "6") {
      alert("Gracias por utilizar el organizador de tareas. ¡Hasta luego!");
    } else {
      alert("Opción inválida. Por favor, seleccione una opción válida.");
    }
  } while (opcion !== "6");
}

// Mostrar el mensaje de bienvenida y las opciones al iniciar el programa
mostrarMensajeDeBienvenida();
mostrarOpciones();