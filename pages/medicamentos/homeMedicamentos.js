import axios from "axios";
import Layout from "../../components/Layout";
import Link from "next/link";

const homeMedicamentos = ({ medicamentos }) => {
    console.log(medicamentos)
    return (
        <div>
            <Layout />
            <div className="cuadradoGeneral">

                <h3 className="titHomeMedi">Para Eliminar o Editar seleccione uno!</h3>

                {medicamentos.map((medicamento) => (
                    <div className="principalHomeMedi">
                        <Link className="decoration" href={'/medicamentos/' + medicamento.cod_medicamento} key={medicamento.cod_medicamento}>
                            <div className="border border-black-200 shadow-md p-50 ">
                                <h2><u>Cod. Medicamento:</u> {medicamento.cod_medicamento}</h2>
                                <p><u>Descripcion:</u>{medicamento.descripcion}</p>
                                <h4><u>Formato:</u>{medicamento.formato}</h4>
                                <h4><u>Stock:</u>{medicamento.stock}</h4>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )

}

export const getServerSideProps = async (context) => {
    const { data: medicamentos } = await axios.get("http://localhost:3000/api/medicamentos")

    return {
        props: {
            medicamentos,
        },
    }
}

export default homeMedicamentos;

