import Layout from "../../components/Layout";
import axios from 'axios';
import { useRouter } from "next/router";
import Router from "next/router";


function VistaMedicamento({ medicamento }) {

    const router = useRouter;

    const handleDelete = async (cod_medicamento) => {
        const res = await axios.delete('/api/medicamentos/' + cod_medicamento)
        Router.push("/medicamentos/homeMedicamentos")
    }


    return (
        <div>
            <Layout />
            <div className="cuadradoGeneral">
                <img className="imagenMedi" src="https://img.freepik.com/vector-premium/caja-blanca-blister-pastillas_124507-5113.jpg?w=2000" />
                <h1 className="vistaMedCod">Cod: {medicamento.cod_medicamento}</h1>
                <h4 className="vistaMedFor">Formato:{medicamento.formato}</h4>
                <div className="cuadradoDescripcion">
                    <p>Desc:{medicamento.descripcion}</p>
                </div>
                <h4 className="vistaMedSto">Stock:{medicamento.stock}</h4>

                <button className="elimMed" onClick={() => handleDelete(medicamento.cod_medicamento)}>ELIMINAR</button>
                <button className="editMed" onClick={() => Router.push("/medicamentos/editar/" + medicamento.cod_medicamento)}>EDITAR</button>
            </div>
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