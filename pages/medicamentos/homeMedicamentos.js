import axios from "axios";
import Layout from "../../components/Layout";
import Link from "next/link";

const homeMedicamentos = ({ medicamentos }) => {
    console.log(medicamentos)
    return (
        <div>
            <Layout />
            <h1>Medicamentos</h1>

            {medicamentos.map(medicamento => (
                <Link href="/medicamentos/${medicamento.cod_medicamento}">
                    <div key={medicamento.cod_medicamento} className="border border-gray-200 shadow-md p-10">
                        <h1>{medicamento.cod_medicamento}</h1>
                        <p>{medicamento.descripcion}</p>
                        <h4>{medicamento.formato}</h4>
                        <h4>{medicamento.stock}</h4>
                    </div>
                </Link>
            ))}
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

