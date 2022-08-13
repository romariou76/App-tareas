function Categorias({ name, cantidad, href, className }) {
  return (
    //  Botones de Tareas pendientes o resueltas
    <>
      <a href={href}>
        <button>
          <div className={className}>
            <p className="text-sm text-black2  font-bold opacity-75 mr-7">
              {cantidad} Tareas
            </p>
            <p className="text-lg text-black font-bold">{name}</p>
          </div>
        </button>
      </a>
    </>
  );
}

export default Categorias;
