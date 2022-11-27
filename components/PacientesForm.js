import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

export function PacientesForm() {


    const [paciente, setPaciente] = useState({
        rut: 0,
        nombre:"",
        fono:0,
        edad:0,
        diagnostico:""
    })

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('/api/pacientes', { ...paciente })
        console.log(res);
        router.push("/pacientes/homePacientes")
    };

    const handleChange = ({ target: { name, value } }) =>{
        console.log(name, value);
        setPaciente({ ...paciente, [name]: value });
    }
 
    return (
        <div className="registrarPaci">

            <form onSubmit={handleSubmit}>

                <div className="form-group formP">
                    <input type="text" className="col-6" name="rut" id="rut" placeholder="Ingrese Rut" onChange={handleChange}/>
                </div>
                
                <div className="form-group formP">
                    <input type="text" className="col-6" name="nombre" placeholder="Ingrese Nombre" onChange={handleChange}/>
                </div> 

                <div className="form-group formP">
                    <input type="text" className="col-6" id="fono" name="fono"  placeholder="Ingrese Fono" onChange={handleChange}/>
                </div>

                <div className="form-group formP">
                    <input type="text" className="col-6" id="edad" name="edad"  placeholder="Ingrese Edad" onChange={handleChange}/>
                </div>

                <div className="form-group formP">
                    <textarea className="col-6" name="diagnostico" placeholder="Ingrese Diagnostico" onChange={handleChange}/>
                </div>

                <button className="botonPr">Guardar Paciente</button>

            </form>

        </div>
    )
}