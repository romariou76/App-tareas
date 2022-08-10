import { AiOutlineCloseCircle } from "react-icons/ai";
// recibe el prop tarea para que la fila se muestre
// Recibe el prop actualizarTarea para evaluarlo en App.js

function FilaTarea({ id, tarea, actualizarTarea, eliminarTarea }) {
  return (
    <div className="flex w-96 justify-between mb-8">
      <div className="flex justify-start gap-5 ml-7">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={tarea.done} //chekea si es false o true
          onChange={() => actualizarTarea(tarea)} // Si da click cambia el valor de tarea.done(leer arreglo, buscarlo y actualizarlo)
          // Ademas le pasamos a la funcion la tarea que estamos intentando cambiar el estado true o false
        />
        <p>{tarea.name}</p>
      </div>
      <div class="flex justify-end mr-6">
        <button onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono' />
        </button>
      </div>
    </div>
  );
}

export default FilaTarea;
