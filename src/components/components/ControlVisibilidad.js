// recibimos la funcion como prop desde app
function ControlVisibilidad({
  limpiartareas
}) {
  // Al momento de darle click lo eliminamos
  const borrarTareas = () => {
    if (window.confirm("Seguro que quiere eliminar las tareas")) {
      limpiartareas();
    }
  };

  return (
    <div>
      {/* Al hacer click lanzara una funcion que  uitara todos los elemntos */}
      <button onClick={borrarTareas} className="btn">
      <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
          </svg>
      </button>
    </div>
  );
}

export default ControlVisibilidad;
