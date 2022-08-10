import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar"
import ControlVisibilidad from "./components/ControlVisibilidad";
import CreadorTareas from "./components/CreadorTareas";
import TablaTarea from "./components/TablaTarea";
import Categorias from "./components/Categorias"

function App2() {
  const [tareaItems, setTareaItems] = useState([]);

  // Pasaremos esta funcion al componente CreadorTareas(linea19) mediante props para que lo ejecute
  function crearTarea(tareaName) {
    if (!tareaItems.find((tarea) => tarea.name === tareaName)) {
      const tareasActualizadas = [...tareaItems, { id: uuidv4, name: tareaName, done: false }]; // React dice crear una copia del arreglo (...tareas) y añade el nuevo elemento como un "Objeto"
      setTareaItems(tareasActualizadas)
    } else {
      alert("tarea ya agregada");
    }
  }

  // Creamos esta funcion para actualizar una tarea(true, false)
  // Funcion usada por TablaTarea porque tiene la lista de tareas
  const actualizarTarea = (tarea) =>
    setTareaItems(
      // por cada una de las tareas recibimos los datos y vamos a compararlo
      // Si la var que esta recorriendo es igual en su propiedad name es igual a tarea.name, vamos a considerarlo como que lo ha encontrado
      tareaItems.map((t) =>
        t.name === tarea.name ? { ...t, done: !t.done } : t
      )
      // sI SON IGUALES, si tiene su prop en true lo cambia a false y al revez, si no son iguales o no lo encuentra solo lo conserva que seria la tarea
      // Esto al final devuelve un nuevo arreglo, que sera el nuevo arreglo de tareas seteado por setTareaItems
    );

  // Cuando cargue la app iniclamente ejecutara este hook, si no le colocamos nada en el array, se ejecutara apenas la app cargue
  useEffect(() => {
    // console.log('cargo')
    // leemos el localstorage y guardamso en la var data
    let data = localStorage.getItem("tareas"); //Si existe datos vamos a convertirlo a su forma de javascript
    if (data) {
      setTareaItems(JSON.parse(data)); // Lo seteamos como el valor de la variabl que tiene todas las tareas
      // console.log(JSON.parse(data))
    }
  }, []); //importante este parametro array para evitar millones de errores xd

  // Creamos esta funcion para eliminar las tareas que ya fueron hechas para ello usaremos un filtro
  const limpiartareas = (id) => {
    // De todas las tareas del arreglo filtramos, por cada una de las tareas  buscamos las que su prop done esten true, y retornamos las que no estan hechas con el signo contrario "!"
    // Por lo tanto las que si estan hechas desapareceran al actualizar setTareaItems
    setTareaItems(tareaItems.filter(tarea => tarea.id !== id))
  }



  // El hook useEffect se ejecuta cada vez si un dato cambia
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareaItems)); // Convertimos a string el array tareaItems
    // console.log('cambio')
  }, [tareaItems]); // Le pasamos el dato variable que va cambiando en este caso la lista(tareaItems), si cambia vuelve a ejecutar lo que esta dentro de la funcion
  // Por lo tanto aqui seria el lugar correcto para guardarlo en el localStorage
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center h-auto bg-base-100">
        <div className="text-center">
          {/* Contenedor de las Areas */}
          <div className="flex flex-col w-96">
            {/* Area de categorias, nombre */}
            <div className="h-auto bg-base-100 mb-5">
              <div className="grid justify-items-start">
                <h1 className="text-4xl font-bold mb-10 ml-2">
                  ¡Qué tal, Romario¡
                </h1>
                <p className="ml-4 mb-5 text-lg font-bold">Categorias</p>
              </div>
              {/* Area de Categorias */}
              <div className="flex justify-between ml-7 mr-7">
                <Categorias
                  name="Pendientes"
                  cantidad={40}
                  href="#item1"
                  className="border-b-4 border-green"
                />

                <Categorias
                  name="Completadas"
                  cantidad={10}
                  href="#item2"
                  className="border-b-4 border-red"
                />
              </div>
            </div>

            <div className="">
              <CreadorTareas crearTarea={crearTarea} />
            </div>
            
            {/* Carrousel de las tablas */}
            <div className="flex h-auto w-96 bg-base-100">
              <div className="carousel">
                <TablaTarea
                  tareas={tareaItems}
                  actualizarTarea={actualizarTarea}
                  mostrarTareaCompletadas={false}
                  name="Tareas de hoy"
                  iditem="item1"
                />

                {/* Vamos a usar la misma tabla para filtrar las tareas a partir de la propiedad done:false true */}
                <TablaTarea
                  tareas={tareaItems}
                  actualizarTarea={actualizarTarea}
                  mostrarTareaCompletadas={true}
                  name="Tareas realizadas"
                  iditem="item2"
                />
              </div>
            </div>

            {/* Creamos esete boton para mostrar las tareas realizadas, recibe un evento para cambiar un estado a su valor boleano contrario, y la variable mostrarTareaCompletadas a true o false para mostrar o ocultar la tabla de tareas realizadas */}
            {/* Y le pasamos la funcion como prop que requiere el componente */}
            <ControlVisibilidad
              limpiartareas={limpiartareas} // le pasamos la prop y su valor
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App2;
