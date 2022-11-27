import Layout from "../../components/Layout";
import axios from 'axios';

function VistaMedicamento({ medicamento }) {
    console.log(medicamento);
    return (
        <div>
            <Layout />
            <img className="imagenMedi" src="https://img.freepik.com/vector-premium/caja-blanca-blister-pastillas_124507-5113.jpg?w=2000" />
            <h1 className="vistaMedCod">Cod: {medicamento.cod_medicamento}</h1>
            <h4 className="vistaMedFor">Formato:{medicamento.formato}</h4>
            <div className="cuadradoDescripcion">
                <p>Desc:{medicamento.descripcion}</p>
            </div>
            <h4 className="vistaMedSto">Stock:{medicamento.stock}</h4>
        </div>

    )
}

export const getServerSideProps = async (context) => {

    const { data: medicamento } = await axios.get("http://localhost:3000/api/medicamentos/" + context.query.cod_medicamento)

    return {
        props: {
            medicamento,
        },
    }
}




export default VistaMedicamento;