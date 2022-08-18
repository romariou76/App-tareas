import React from "react";
import "../css/Tarea.css";
import { MdDelete } from "react-icons/md";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
      <div className="flex justify-start gap-5 ml-7">
        <input
          type="checkbox"
          checked={completada} // le pasamos el valor boleano de completada
          onChange={() => completarTarea(id)}
          className="checkbox checkbox-primary"
        />

        <p className="text-white font-bold">{texto}</p>
      </div>
      <div className="flex justify-end mr-9">
        <button onClick={() => eliminarTarea(id)}>
          <MdDelete className="tarea-icono" />
        </button>
      </div>
    </div>
  );
}

export default Tarea;
