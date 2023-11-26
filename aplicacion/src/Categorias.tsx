
import AgregarCategoria, { DatosCategoria } from "./AgregarCategoria";
import ListadoCategorias,{CategoriaListadoItem} from "./ListadoCategoria";
import Menu from "./Menu";
import {useState,useEffect} from "react";
import Buscador from "./Buscador";

const Categorias=() =>{

    const[mostrarVentana , setMostrarVentana]=useState(false);
    const[categorias, setCategorias]=useState<CategoriaListadoItem[]>([]);
  
    useEffect(()=> {
        mostrarCategorias();
    },[])


     const onCerrarVentana=()=>{
        setMostrarVentana(false);
     }

     const onAbrirVentana=()=>{
        setMostrarVentana(true);
     }

     const mostrarCategorias=async()=>{
        const url= "http://localhost:4000/usuarios/categorias1";
        const resp =await fetch (url);
        if(resp.ok){
            const datos=await resp.json ();
            const lista = [...datos];
            setCategorias(lista);
        }
        else{
            const error = await resp.text();
            alert("Error al cargar las categorias"+error)

        }
     }
     const onEliminar = async (registro:CategoriaListadoItem)=> {
        if(!confirm ("¿Desea eliminar el registro?" + registro.Nombre + "?" )){
            return;
        }

        const resp = await fetch("http://localhost:4000/categoria/"+ registro.Id,{
            method: "DELETE"
        });

        if(resp.ok){
           mostrarCategorias();
           
        }
        else{
            const error = await resp.text();
            alert("Error al listar las señas " +error);
        }
    }
     const onCrearCategoria = async (categoria: DatosCategoria)=>{
        const url = "http://localhost:4000/usuarios/categorias";
        const resp =await fetch(url,{
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Nombre: categoria.Nombre,
                UrlIcono: categoria.Icono
                
            })
        });
        if(resp.ok){
            setMostrarVentana(false);
            mostrarCategorias();
        }
        else{
            const error = await resp.text();
            alert(error);
        }
     }
     return (
        <div>
            <Menu/>
            <Buscador/>
            <ListadoCategorias categorias={categorias} OnEliminar={onEliminar}/>
            <AgregarCategoria
            mostrar={mostrarVentana}
            onCerrarVentana={onCerrarVentana}
            onCrearCategoria={onCrearCategoria}/>
            
            <button
            onClick={onAbrirVentana}
            style={{
                width: "50px",
                height:"50px",
                borderRadius:"50px",
                position:"fixed",
                bottom: "20px",
                right:"20px",
                border: "none",
                boxShadow:"0px 5px 5px #ccc"              
            }}>+</button>
            </ div>
     )
    }
    export default Categorias;