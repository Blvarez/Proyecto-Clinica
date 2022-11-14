import Layout from "/components/Layout";
const registroPacientes = () => (

    <>
        <Layout />
        <div className="regPac">
                <div className="registroo">

                    <div cassName="columna1">

                        <h2 className="tcl1">Registro de Pacientes</h2>
                        <span className="tcl2">registrate para poder acceder a tus recetas</span>

                        <form id="form" classNAme="flex flex-col">
                            <input type="text" placeholder="Rut" />
                            <input type="text" palceholder="Contrasenia" />
                            <input type="text" palceholder="Confirmar Contrasenia" />
                            <input type="text" placeholder="Nombre" />
                            <input type="text" placeholder="Fono" />
                            <input type="text" placeholder="Edad" />
                            <input type="text" placeholder="Diagnostico" />

                            <button className="btn">REGISTRARSE</button>
                        </form>
                    </div>

                    <img className="columna2" src="https://media.istockphoto.com/id/1130082169/es/foto/interior-de-brillantemente-iluminada-sala-de-hospital-vac%C3%ADa.jpg?s=612x612&w=0&k=20&c=oiOH1TuO5Bt9tuTwfo9vxugqBw_ceNXqep2xuOfhefc=" alt="Registro de pacientes" />


                </div>
        </div>
    </>
)


export default registroPacientes;