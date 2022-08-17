import React, { useState, useEffect } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    } else{
      alert("añada algo pe")
    }
  };

  // Cuando cargue la app iniclamente ejecutara este hook, si no le colocamos nada en el array, se ejecutara apenas la app cargue
  // Recibimos los datos al cargar la pagina
  useEffect(() => {
    let data = localStorage.getItem("tareas"); //Si existe datos vamos a convertirlo a su forma de javascript
    if (data) {
      setTareas(JSON.parse(data)); // Lo seteamos como el valor de la variable que tiene todas las tareas
    }
  }, []);

  // Guardamos los datos en el localstorage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="w-96 bg-black">
        <div className="flex justify-items-start mt-5 mb-8">
          <p className="text-lg text-white2 font-bold ml-4">Tareas pendientes</p>
        </div>
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
