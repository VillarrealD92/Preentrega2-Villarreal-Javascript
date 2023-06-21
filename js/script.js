// Organizador de tareas

const organizadorDeTareas = {
  tareas: [],
  tareasCompletadas: [],

  // Metodo para agregar una nueva tarea al arreglo

  agregarTarea: function (nuevaTarea) {
    if (this.tareas.includes(nuevaTarea)) {
      alert("La tarea ya está en la lista de tareas pendientes.")
    } else {
      this.tareas.push(nuevaTarea)
      alert("Tarea agregada exitosamente.")
    }
  },

  // Metodo para mostrar las tareas pendientes en un cuadro de dialogo alert

  mostrarTareasPendientes: function () {
    let mensaje = "Lista de tareas pendientes:\n"
    if (this.tareas.length === 0) {
      mensaje += "¡A relajarse! ¡Estás libre de tareas pendientes!"
    } else {
      this.tareas.forEach(function (tarea, index) {
        mensaje += (index + 1) + ". " + tarea + "\n"
      })
    }
    alert(mensaje)
  },

  // Metodo para marcar una tarea como completada

  marcarComoCompletada: function (index) {
    if (index >= 0 && index < this.tareas.length) {
      const tareaCompletada = this.tareas.splice(index, 1)[0]
      this.tareasCompletadas.push("* " + tareaCompletada)
      alert("Tarea marcada como completada.")
    } else {
      alert("Número de tarea inválido.")
    }
  },

  // Metodo para eliminar una tarea

  eliminarTarea: function (index) {
    if (index >= 0 && index < this.tareas.length) {
      this.tareas.splice(index, 1)
      alert("Tarea eliminada.")
    } else {
      alert("Número de tarea inválido.")
    }
  },

  // Metodo para mostrar las tareas completadas

  mostrarTareasCompletadas: function () {
    let completadas = this.tareasCompletadas
    if (completadas.length === 0) {
      alert("No hay tareas completadas.")
    } else {
      let mensaje = "Tareas completadas:\n"
      completadas.forEach(function (tarea, index) {
        mensaje += (index + 1) + ". " + tarea + "\n"
      })
      alert(mensaje)
    }
  }
}

// Funcion para mostrar el mensaje de bienvenida

function mostrarMensajeDeBienvenida() {
  const mensaje = "¡Bienvenido al organizador de tareas!"
  alert(mensaje)
}

// Mostrar mensaje de bienvenida al usuario

mostrarMensajeDeBienvenida()

// Objeto de las opciones y las funciones correspondientes

const opciones = {

  "1": {
    descripcion: "Agregar tarea",
    funcion: function () {
      const nuevaTarea = prompt("Ingrese una nueva tarea:")
      if (nuevaTarea !== null && nuevaTarea !== "") {
        organizadorDeTareas.agregarTarea(nuevaTarea)
      } else {
        alert("No se agregó ninguna tarea.")
      }
      mostrarOpciones()
    }
  },

  "2": {
    descripcion: "Ver lista de tareas pendientes",
    funcion: function () {
      organizadorDeTareas.mostrarTareasPendientes()
      mostrarOpciones()
    }
  },
  
  "3": {
    descripcion: "Marcar tarea como completada",
    funcion: function () {
      organizadorDeTareas.mostrarTareasPendientes()
      const tareaCompletada = parseInt(prompt("Ingrese el número de la tarea completada:"))
      if (!isNaN(tareaCompletada) && tareaCompletada > 0 && tareaCompletada <= organizadorDeTareas.tareas.length) {
        organizadorDeTareas.marcarComoCompletada(tareaCompletada - 1)
      } else {
        alert("Número de tarea inválido.")
      }
      mostrarOpciones()
    }
  },
  "4": {
    descripcion: "Mostrar tareas completadas",
    funcion: function () {
      organizadorDeTareas.mostrarTareasCompletadas()
      mostrarOpciones()
    }
  },
  "5": {
    descripcion: "Eliminar tarea",
    funcion: function () {
      organizadorDeTareas.mostrarTareasPendientes()
      const tareaEliminar = parseInt(prompt("Ingrese el número de la tarea a eliminar:"))
      if (!isNaN(tareaEliminar) && tareaEliminar > 0 && tareaEliminar <= organizadorDeTareas.tareas.length) {
        organizadorDeTareas.eliminarTarea(tareaEliminar - 1)
      } else {
        alert("Número de tarea inválido.")
      }
      mostrarOpciones()
    }
  },
  "6": {
    descripcion: "Salir",
    funcion: function () {
      alert("Gracias por utilizar el organizador de tareas. ¡Hasta luego!")
    }
  }
}

// Funcion para mostrar las opciones al usuario

function mostrarOpciones() {
  let mensaje = "Opciones:\n"
  for (const opcion in opciones) {
    mensaje += opcion + ". " + opciones[opcion].descripcion + "\n"
  }

  const opcionSeleccionada = prompt(mensaje)

  if (opciones[opcionSeleccionada]) {
    opciones[opcionSeleccionada].funcion()
  } else {
    alert("Opción inválida. Por favor, seleccione una opción válida.")
    mostrarOpciones()
  }
}

// Mostrar las opciones al iniciar el programa

mostrarOpciones()
