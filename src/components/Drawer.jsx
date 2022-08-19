import Contenido from "./Contenido";
import perfil from "../images/perfil.png"
import { IoCloseOutline } from "react-icons/io5";
import { FaThLarge } from "react-icons/fa";   
import { HiInformationCircle } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Drawer(){
    return(

<div className="drawer drawer-mobile shadow">
   {/* boton */}
   <input id="my-drawer" type="checkbox" className="drawer-toggle"/>

    <div className="drawer-content">
        <Contenido/>
    </div> 
  
  {/* Contenedor del drawer-side */}
   <div className="drawer-side overflow-y-auto">
   {/* Contenedor que se abre */}
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
         {/* Lista ul que es caja de los elementos */}
         <ul className="menu p-12 overflow-y-auto w-80 bg-purple text-base-content space-y-2">
            {/* Imagen avatar */}
            <div className="avatar my-8 ml-0">
               <div className="w-32 rounded-full">
                  <img src={perfil} alt="perfil" className="p-1" />
               </div>
            </div>

            <div className="my-8 ml-2">
               <p className="text-3xl text-white font-bold">Rom</p>
              <p className="text-3xl text-white font-bold mb-4">To Do</p>
            </div>
            {/* boton close */}
            <div className="flex items-start justify-end lg:hidden bg-transparent">
               <button type="button" className=" text-sm absolute top-6 right-2.5 inline-flex items-center" >
                  <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                    <IoCloseOutline className="w-7 h-7 mt-0 text-white"/>
                  </label>
               </button>
            </div>

            <li>
               <a href="#a" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FaUserAlt className="w-4 h-4 ml-0.5"/>
                  <span className="flex-1 ml-2 whitespace-nowrap text-white">Perfil</span>
               </a>
            </li>

            <li>
               <a href="#a" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FaThLarge className="w-4 h-4 ml-0.5"/>
                  <span className="flex-1 ml-2 whitespace-nowrap text-white">Categorias</span>
                  {/* <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
               </a>
            </li>

            <li>
               <a href="#a" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <IoMdSettings className="w-5 h-5"/>
                  <span className="flex-1 ml-2 whitespace-nowrap text-white">Ajustes</span>
                  {/* <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span> */}
               </a>
            </li>
            
            <li>
            <Link to="/about" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white2 hover:bg-gray-100 dark:hover:bg-gray-700 mb-14">
               <HiInformationCircle className="w-5 h-5"/>
               <label htmlFor="my-modal" className="ml-2 text-white">Acerca de</label>
            </Link>

            </li>

            <p className="text-sm font-bold">Desarrollado por</p>
            <p className="text-1xl text-white font-bold">Romario</p>

         </ul>
      </div>
   </div>


    )
}

export default Drawer;