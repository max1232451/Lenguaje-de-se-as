import { useState } from "react";
import logotipo from "./assets/logotipo.jpg";
import "./estilos/acceso.css";

const Recuperar = ()=> {
    const [correo, setCorreo]= useState("");

    
    const onIngresar = () =>{{
        alert ("Correo:"+ correo);
        
    }}

    return(
        <div className="contenedor">
            <div className="titulo"> Recuperar Contraseña </div>
        <div>
    <img src ={logotipo} className="logo"/>
    </div>            
    <div className="agrupador-correo">
        <div>Correo Electrónico </div>
    <div>
        <input 
        type="text"
        placeholder="Ingresa tu correo electronico"
        className="caja-correo"
        value={correo}
        onChange={(e)=> setCorreo(e.target.value)}/>
    
            </div>
            </div>
            <div className="agrupador-boton">
                <button className="boton-ingresar" onClick={()=> onIngresar}>Ingresar</button>
                </div>

                <div className="otros-botones">
                    <a href="/registro" className="link-registro">Registrarse</a>
                    
                    </div>
                    </div>
    )
}
export default Recuperar