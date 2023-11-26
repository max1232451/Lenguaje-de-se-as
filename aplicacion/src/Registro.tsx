import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logotipo from "./assets/logotipo.jpg";
import "./estilos/registro.css";

const Registro = ()=> {
const navigate=useNavigate();
    const [correo, setCorreo]= useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    
    const onRegistrar =  async()=>{{
    const url = "http://localhost:4000/usuarios/registrar";
    const response = await fetch(url,{
        method:"POST",
        body:JSON.stringify({
        Nombre: nombre,
        Correo: correo,
        Password: password 

    }),
    headers: {
        "Content-Type": "application/json"
    }
    });
    if(!response.ok){
    const mensaje = await response.json();
    alert(mensaje);
}
else{
    alert("Usuario registrado correctamente");
    navigate("/");
}
}}  

    return(
        <div className="contenedor">
            <div className="titulo"> Registrarse </div>
        <div>
    <img src ={logotipo} className="logo"
    />
    </div>
    <div className="agrupador-nombre">
        <div>Nombre</div>
        <div>
            <input
            type="nombre"
            placeholder="Nombre"
            className="caja-nombre"
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
            />
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
            </div>
            <div className="agrupador-boton">
                <button className="boton-ingresar" onClick={()=> onRegistrar()}>Registrarse</button>
                </div>

                <div className="otros-botones">
                    
                    <a href="/recuperar-password" className="link-registro">Olvidé mi contraseña</a>
                    </div>
                    </div>
    )
}
export default Registro