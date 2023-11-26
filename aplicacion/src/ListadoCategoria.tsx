import { useNavigate } from "react-router-dom"
export interface CategoriaListadoItem{
    Id: string,
    Nombre:string,
    UrlIcono: string
}

interface Props {
categorias: CategoriaListadoItem[], 
OnEliminar:(cat: CategoriaListadoItem) =>void 
}
const ListadoCategorias = ({categorias, OnEliminar}:Props)=>{
    const nav=useNavigate();
    return (
        <div className="container nt-4">
        <div className= "row">
            {
                categorias.map(x=>
                    <div className="col-6 col-sm-4 col-lg-3 mb-3"key={x.Id}>
                        <div className="card h-100" >
<img src={x.UrlIcono} className="card-img-top"  onClick={()=>nav("/lenguaje/"+x.Id+"?categoria="+x.Nombre)}/>
<div className="card-body- d-flex">
    <span className ="aligm-self-end">{x.Nombre}
    </span>
</div>
<div className="card-footer">
        <button className="btn btn-outline-danger" onClick={()=>OnEliminar(x)} >Eliminar</button>
       
        </div>

                 </div>

                    </div>)
            }
            </div>
            </div>
    )
}
export default ListadoCategorias