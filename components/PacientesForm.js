import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export function PacientesForm() {


    const [paciente, setPaciente] = useState({
        rut: 0,
        nombre: "",
        fono: 0,
        edad: 0,
        diagnostico: ""
    })

    const router = useRouter();

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (router.query.rut) {
            console.log("update")
            const res = await axios.put("/api/pacientes/" + router.query.rut, paciente)
            console.log(res)
        }
        else {
            const res = await axios.post('/api/pacientes', { ...paciente })
            console.log(res);
        }
        router.push("/pacientes/homePacientes")
    };

    const handleChange = ({ target: { name, value } }) => {
        console.log(name, value);
        setPaciente({ ...paciente, [name]: value });
    }

    useEffect(() => {

        const obtenerPaciente = async () => {
            const { data } = await axios.get("/api/pacientes/" + router.query.rut)
            setPaciente({
                rut: data.rut,
                nombre: data.nombre,
                fono: data.fono,
                edad: data.edad,
                diagnostico: data.diagnostico

            })
        }


        if (router.query.rut) {
            obtenerPaciente(router.query.rut)
        }
    }, [])


    return (
        <div className="registrarPaci">

            <form onSubmit={handleSubmit}>

                <div className="form-group formP">
                    <input value={paciente.rut} type="text" className="col-6" name="rut" id="rut" placeholder="Ingrese Rut" onChange={handleChange} />
                </div>

                <div className="form-group formP">
                    <input value={paciente.nombre} type="text" className="col-6" name="nombre" placeholder="Ingrese Nombre" onChange={handleChange} />
                </div>

                <div className="form-group formP">
                    <input value={paciente.fono} type="text" className="col-6" id="fono" name="fono" placeholder="Ingrese Fono" onChange={handleChange} />
                </div>

                <div className="form-group formP">
                    <input value={paciente.edad} type="text" className="col-6" id="edad" name="edad" placeholder="Ingrese Edad" onChange={handleChange} />
                </div>

                <div className="form-group formP">
                    <textarea value={paciente.diagnostico} className="col-6" name="diagnostico" placeholder="Ingrese Diagnostico" onChange={handleChange} />
                </div>

                <button className="botonPr">Guardar Paciente</button>

            </form>

        </div>
    )
}