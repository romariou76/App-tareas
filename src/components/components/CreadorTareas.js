import { useState } from "react";

function CreadorTareas({ crearTarea }) {
  // console.log(props)

  const [nuevaTarea, setNuevaTarea] = useState("");
  //variable -  funcion

  // Manejando el evento de envio - recibimos el evento (e)
  const handleSubmit = (e) => {
    e.preventDefault(); // Cancele la actualizacion de la pagina
    crearTarea(nuevaTarea); // Antes de guardar, llamamos desde props la funcion crearTarea
    // localStorage.setItem("tareas", nuevaTarea);    //Hace el guardado en LocalStorage de la tarea y en la lista; que tipeo el usuario = clave - valor ,
    // pero el valor no persiste por ello usaremos useEffect
    setNuevaTarea(""); // Una vez guardado limpiamos el input como string vacio
  };

  return (
    // <div className="border rounded">
    <form onSubmit={handleSubmit}>
      {/* onSubmit captura los datos antes de que se envien */}
      <div className="flex w-96 ml-2">
        <input
          className="input w-full max-w-xs"
          type="text"
          placeholder="Ingresa una nueva tarea"
          value={nuevaTarea} // Muestra el valor del estado - limpiar el input
          onChange={(e) => setNuevaTarea(e.target.value)} //Muestra el evento con su target y recibe el valor para actualizarlo en ña var nuevaTarea
        />

        {/* <button onClick={() => alert(nuevaTarea)}>Guardar tarea</button> */}
        <button className="btn btn-primary mr-8">Agregar</button>
      </div>
    </form>
    // </div>
  );
}

export default CreadorTareas;
