import Layout from "../../components/Layout";
import axios from 'axios';
import { useRouter } from "next/router";
import Router from "next/router";

function VistaPaciente({ paciente }) {

    const router = useRouter;

    const handleDelete = async (rut) => {
        const res = await axios.delete('/api/pacientes/' + rut)
        Router.push("/pacientes/homePacientes")
    }

    return (
        <div>
            <Layout />
            <div className="cuadradoGeneral">
                <img className="imagenPaci" src="https://media.istockphoto.com/id/499170128/es/foto/papel-en-blanco-aislado-en-blanco.jpg?s=170667a&w=0&k=20&c=UvpzL3GjOLz1AK6B-3wJNOaE5BFHMYcP_u_kYWm5A6E=" />
                <h1 className="tituloVistaPac">Ficha Paciente</h1>
                <h2 className="vistaPacRut"><u>Rut:</u>  {paciente.rut}</h2>
                <h4 className="vistaPacNom"><u>Nombre:</u>  {paciente.nombre}</h4>
                <h4 className="vistaPacEda"><u>Edad:</u>  {paciente.edad}</h4>
                <h4 className="vistaPacFon"><u>Fono:</u>  {paciente.fono}</h4>
                <div className="cuadradoDiagnostico">
                    <p><u>Diagnostico:</u>  {paciente.diagnostico}</p>
                </div>
            
                <button className="elimPac" onClick={() => handleDelete(paciente.rut)}>ELIMINAR</button>
                <button className="editPac" onClick={() => Router.push("/pacientes/editar/" + paciente.rut)}>EDITAR</button>
            </div>

        </div>

    )
}

export const getServerSideProps = async (context) => {

    const { data: paciente } = await axios.get("http://localhost:3000/api/pacientes/" + context.query.rut)

    return {
        props: {
            paciente,
        },
    }
}

export default VistaPaciente;