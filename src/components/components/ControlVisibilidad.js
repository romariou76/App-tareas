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
      <button onClick={borrarTareas} className="btn btn-warning">
        Eliminar tareas
      </button>
    </div>
  );
}

export default ControlVisibilidad;
