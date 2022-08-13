import Contenido from "./Contenido";

function Drawer(){
    return(

<div className="drawer drawer-mobile shadow">
   {/* boton */}
   <input id="my-drawer" type="checkbox" className="drawer-toggle"/>

    <div className="drawer-content">
        <Contenido />
    </div> 
  
  {/* Contenedor del drawer-side */}
   <div className="drawer-side overflow-y-auto">
   {/* Contenedor que se abre */}
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
         {/* Lista ul que es caja de los elementos */}
         <ul className="menu p-12 overflow-y-auto w-80 bg-purple text-base-content space-y-2">
            {/* Imagen avatar */}
            <div className="avatar my-10 ml-4">
               <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://www.infobae.com/new-resizer/9nR_CJh-OihHS37Fb0YOcAJIjUk=/992x992/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/H7W2IQYTJENYXPNKIGA6WE2DYA.jpg" alt="perfil" />
               </div>
            </div>

            <div className="my-8 ml-2">
               <p className="text-3xl text-white font-bold">Rom</p>
              <p className="text-3xl text-white font-bold mb-4">FrontEnd</p>
            </div>
            {/* boton close */}
            <div className="flex items-start justify-end lg:hidden bg-transparent">
               <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                  <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                     <svg aria-hidden="true" className="w-5 h-5" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                     </svg>
                  </label>
               </button>
            </div>


            <li>
               <a href="#a" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap text-white">Perfil</span>
               </a>
            </li>

            <li>
               <a href="#a" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap text-white">Categories</span>
                  {/* <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
               </a>
            </li>

            <li>
               <a href="#a" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white2 hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fillRule="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap text-white">Analytics</span>
                  {/* <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span> */}
               </a>
            </li>
            
            <li>
               <a href="#a" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white2 hover:bg-gray-100 dark:hover:bg-gray-700 mb-14">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fillRule="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <label for="my-modal" className="ml-3 text-white">About</label>
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
            <p className="text-sm text-blue-700 font-bold">Goooo</p>
            <p className="text-1xl text-white font-bold">LlamasDev</p>

         </ul>
      </div>
   </div>


    )
}

export default Drawer;