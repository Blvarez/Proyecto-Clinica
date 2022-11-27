import axios from "axios";
import Layout from "../../components/Layout";
const homePacientes = ({ pacientes }) => {
    console.log(pacientes)
    return (

        <div>
            <Layout/>
            <h1>PACIENTES</h1>

            {pacientes.map(paciente => (
                <div key={paciente.rut}>
                    <h1>{paciente.rut}</h1>
                    <h2>{paciente.nombre}</h2>
                    <h4>{paciente.fono}</h4>
                    <h4>{paciente.edad}</h4>
                    <p>{paciente.diagnostico}</p>
                </div>
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

