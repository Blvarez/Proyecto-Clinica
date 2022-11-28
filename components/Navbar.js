import Link from "next/link";

const Navbar = () => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto">

                <li className="nav-item active">
                    <a className="nav-link active" href="/medicamentos/homeMedicamentos">Medicamentos</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link active" href="/pacientes/homePacientes">Pacientes</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link active" href="/recetas/homeRecetas">RECETAS</a>
                </li>


            </ul>
        </div>

        <div className="mx-auto order-0">
            <a className="navbar-brand mx-auto" href="/#">DATA DE RECETAS, MEDICAMENTOS Y PACIENTESs</a>
            <button onClick="window.location.href='/registro'" className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="botonIndex" href="/registro"> REGISTRO</a>
                </li>
            </ul>
        </div>
    </nav>
)


export default Navbar;