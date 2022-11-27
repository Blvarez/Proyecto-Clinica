import Layout from "../../components/Layout";
import axios from 'axios';

function VistaReceta({receta}) {
    console.log(receta)
    return (
        <div>
            <Layout />
            <h4>{receta.cod_receta}</h4>
            <h4>{receta.cantidad}</h4>
            <h4>{receta.rut_paciente}</h4>
            <h4>{receta.cod_medi}</h4>
            <h4>{receta.fecha}</h4>
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