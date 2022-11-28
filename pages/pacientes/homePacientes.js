import axios from "axios";
import Layout from "../../components/Layout";
import Link from "next/link";

const homePacientes = ({ pacientes }) => {
    console.log(pacientes)
    return (

        <div>
            <Layout />
            <div className="cuadradoGeneral">

            <h3 className="titHomePac">Para Eliminar o Editar seleccione uno!</h3>

                {pacientes.map((paciente) => (
                    <div className="principalHomePac">
                    <Link className="decoration" href={'/pacientes/' + paciente.rut} key={paciente.rut}>
                        <div className="border border-gray-200 shadow-md p-50 ">
                            <h1><u>Rut:</u> {paciente.rut}</h1>
                            <h2><u>Nombre:</u> {paciente.nombre}</h2>
                            <h4><u>Fono:</u> {paciente.fono}</h4>
                            <h4><u>Edad:</u> {paciente.edad}</h4>
                            <p><u>Diagnostico:</u> {paciente.diagnostico}</p>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
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

