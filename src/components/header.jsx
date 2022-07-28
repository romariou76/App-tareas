import "../css/style.css";

function Main(){
    return(

      
<div class="container">
    <div class="perfil">
      <div id="fecha"></div>
      <h1>Hola, Romario </h1>
      <span>Vamos a cumplir tus metas</span>
    </div>

    <div class="agregar-tarea">
        <input type="text" id="input" placeholder="agregar una tarea"/>
        <i id="boton-enter"class="fas fa-plus-circle"></i>
    </div>
    
    <div class="seccion-tarea">
        <h3>Estas son tus Tareas Pendientes </h3>
        <ul id="lista">
            <li id="elemento">
                <i class="far fa-circle co" data="realizado" id="0"></i>
                <p class="text"> Hacer la tarea de matematicas </p>
                <i class="fas fa-trash de" data="eliminado" id="0"></i> 
            </li>
            <li id="elemento">
                <i class="far fa-circle co" data="realizado" id="0"></i>
                <p class="text"> Lavar la ropa </p>
                <i class="fas fa-trash de" data="eliminado" id="0"></i> 
            </li>
        </ul>
    </div>   
</div>
    )
}

export default Main;