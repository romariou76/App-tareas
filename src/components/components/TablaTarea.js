import FilaTarea from "./FilaTarea";

// Recibimos como prop {tareas} de app.js las cuales seran el arreglo de tareas que luego mapearemos
function TablaTarea({tareas, actualizarTarea, name, iditem, eliminarTarea}){
    return (
      <div className="w-96">
          <div className="flex justify-items-start mt-5 mb-8">
            <p className="text-lg font-bold ml-4">{name}</p>
          </div>

          {
            tareas      //Vamos a recorra todas las filas o generar las filas de la tabla.
            .map(tarea =>// Por cada tarea que haya devuelva un tr con el nombre y cada tarea debe tener una clave unica en <tr>
            <FilaTarea
              key={tarea.id}
              id={tarea.id}
              tarea={tarea} // Como necesita los datos pe pasamos la prop tarea con el valor de cada una de las tareas
              actualizarTarea={actualizarTarea}  // Pasamos la funcion como prop actualizarTarea porque tiene el checkbox
              eliminarTarea={eliminarTarea}/>
              )  
          }
      </div>
    );
}

export default TablaTarea;