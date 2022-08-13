import React, { useState } from "react";
import '../css/TareaFormulario.css'
import { IoAddCircle } from "react-icons/io5";
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
      <div className="flex w-96 ml-4">
        <input
          type="text"
          class="search__input"
          placeholder="Ingrese una tarea"
          minlength="4"
          maxlength="33"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button class="search__button">
          <IoAddCircle className="w-10 h-10 text-primary" />
        </button>
      </div>
    </form>
  );
}

export default TareaFormulario;
