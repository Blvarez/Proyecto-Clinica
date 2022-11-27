import Layout from "/components/Layout";
import { RecetasForm } from "../../components/RecetasForm";

const registroRecetas = () => (

    <>
        <Layout />
        <div className="regPac">
            <div className="registroP">

                <div className="columna1">

                    <h2 className="tcl11">Registro de Recetas</h2>
                    <span className="tcl22">Agregar Datos para ingresar una nueva Receta</span>

                    <RecetasForm />

                </div>

                <img className="columna22R " src="https://clinic-cloud.com/wp-content/uploads/2017/07/tipos-de-recetas-medicas-en-la-ss.jpg" />


            </div>
        </div>
    </>
)


export default registroRecetas;