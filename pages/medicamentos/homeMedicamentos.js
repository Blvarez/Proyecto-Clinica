import axios from "axios";
const homeMedicamentos = ({ medicamentos }) => {
    console.log(medicamentos)
    return (
        <div>
            <h1>Medicamentos</h1>

            {medicamentos.map(medicamentos => (
                <div key={medicamentos.id}>
                    <h1>{medicamentos.cod_medicamento}</h1>
                    <p>{medicamentos.descripcion}</p>
                    <h4>{medicamentos.formato}</h4>
                    <h4>{medicamentos.stock}</h4>
                </div>
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

