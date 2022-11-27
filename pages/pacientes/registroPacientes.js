import Layout from "/components/Layout";
import {PacientesForm} from "../../components/PacientesForm";

const registroPacientes = () => (

    <>
        <Layout />
        <div className="regPac">
                <div className="registroP">

                    <div className="columna1">

                        <h2 className="tcl11">Registro de Pacientes</h2>
                        <span className="tcl22">Agregar Datos para Ingresar un Nuevo Paciente</span>

                        <PacientesForm/>

                    </div>

                    <img className="columna22" src="https://media.istockphoto.com/id/1130082169/es/foto/interior-de-brillantemente-iluminada-sala-de-hospital-vac%C3%ADa.jpg?s=612x612&w=0&k=20&c=oiOH1TuO5Bt9tuTwfo9vxugqBw_ceNXqep2xuOfhefc=" alt="Registro de pacientes" />


                </div>
        </div>
    </>
)


export default registroPacientes;