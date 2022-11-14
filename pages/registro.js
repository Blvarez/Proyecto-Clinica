import Layout from "../components/Layout";
const registro = () => (
    <>
        <Layout />
        <div className="cuadradoRegistro">

            <div className="principalRegistroPaci">
                <a className="registroPaciente" href="/pacientes/registroPacientes">REGISTRAR PACIENTES</a>
            </div>

            <div className="principalRegistroMedi">
                <a className="registroMedi" href="/medicamentos/registroMedicamentos">REGISTRAS MEDICAMENTOS</a>
            </div>

        </div>
    </>
)

export default registro;