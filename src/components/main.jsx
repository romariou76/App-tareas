


function Page(){
    return(
           
<div className="h-screen">
  {/* Barra de Navegacion */}
  <div className="navbar bg-base-100 h-24">
    <div className="navbar-start">
      {/* Boton que desplega el drawer */}
      <label htmlFor="my-drawer" className="btn btn-square btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fillRule="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </label>   
    </div>

    <div className="navbar-center">
      <a href="#A" className="btn btn-ghost normal-case text-xl text-transparent">ThingsTodobyRom</a>
    </div>

    <div class="navbar-end">
      <button className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fillRule="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
      <button className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fillRule="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
    </div>
  </div>

  {/* Contenido */}
  <div className="flex justify-center h-auto bg-base-100">
    <div className="text-center">
      {/* Contenedor de las Areas */}
      <div className="flex flex-col w-96 ">
        {/* Area de categorias, nombre */}
        <div className="h-64 bg-base-100">
          <div className="grid justify-items-start">
            <h1 className="text-4xl font-bold mb-10 ml-4">¡Qué tal, Romario</h1>
            <p className="ml-4 mb-16">CATEGORIAS</p>
          </div>
          <div className="flex justify-between ml-7 mr-7">
            <div>
              <button className="btn btn-primary">Negocios</button>
            </div>
            <div>
              <button className="btn btn-primary">Personal</button>
            </div>
          </div>
        </div>
            
            <div className="grid justify-items-start">
              <p className="mt-1 mb-10 ml-4">TAREAS DE HOY</p>
            </div>

            {/* Area de los task */}
              <div className="h-80 bg-base-100 ml-8">
              
                <div className="flex justify-items-start gap-5 mb-8">
                  <input type="checkbox" checked="checked" className="checkbox checkbox-secondary" />
                  <p>Aprender React</p>
                </div>

                

              </div>            
          </div>
      </div>
  </div>
</div>


    )
}

export default Page;