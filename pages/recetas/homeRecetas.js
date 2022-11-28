import axios from 'axios';
import Layout from '../../components/Layout'
import Link from 'next/link';

const homeRecetas = ({ recetas }) => {
    return (
        <div>
            <Layout />

            <div className='cuadradoGeneral'>

            <h3 className="titHomeRec">Para Eliminar o Editar seleccione uno!</h3>

            {recetas.map((receta) => (
                <div className='principalHomeRec'>
                <Link className='decoration' href={'/recetas/'+receta.cod_receta} key={receta.cod_receta}>
                    <div key={receta.cod_receta}>
                        <h1><u>Cod. Receta:</u> {receta.cod_receta}</h1>
                        <h3><u>Rut Paciente:</u> {receta.rut_paciente}</h3>
                        <h4><u>Cod. Medicamento:</u> {receta.cod_medi}</h4>
                        <h4><u>Cantidad:</u> {receta.cantidad}</h4>
                        <h5><u>Fecha:</u> {receta.fecha}</h5>
                    </div>
                </Link>
                </div>
            ))}
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const { data: recetas } = await axios.get("http://localhost:3000/api/recetas")

    return {
        props: {
            recetas,
        },
    }
}


export default homeRecetas;