import axios from 'axios';
import Layout from '../../components/Layout'
import Link from 'next/link';

const homeRecetas = ({ recetas }) => {
    return (
        <div>
            <Layout />
            <h1>RECETAS</h1>

            {recetas.map((receta) => (
                <Link href={'/recetas/'+receta.cod_receta} key={receta.cod_receta}>
                    <div key={receta.cod_receta}>
                        <h1>{receta.cod_receta}</h1>
                        <h2>{receta.cantidad}</h2>
                        <h4>{receta.rut_paciente}</h4>
                        <h4>{receta.cod_medi}</h4>
                        <h4>{receta.fecha}</h4>
                    </div>
                </Link>
            ))}
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