
import { useState } from "react";
import logotipo from "./assets/logotipo.jpg";
import "./estilos/acceso.css";
import { useNavigate } from "react-router-dom";


const Ingresar = ()=> {
    const nav=useNavigate();
    const [correo, setCorreo]= useState("");
    const [password, setPassword] = useState("");
    
    const onIngresar =  async()=>{{
    const url = "http://localhost:4000/usuarios/ingresar";
    const response = await fetch(url,{
        method:"POST",
        body:JSON.stringify({
        Correo: correo,
        Password: password 

    }),
    headers: {
        "Content-Type": "application/json"
    }
    });
    if(!response.ok){
   nav("/categorias");
}
else{
    const error = await response.text();
    alert(error);
}
}}   
    

    return(
        <div className="contenedor">
            <div className="titulo"><span> Lenguaje</span> <span className="Titulo1"> de </span> <span className="Titulo2"> señas MX </span></div>
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
    <div className="agrupador-password">
        <div>Contraseña</div>
        <div>
            <input
            type="password"
            placeholder="Contraseña"
            className="caja-password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            </div>
            </div>
            <div className="agrupador-boton">
                <button className="boton-ingresar" onClick={()=> onIngresar()}>Ingresar</button>
                </div>

                <div className="otros-botones">
                    <a href="/registro" className="link-registro">Registrarse</a>
                    <a href="/recuperar-password" className="link-registro">Olvidé mi contraseña</a>
                    </div>
                    </div>
    )
}
export default Ingresar