// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css"

function Bienvenida(){

// const [user, setUser] = useState([]);

// useEffect(() => {
//     let userdata = localStorage.getItem("usuario");
//     if (userdata) {
//         setUser(JSON.parse(userdata))
//     }
// }, []);

// useEffect(() => {
//     localStorage.setItem("usuario", JSON.stringify(user));
// }, [user])


    return(
        <div className="h-screen flex justify-center bienvenida">
            <div className="h-auto grid grid-cols-1 content-center">
                <div className="w-96 h-96">
                    <p className="text-white text-center font-bold text-6xl mb-16">Rom To Do</p>
                    <p className="text-white text-center font-medium text-2xl mb-8 ml-8 mr-8">Toma el control de las tarea de tu dia a dia</p>

                    <div className="h-auto grid grid-cols-1 gap-4 ml-12 mt-4 mb-8">
                        <div className="flex justify start">
                            <input type="checkbox" checked="checked" className="checkbox checkbox-accent" />
                            <span className="label-text ml-2">Interfaz Sencilla</span>
                        </div>
                        <div className="flex justify start">
                            <input type="checkbox" checked="checked" className="checkbox checkbox-accent" />
                            <span className="label-text ml-2">Facil de usar</span>
                        </div>
                        <div className="flex justify start">
                            <input type="checkbox" checked="checked" className="checkbox checkbox-accent" />
                            <span className="label-text ml-2">Actualizaciones</span>
                        </div>
                        <div className="flex justify start">
                            <input type="checkbox" checked="checked" className="checkbox checkbox-accent" />
                            <span className="label-text ml-2">Funcionamiento offline de la APP</span>
                        </div>
                        <div className="flex justify start">
                            <input type="checkbox" checked="checked" className="checkbox checkbox-accent" />
                            <span className="label-text ml-2">Opciones de personalización</span>
                        </div>
                    </div>

                {/* <form> */}
                    <div className="pl-8">
                        {/* <p className="text-center mr-8 mb-4">Ingrese su {user} para empezar</p>
                        <input type="text"
                         placeholder="Ingrese su nombre" 
                         class="input w-full max-w-xs mb-4"
                         onChange={(e) => setUser(e.target.value)}/> */}
                        <Link to="/app" className="btn btn-primary w-80">¡Empezar!</Link>
                    </div>
                {/* </form> */}
                </div>
            </div>
        </div>
    )
}

export default Bienvenida;