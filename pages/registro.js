import Layout from "../components/Layout";
const registro = () => (
    <>
        <Layout />
        <div className="cuadradoRegistro">

            <div className="principalRegistroPaci">
                <a className="registroPaciente" href="/pacientes/registroPacientes">REGISTRAR PACIENTES</a>
            </div>

            <div className="principalRegistroMedi">
                <a className="registroMedi" href="/medicamentos/registroMedicamentos">REGISTRAR MEDICAMENTOS</a>
            </div>

            <div className="principalRegistroRece">
                <a className="registroRece" href="/recetas/registroRecetas">REGISTRAR RECETAS</a>
            </div>

        </div>
    </>
)

export default registro;