// recibe el prop tarea para que la fila se muestre
// Recibe el prop actualizarTarea para evaluarlo en App.js

function FilaTarea({ tarea, actualizarTarea }) {
  return (
    <div key={tarea.name} className="flex gap-5 mb-8 ml-5">
      <div>
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={tarea.done} //chekea si es false o true
          onChange={() => actualizarTarea(tarea)} // Si da click cambia el valor de tarea.done(leer arreglo, buscarlo y actualizarlo)
          // Ademas le pasamos a la funcion la tarea que estamos intentando cambiar el estado true o false
        />
      </div>
      <div>
        <p>{tarea.name}</p>
      </div>
    </div>
  );
}

export default FilaTarea;
