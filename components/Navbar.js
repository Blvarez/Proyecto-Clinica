const Navbar = () => (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav mr-auto">

                <li class="nav-item active">
                    <a class="nav-link active" href="#">Acerca de Nosotros</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link active" href="#">Medicos</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link active" href="#">Contactanos</a>
                </li>

            </ul>
        </div>

        <div class="mx-auto order-0">
            <a class="navbar-brand mx-auto" href="#">CLINICA O LOGO</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>

        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <button type="button" class="btn btn-light">REGISTRARSE</button>
                </li>
                <li class="nav-item">
                    <button type="button" class="btn btn-light">INICIAR SESION</button>
                </li>
            </ul>
        </div>
    </nav>
)


export default Navbar;