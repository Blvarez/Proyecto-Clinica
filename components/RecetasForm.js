import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

export function RecetasForm() {

    const [receta, setReceta] = useState({
        cod_receta: 0,
        cantidad: 0,
        rut_paciente: 0,
        cod_medi: 0,
        fecha: ""
    })

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('/api/recetas', { ...receta })
        console.log(res);
        router.push("/recetas/homeRecetas")
    }; 

    const handleChange = ({ target: { name, value } }) => {
        console.log(name, value);
        setReceta({ ...receta, [name]: value });
    }


    return (
        <div className="registrarPaci">

            <form onSubmit={handleSubmit}>

                <div className="form-group formP">
                    <input type="text" className="col-6" name="cod_receta" id="cod_receta" placeholder="Ingrese Codigo Receta" onChange={handleChange} />
                </div>

                <div className="form-group formP">
                    <input type="text" className="col-6" name="cantidad" id="cantidad" placeholder="Ingrese Cantidad" onChange={handleChange} />
                </div>

                <div className="form-group formP">
                    <input type="text" className="col-6" id="rut_paciente" name="rut_paciente" placeholder="Ingrese Rut Paciente" onChange={handleChange} />
                </div>

                <div className="form-group formP">
                    <input type="text" className="col-6" id="cod_medi" name="cod_medi" placeholder="Ingrese Cod Medicamento" onChange={handleChange} />
                </div>

                <div className="form-group formP">
                    <input type="text" className="col-7" name="fecha" placeholder="Ingrese Fecha (formato:DD/MM/AAAA)" onChange={handleChange} />
                </div>

                <button className="botonPr">Guardar Paciente</button>

            </form>

        </div>
    )
}