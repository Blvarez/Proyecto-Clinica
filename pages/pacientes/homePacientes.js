import axios from "axios";
import Layout from "../../components/Layout";
import Link from "next/link";

const homePacientes = ({ pacientes }) => {
    console.log(pacientes)
    return (

        <div>
            <Layout />
            <h1>PACIENTES</h1>

            {pacientes.map((paciente) => (
                <Link href={'/pacientes/'+paciente.rut} key={paciente.rut}>
                    <div className="border border-gray-200 shadow-md p-50 ">
                        <h1>{paciente.rut}</h1>
                        <h2>{paciente.nombre}</h2>
                        <h4>{paciente.fono}</h4>
                        <h4>{paciente.edad}</h4>
                        <p>{paciente.diagnostico}</p>
                    </div>
                </Link>
            ))}
        </div>
    )

}

export const getServerSideProps = async (context) => {
    const { data: pacientes } = await axios.get("http://localhost:3000/api/pacientes")

    return {
        props: {
            pacientes,
        },
    }
}

export default homePacientes;

