const Menu =()=>{
return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className ="container-fluid">
    <div className="titulos"><span> Lenguaje</span> <span className="titulos2"> De </span> <span className="titulos3">Señas MX</span></div>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" 
       aria-controls="navbarNavDropdown"aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className = "navbar-nav">
            <li className="nav-item">
                <a  className="nav-link active" aria-current="page" href ="/categorias "> Categorias </a>
                </li>
                </ul>
               </div>
              </div>
                </nav>
)}
export default Menu  