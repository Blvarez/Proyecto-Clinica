import Layout from "/components/Layout";
import { MedicamentosForm } from "../../components/MedicamentosForm";

const registroMedicamentos = () => (

    <>
        <Layout />
        <div className="regPac">
                <div className="registroM">

                    <div className="columna11">

                        <h2 className="tcl1">Registro de Medicamentos</h2>
                        <span className="tcl2">Agrega datos para ingresar un nuevo Medicamento</span>
 
                        <MedicamentosForm/>

                    </div>

                    <img className="columna22" src="https://fondosmil.com/fondo/92816.jpg" />


                </div>
        </div>
    </>
)




export default registroMedicamentos;