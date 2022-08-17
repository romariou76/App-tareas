import ListaDeTareas from "./ListaDeTareas";
import Categorias from "./Categorias";
import Navbar from "./Navbar";

function Contenido() {
  return (
    <div className="h-screen bg-black">
      <Navbar />
      <div className="flex justify-center h-auto bg-black">
        <div className="text-center">
          <div className="flex flex-col w-96">
            <div className="h-auto bg-black mb-5">
              <div className="grid justify-items-start">
                <h1 className="text-white text-4xl font-bold mb-6 ml-4">
                  Bienvenido
                </h1>
                {/* <p className="ml-4 mb-5 text-lg text-black2 font-bold">Categorias</p> */}
              </div>
              {/* Area de Categorias */}
              {/* <div className="flex justify-between ml-7 mr-7">
                <Categorias
                  name="Personales"
                  cantidad={5}
                  href="#item1"
                  className="grid justify-items-start border-b-4 border-green"
                />

                <Categorias
                  name="Trabajos"
                  cantidad={5}
                  href="#item2"
                  className="grid justify-items-start border-b-4 border-primary"
                />
              </div> */}
            </div>

            <div className="grid justify-items-start">
                <p className="ml-4 mb-5 text-lg text-white2 font-bold">Agregar tarea</p>
            </div>

            <div className="h-auto w-96 bg-black">
              <ListaDeTareas />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contenido;
