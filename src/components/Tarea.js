import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className="flex w-96 justify-between mb-8">
      <div
        className="flex justify-start gap-5 ml-7"
        onClick={() => completarTarea(id)}
      >
        <input type="checkbox" className="checkbox checkbox-primary" />
        <p>{texto}</p>
      </div>
      <div className="flex justify-end mr-6">
        <button onClick={() => eliminarTarea(id)}>
          <AiOutlineCloseCircle className="tarea-icono" />
        </button>
      </div>
    </div>
  );
}

export default Tarea;
