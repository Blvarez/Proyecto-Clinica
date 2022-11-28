import Layout from "../../components/Layout";
import axios from 'axios';
import { useRouter } from "next/router";
import Router from "next/router";

function VistaReceta({ receta }) {

    const router = useRouter;

    const handleDelete = async (cod_receta) => {
        const res = await axios.delete('/api/recetas/' + cod_receta)
        Router.push("/recetas/homeRecetas")
    }

    return (
        <div>
            <Layout />
            <div className="cuadradoGeneral">
                <img className="imagenRece" src="https://thumbs.dreamstime.com/b/formulario-de-prescripci%C3%B3n-rx-en-blanco-lista-tratamientos-m%C3%A9dicos-y-medicamentos-168690669.jpg" />
                <h4 className="vistaRecCod">{receta.cod_receta}</h4>
                <h4 className="vistaRecCan">{receta.cantidad}</h4>
                <h4 className="vistaRecRut">{receta.rut_paciente}</h4>
                <h4 className="vistaRecMed">{receta.cod_medi}</h4>
                <h4 className="vistaRecFec">{receta.fecha}</h4>
                <h4 className="rutFor">RUT:</h4>
                <h4 className="fechaFor">FECHA:</h4>
                <h4 className="codRFor">Cod. Receta:</h4>
                <h4 className="cantFor">CANTIDAD:</h4>
                <h4 className="codMFor">Cod. Medicamento</h4>
                <div className="cBlanco1"></div>
                <div className="cBlanco2"></div>

                <button className="elimRec" onClick={() => handleDelete(receta.cod_receta)}>ELIMINAR</button>
                <button className="editRec" onClick={() => Router.push("/recetas/editar/" + receta.cod_receta)}>EDITAR</button>
            
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {

    const { data: receta } = await axios.get("http://localhost:3000/api/recetas/" + context.query.cod_receta)

    return {
        props: {
            receta,
        },
    }
}

export default VistaReceta;