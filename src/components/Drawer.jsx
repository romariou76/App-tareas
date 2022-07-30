
function Drawer(){
    return(


<div class="drawer drawer-mobile shadow">
   {/* boton */}
   <input id="my-drawer" type="checkbox" class="drawer-toggle"/>

  <div class="drawer-content">

      {/* boton que abre el sidebar cuando esta en mobile */}
      <div class="flex items-start justify-end lg:hidden bg-transparent">
         <label for="my-drawer" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
         </label>   
      </div>
      
      {/* Contenido principal pc-mobile */}
      <div className="hero min-h-screen">
         <div class="text-center hero-content">
            <div class="max-w-md">
               <h1 class="mb-5 text-5xl font-bold">
                  Hola Compade
               </h1> 
               <p class="mb-5">
                  Esta sera la pagina donde ingresaremos el contenido de la lista de tareas, iconos
                  tareas pendientes, listas etc pe
               </p>
            </div>
         </div>
      </div>
         

   </div> 
  
  {/* Contenedor del drawer-side */}
   <div class="drawer-side overflow-y-auto">
   {/* Contenedor que se abre */}
      <label for="my-drawer" class="drawer-overlay"></label>
         {/* Lista ul que es caja de los elementos */}
         <ul class="menu p-12 overflow-y-auto w-80 bg-purple text-base-content space-y-2">
            {/* Imagen avatar */}
            <div class="avatar my-10 ml-4">
               <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" alt="perfil" />
               </div>
            </div>

            <div className="my-8 ml-2">
               <p class="text-3xl text-white font-bold">Rom</p>
              <p class="text-3xl text-white font-bold mb-4">FrontEnd</p>
            </div>
            {/* boton close */}
            <div class="flex items-start justify-end lg:hidden bg-transparent">
               <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                  <label for="my-drawer" class="btn btn-square btn-ghost">
                     <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                     </svg>
                  </label>
               </button>
            </div>

            <li>
               <a href="#a" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  <span class="ml-3 text-white">Templates</span>
               </a>
            </li>

            <li>
               <a href="#a" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap text-white">Categories</span>
                  {/* <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
               </a>
            </li>

            <li>
               <a href="#a" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap text-white">Analytics</span>
                  {/* <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span> */}
               </a>
            </li>

            <li>
               <a href="#a" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white2 hover:bg-gray-100 dark:hover:bg-gray-700 mb-16">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap text-white">Settings</span>
               </a>
            </li>
      
         {/*<li>
               <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
               </a>
            </li>
            <li>
               <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
               </a>
            </li> */}
            <p class="text-sm text-blue-700 font-bold">Goooo</p>
            <p class="text-1xl text-white font-bold">Consistency</p>

         </ul>
      </div>
   </div>


    )
}

export default Drawer;