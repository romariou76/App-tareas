function Categorias({ name, cantidad, href, className }) {
  return (
    //  Botones de Tareas pendientes o resueltas
    <>
      <a href={href}>
        <button>
          <div className={className}>
            <p className="text-sm font-bold opacity-75 mr-7">
              {cantidad} Tareas
            </p>
            <p className="text-lg font-bold">{name}</p>
          </div>
        </button>
      </a>
    </>
  );
}

export default Categorias;
