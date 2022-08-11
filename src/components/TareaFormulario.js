import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    setInput("")
    e.target.reset()

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div className="flex w-96 ml-2">
        <input
          className="input w-full max-w-xs"
          type="text"
          placeholder="Escribe una Tarea"
          name="texto"
          onChange={(e) => {setInput(e.target.value)}}
        />
        <button className="btn btn-primary mr-8">Agregar</button>
      </div>
    </form>
  );
}

export default TareaFormulario;
